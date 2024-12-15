package com.app.mine.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Criteria {
    private int page;
    private int pageSize;

    public Criteria() {
        this.page = 1;
        this.pageSize = 12;
    }
    public int getOffset() {
        return (page - 1) * pageSize;
    }
}
