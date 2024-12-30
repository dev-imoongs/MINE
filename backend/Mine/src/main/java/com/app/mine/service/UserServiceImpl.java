package com.app.mine.service;

import com.app.mine.mapper.UserMapper;
import com.app.mine.vo.UserVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserMapper userMapper;

    public static String hash(String input) {
        try {
            // MessageDigest 인스턴스를 SHA-256으로 초기화
            MessageDigest digest = MessageDigest.getInstance("SHA-256");

            // 입력 문자열을 바이트 배열로 변환하여 해시 처리
            byte[] hashBytes = digest.digest(input.getBytes("UTF-8"));

            // 바이트 배열을 16진수 문자열로 변환
            StringBuilder hexString = new StringBuilder();
            for (byte b : hashBytes) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }

            // 해시 결과 반환
            return hexString.toString();

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public UserVO getUserInfo(String userEmail, String userPassword) {
        return userMapper.selectUser(userEmail, userPassword != null ? hash(userPassword) : null);
    }

    public UserVO getMyInfo(UserVO userVO) {
        return userMapper.selectMyInfo(userVO);
    }

    public void saveUser(UserVO userVO) {
        userVO.setUserPassword(hash(userVO.getUserPassword()));

        userMapper.insertUser(userVO);
    }

    public void updateUser(UserVO userVO) {
        userMapper.updateUser(userVO);
    }

    public void deleteUser(Integer userId) {
        userMapper.deleteUser(userId);
    }
}
