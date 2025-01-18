package com.app.mine.service;

import com.app.mine.dto.MyUsedItemDTO;
import com.app.mine.dto.PageDTO;
import com.app.mine.dto.SearchDTO;
import com.app.mine.mapper.AuctionItemMapper;
import com.app.mine.mapper.FileMapper;
import com.app.mine.mapper.UsedItemMapper;
import com.app.mine.vo.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class UsedItemServiceImpl implements UsedItemService {

    private final UsedItemMapper usedItemMapper;
    private final AuctionItemMapper auctionItemMapper;
    private final FileMapper fileMapper;

    @Override
    public void saveUsedItem(UsedItemVO usedItemVO, List<FileVO> fileVOList) {
        usedItemMapper.insertUsedItem(usedItemVO);

        fileVOList.forEach(fileVO -> {
            fileVO.setUsedItemId(usedItemMapper.selectLastUsedItem());

            fileMapper.insertFile(fileVO);
        });
    }

    @Override
    public List<Map<String, Object>> findAllUsedItems() {
        List<Map<String, Object>> result = new ArrayList<>();
        SearchDTO searchDTO = new SearchDTO();
        Criteria criteria = Criteria.builder().page(1).amount(12).build();
        // 최근 상품
        searchDTO.setType("recent");
        PageDTO pageDTO = new PageDTO(criteria,0,searchDTO,0 );
        List<UsedItemVO> recentUsedItem = usedItemMapper.selectAllUsedItem(pageDTO);

        // 기본 상품
        searchDTO.setType("like");
        List<UsedItemVO> defaultUsedItem = usedItemMapper.selectAllUsedItem(pageDTO);
        // 데이터 추가
        Map<String, Object> recentUsedItemsMap = new HashMap<>();
        recentUsedItemsMap.put("type", "recent");
        recentUsedItemsMap.put("data", recentUsedItem);

        Map<String, Object> defaultUsedItemsMap = new HashMap<>();
        defaultUsedItemsMap.put("type", "like");
        defaultUsedItemsMap.put("data", defaultUsedItem);

        // 추천 경매 상품 조회
        searchDTO.setType("like");
        Map<String, Object> recommendAuctionMap = new HashMap<>();
        List<AuctionItemVO> recommendAuction = auctionItemMapper.selectAllAuctionItem(pageDTO);
        recommendAuctionMap.put("type", "recommend");
        recommendAuctionMap.put("data", recommendAuction);

        result.add(recentUsedItemsMap);
        result.add(defaultUsedItemsMap);
        result.add(recommendAuctionMap);

        return result;
    }

    @Override
    public List<Map<String, Object>> getMyUsedItemList(UsedItemVO usedItemVO) {
        List<Map<String, Object>> result = new ArrayList<>();
        // 내 중고 상품
        List<MyUsedItemDTO> myUsedItemList = usedItemMapper.selectMyUsedItemList(usedItemVO);
        Map<String, Object> myUsedItemLMap = new HashMap<>();
        myUsedItemLMap.put("type", "myUsedItemList");
        myUsedItemLMap.put("data", myUsedItemList);

        // 내 중고 구매 상품
        List<MyUsedItemDTO> myUsedPurchaseList = usedItemMapper.selectMyUsedPurchaseList(usedItemVO);
        Map<String, Object> myUsedPurchaseLMap = new HashMap<>();
        myUsedPurchaseLMap.put("type", "myUsedPurchaseList");
        myUsedPurchaseLMap.put("data", myUsedPurchaseList);

        // 내 중고 찜한 상품
        List<MyUsedItemDTO> myUsedLikeList = usedItemMapper.selectMyUsedLike(usedItemVO);
        Map<String, Object> myUsedLikeLMap = new HashMap<>();
        myUsedLikeLMap.put("type", "myUsedLikeList");
        myUsedLikeLMap.put("data", myUsedLikeList);

        result.add(myUsedItemLMap);
        result.add(myUsedPurchaseLMap);
        result.add(myUsedLikeLMap);

        return result;
    }

    @Override
    public Map<String, Object> getFilteredUsedItems(SearchDTO searchDTO, Criteria criteria) {
        //총 데이터 개수
        int totalCount = usedItemMapper.getUsedItemCount(searchDTO);

        //페이지 정보 계산 - 현재 페이지와 개수 기준
        PageDTO pageDTO = new PageDTO(criteria, totalCount, searchDTO,0);
        Map<String, Object> recentUsedItemsMap = new HashMap<>();
        List<UsedItemVO> items = usedItemMapper.selectAllUsedItem(pageDTO);
        recentUsedItemsMap.put("pageNation", pageDTO.toPageNationMap());
        recentUsedItemsMap.put("items", items);


        // 데이터 조회
        return recentUsedItemsMap;
    }

    @Override
    public Map<String, Object> findSearchUsedItem(SearchDTO searchDTO) {
        Map<String, Object> usedItemsMap = new HashMap<>();
        Criteria criteria = Criteria.builder().page(1).amount(10).build();
        PageDTO pageDTO = new PageDTO(criteria, 0, searchDTO,0);
        Map<String,Object> summary = usedItemMapper.selectItemStatisticsByCondition(searchDTO);
        List<UsedItemVO> itemList = usedItemMapper.selectAllUsedItem(pageDTO);
        usedItemsMap.put("summary", summary);
        usedItemsMap.put("itemList", itemList);

        return usedItemsMap;
    }

    @Override
    public Map<String, Object> findUsedItemById(Integer usedItemId) {
        return usedItemMapper.selectUsedItemById(usedItemId);
    }
}
