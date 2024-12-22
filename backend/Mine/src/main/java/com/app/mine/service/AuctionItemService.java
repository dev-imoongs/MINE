package com.app.mine.service;

import com.app.mine.dto.SearchDTO;
import com.app.mine.vo.AuctionItemVO;
import java.util.List;
import java.util.Map;

public interface AuctionItemService {

    // 경매 아이템 조회 (아이템 ID로 검색)
    AuctionItemVO getAuctionItemById(int id);

    // 경매 아이템 목록 조회
    List<AuctionItemVO> getFilteredAuctionItems(Integer category, Integer minPrice, Integer maxPrice, String searchQuery, String sort);

    public Map<String, Object> findSearchAuctionItem(SearchDTO searchDTO);
}