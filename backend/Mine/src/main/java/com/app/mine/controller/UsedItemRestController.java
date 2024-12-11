package com.app.mine.controller;

import com.app.mine.service.UsedItemService;
import com.app.mine.vo.UsedItemVO;
import com.app.mine.vo.UserVO;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
@RestController
@RequestMapping("/api/used-item/*")
@RequiredArgsConstructor
@Slf4j
public class UsedItemRestController {

    private final UsedItemService usedItemService;

    @PostMapping("save")
    public void saveUsedItem(String usedItemName, String usedItemExplain, Integer usedItemPrice, String usedItemStatus, String usedItemPlace, Integer categoryId, HttpSession session) {
        UsedItemVO usedItemVO = new UsedItemVO();

        usedItemVO.setUsedItemName(usedItemName);
        usedItemVO.setUsedItemExplain(usedItemExplain);
        usedItemVO.setUsedItemPrice(usedItemPrice);
        usedItemVO.setUsedItemStatus(usedItemStatus);
        usedItemVO.setUsedItemPlace(usedItemPlace);
        usedItemVO.setCategoryId(categoryId);

        UserVO userInfo = (UserVO)session.getAttribute("userInfo");
        usedItemVO.setUserId(userInfo.getUserId());

        usedItemService.saveUsedItem(usedItemVO);
    }

    @GetMapping("/getItem")
    public List<UsedItemVO> getAllUsedItems() {
        return usedItemService.getAllUsedItems();
    }
    
}
