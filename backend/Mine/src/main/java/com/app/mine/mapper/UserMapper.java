package com.app.mine.mapper;

import com.app.mine.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    public UserVO selectUser(String userEmail, String userPassword);

    public UserVO selectMyInfo(UserVO userVO);

    public void insertUser(UserVO userVO);

    public void updateUser(UserVO userVO);

    public void deleteUser(Integer userId);

}
