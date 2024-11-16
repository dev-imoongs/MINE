package com.app.mine.controller;

import com.app.mine.service.UserService;
import com.app.mine.vo.UserVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user/*")
@RequiredArgsConstructor
@Slf4j
public class UserRestController {

    private final UserService userService;

    @PostMapping("login")
    public UserVO login(String userEmail, String userPassword) {
        return userService.getUserInfo(userEmail, userPassword);
    }

    @PostMapping("join")
    public void join(String userEmail, String userPassword, String userName, String userCategory, String userLongitude, String userLatitude, String userAddress) {
        UserVO userVO = new UserVO();

        userVO.setUserEmail(userEmail);
        userVO.setUserPassword(userPassword);
        userVO.setUserName(userName);
        userVO.setUserCategory(userCategory);
        userVO.setUserLongitude(userLongitude);
        userVO.setUserLatitude(userLatitude);
        userVO.setUserAddress(userAddress);
        userVO.setUserStatus("사용");
    }
}
