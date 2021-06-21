import React from 'react';
import { useResearchTopicDetailQuery } from 'generated/graphql';
import { Link, useParams } from 'react-router-dom';
import Loading from 'shared/loading/Loading';
import { Breadcrumb } from 'react-bootstrap';
import MarkDown from 'shared/MarkDown';

const ResearchTopicDetail = () => {
    const { id } = useParams<{ id: string }>();

    const { loading, data } = useResearchTopicDetailQuery({
        variables: { id },
    });
    if (loading) {
        return <Loading />;
    }
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">
                    <Link to="/">Trang chủ</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    <Link to="/">{data?.researchTopic?.name}</Link>
                </Breadcrumb.Item>
            </Breadcrumb>
            <h3>{data?.researchTopic?.name}</h3>
            <MarkDown>
                {data?.researchTopic?.descriptions || undefined}
            </MarkDown>
        </div>
    );
};

export default ResearchTopicDetail;
