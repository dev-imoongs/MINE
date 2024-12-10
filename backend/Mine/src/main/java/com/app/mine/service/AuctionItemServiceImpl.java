package com.app.mine.service;

import com.app.mine.vo.AuctionItemVO;
import com.app.mine.mapper.AuctionItemMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

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

            return auctionItemMapper.findAuctionItems(category, minPrice, maxPrice, searchQuery, sort);
    }


}