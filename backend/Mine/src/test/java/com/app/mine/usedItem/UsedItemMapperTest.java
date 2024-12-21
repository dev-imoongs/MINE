package com.app.mine.usedItem;

import com.app.mine.dto.PageDTO;
import com.app.mine.dto.SearchDTO;
import com.app.mine.mapper.UsedItemMapper;
import com.app.mine.vo.Criteria;
import com.app.mine.vo.UsedItemVO;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

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
                .page(3)  // 페이지 번호는 1부터 시작
                .amount(12)
                .build();

        int total = 100;  // 테스트를 위한 임시 값
        PageDTO pageDTO = new PageDTO(criteria, total, searchDTO, 1);
//        pageDTO.setIS_SEARCH_DTO(false);
        // when
        List<UsedItemVO> findAll = usedItemMapper.findAllUsedItem(pageDTO);

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
}
