import React from 'react';
import {
    usePublicationsQuery,
    Enum_Publications_Type,
} from 'generated/graphql';
import { useParams } from 'react-router-dom';
import Markdown from 'shared/MarkDown';
import { VerticalBar, Detail, ContentWrapper } from './PublicationList.styled';

const PublicationList: React.FC = () => {
    const { type } = useParams<{ type: string }>();

    const { data } = usePublicationsQuery({
        variables: { type: type as Enum_Publications_Type },
    });
    let name: string | undefined = '';
    switch (type) {
        case 'domestic': {
            name = 'Trong nước';
            break;
        }
        case 'international': {
            name = 'Quốc tế';
            break;
        }
        default: {
            name = undefined;
        }
    }
    return (
        <ContentWrapper>
            <h2> Tạp chí, ấn phẩm {`${name}`}</h2>
            <VerticalBar>
                {data?.publications?.map((item, i) => (
                    <Detail key={item?.id}>
                        <div>
                            <b>
                                #{i + 1} .{item?.name}
                            </b>
                            {/* @ts-ignore */}
                            <Markdown>{item?.authors}</Markdown>
                            <i> {item?.journalConference}</i>
                            <i> {item?.edition}</i>
                            <i>{item?.isbn}</i>
                            <i>{item?.publishingTime}</i>
                        </div>
                    </Detail>
                ))}
            </VerticalBar>
        </ContentWrapper>
    );
};

export default PublicationList;
