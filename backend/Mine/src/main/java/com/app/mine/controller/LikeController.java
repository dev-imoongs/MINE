package com.app.mine.controller;

import com.app.mine.service.LikeService;
import com.app.mine.vo.UserVO;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api/likes/*")
@RequiredArgsConstructor
public class LikeController {
    private final LikeService likeService;

    @PostMapping("toggle")
    public ResponseEntity<Map<String, Object>> toggleLike(@RequestBody Map<String, Object> requestBody, HttpSession session) {
        try {
            UserVO userInfo = (UserVO) session.getAttribute("userInfo");
            Integer usedItemId = (Integer) requestBody.getOrDefault("usedItemId", 0);
            Integer auctionItemId = (Integer) requestBody.getOrDefault("auctionItemId", 0);
//            Integer userId = (Integer) requestBody.get("userId");
            Integer userId = userInfo.getUserId();

            if (userId == null) {
                throw new IllegalArgumentException("userId cannot be null");
            }
            log.info("usedItemId={}, auctionItemId={}",usedItemId,auctionItemId);
            Map<String, Object> resultMap = likeService.toggleLike(userId, usedItemId, auctionItemId);

            return ResponseEntity.ok(resultMap);
        } catch (IllegalArgumentException e) {
            log.error("IllegalArgumentException error: ", e);
            return ResponseEntity.status(400).build();
        } catch (Exception e) {
            log.error("Exception error: ", e);
            return ResponseEntity.status(500).build();
        }
    }

    @PostMapping("state")
    public ResponseEntity<Map<String, Object>> findLikeStateById(@RequestBody Map<String, Object> requestBody, HttpSession session) {
        try {
            UserVO userInfo = (UserVO) session.getAttribute("userInfo");
            Integer usedItemId = (Integer) requestBody.getOrDefault("usedItemId", 0);
            Integer auctionItemId = (Integer) requestBody.getOrDefault("auctionItemId", 0);
//            Integer userId = (Integer) requestBody.get("userId");
            Integer userId = userInfo.getUserId();

            if (userId == null) {
                throw new IllegalArgumentException("userId cannot be null");
            }
            log.info("usedItemId={}, auctionItemId={}",usedItemId,auctionItemId);
            Map<String, Object> resultMap = likeService.findLikeStateById(userId, usedItemId, auctionItemId);

            return ResponseEntity.ok(resultMap);
        } catch (IllegalArgumentException e) {
            log.error("IllegalArgumentException error: ", e);
            return ResponseEntity.status(400).build();
        } catch (Exception e) {
            log.error("Exception error: ", e);
            return ResponseEntity.status(500).build();
        }
    }
}

