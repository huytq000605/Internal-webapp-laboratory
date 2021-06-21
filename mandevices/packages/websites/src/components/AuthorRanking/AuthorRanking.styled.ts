import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    background-color: ${(props) => props.theme.colors.surface};
    border-radius: 1rem;
    padding: 1.5rem 0.5rem 0.5rem 0.5rem;
    h2 {
        margin-bottom: 1rem;
    }
    td,
    th {
        display: inline-block;
        display: inline-flex;
        justify-content: center;
        column-gap: 0.5rem;
    }

    tr {
        display: block;
        margin-top: 0.5rem;
        &:first-child {
            margin-top: 0;
        }
    }

    tr {
        td:nth-child(1),
        th:nth-child(1) {
            width: 3rem;
        }
        td:nth-child(2),
        th:nth-child(2) {
            width: 190px;
        }
        td:nth-child(2) {
            justify-content: flex-start;
        }
        td:nth-child(3),
        th:nth-child(3) {
            width: 80px;
        }
    }
`;

export const AuthorAvatar = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
`;

export const RankTable = styled.div``;
