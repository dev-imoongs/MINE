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
    private String categoryId;
    private Integer userId;
    private Integer usedItemBuyerId;
    private String userEmail;
    private String userNickname;
    private String categoryIdVal;

    // likeCount 추가
    private int likeCount;

    // filePath 추가
    private String filePath;

}
