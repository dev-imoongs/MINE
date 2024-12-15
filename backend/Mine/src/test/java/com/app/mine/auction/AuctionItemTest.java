package com.app.mine.auction;

import com.app.mine.dto.SearchDTO;
import com.app.mine.mapper.AuctionItemMapper;
import com.app.mine.vo.AuctionItemVO;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@Slf4j
@SpringBootTest
public class AuctionItemTest {

    @Autowired
    private AuctionItemMapper auctionItemMapper;

    @Test
    void selectAuctionItemTest() {
        List<AuctionItemVO> test = auctionItemMapper.findAuctionItems(-1, -1, -1, "", "likes");
        log.info(test.toString());
    }

}
