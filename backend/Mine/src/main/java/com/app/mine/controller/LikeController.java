package com.app.mine.controller;

import com.app.mine.service.LikeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/like")
public class LikeController {
    private final LikeService likeService;

    public LikeController(LikeService likeService) {
        this.likeService = likeService;
    }

    @PostMapping
    public ResponseEntity<String> addLike(@RequestBody Map<String, Object> requestBody) {
        try {
            Integer auctionItemId = (Integer) requestBody.get("auctionItemId");
            Integer userId = (Integer) requestBody.get("userId");
            String destinationType = (String) requestBody.get("destinationType");

            likeService.addLike(auctionItemId, userId, destinationType);

            return ResponseEntity.ok("Like added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error adding like");
        }
    }
}
