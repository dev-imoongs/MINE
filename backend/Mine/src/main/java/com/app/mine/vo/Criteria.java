package com.app.mine.vo;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

/***
 * @author 황자현
 * 현재 페이지와 페이지당 데이터 개수를 기반으로
 * 데이터베이스의 LIMIT OFFSET 쿼리 계산
 */
@Getter
@Setter
@Builder
public class Criteria {
    private final int page; // 현재 페이지 번호
    private final int amount; // 한페이지 보여줄 개수

    /**
     * MyBatis에서 LIMIT OFFSET 쿼리를 사용할 때, 시작 위치를 계산하는 메서드.
     * OFFSET은 (현재 페이지 - 1) * 한 페이지에 보여줄 데이터 개수로 계산된다.
     * @return 시작 위치 (OFFSET 값)
     */
    public int getOffset() {
        return (page - 1) * amount;
    }
}
