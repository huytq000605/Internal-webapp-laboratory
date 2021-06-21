import React from 'react';
import Helmet from 'react-helmet';

interface ISEO {
    title: string | null;
    description: string | null;
    type: 'article';
    author: string | null;
    imageUrl: string | null;
    imageAlt: string | null;
    keywords: (string | null | undefined)[] | string | null;
}

const SEO: React.FC<Partial<ISEO>> = ({
    title,
    description,
    type = '',
    keywords,
    author,
    imageUrl,
    imageAlt,
}) => {
    return (
        <Helmet>
            <title>{title} | Mandevices</title>
            <meta name="description" content={description?.slice(0, 100)} />
            <meta name="keywords" content={keywords?.toString()} />
            <meta name="author" content={author || 'Nguyễn Viết Cảnh'} />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`${title} | Mandevices`} />
            <meta property="og:type" content={type} />
            <meta property="og:locale" content="vi_VN" />
            <meta property="fb:app_id" content="288803671848353" />
            <meta property="og:image:alt" content={imageAlt || undefined} />
            <meta
                property="og:image"
                content={
                    imageUrl ? window.location.origin + imageUrl : undefined
                }
            />
            <meta
                property="og:description"
                content={description?.slice(0, 100)}
            />
        </Helmet>
    );
};

export default SEO;
