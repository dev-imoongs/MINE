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
            @RequestParam(value = "category", required = false) String category,
            @RequestParam(value = "minPrice", required = false) Integer minPrice,
            @RequestParam(value = "maxPrice", required = false) Integer maxPrice,
            @RequestParam(value = "searchQuery", required = false) String searchQuery,
            @RequestParam(value = "sort", required = false) String sort) {

        log.info("Filters received: category={}, minPrice={}, maxPrice={}, searchQuery={}, sort={}",
                category, minPrice, maxPrice, searchQuery, sort);

        List<AuctionItemVO> items = auctionItemService.getFilteredAuctionItems(category, minPrice, maxPrice, searchQuery, sort);
        return ResponseEntity.ok(items);
    }
}
