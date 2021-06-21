import NewscastItem from 'components/NewscastItem';
import { useTeamPostsQuery } from 'generated/graphql';
import React from 'react';
import { useParams } from 'react-router-dom';

const TeamPostsController = () => {
    const { id } = useParams<{ id: string }>();
    const { data } = useTeamPostsQuery({ variables: { id } });
    return (
        <div>
            {data?.team?.posts?.map((item) => (
                <NewscastItem
                    key={item?.id}
                    id={item?.id}
                    title={item?.title}
                    thumbnail={item?.thumbnail?.url}
                    publishedAt={item?.published_at}
                    navigationLink={`/bai-viet/${item?.id}`}
                />
            ))}
        </div>
    );
};

export default TeamPostsController;
