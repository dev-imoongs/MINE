import react from 'react';
import styles from "../../../styles/register/product-register.module.css";

const RegisterInputComponent = ({ type, name, onChange, placeholder }) => {

    return (
        <input type={type} name={name} onChange={onChange} placeholder={placeholder} />
    );
};

export default RegisterInputComponent;
