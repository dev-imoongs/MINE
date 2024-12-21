package com.app.mine.usedItem;

import com.app.mine.controller.MainRestController;
import com.app.mine.controller.UsedItemRestController;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Map;

@SpringBootTest
@Slf4j
public class UsedItemControllerTest {
    @Autowired
    private MainRestController mainRestController;

    @Test
    void selectTest(){
        List<Map<String,Object>> result = mainRestController.getAllUsedItems();

        Assertions.assertThat(result).isNotEmpty();
    }
}
