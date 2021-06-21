import styled from 'styled-components/macro';

export const StudentWrapper = styled.section`
    margin: 1.5rem;
`;

export const Wrapper = styled.div<{ collapsed?: boolean }>`
    width: 100%;
    height: 100%;
    max-height: 250px;
    position: relative;
    box-sizing: border-box;
    margin: auto;
    max-width: 330px;
    background-color: #e2e2e2;
    padding: 0.5rem 0;
    b {
        margin: auto;
        display: block;
        text-align: center;
        @media screen and (max-width: 768px) {
            text-align: left;
        }
    }

    @media screen and (max-width: 768px) {
        background-color: #e2e2e280;
        display: flex;
        padding-bottom: unset;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        max-width: unset;
    }
`;
export const StudentList = styled.div`
    display: grid;
    column-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
`;

export const Avatar = styled.img`
    display: block;
    width: 8rem;
    height: 8rem;
    margin: auto;
    position: relative;
    z-index: 2;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
    padding: 0.5rem;
    @media screen and (max-width: 768px) {
        width: 2.5rem;
        height: 2.5rem;
        padding: 0;
    }
`;

export const Profile = styled.div`
    @media screen and (max-width: 768px) {
        position: unset;
        top: unset;
        bottom: unset;
        left: unset;
        right: unset;
        flex-grow: 1;
        background-color: unset;
        margin-left: 1rem;
    }
`;

export const Name = styled.h5`
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    margin: 0;
    @media screen and (max-width: 768px) {
        margin-top: unset;
        text-align: left;
    }
`;

export const Contact = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 1rem;
    @media screen and (max-width: 768px) {
        justify-content: flex-start;
    }
`;

export const NominalRole = styled.div`
    text-align: center;
    font-weight: 600;
    color: #707070;
    font-style: italic;
    @media screen and (max-width: 768px) {
        text-align: left;
        font-size: 0.75rem;
    }
`;

export const ContactItem = styled.div``;
