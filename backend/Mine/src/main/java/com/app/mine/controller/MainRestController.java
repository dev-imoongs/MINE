package com.app.mine.controller;

import com.app.mine.dto.PageDTO;
import com.app.mine.dto.SearchDTO;
import com.app.mine.mapper.AuctionItemMapper;
import com.app.mine.service.AuctionItemService;
import com.app.mine.service.UsedItemService;
import com.app.mine.vo.AuctionItemVO;
import com.app.mine.vo.Criteria;
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
    private final AuctionItemMapper auctionItemMapper;
    @GetMapping("getItems")
    public List<Map<String, Object>> getAllUsedItems() {
        return usedItemService.findAllUsedItems();
    }

    @GetMapping("getFilterItem")
    public Map<String, Object> getFilteredUsedItems(@RequestParam(required = false) int page,
                                                 @RequestParam(required = false) String type,
                                                 @RequestParam(required = false) List<String> searchQuery,
                                                 @RequestParam(required = false) Long minPrice,
                                                 @RequestParam(required = false) Long maxPrice,
                                                 @RequestParam(required = false) int amount
    ){
        log.info("page={}, type={}, searchQuery={}, minPrice={}, maxPrice={}", page, type, searchQuery, minPrice, maxPrice);

        Criteria criteria = Criteria.builder().page(page).amount(amount).build();
        SearchDTO searchDTO = new SearchDTO();
        searchDTO.setType(type);
        searchDTO.setSearchQuery(searchQuery);
        searchDTO.setMinPrice(minPrice);
        searchDTO.setMaxPrice(maxPrice);

        if(type.equals("recommend")){
            searchDTO.setType("like");
            return auctionItemService.getFilteredAuctionItems(searchDTO, criteria);
        }
        return usedItemService.getFilteredUsedItems(searchDTO, criteria);
    }

    @GetMapping("searchItem")
    public Map<String, Object> getAllUsedItems(@RequestParam(required = false)String category, @RequestParam(required = false)String searchKeyword /*,@RequestParam List<String> searchQuery*/) {
        Map<String, Object> result = new HashMap<>();
        SearchDTO searchDTO = new SearchDTO();
        log.info("category={}, searchKeyword={}", category, searchKeyword);

        searchDTO.setCategory(category);
        searchDTO.setSearchKeyword(searchKeyword);

        Map<String, Object> auction = auctionItemService.findSearchAuctionItem(searchDTO);
        Map<String, Object> usedItem = usedItemService.findSearchUsedItem(searchDTO);

        result.put("auction", auction);
        result.put("usedItem", usedItem);
        return result;
    }
}
