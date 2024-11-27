package com.app.mine.service;

import com.app.mine.mapper.UserMapper;
import com.app.mine.vo.UserVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserMapper userMapper;

    public UserVO getUserInfo(String userEmail, String userPassword) {
        return userMapper.selectUser(userEmail, userPassword);
    }

    public void saveUser(UserVO userVO) {
        userMapper.insertUser(userVO);
    }

    public void updateUser(UserVO userVO) {
        userMapper.updateUser(userVO);
    }

    public void deleteUser(Integer userId) {
        userMapper.deleteUser(userId);
    }
}
