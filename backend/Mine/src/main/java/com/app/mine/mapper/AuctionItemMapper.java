package com.app.mine.mapper;

import com.app.mine.dto.PageDTO;
import com.app.mine.vo.AuctionItemVO;
import com.app.mine.vo.UsedItemVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AuctionItemMapper {

    public void insertAuctionItem();

    public AuctionItemVO findAuctionItemById(int id);

    public List<AuctionItemVO> findAuctionItems(Integer category,
                                                Integer minPrice,
                                                Integer maxPrice,
                                                String searchQuery,
                                                String sort,
                                                Integer userId);
    public List<AuctionItemVO> selectAllAuctionItem(@Param("page") PageDTO pageDTO);
}
