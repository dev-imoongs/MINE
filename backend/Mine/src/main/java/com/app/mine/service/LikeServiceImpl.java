package com.app.mine.service;

import com.app.mine.mapper.LikeMapper;
import com.app.mine.vo.LikeVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class LikeServiceImpl implements LikeService{

    private final LikeMapper likeMapper;

    @Override
    public void toggleLike(Integer userId, Integer usedItemId, Integer auctionItemId) {

            // 중고,경매 아이템에 대한 좋아요 처리
            Optional<LikeVO> existingLike = likeMapper.findByUserIdAndItemId(userId, usedItemId, auctionItemId);
            log.info("select");
            if (existingLike.isPresent()) {
                // 좋아요가 있다면 삭제
                likeMapper.deleteByUserIdAndItemId(userId, usedItemId, auctionItemId);
                log.info("delete");
            } else {
                // 좋아요가 없다면 추가
                likeMapper.insertLikeForItem(userId, usedItemId, auctionItemId);
                log.info("insert");
            }

    }

}
