/* eslint-disable global-require */
import React, { useEffect, useRef } from 'react';
// import md from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import parse from 'html-react-parser';
import markdownItAnchor from 'markdown-it-anchor';
import Content from './MarkDown.styled';
import 'highlight.js/styles/atom-one-dark.css';

const md = require('markdown-it')({
    html: true,
    xhtmlOut: false,
    linkify: true,
    typographer: true,
}).use(markdownItAnchor);

// eslint-disable-next-line react/require-default-props
const MarkDown = ({ children }: { children?: string | null }) => {
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        rootRef.current
            ?.querySelectorAll('pre code')
            .forEach((block) => hljs.highlightBlock(block as any));
    }, [children]);

    return (
        <Content>
            {children && <div ref={rootRef}>{parse(md.render(children))}</div>}
        </Content>
    );
};

export default MarkDown;
