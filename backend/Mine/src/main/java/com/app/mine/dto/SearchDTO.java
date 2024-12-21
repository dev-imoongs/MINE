package com.app.mine.dto;
;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * @author 황자현
 * SearchDTO 임시 작성
 * 카테고리 검색, 페이징 처리 등에 구현 할 때 구체화 시킬 예정
 */
@Getter
@Setter
public class SearchDTO {
    private String category;
    private List<String> searchQuery;
    private String type;
    private Long minPrice;
    private Long maxPrice;

    private final boolean IS_SEARCH_DTO = true;

    // 필요시 기본값 초기화 메서드
    public void initializeDefaults() {
        if (type == null) type = "recent";
    }
}