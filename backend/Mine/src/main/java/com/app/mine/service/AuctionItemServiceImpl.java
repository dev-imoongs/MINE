package com.app.mine.service;

import com.app.mine.dto.PageDTO;
import com.app.mine.dto.SearchDTO;
import com.app.mine.vo.AuctionItemVO;
import com.app.mine.mapper.AuctionItemMapper;
import com.app.mine.vo.Criteria;
import com.app.mine.vo.UsedItemVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//AuctionItemServiceImpl.java
@Service
@RequiredArgsConstructor
@Slf4j
public class AuctionItemServiceImpl implements AuctionItemService {

    private final AuctionItemMapper auctionItemMapper;

    @Override
    public AuctionItemVO getAuctionItemById(int id) {
        return auctionItemMapper.findAuctionItemById(id);
    }

    @Override
    public List<AuctionItemVO> getFilteredAuctionItems(Integer category, Integer minPrice, Integer maxPrice, String searchQuery, String sort) {
        log.info("=================serviceImpl=======================\nFilters received: category={}, minPrice={}, maxPrice={}, searchQuery={}, sort={}",category, minPrice, maxPrice, searchQuery, sort);
            Integer userId = 1;
            return auctionItemMapper.findAuctionItems(category, minPrice, maxPrice, searchQuery, sort, userId);
    }
    @Override
    public Map<String, Object> findSearchAuctionItem(SearchDTO searchDTO) {
        Map<String, Object> auctionItemMap = new HashMap<>();
        Criteria criteria = Criteria.builder().page(1).amount(10).build();
        PageDTO pageDTO = new PageDTO(criteria, 0, searchDTO,0);
        Map<String,Object> summary = auctionItemMapper.selectItemStatisticsByCondition(searchDTO);
        List<AuctionItemVO> itemList = auctionItemMapper.selectAllAuctionItem(pageDTO);
        auctionItemMap.put("summary", summary);
        auctionItemMap.put("itemList", itemList);

        return auctionItemMap;
    }

}