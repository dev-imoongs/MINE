package com.app.mine.controller;

import com.app.mine.service.UserService;
import com.app.mine.vo.UserVO;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user/*")
@RequiredArgsConstructor
@Slf4j
public class UserRestController {

    private final JavaMailSender mailSender;
    private final UserService userService;

    @PostMapping("login")
    public Map<String, Object> login(String userEmail, String userPassword, HttpSession session) {
        UserVO loginUser = userService.getUserInfo(userEmail, userPassword);
        HashMap<String, Object> result = new HashMap<>();
        if(loginUser == null) {
            result.put("login", null);
            return result;
        }
        session.setAttribute("userInfo", loginUser);
        result.put("userEmail", loginUser.userEmail);
        result.put("valid", true);
        return result;
    }

    @PostMapping("check-email")
    public boolean checkEmail(String userEmail) {
        UserVO userInfo = userService.getUserInfo(userEmail, null);

        return userInfo == null;
    }

    @PostMapping("join")
    public boolean join(String userEmail, String userPassword, String userNickname, String userAddress, String userAddressDetail, Integer userCategory1, Integer userCategory2, Integer userCategory3) {
        UserVO userInfo = userService.getUserInfo(userEmail, null);
        if(userInfo != null) {
            return false;
        }

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
        return true;
    }

    @PostMapping("getMyInfo")
    public UserVO getMyInfo(HttpSession session) {
        UserVO userInfo = (UserVO)session.getAttribute("userInfo");
        return userService.getMyInfo(userInfo);
    }

    @PostMapping("send-email")
    public void sendEmail(String userEmail) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(userEmail);
        message.setFrom("disappointed123419@gmail.com");
        message.setSubject(userEmail + "님, 새 비밀번호 설정 링크입니다.");

        String key = "userEmail=" + userEmail + ".enc";
        key = Base64.getEncoder().encodeToString(key.getBytes());

        message.setText(userEmail + "님, 비밀번호 재설정 하시기 바랍니다.\n" + "링크: http://127.0.0.1:5173/changePassword?userEmail=" + userEmail + "&key=" + key);

        mailSender.send(message);
    }

    @PostMapping("check-key")
    public boolean checkKey(String userEmail, String key) {
        return new String(Base64.getDecoder().decode(key)).equals("userEmail=" + userEmail + ".enc");
    }

    @PostMapping("change-password")
    public void changePassword(String userEmail, String userPassword) {
        UserVO userVO = new UserVO();

        userVO.setUserEmail(userEmail);
        userVO.setUserPassword(userPassword);

        userService.updateUser(userVO);
    }

    @PostMapping("session-check")
    public ResponseEntity<Boolean> sessionCheck(HttpServletRequest request) {
        HttpSession session = request.getSession(false); // 기존 세션만 반환, 없으면 null

        // 세션이 없거나 userInfo가 없으면 false 반환
        if (session == null || session.getAttribute("userInfo") == null) {
            return ResponseEntity.ok(false);
        }

        return ResponseEntity.ok(true); // 세션과 userInfo가 유효함
    }

    @GetMapping("logout")
    public void logout(HttpSession session) {
        session.invalidate();
    }

    @PostMapping("modify")
    public boolean modify(String userEmail, String userPassword, String userNickname, String userAddress, String userAddressDetail, Integer userCategory1, Integer userCategory2, Integer userCategory3, String presentPassword) {
        UserVO userInfo = userService.getUserInfo(userEmail, presentPassword);

        if(userInfo == null) {
            return false;
        }

        UserVO userVO = new UserVO();

        userVO.setUserEmail(userEmail);
        userVO.setUserPassword(userPassword);
        userVO.setUserNickname(userNickname);
        userVO.setUserAddress(userAddress);
        userVO.setUserAddressDetail(userAddressDetail);
        userVO.setUserCategory1(userCategory1);
        userVO.setUserCategory2(userCategory2);
        userVO.setUserCategory3(userCategory3);

        userService.updateUser(userVO);
        return true;
    }

    @PostMapping("unregister")
    public void unregister(HttpSession session) {
        UserVO loginUser = (UserVO) session.getAttribute("userInfo");

        UserVO userVO = new UserVO();

        userVO.setUserId(loginUser.getUserId());
        userVO.setUserStatus("N");

        userService.unregisterUser(userVO);

        session.invalidate();
    }

}
