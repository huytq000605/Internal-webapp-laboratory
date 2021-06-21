import React from 'react';
import { Alert } from 'react-bootstrap';

const UnavailableContent: React.FC = () => {
    return (
        <Alert variant="info" className="text-center">
            Nội dung chưa khả dụng
        </Alert>
    );
};

export default UnavailableContent;
