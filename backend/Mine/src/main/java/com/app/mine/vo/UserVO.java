package com.app.mine.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserVO {
    public Integer userId;
    public String userEmail;
    public String userPassword;
    public String userNickname;
    public Integer userCategory1;
    public Integer userCategory2;
    public Integer userCategory3;
    public String userAddress;
    public String userAddressDetail;
    public Integer userPoint;
    public Integer userTrustScore;
    public String userStatus;
}
