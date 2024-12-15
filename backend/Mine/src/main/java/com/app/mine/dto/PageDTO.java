package com.app.mine.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class PageDTO<T> {
    private int totalCount;     // 전체 데이터 개수
    private int currentPage;    // 현재 페이지
    private int pageSize;       // 한 페이지당 데이터 개수
    private int totalPage;      // 전체 페이지 개수
    private List<T> items;      // 데이터를 담는 제네릭 리스트

    public PageDTO(int totalCount, int currentPage, int pageSize) {
        this.totalCount = totalCount;
        this.currentPage = currentPage;
        this.pageSize = pageSize;
        this.totalPage = (int) Math.ceil((double) totalCount / pageSize);
    }
}

