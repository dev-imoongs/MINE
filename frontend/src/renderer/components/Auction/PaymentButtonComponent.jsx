import React, { useState } from "react";
import { Bootpay } from "@bootpay/client-js";
import { toast } from "react-toastify";
import useFormattedPrice from "../../../hooks/useFormattedPrice";
import { paymentCompleteResponse } from "../../../services/auctionApiService";

const PaymentButtonComponent = ({
  auctionId,
  auctionItemName,
  currentPrice,
  setPayIsOpen,
  amount,
}) => {
  const [flag, setFlag] = useState(false);

  const payAmount = useFormattedPrice(amount);

  const handlePayment = async (amount) => {
    if (currentPrice >= amount) {
      setFlag(true);
      toast("입찰 금액이 현재 경매 입찰 금액보다 같거나 낮습니다.", {
        onClose: () => setFlag(false),
      });
    } else {
      if (flag) {
        return;
      }
      try {
        setPayIsOpen(false);
        const bootpayResponse = await Bootpay.requestPayment({
          application_id: "6690e6aff9398e22c57ef3cb",
          price: amount,
          order_name: auctionItemName,
          order_id: `ORDER_${Date.now()}`,
          extra: {
            open_type: "iframe",
            escrow: true,
            separately_confirmed: true,
            browser_open_type: [
              {
                browser: "instagram",
                open_type: "redirect",
              },
              {
                browser: "facebook",
                open_type: "redirect",
              },
              {
                browser: "kakaotalk",
                open_type: "popup",
              },
              {
                browser: "naver",
                open_type: "popup",
              },
              {
                browser: "mobile_safari",
                open_type: "popup",
              },
              {
                browser: "mobile_chrome",
                open_type: "iframe",
              },
            ],
            redirect_url: "URL",
          },
        });
        switch (bootpayResponse.event) {
          case "issued":
            // 가상계좌 입금 완료 처리
            break;
          case "done":
            break;
          case "confirm": //payload.extra.separately_confirmed = true; 일 경우 승인  전 해당 이벤트가호출됨
            const confirmedData = await Bootpay.confirm();
            console.log("confirmedData", confirmedData);
            if (confirmedData.event === "done") {
              try {
                paymentCompleteResponse({
                  auctionId: auctionId,
                  amount: amount,
                  receiptId: confirmedData.data.receipt_id,
                });

                const data = await confirmedData.data;
                if (data.status == 1) {
                  toast(`${payAmount} 원 결제가 완료되었습니다.`);
                } else {
                  toast("결제 처리 중 오류가 발생했습니다.");
                }
              } catch (error) {
                console.error("서버 요청 오류:", error);
                toast("결제 처리 중 서버 요청 오류가 발생했습니다.");
              }
            }

            /**
             * 2. 서버 승인을 하고자 할때
             * // requestServerConfirm(); //예시) 서버 승인을 할 수 있도록  API를 호출한다. 서버에서는 재고확인과 로직 검증 후 서버승인을 요청한다.
             * Bootpay.destroy(); //결제창을 닫는다.
             */
            break;
        }
      } catch (e) {
        // 결제 진행중 오류 발생
        // e.error_code - 부트페이 오류 코드
        // e.pg_error_code - PG 오류 코드
        // e.message - 오류 내용
        console.log("e.message", e.message);
        switch (e.event) {
          case "cancel":
            // 사용자가 결제창을 닫을때 호출
            console.log("e.message", e.message);
            //$('.fund_float').show()
            break;
          case "error":
            // 결제 승인 중 오류 발생시 호출
            console.log("e.error_code", e.error_code);
            //$('.fund_float').show()
            break;
        }
      }
      setFlag(false);
    }
  };

  return (
    <button
      type="button"
      className="btn-set"
      onClick={() => handlePayment(amount)}
      disabled={flag}
    >
      입찰하기
    </button>
  );
};

export default PaymentButtonComponent;
