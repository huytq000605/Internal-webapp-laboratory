import NewscastItem from 'components/NewscastItem';
import { useTeamNewsQuery } from 'generated/graphql';
import React from 'react';
import { useParams } from 'react-router-dom';

const TeamNews = () => {
    const { id } = useParams<{ id: string }>();
    const { data } = useTeamNewsQuery({ variables: { id } });
    return (
        <div>
            {data?.team?.news?.map((item) => (
                <NewscastItem
                    key={item?.id}
                    navigationLink={`/tin-tuc-su-kien/${item?.id}`}
                    title={item?.title}
                    thumbnail={item?.thumbnail?.url}
                    publishedAt={item?.published_at}
                />
            ))}
        </div>
    );
};

export default TeamNews;
