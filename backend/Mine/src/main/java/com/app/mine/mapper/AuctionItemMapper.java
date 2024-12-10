package com.app.mine.mapper;

import com.app.mine.vo.AuctionItemVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AuctionItemMapper {

    public void insertAuctionItem();

    public AuctionItemVO findAuctionItemById(int id);

    public List<AuctionItemVO> findAuctionItems(Integer category,
                                                Integer minPrice,
                                                Integer maxPrice,
                                                String searchQuery,
                                                String sort);
}
