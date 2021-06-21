import React from 'react';
import getImageURL from 'utils/getImageURL';
import postThumbnailDefault from 'assets/logo.png';

const PostThumbnail: React.FC<{ url?: string | null }> = ({ url }) => {
    return (
        <img
            src={url ? getImageURL(url) : postThumbnailDefault}
            alt="post thumbnail"
        />
    );
};

export default PostThumbnail;
