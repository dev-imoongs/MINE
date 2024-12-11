package com.app.mine.mapper;

import com.app.mine.vo.LikeVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LikeMapper {

    public void insertLike(Integer usedItemId, Integer auctionItemId, Integer userId);

}
