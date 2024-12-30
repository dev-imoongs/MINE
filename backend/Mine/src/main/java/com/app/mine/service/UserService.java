package com.app.mine.service;

import com.app.mine.vo.UserVO;

public interface UserService {

    public UserVO getUserInfo(String userEmail, String userPassword);

    public UserVO getMyInfo(UserVO userVO);

    public void saveUser(UserVO userVO);

    public void updateUser(UserVO userVO);

    public void deleteUser(Integer userId);

}
