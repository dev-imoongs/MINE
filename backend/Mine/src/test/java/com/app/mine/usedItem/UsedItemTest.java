package com.app.mine.usedItem;

import com.app.mine.controller.UserRestController;
import com.app.mine.dto.SearchDTO;
import com.app.mine.mapper.UsedItemMapper;
import com.app.mine.vo.UsedItemVO;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Slf4j
public class UsedItemTest {
    @Autowired
    private UsedItemMapper usedItemMapper;

    @Test
    void usedItemPagingTest() {
        // GIVEN: 테스트용 DTO 설정 - 최신순 정렬
        SearchDTO searchDTO = new SearchDTO();
        searchDTO.setType("recent");
        searchDTO.setCategory(101);

        // Act: Mapper 호출
        int itemCount = usedItemMapper.getUsedItemCount(searchDTO);

        // Assert: 결과 검증
        System.out.println("총 데이터 개수: " + itemCount);
        assertThat(itemCount).isGreaterThan(0);  // 개수가 0보다 큰지를 확인
    }
}
