import React from 'react';
import {
    wordDocument,
    powerPointDocument,
    excelDocument,
    svg,
    document,
} from 'constants/icons';

const DocumentIcon: React.FC<{ ext?: string | null }> = ({ ext }) => {
    const fileExtension: string | undefined = ext?.toLowerCase().trim();
    switch (fileExtension) {
        case '.txt':
        case '.doc':
        case '.docm':
        case '.docx': {
            return <img src={wordDocument} alt="icon" />;
        }
        case '.xlsx':
        case '.xls':
        case 'xlsm': {
            return <img src={excelDocument} alt="icon" />;
        }
        case '.pptx':
        case 'ppt': {
            return <img src={powerPointDocument} alt="icon" />;
        }
        case '.svg':
        case '.jpg':
        case '.png': {
            return <img src={svg} alt="icon" />;
        }
        default: {
            return <img src={document} alt="icon" />;
        }
    }
};

export default DocumentIcon;
