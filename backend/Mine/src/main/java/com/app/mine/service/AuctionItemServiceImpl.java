package com.app.mine.service;

import com.app.mine.dto.PageDTO;
import com.app.mine.dto.SearchDTO;
import com.app.mine.mapper.FileMapper;
import com.app.mine.vo.*;
import com.app.mine.mapper.AuctionItemMapper;
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
    private final FileMapper fileMapper;

    @Override
    public void saveAuctionItem(AuctionItemVO acAuctionItemVO, List<FileVO> fileVOList) {
        auctionItemMapper.insertAuctionItem(acAuctionItemVO);

        fileVOList.forEach(fileVO -> {
            fileVO.setAuctionItemId(auctionItemMapper.selectLastAuctionItem());

            fileMapper.insertFile(fileVO);
        });
    }

    @Override
    public AuctionItemVO getAuctionItemById(int id) {
        return auctionItemMapper.findAuctionItemById(id);
    }

//    @Override
//    public List<AuctionItemVO> getFilteredAuctionItems(String category, Integer minPrice, Integer maxPrice, String searchQuery, String sort) {
//        log.info("=================serviceImpl=======================\nFilters received: category={}, minPrice={}, maxPrice={}, searchQuery={}, sort={}",category, minPrice, maxPrice, searchQuery, sort);
//            Integer userId = 1;
//            return auctionItemMapper.findAuctionItems(category, minPrice, maxPrice, searchQuery, sort, userId);
//    }

    @Override
    public List<AuctionItemVO> getFilteredAuctionItems(SearchDTO searchDTO) {
        Integer userId = 1;
        return auctionItemMapper.findAuctionItems(searchDTO, userId);
    }

    @Override
    public Map<String, Object> findSearchAuctionItem(SearchDTO searchDTO) {
        Map<String, Object> auctionItemMap = new HashMap<>();
        Criteria criteria = Criteria.builder().page(1).amount(10).build();
        PageDTO pageDTO = new PageDTO(criteria, 0, searchDTO,0);
        pageDTO.setIS_SEARCH_DTO(true);
        Map<String,Object> summary = auctionItemMapper.selectItemStatisticsByCondition(searchDTO);
        List<AuctionItemVO> itemList = auctionItemMapper.selectAllAuctionItem(pageDTO);
        auctionItemMap.put("summary", summary);
        auctionItemMap.put("itemList", itemList);

        return auctionItemMap;
    }

    @Override
    public Map<String, Object> getFilteredAuctionItems(SearchDTO searchDTO, Criteria criteria) {
        //총 데이터 개수
        int totalCount = auctionItemMapper.getAuctionItemCount(searchDTO);

        //페이지 정보 계산 - 현재 페이지와 개수 기준
        PageDTO pageDTO = new PageDTO(criteria, totalCount, searchDTO,0);
        pageDTO.setIS_SEARCH_DTO(true);
        Map<String, Object> recentUsedItemsMap = new HashMap<>();
        List<AuctionItemVO> items = auctionItemMapper.selectAllAuctionItem(pageDTO);
        recentUsedItemsMap.put("pageNation", pageDTO.toPageNationMap());
        recentUsedItemsMap.put("items", items);


        // 데이터 조회
        return recentUsedItemsMap;
    }

    @Override
    public List<AuctionItemVO> getMyAuctionItemList(UserVO userVO) {
        return auctionItemMapper.selectMyAuctionItemList(userVO);
    }

}