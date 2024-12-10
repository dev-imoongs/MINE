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
    public LikeVO addLike(Integer auctionItemId, Integer userId, String destinationType) {
        return likeMapper.insertLike(auctionItemId, userId, destinationType);
    }
}
