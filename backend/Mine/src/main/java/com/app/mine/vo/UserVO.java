package com.app.mine.vo;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class UserVO implements Serializable {
    private static final long serialVersionUID = 1L;
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
    public Integer buyCount;
    public Integer sellCount;
    public Integer successBidCount;
}
