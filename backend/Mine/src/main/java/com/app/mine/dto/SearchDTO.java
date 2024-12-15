package com.app.mine.dto;

import com.app.mine.vo.Criteria;
import lombok.Getter;
import lombok.Setter;

/**
 * @author 황자현
 * SearchDTO 임시 작성
 * 카테고리 검색, 페이징 처리 등에 구현 할 때 구체화 시킬 예정
 */
@Getter
@Setter
public class SearchDTO extends Criteria {
    private Integer category;       // 카테고리 ID
    private String[] searchQuery;   // 검색어 배열 (복수 키워드 가능)
    private String type;         // 정렬 조건 ('recent', 'like' 등)
    private Long minPrice;          // 최소 가격 필터
    private Long maxPrice;          // 최대 가격 필터


    public SearchDTO() {
        this.type = "recent"; // 기본 정렬은 recent (최신순)
    }
}