import React from 'react';
import getTimeDistance from 'utils/getTimeDistance';
import getImageURL from 'utils/getImageURL';
import { Link } from 'react-router-dom';
import { NormalSemiBoldText } from 'common/typography';
import { Body, RecentNewsItem } from './NewscastItem.styled';

interface INewscastItem {
    id: string | null;
    thumbnail: string | null;
    title: string | null;
    publishedAt: string | null;
    navigationLink: string;
}

const NewscastItem: React.FC<Partial<INewscastItem>> = ({
    thumbnail,
    title,
    publishedAt,
    navigationLink,
}) => {
    return (
        <RecentNewsItem>
            <img alt="anh" src={getImageURL(thumbnail)} />
            <Body>
                <NormalSemiBoldText>
                    <Link to={navigationLink || '#'}>{title}</Link>
                </NormalSemiBoldText>
                {publishedAt && (
                    <i>
                        {getTimeDistance(new Date(publishedAt).getTime())}
                        trước
                    </i>
                )}
            </Body>
        </RecentNewsItem>
    );
};

export default NewscastItem;
