package com.app.mine.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuctionItemVO {
    private Integer auctionItemId;
    private Integer userId;
    private String auctionItemName;
    private String auctionItemExplain;
    private Integer auctionItemStartPrice;
    private Integer auctionItemHighestPrice;
    private String auctionItemEndTime;
    private String createdAt;
    private Integer categoryId;
    private Integer auctionItemStatus;
    private Integer minBidAmount;
    private String updatedAt;

    private String bidCount;
    private String likeCount;
    private Boolean myFavoriteAuction;
}
