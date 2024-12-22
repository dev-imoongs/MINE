package com.app.mine.usedItem;

import com.app.mine.dto.PageDTO;
import com.app.mine.dto.SearchDTO;
import com.app.mine.mapper.UsedItemMapper;
import com.app.mine.vo.Criteria;
import com.app.mine.vo.UsedItemVO;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Slf4j
public class UsedItemMapperTest {
    @Autowired
    private UsedItemMapper usedItemMapper;


    @Test
    void usedItemMapperSelectTest() {
        // given
        SearchDTO searchDTO = new SearchDTO();
        searchDTO.setType("recent");
        Criteria criteria = Criteria.builder()
                .page(1)  // 페이지 번호는 1부터 시작
                .amount(12)
                .build();

        int total = 100;  // 테스트를 위한 임시 값
        PageDTO pageDTO = new PageDTO(criteria, total, searchDTO, 1);
//        pageDTO.setIS_SEARCH_DTO(false);
        // when
        List<UsedItemVO> findAll = usedItemMapper.selectAllUsedItem(pageDTO);

        // then
        assertThat(findAll).isNotEmpty();
    }
    @Test
    void usedItemMapperSelectCountTest() {
        // given
        SearchDTO searchDTO = new SearchDTO();
        searchDTO.setType("recent");
        // when
        int count = usedItemMapper.getUsedItemCount(searchDTO);

        // then
        assertThat(count).isGreaterThan(1);
    }

    @Test
    void selectUsedItemByConditionTest(){
        SearchDTO searchDTO = new SearchDTO();
        searchDTO.setCategory("101");
        log.info(searchDTO.toString());
        log.info("SearchDTO: {}", searchDTO);

        List<UsedItemVO> list = usedItemMapper.selectUsedItemByCondition(searchDTO);

        assertThat(list).isNotEmpty();

    }
    @Test
    void selectTotalCountByCategoryTest(){
        SearchDTO searchDTO = new SearchDTO();
        searchDTO.setCategory("101");
        log.info(searchDTO.toString());
        Map<String, Object> result = usedItemMapper.selectItemStatisticsByCondition(searchDTO);

        System.out.println("평균 가격: " + result.get("avg_price"));
        System.out.println("최대 가격: " + result.get("max_price"));
        System.out.println("최소 가격: " + result.get("min_price"));
        System.out.println("총 개수: " + result.get("total_count"));

        assertThat(result).isNotNull();

    }
}
