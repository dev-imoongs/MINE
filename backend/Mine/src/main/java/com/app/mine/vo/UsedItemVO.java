package com.app.mine.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UsedItemVO {
    private Integer usedItemId;
    private String Name;
    private String Explain;
    private Integer Price;
    private String Place;
    private String CreatedAt;
    private String UpdatedAt;
    private Integer CategoryId;
    private Integer UserId;
}
