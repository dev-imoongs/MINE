package com.app.mine.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AuctionItemMapper {

    public void insertAuctionItem();

    public AuctionItemVO findAuctionItemById(int id);

    public List<AuctionItemVO> findAllAuctionItems();
}
