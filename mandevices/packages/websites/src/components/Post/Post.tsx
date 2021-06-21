import React from 'react';
import { Row } from 'react-bootstrap';
import defaultThumbnail from 'assets/logo.png';
import getImageURL from 'utils/getImageURL';

import './Post.scss';
import dayjs from 'dayjs';

interface Props {
    data?: {
        title?: string | null;
        thumbnail?: string | null;
        published_at?: string;
    } | null;
}

const Post: React.FC<Props> = ({ data }) => {
    const { title, thumbnail, published_at: publishedAt } = data || {};
    const realThumbnail = thumbnail ? getImageURL(thumbnail) : defaultThumbnail;
    return (
        <Row className="post">
            <img
                src={realThumbnail}
                className="post__thumbnail"
                alt="thumbnail"
            />
            <Row className="post__info">
                <h6>{title}</h6>
                <section className="post__published_at">
                    {dayjs(publishedAt).format('DD/MM/YYYY - HH:mm')}
                </section>
            </Row>
        </Row>
    );
};

export default Post;
