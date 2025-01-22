package com.app.mine.service;

import java.util.Map;

public interface LikeService {

    Map<String,Object> toggleLike(Integer userId, Integer usedItemId, Integer auctionItemId);
    Map<String,Object> findLikeStateById(Integer userId, Integer usedItemId, Integer auctionItemId);
}
