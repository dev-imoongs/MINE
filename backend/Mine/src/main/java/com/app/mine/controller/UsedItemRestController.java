package com.app.mine.controller;

import com.app.mine.dto.SearchDTO;
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
import java.util.Map;

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
        usedItemVO.setCategoryId(String.valueOf(categoryId));

        UserVO userInfo = (UserVO)session.getAttribute("userInfo");
        usedItemVO.setUserId(userInfo.getUserId());

        usedItemService.saveUsedItem(usedItemVO);
    }

    @PostMapping("/getMyUsedItemList")
    public List<UsedItemVO> getMyUsedItemList(UserVO userVO) {
        userVO.setUserId(1);

        return usedItemService.getMyUsedItemList(userVO);
    }

    // 중고거래 상세 페이지
    @GetMapping("/getItem")
    public Map<String, Object> getUsedItemById(Integer usedItemId) {
        return usedItemService.findUsedItemById(usedItemId);
    }
    
}
