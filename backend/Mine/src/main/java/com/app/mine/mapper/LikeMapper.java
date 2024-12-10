package com.app.mine.mapper;

import com.app.mine.vo.LikeVO;

public interface LikeMapper {

    public LikeVO insertLike(Integer auctionItemId, Integer userId, String destinationType);

}
