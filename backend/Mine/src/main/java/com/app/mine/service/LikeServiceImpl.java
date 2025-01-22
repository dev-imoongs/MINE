package com.app.mine.service;

import com.app.mine.mapper.LikeMapper;
import com.app.mine.vo.LikeVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class LikeServiceImpl implements LikeService{

    private final LikeMapper likeMapper;

    @Transactional
    @Override
    public Map<String,Object> toggleLike(Integer userId, Integer usedItemId, Integer auctionItemId) {
        Map<String, Object> resultMap = new HashMap<>();

        try {
            Optional<LikeVO> existingLike = likeMapper.findByUserIdAndItemId(userId, usedItemId, auctionItemId);
            log.info("select");

            if (existingLike.isPresent()) {
                // 좋아요가 존재하면 삭제
                likeMapper.deleteByUserIdAndItemId(userId, usedItemId, auctionItemId);
                log.info("delete");
                resultMap.put("result", "success");
                resultMap.put("type", "delete");
            } else {
                // 좋아요가 없으면 추가
                likeMapper.insertLikeForItem(userId, usedItemId, auctionItemId);
                log.info("insert");
                resultMap.put("result", "success");
                resultMap.put("type", "insert");
            }
        } catch (Exception e) {
            log.error("Error during toggleLike: {}", e.getMessage());
            resultMap.put("result", "fail");
            throw e;
        }

        return resultMap;
    }

    @Override
    public Map<String, Object> findLikeStateById(Integer userId, Integer usedItemId, Integer auctionItemId) {
        Map<String, Object> resultMap = new HashMap<>();
        try {
            Optional<LikeVO> existingLike = likeMapper.findByUserIdAndItemId(userId, usedItemId, auctionItemId);
            if (existingLike.isPresent()) {
                resultMap.put("type", "insert");
            } else {
                resultMap.put("type", "delete");
            }
        } catch (Exception e) {
            throw e;
        }
        return resultMap;
    }

}
