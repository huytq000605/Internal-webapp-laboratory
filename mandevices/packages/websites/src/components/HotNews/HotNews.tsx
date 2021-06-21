import React from 'react';
import { useHotNewsCastQuery } from 'generated/graphql';
import getImageURL from 'utils/getImageURL';
import getTimeDistance from 'utils/getTimeDistance';
import { Link } from 'react-router-dom';
import Wrapper, { Item } from './HotNews.styled';

const HotNews: React.FC = () => {
    const { data } = useHotNewsCastQuery();
    return (
        <Wrapper>
            {data?.newscasts?.map((item) => (
                <Item key={item?.id}>
                    <img alt="anh" src={getImageURL(item?.thumbnail?.url)} />
                    <p>
                        <Link to={`/tin-tuc-su-kien/${item?.id}`}>
                            {item?.title}
                        </Link>
                    </p>
                    <i>
                        {getTimeDistance(
                            new Date(item?.published_at).getTime()
                        )}
                        trước
                    </i>
                </Item>
            ))}
        </Wrapper>
    );
};
export default HotNews;
