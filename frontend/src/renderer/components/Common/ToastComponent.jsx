import React, {memo} from "react"
import { ToastContainer, toast } from 'react-toastify';
const ToastComponent =() => {
    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={200}
                hideProgressBar={true}
                newestOnTop={false}
                // closeOnClick
                rtl={false}
                // pauseOnFocusLoss
                // draggable
                limit={1}
                pauseOnHover
            />
        </>
    )
}

{/* <div class="Toastify"><div class="Toastify__toast-container Toastify__toast-container--bottom-center toast_Toastify__toast-container____5JI"><div id="5" class="Toastify__toast Toastify__toast-theme--light Toastify__toast--default Toastify__toast--close-on-click" style="border-radius: 36px; min-height: 44px; max-height: 44px; background-color: rgba(0, 0, 0, 0.7); width: fit-content; max-width: 70vw; margin: auto auto 12px; --nth: 1; --len: 1;"><div role="alert" class="Toastify__toast-body" style="padding: 0px 10px; margin: 0px; text-align: center; width: 100%;"><div>찜한 상품에서 제외 했습니다.</div></div><div role="progressbar" aria-hidden="true" aria-label="notification timer" class="Toastify__progress-bar Toastify__progress-bar--animated Toastify__progress-bar-theme--light Toastify__progress-bar--default" style="animation-duration: 1500ms; animation-play-state: paused; opacity: 0;"></div></div></div></div> */}
export default ToastComponent