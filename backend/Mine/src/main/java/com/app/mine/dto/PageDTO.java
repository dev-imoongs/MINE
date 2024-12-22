package com.app.mine.dto;

import com.app.mine.vo.Criteria;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author 황자현
 * PageDTO - 페이징 처리와 검색 조건을 포함하는 DTO 클래스
 */
@Getter
@Setter
public class PageDTO {
    // 페이징 관련 필드
    private int pageCount;       // 하단 버튼 갯수
    private int startPage;       // 시작 페이지
    private int endPage;         // 마지막 페이지
    private int realEnd;         // 실제 마지막 페이지
    private boolean prev;        // 이전 버튼 여부
    private boolean next;        // 다음 버튼 여부

    private final boolean IS_SEARCH_DTO = false; // 검색 DTO 여부를 나타내는 플래그

    private int total;           // 전체 게시글 수
    private Criteria criteria;   // 페이지와 갯수 정보
    private SearchDTO searchDTO; // 검색 조건


    /**
     * PageDTO 생성자
     * @param criteria 페이지 번호 및 데이터 개수 정보를 담은 객체
     * @param total 전체 데이터 개수
     * @param searchDTO 검색 조건 객체 (옵션)
     * @param pageCount 하단 페이지 버튼 개수
     */

    // 생성자
    public PageDTO(Criteria criteria, int total, SearchDTO searchDTO, int pageCount) {
        this.criteria = criteria;
        this.total = total;
        this.searchDTO = searchDTO;
        this.pageCount = pageCount;

        // 현재 페이지를 기준으로 마지막 페이지 계산
        this.endPage = (int) (Math.ceil(criteria.getPage() / (double) pageCount)) * pageCount;
        this.startPage = endPage - pageCount + 1;

        // 실제 마지막 페이지 계산
        this.realEnd = (int) Math.ceil((double) total / criteria.getAmount());

        // 가장 마지막 페이지가 endPage보다 작으면 보정
        if (realEnd < endPage) {
            this.endPage = Math.max(realEnd, 1); // 최소 1페이지
        }

        // 이전, 다음 버튼 여부 계산
        this.prev = startPage > 1;
        this.next = endPage < realEnd;
    }

    /**
     * 페이지네이션 정보를 맵으로 변환하여 반환하는 메서드
     * @return 페이지네이션 정보 (현재 페이지, 전체 데이터 수, 총 페이지 수)
     */
    public Map<String, Object> toPageNationMap() {
        Map<String, Object> pageNationMap = new HashMap<>();
        pageNationMap.put("currentPage", this.criteria.getPage());
        pageNationMap.put("totalCount", this.total);
        pageNationMap.put("totalPages", this.realEnd);
        return pageNationMap;
    }
}

