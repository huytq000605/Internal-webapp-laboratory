import React, { useEffect } from 'react';
import { useProjectLazyQuery, Enum_Project_Level } from 'generated/graphql';
import { useParams } from 'react-router-dom';
import {
    TopicItem,
    Number,
    PublicationItem,
    ContentWrapper,
} from '../PublicationList/PublicationList.styled';

const ProjectList: React.FC = () => {
    const { level } = useParams<{ level: string }>();

    const [getProject, { data }] = useProjectLazyQuery();

    useEffect(() => {
        if (level) {
            getProject({
                variables: { level: level as Enum_Project_Level },
            });
        }
    }, [level]);

    let name: string | undefined = '';
    switch (level) {
        case 'national': {
            name = 'nhà nước';
            break;
        }
        case 'school': {
            name = 'cơ sở';
            break;
        }
        case 'ministry': {
            name = 'bộ';
            break;
        }
        default: {
            name = undefined;
        }
    }

    return (
        <ContentWrapper>
            <h2> Đề tài nghiên cứu cấp {`${name}`}</h2>
            <PublicationItem>
                {data?.projects?.map((item, i) => (
                    <TopicItem key={item?.id}>
                        <Number>{i + 1}</Number>
                        <p>{item?.name}</p>
                        <p>{item?.source}</p>
                        <p>
                            {item?.startYear}
                            {item?.endYear ? ` - ${item?.endYear}` : null}
                        </p>
                    </TopicItem>
                ))}
            </PublicationItem>
        </ContentWrapper>
    );
};

export default ProjectList;
