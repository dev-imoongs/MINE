package com.app.mine.controller;

import kr.co.bootpay.Bootpay;
import kr.co.bootpay.model.request.Cancel;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/order/*")
@Slf4j
public class OrderController {

    @PostMapping("confirm")
    public HashMap confirmPay() {
        try {
            Bootpay bootpay = new Bootpay("6690e6aff9398e22c57ef3ce", "cxm7c9Hl360kaWJU5Su05CysmfEQIeLW9zb3m0T/KTE=");

            String receiptId = "62876963d01c7e00209b6028";
            HashMap res = bootpay.confirm(receiptId);
            if(res.get("error_code") == null) { //success
                System.out.println("confirm success: " + res);
            } else {
                System.out.println("confirm false: " + res);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    @PostMapping("getToken")
    public HashMap getToken() {
        try {
            Bootpay bootpay = new Bootpay("6690e6aff9398e22c57ef3ce", "cxm7c9Hl360kaWJU5Su05CysmfEQIeLW9zb3m0T/KTE=");
            HashMap token = bootpay.getAccessToken();
            return token;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @PostMapping("cancel")
    public void CancelJoinAuction(@RequestBody String receiptId) {
        try {
            Bootpay bootpay = new Bootpay("6690e6aff9398e22c57ef3ce", "cxm7c9Hl360kaWJU5Su05CysmfEQIeLW9zb3m0T/KTE=");
            HashMap token = bootpay.getAccessToken();
            if(token.get("error_code") != null) { //failed
                return;
            }
            Cancel cancel = new Cancel();
            cancel.receiptId = receiptId;
            cancel.cancelUsername = "KDT_임웅빈";
            cancel.cancelMessage = "테스트 결제";

            HashMap res = bootpay.receiptCancel(cancel);
            if(res.get("error_code") == null) { //success
                System.out.println("receiptCancel success: " + res);
            } else {
                System.out.println("receiptCancel false: " + res);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
