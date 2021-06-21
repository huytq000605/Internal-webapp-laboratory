import React from 'react';
import {
    ContentWrapper,
    Number,
    PublicationItem,
} from 'components/PublicationList/PublicationList.styled';
import getImageURL from 'utils/getImageURL';
import { useDocumentsQuery } from 'generated/graphql';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import Loading from 'shared/loading/Loading';
import DocumentIcon from './DocumentIcon';
import Item from './Documents.styled';

const Documents: React.FC = () => {
    const categoryName = useParams<{ categoryName: string }>();
    const { data, loading } = useDocumentsQuery({
        variables: categoryName,
    });
    return (
        <ContentWrapper>
            {loading && <Loading />}
            {data?.documents?.length && (
                <h5> Danh sách tài liệu {categoryName.categoryName}</h5>
            )}
            <PublicationItem>
                {data?.documents?.map((item, i) => {
                    return (
                        <Item key={item?.id}>
                            <div>
                                <Number>{i + 1}</Number>
                                <p> {item?.name}</p>

                                <p>
                                    {dayjs(item?.createdAt).format(
                                        'DD/MM/YYYY'
                                    )}
                                </p>
                                <DocumentIcon ext={item?.file?.ext} />
                                <a href={getImageURL(item?.file?.url)} download>
                                    Tải xuống
                                </a>
                            </div>
                        </Item>
                    );
                })}
            </PublicationItem>
        </ContentWrapper>
    );
};

export default Documents;
