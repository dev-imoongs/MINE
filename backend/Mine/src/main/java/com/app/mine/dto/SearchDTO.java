package com.app.mine.dto;
;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

/**
 * @author 황자현
 * SearchDTO - 검색 조건을 담는 DTO 클래스
 * 검색 조건 필요 시 추가하여 사용
 */
@Getter
@Setter
@ToString
public class SearchDTO {
    private String category; // category id
    private List<String> searchQuery; // 검색어 리스트
    private String type; // 정렬 방식
    private Long minPrice; // 최소 가격
    private Long maxPrice; // 최대 가격
    private String searchKeyword;

    private Boolean IS_SEARCH_DTO = null;


    // 필요시 기본값 초기화 메서드
    public void initializeDefaults() {
        if (type == null) type = "recent";
    }
}