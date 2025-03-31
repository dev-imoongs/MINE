package com.app.mine.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MyAuctionItemDTO {
    private Integer auctionItemId;
    private Integer auctionJoinId;
    private Integer userId;
    private String auctionItemName;
    private String auctionItemExplain;
    private Integer auctionItemStartPrice;
    private Integer auctionItemHighestPrice;
    private Integer auctionJoinPrice;
    private String auctionJoinStatus;
    private String auctionJoinStatusVal;
    private String auctionItemEndTime;
    private String createdAt;
    private String categoryId;
    private String categoryIdVal;
    private String auctionItemStatus;
    private String auctionItemStatusVal;
    private Integer minBidAmount;
    private String updatedAt;
    private String auctionItemCondition;

    private Integer likeId;
    private String bidCount;
    private String likeCount;
    private Boolean myFavoriteAuction;
    private Integer auctionItemJoinCount;

    // filePath 추가
    private String filePath;
}
