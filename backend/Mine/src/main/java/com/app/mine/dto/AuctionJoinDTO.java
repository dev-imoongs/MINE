package com.app.mine.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AuctionJoinDTO {
    private Integer auctionId;
    private Integer amount;
    private String receiptId;
}
