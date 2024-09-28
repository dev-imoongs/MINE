import React, {memo} from "react"
import { ToastContainer, toast } from 'react-toastify';
const ToastComponent =() => {
    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={300}
                hideProgressBar={true}
                newestOnTop={false}
                closeButton={false}
                rtl={false}
                limit={1}
                theme="dark"
                pauseOnHover
                style={{
                    width: 'auto',
                    height: 'auto',
                    padding: "0px 10px"
                }}
            />
        </>
    )
}

export default ToastComponent