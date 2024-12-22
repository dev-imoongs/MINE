package com.app.mine.auction;

import com.app.mine.dto.PageDTO;
import com.app.mine.dto.SearchDTO;
import com.app.mine.mapper.AuctionItemMapper;
import com.app.mine.service.AuctionItemService;
import com.app.mine.vo.AuctionItemVO;
import com.app.mine.vo.Criteria;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;

@Slf4j
@SpringBootTest
public class AuctionItemTest {

    @Autowired
    private AuctionItemMapper auctionItemMapper;
    @Autowired
    private AuctionItemService auctionItemService;

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

    @Test
    void selectTotalCountByCategoryTest(){
        SearchDTO searchDTO = new SearchDTO();
        searchDTO.setCategory("102");
        log.info(searchDTO.toString());
        Map<String, Object> result = auctionItemMapper.selectItemStatisticsByCondition(searchDTO);

        System.out.println("평균 가격: " + result.get("avg_price"));
        System.out.println("최대 가격: " + result.get("max_price"));
        System.out.println("최소 가격: " + result.get("min_price"));
        System.out.println("총 개수: " + result.get("total_count"));

        Assertions.assertThat(result).isNotNull();
    }

    @Test
    void findSearchUsedItem() {
        SearchDTO searchDTO = new SearchDTO();
        searchDTO.setCategory("101");
        searchDTO.setMaxPrice(7000L);
        searchDTO.setMinPrice(5000L);
//       searchDTO.setMaxPrice();
//       List<String> queryTest = new ArrayList<>();
//       queryTest.add("test");
//        queryTest.add("37");
//       searchDTO.setSearchQuery(queryTest);
        Map<String, Object> searchUsedItem = auctionItemService.findSearchAuctionItem(searchDTO);
    }

}
