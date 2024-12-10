package com.app.mine.service;

import com.app.mine.vo.LikeVO;

public interface LikeService {

    LikeVO addLike(Integer auctionItemId, Integer userId, String destinationType);
}
