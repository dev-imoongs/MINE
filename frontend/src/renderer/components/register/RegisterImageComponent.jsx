import { useRef } from 'react';
import styles from "../../../styles/register/product-register.module.css";

const RegisterImageComponent = ({ images, setImages }) => {
    const fileInputRef = useRef(null);

    const fileButtonClick = () => {
        fileInputRef.current.click();
    };

    const fileChange = (e) => {
        const files = Array.from(e.target.files);
        const totalImages = images.length + files.length;

        if (totalImages > 10) {
            alert("이미지는 최대 10개까지만 추가할 수 있습니다.");
            return;
        }

        const newImages = files.map(file => ({
            url: URL.createObjectURL(file),
            name: file.name,
            type: file.type.split('/')[1] // MIME 타입에서 파일 확장자만 추출 (예: image/jpeg -> jpeg)
        }));
        setImages((prevImages) => [...prevImages, ...newImages]);

        fileInputRef.current.value = null;  // 동일 파일 재선택 가능하게 함
    };

    const deleteImage = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
        // Revoke the blob URL to free up resources
        URL.revokeObjectURL(images[index].url);
    };

    return (
        <div className={styles['image-container']}>
            <div>
                <input
                    name="media"
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/png, image/jpeg, image/jpg"
                    className={styles['hidden']}
                    onChange={fileChange}
                />
                <button type="button" className={styles['image-button']} onClick={fileButtonClick}>
                    <div className={styles['flex']}>
                        <svg width="32px" height="32px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.728 20.4461C13.6481 20.4461 11.9619 18.7599 11.9619 16.68C11.9619 14.6001 13.6481 12.9138 15.728 12.9138C17.8079 12.9138 19.4942 14.6001 19.4942 16.68C19.4942 18.7599 17.8079 20.4461 15.728 20.4461Z" fill="#C2C6CE"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.4564 7.32295C10.9376 6.00587 11.5097 5.15997 12.8118 5.15997H17.9241C19.2253 5.15997 19.7975 6.00463 20.2785 7.32003H20.7897C24.7543 7.32003 27.968 10.4192 27.968 14.2417V19.119C27.968 22.9409 24.7543 26.04 20.7897 26.04H10.6669C6.7023 26.04 3.48798 22.9409 3.48798 19.119V14.2417C3.48798 10.487 6.58918 7.4303 10.4564 7.32295ZM21.3772 16.68C21.3772 19.8001 18.8481 22.3292 15.728 22.3292C12.6079 22.3292 10.0788 19.8001 10.0788 16.68C10.0788 13.5599 12.6079 11.0308 15.728 11.0308C18.8481 11.0308 21.3772 13.5599 21.3772 16.68ZM21.5988 11.88C21.5988 12.4 22.0204 12.8216 22.5403 12.8216C23.0603 12.8216 23.4819 12.4 23.4819 11.88C23.4819 11.36 23.0603 10.9385 22.5403 10.9385C22.0204 10.9385 21.5988 11.36 21.5988 11.88Z" fill="#C2C6CE"></path>
                        </svg>
                        <p>
                            <span className={styles['image-count']}>{images.length}</span>/10
                        </p>
                    </div>
                </button>
            </div>
            <div className={styles['select-image-container']}>
                {images.map((image, index) => (
                    <div key={index} className={styles['select-image']}>
                        <img src={image.url} alt={`image-${index}`} />
                        <button
                            type="button"
                            className={styles['absolute-top-right']}
                            onClick={() => deleteImage(index)}
                        >
                            <svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" fill="white"></path>
                                <path d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5V18.5C14.6944 18.5 18.5 14.6944 18.5 10H17.5ZM10 17.5C5.85786 17.5 2.5 14.1421 2.5 10H1.5C1.5 14.6944 5.30558 18.5 10 18.5V17.5ZM2.5 10C2.5 5.85786 5.85786 2.5 10 2.5V1.5C5.30558 1.5 1.5 5.30558 1.5 10H2.5ZM10 2.5C14.1421 2.5 17.5 5.85786 17.5 10H18.5C18.5 5.30558 14.6944 1.5 10 1.5V2.5Z" fill="#DADEE5"></path>
                                <path d="M7 7L13 13M13 7L7 13" stroke="#363C45" strokeLinecap="round"></path>
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RegisterImageComponent;
