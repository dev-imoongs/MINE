package com.app.mine.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuctionItemVO {
    private Integer actionItemId;
    private Integer userId;
    private String actionItemName;
    private String actionItemExplain;
    private Integer actionItemStartPrice;
    private Integer actionItemHighestPrice;
    private String actionItemEndTime;
    private String createdAt;
    private Integer categoryId;
    private Integer actionItemStatus;
    private Integer minBidAmount;
}
