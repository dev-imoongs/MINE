package com.app.mine.usedItem;

import com.app.mine.dto.PageDTO;
import com.app.mine.dto.SearchDTO;
import com.app.mine.service.UsedItemService;
import com.app.mine.vo.Criteria;
import com.app.mine.vo.UsedItemVO;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@SpringBootTest
@Slf4j
public class UsedItemServiceTest {
    @Autowired
    private UsedItemService usedItemService;

    @Test
    void selectTest() {
        List<Map<String, Object>> result = usedItemService.findAllUsedItems();

        Assertions.assertThat(result)
                .isNotNull() // null이 아님
                .isNotEmpty(); // 빈 리스트가 아님

        for (Map<String, Object> map : result) {
            Assertions.assertThat(map)
                    .containsKeys("type", "data");
            Assertions.assertThat(map.get("data"))
                    .isInstanceOf(List.class);
        }

        // 로그 출력으로 결과 확인
        log.info("Test result: {}", result);
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
        Map<String, Object> searchUsedItem = usedItemService.findSearchUsedItem(searchDTO);



    }
}
