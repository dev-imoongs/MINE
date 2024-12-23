package com.app.mine.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UsedItemVO {
    private Integer usedItemId;
    private String usedItemName;
    private String usedItemExplain;
    private Integer usedItemPrice;
    private String usedItemStatus;
    private String usedItemPlace;
    private String createdAt;
    private String updatedAt;
    private Integer categoryId;
    private Integer userId;
    private Integer usedItemBuyerId;

}
