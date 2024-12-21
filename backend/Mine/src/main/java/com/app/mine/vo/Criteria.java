package com.app.mine.vo;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder

public class Criteria {
    private final int page;
    private final int amount;

    public int getOffset() {
        return (page - 1) * amount;
    }
}
