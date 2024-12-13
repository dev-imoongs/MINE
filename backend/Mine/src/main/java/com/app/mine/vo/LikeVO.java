package com.app.mine.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LikeVO {
    private Integer likeId;
    private Integer userId;
    private Integer usedItemId;
    private Integer auctionItemId;
}
