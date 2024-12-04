package com.app.mine.service;

import com.app.mine.vo.AuctionItemVO;
import java.util.List;

public interface AuctionItemService {

    // 경매 아이템 조회 (아이템 ID로 검색)
    AuctionItemVO getAuctionItemById(int id);

    // 경매 아이템 목록 조회
    List<AuctionItemVO> getAllAuctionItems();
    
}