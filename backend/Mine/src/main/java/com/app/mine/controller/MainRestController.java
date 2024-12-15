package com.app.mine.controller;

import com.app.mine.dto.PageDTO;
import com.app.mine.dto.SearchDTO;
import com.app.mine.service.AuctionItemService;
import com.app.mine.service.UsedItemService;
import com.app.mine.vo.AuctionItemVO;
import com.app.mine.vo.UsedItemVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/main/*")
@RequiredArgsConstructor
@Slf4j
public class MainRestController {
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
    @GetMapping("getFilterItem")
    public PageDTO<UsedItemVO> getFilteredUsedItems(@RequestParam(required = false) int page,
                                                 @RequestParam(required = false) String type,
                                                 @RequestParam(required = false) String[] searchQuery,
                                                 @RequestParam(required = false) Long minPrice,
                                                 @RequestParam(required = false) Long maxPrice
    ){
        log.info("page={}, type={}, searchQuery={}, minPrice={}, maxPrice={}", page, type, searchQuery, minPrice, maxPrice);
        SearchDTO searchDTO = new SearchDTO();
        searchDTO.setPage(page);
        searchDTO.setType(type);
        searchDTO.setSearchQuery(searchQuery);
        searchDTO.setMinPrice(minPrice);
        searchDTO.setMaxPrice(maxPrice);
        searchDTO.setPageSize(10);

        PageDTO<UsedItemVO> filteredUsedItems = usedItemService.getFilteredUsedItems(searchDTO);

        return filteredUsedItems;
    }
}
