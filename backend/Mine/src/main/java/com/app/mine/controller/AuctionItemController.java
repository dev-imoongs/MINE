package com.app.mine.controller;

import com.app.mine.dto.SearchDTO;
import com.app.mine.service.AuctionItemService;
import com.app.mine.vo.AuctionItemVO;
import com.app.mine.vo.Criteria;
import com.app.mine.vo.UserVO;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auction-items/*")
@Slf4j
public class AuctionItemController {

    private final AuctionItemService auctionItemService;

    @GetMapping("{id}")
    public ResponseEntity<AuctionItemVO> getAuctionItem(@PathVariable int id) {
        AuctionItemVO item = auctionItemService.getAuctionItemById(id);
        return item != null ? ResponseEntity.ok(item) : ResponseEntity.notFound().build();
    }

    @GetMapping
    public ResponseEntity<List<AuctionItemVO>> getFilteredAuctionItems(
            @RequestParam(value = "category", required = false) String category,
            @RequestParam(value = "minPrice", required = false) Long minPrice,
            @RequestParam(value = "maxPrice", required = false) Long maxPrice,
            @RequestParam(value = "searchQuery", required = false) List<String> searchQuery,
            @RequestParam(value = "sort", defaultValue = "likes") String sort) {

//        Criteria criteria = Criteria.builder().page(page).amount(amount).build();
        SearchDTO searchDTO = new SearchDTO();
        searchDTO.setCategory(category);
        searchDTO.setType(sort);
        searchDTO.setSearchQuery(searchQuery);
        searchDTO.setMinPrice(minPrice);
        searchDTO.setMaxPrice(maxPrice);


        List<AuctionItemVO> res = auctionItemService.getFilteredAuctionItems(searchDTO);

        return ResponseEntity.ok(res);
    }

    @PostMapping("getMyAuctionItemList")
    public List<AuctionItemVO> getMyAuctionItemList(HttpSession session) {
        UserVO userInfo = (UserVO)session.getAttribute("userInfo");
        return auctionItemService.getMyAuctionItemList(userInfo);
    }
}
