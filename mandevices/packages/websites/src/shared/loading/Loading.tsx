import React from 'react';
import { Spinner, Image } from 'react-bootstrap';
import lightning from 'assets/lightning.png';
import './Loading.scss';

const Loading: React.FC = () => {
    return (
        <div className="loading">
            <Spinner
                className="loading__spinner"
                animation="border"
                variant="primary"
            />
            <Image className="loading__icon" src={lightning} />
        </div>
    );
};

export default Loading;
