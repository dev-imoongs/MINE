package com.app.mine.dto;

import lombok.Getter;
import lombok.Setter;

/**
 * @author 황자현
 * SearchDTO 임시 작성
 * 카테고리 검색, 페이징 처리 등에 구현 할 때 구체화 시킬 예정
 */
@Getter
@Setter
public class SearchDTO {
    private String orderBy;
    private Integer categoryId;
}
