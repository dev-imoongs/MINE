//package com.app.mine.user;
//
//import com.app.mine.controller.UserRestController;
//import lombok.extern.slf4j.Slf4j;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//@SpringBootTest
//@Slf4j
//public class UserMgmtTests {
//
//    @Autowired
//    private UserRestController userRestController;
//
//    @Test
//    public void saveUserTest() {
//        for (int i = 11; i <= 15; i++) {
//            userRestController.join(
//                    "user" + i + "@example.com", "123456", "닉네임" + i, "주소" + i,
//                    "상세주소" + i, 1, 2, 3);
//        }
//    }
//}
