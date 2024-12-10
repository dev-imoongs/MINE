package com.app.mine.controller;

import com.app.mine.service.AuctionItemService;
import com.app.mine.vo.AuctionItemVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auction-items")
@Slf4j
public class AuctionItemController {

    private final AuctionItemService auctionItemService;

    @GetMapping("/{id}")
    public ResponseEntity<AuctionItemVO> getAuctionItem(@PathVariable int id) {
        AuctionItemVO item = auctionItemService.getAuctionItemById(id);
        return item != null ? ResponseEntity.ok(item) : ResponseEntity.notFound().build();
    }

    @GetMapping
    public ResponseEntity<List<AuctionItemVO>> getFilteredAuctionItems(
            @RequestParam(value = "category", required = false) Integer category,
            @RequestParam(value = "minPrice", required = false) Integer minPrice,
            @RequestParam(value = "maxPrice", required = false) Integer maxPrice,
            @RequestParam(value = "searchQuery", required = false) String searchQuery,
            @RequestParam(value = "sort", defaultValue = "likes") String sort) {

        log.info("Filters received: category={}, minPrice={}, maxPrice={}, searchQuery={}, sort={}",
                category, minPrice, maxPrice, searchQuery, sort);

        // category, minPrice, maxPrice가 null일 경우 -1로 설정
        if (category == null) {
            category = -1;
        }

        if (minPrice == null) {
            minPrice = -1;  // 예시로 -1로 설정 (매퍼에서 처리)
        }

        if (maxPrice == null) {
            maxPrice = -1;  // 예시로 -1로 설정 (매퍼에서 처리)
        }

        if (searchQuery == null) {
            searchQuery = "";  // 검색어가 null일 경우 빈 문자열로 설정
        }

        List<AuctionItemVO> items = auctionItemService.getFilteredAuctionItems(category, minPrice, maxPrice, searchQuery, sort);
        return ResponseEntity.ok(items);
    }

}
