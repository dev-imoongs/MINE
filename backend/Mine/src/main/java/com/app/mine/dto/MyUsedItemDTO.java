package com.app.mine.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MyUsedItemDTO {
    private Integer usedItemId;
    private String usedItemName;
    private String usedItemExplain;
    private Integer usedItemPrice;
    private String usedItemStatus;
    private String usedItemPlace;
    private String createdAt;
    private String updatedAt;
    private String categoryId;
    private Integer userId;
    private Integer likeId;
    private Integer usedItemBuyerId;
    private String userEmail;
    private String userNickname;
    private String categoryIdVal;
    private String usedItemSalesStatus;
    private String usedItemSalesStatusVal;
    private String filePath;
}
