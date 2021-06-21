const getImageURL = (url?: string | null): string => {
    if (process.env.NODE_ENV === 'development') {
        return `${process.env.REACT_APP_GRAPHQL_URI}/..${url}`;
    }

    return url || '';
};

export default getImageURL;
