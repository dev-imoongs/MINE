package com.app.mine.controller;

import com.app.mine.dto.SearchDTO;
import com.app.mine.service.AuctionItemService;
import com.app.mine.service.UsedItemService;
import com.app.mine.vo.AuctionItemVO;
import com.app.mine.vo.UsedItemVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/main/*")
@RequiredArgsConstructor
@Slf4j
public class MainController {
    private final UsedItemService usedItemService;
    private final AuctionItemService auctionItemService;
    @GetMapping("getItem")
    public List<Map<String, Object>> getAllUsedItems() {
        // 중고 물품 상품 조회
        List<Map<String, Object>> result = usedItemService.getAllUsedItems();

        // 추천 경매 상품 조회
        List<AuctionItemVO> recommendAuction = auctionItemService.getFilteredAuctionItems(-1, -1, -1, "", "likes");
        Map<String, Object> recommendAuctionMap = new HashMap<>();
        recommendAuctionMap.put("type", "recommend");
        recommendAuctionMap.put("data", recommendAuction);


        result.add(recommendAuctionMap);

        return result;
    }
}
