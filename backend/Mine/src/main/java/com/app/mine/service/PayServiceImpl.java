package com.app.mine.service;

import kr.co.bootpay.Bootpay;
import kr.co.bootpay.model.request.Cancel;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
@RequiredArgsConstructor
@Slf4j
public class PayServiceImpl implements PayService {

    @Value("${BOOTPAY_RESTAPI}")
    private String RESTAPI;

    @Value("${BOOTPAY_PRIVATEKEY}")
    private String PRIVATEKEY;

    private Bootpay api;

    // 결제 취소를 위한 토큰 발급
    private HashMap<String, Object> getAccessToken() {
        api = new Bootpay(RESTAPI, PRIVATEKEY);
        try {
            return api.getAccessToken();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
    public boolean cancelPayment(Cancel cancel){
        try {
            // 토큰 발급
            HashMap<String, Object> token = getAccessToken();
            if (token == null || token.get("error_code") != null) {
                return false;  // 토큰 발급 실패 시 취소 실패 처리
            }

            // 결제 취소 요청
            HashMap<String, Object> res = api.receiptCancel(cancel);
            return res.get("error_code") == null;  // 결제 취소 성공 여부 반환
        } catch (Exception e) {
            e.printStackTrace();
            return false;  // 예외 발생 시 실패 처리
        }
    }
}
