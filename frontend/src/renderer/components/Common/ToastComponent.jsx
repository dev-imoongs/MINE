import React, {memo} from "react"
import { ToastContainer, toast } from 'react-toastify';
const ToastComponent =() => {
    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={500}
                hideProgressBar={true}
                newestOnTop={false}
                // closeOnClick
                rtl={false}
                // pauseOnFocusLoss
                // draggable
                pauseOnHover
            />
        </>
    )
}
export default ToastComponent