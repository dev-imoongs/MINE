package com.app.mine.service;

import com.app.mine.vo.LikeVO;

public interface LikeService {

    void addLike(Integer usedItemId, Integer auctionItemId, Integer userId);


}
