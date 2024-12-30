package com.app.mine.controller;

import com.app.mine.service.UserService;
import com.app.mine.vo.UserVO;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user/*")
@RequiredArgsConstructor
@Slf4j
public class UserRestController {

    private final UserService userService;

//    @PostMapping("login")
//    public boolean login(String userEmail, String userPassword, HttpSession session) {
//        UserVO loginUser = userService.getUserInfo(userEmail, userPassword);
//
//        if(loginUser == null) {
//            return false;
//        }
//        session.setAttribute("userInfo", loginUser);
//
//        return true;
//    }
    @PostMapping("login")
    public Map<String, Object> login(String userEmail, String userPassword, HttpSession session) {
        UserVO loginUser = userService.getUserInfo(userEmail, userPassword);
        HashMap<String, Object> result = new HashMap<>();
        if(loginUser == null) {

            result.put("login", null);
            return result;
        }
        session.setAttribute("userInfo", loginUser);
        result.put("login", loginUser.userId);
        return result;
    }

    @PostMapping("check-email")
    public boolean checkEmail(String userEmail) {
        UserVO userInfo = userService.getUserInfo(userEmail, null);

        return (userInfo == null ? true : false);
    }

    @PostMapping("join")
    public void join(String userEmail, String userPassword, String userNickname, String userAddress, String userAddressDetail, Integer userCategory1, Integer userCategory2, Integer userCategory3) {
        UserVO userVO = new UserVO();

        userVO.setUserEmail(userEmail);
        userVO.setUserPassword(userPassword);
        userVO.setUserNickname(userNickname);
        userVO.setUserAddress(userAddress);
        userVO.setUserAddressDetail(userAddressDetail);
        userVO.setUserCategory1(userCategory1);
        userVO.setUserCategory2(userCategory2);
        userVO.setUserCategory3(userCategory3);

        userService.saveUser(userVO);
    }
}
