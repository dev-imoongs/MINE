package com.app.mine.service;

import kr.co.bootpay.model.request.Cancel;

public interface PayService {
    public boolean cancelPayment(Cancel cancel);
}
