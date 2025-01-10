package com.app.mine.mapper;

import com.app.mine.dto.PageDTO;
import com.app.mine.dto.SearchDTO;
import com.app.mine.vo.AuctionItemVO;
import com.app.mine.vo.UsedItemVO;
import com.app.mine.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface AuctionItemMapper {

    public Integer selectLastUsedItem();

    public AuctionItemVO findAuctionItemById(int id);

//    public List<AuctionItemVO> findAuctionItems(String category,
//                                                Integer minPrice,
//                                                Integer maxPrice,
//                                                String searchQuery,
//                                                String sort,
//                                                Integer userId);

    public List<AuctionItemVO> findAuctionItems(SearchDTO searchDTO, Integer userId);

    public List<AuctionItemVO> selectAllAuctionItem(@Param("page") PageDTO pageDTO);

    public Map<String, Object> selectItemStatisticsByCondition(@Param("page") SearchDTO searchDTO);

    public List<AuctionItemVO> selectMyAuctionItemList(UserVO userVO);

    public void insertAuctionItem(AuctionItemVO acAuctionItemVO);
}
