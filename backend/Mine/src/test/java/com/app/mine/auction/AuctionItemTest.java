package com.app.mine.auction;

import com.app.mine.dto.PageDTO;
import com.app.mine.dto.SearchDTO;
import com.app.mine.mapper.AuctionItemMapper;
import com.app.mine.vo.AuctionItemVO;
import com.app.mine.vo.Criteria;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;

@Slf4j
@SpringBootTest
public class AuctionItemTest {

    @Autowired
    private AuctionItemMapper auctionItemMapper;

    @Test
    void selectAuctionItemTest() {
         // given
        SearchDTO searchDTO = new SearchDTO();
        searchDTO.setType("default");
        Criteria criteria = Criteria.builder()
                .page(1)  // 페이지 번호는 1부터 시작
                .amount(12)
                .build();

        int total = 100;  // 테스트를 위한 임시 값
        PageDTO pageDTO = new PageDTO(criteria, total, searchDTO, 1);
        // when
        List<AuctionItemVO> findAll = auctionItemMapper.selectAllAuctionItem(pageDTO);

        // then
        assertThat(findAll).isNotEmpty();
    }

}
