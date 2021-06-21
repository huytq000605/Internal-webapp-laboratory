import styled from 'styled-components/macro';

export const RecentPostItem = styled.div`
    display: grid;
    grid-template-columns: 0.2fr 0.8fr;
    grid-gap: 20px;
    align-items: center;
    @media (max-width: 767.98px) {
        grid-template-columns: 1fr;
        grid-gap: 10px;
    }
    @media (max-width: 576px) {
        height: auto;
        margin: 0;
    }
`;

export const NewPostImg = styled.div`
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        max-height: 150px;
        object-position: center;
    }
`;

export const NewPostItemText = styled.div`
    padding: 0px 20px;
`;
export const NewPostItemTextTitle = styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 8px;
    line-height: 22px;
`;
export const NewPostItemTextInfo = styled.div`
    margin-top: 8px;
`;
export const NewPostItemTextContent = styled.div`
    font-size: 16px;
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;
