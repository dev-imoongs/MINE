import React, {memo} from "react"
import { ToastContainer, toast } from 'react-toastify';
const ToastComponent = () => {
    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}
export default React.memo(ToastComponent)