import React from 'react';
import Wrapper from './Modal.styled';

const Modal: React.FC<{
    src?: string;
    setImage: (value: string | undefined) => void;
}> = ({ src, setImage }) => {
    const handleClick = (e: any) => {
        if (e.target.classList.contains('backdrop')) {
            setImage(undefined);
        }
    };

    return (
        <Wrapper className="backdrop" onClick={handleClick}>
            <img src={src} alt="images" />
            {/* <div></div> */}
        </Wrapper>
    );
};

export default Modal;
