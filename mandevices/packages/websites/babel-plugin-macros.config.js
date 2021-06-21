module.exports = {
    // ...
    // Other macros config
    styledComponents: {
        pure: process.env.NODE_ENV !== 'development',
        displayName: process.env.NODE_ENV === 'development',
        fileName: process.env.NODE_ENV === 'development',
        minify: process.env.NODE_ENV !== 'development',
        transpileTemplateLiterals: process.env.NODE_ENV !== 'development',
    },
};
