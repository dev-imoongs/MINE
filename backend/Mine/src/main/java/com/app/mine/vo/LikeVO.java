package com.app.mine.vo;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class LikeVO {
    private Integer likeId;
    private Integer userId;
    private Integer usedItemId;
    private Integer auctionItemId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
