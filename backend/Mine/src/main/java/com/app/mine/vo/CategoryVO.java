package com.app.mine.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryVO {
    private Integer categoryId;
    private String categoryName;
    private String createdAt;
    private String updatedAt;
    private String categoryGroup;
    private String categoryDetail;
    private String categoryValue;
}
