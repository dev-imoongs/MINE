package com.app.mine.service;

import com.app.mine.mapper.LikeMapper;
import com.app.mine.vo.LikeVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LikeServiceImpl implements LikeService{

    private final LikeMapper likeMapper;

    @Override
    public void addLike(Integer usedItemId, Integer auctionItemId, Integer userId) {
        likeMapper.insertLike(usedItemId, auctionItemId, userId);
    }

    public void deleteLike (Integer usedItemId, Integer auctionItemId, Integer userId) {

    }
}
