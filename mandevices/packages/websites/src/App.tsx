import React, { useRef } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import {
    ApolloClient,
    ApolloProvider,
    createHttpLink,
    InMemoryCache,
    split,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { useMediaQuery } from 'react-responsive';
import theme, { GlobalStyle } from 'theme';
import { ThemeProvider } from 'styled-components/macro';
import Loading from 'shared/loading/Loading';
import { Wrapper, Body, ScrollToTopButton } from './App.styled';

const HomePage = React.lazy(() => import('pages/Home/HomePage'));
const Footer = React.lazy(() => import('components/Footer'));
const Header = React.lazy(() => import('components/Header'));
const Personnel = React.lazy(() => import('pages/Personnel'));
const UnavailableContent = React.lazy(() => import('pages/UnavailableContent'));
const Document = React.lazy(() => import('pages/Document'));
const Research = React.lazy(() => import('pages/Research'));
const Contact = React.lazy(() => import('pages/Contact'));
const TeamPage = React.lazy(() => import('pages/Team'));
const ResearchTopicPage = React.lazy(() => import('pages/ResearchTopic'));
const PostDetailPage = React.lazy(() => import('pages/PostDetail'));
const NewsCastDetailPage = React.lazy(() => import('pages/NewsCastDetail'));
const ActivityPage = React.lazy(() => import('pages/Activity'));
const Products = React.lazy(() => import('pages/Products/Products'));
const Devices = React.lazy(() => import('pages/Devices/Devices'));
const News = React.lazy(() => import('pages/News'));
const Post = React.lazy(() => import('pages/Post/Post'));
const RulesPage = React.lazy(() => import('pages/Rules'));
const PostListByCategory = React.lazy(() => import('pages/PostListByCategory'));

const wsLink = new WebSocketLink({
    uri:
        process.env.REACT_APP_GRAPHQL_WEBSOCKET ||
        `wss://${window.location.host}/subscription`,
    options: {
        lazy: true,
        reconnect: true,
    },
});

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URI || 'graphql',
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink
);

export const ResponsiveContext = React.createContext<
    { isMobileOrTablet?: boolean } | undefined
>(undefined);

export const cache = new InMemoryCache();

const App: React.FC = () => {
    const isMobileOrTablet = useMediaQuery({
        query: '(max-device-width: 991px)',
    });

    const client = new ApolloClient({
        link: splitLink,
        cache,
    });
    const myRef = useRef<HTMLDivElement>(null);

    const executeScroll = () =>
        myRef.current?.scrollIntoView({ behavior: 'smooth' });

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />

            <ResponsiveContext.Provider
                value={{
                    isMobileOrTablet,
                }}
            >
                <BrowserRouter>
                    <ApolloProvider client={client}>
                        <React.Suspense fallback={Loading}>
                            <Wrapper>
                                <div ref={myRef}>
                                    <Header />
                                </div>
                                <Body>
                                    <Switch>
                                        <Route path="/tin-tuc-su-kien/:id">
                                            <NewsCastDetailPage />
                                        </Route>
                                        <Route path="/tin-tuc-su-kien">
                                            <News />
                                        </Route>
                                        <Route path="/nhan-su">
                                            <Personnel />
                                        </Route>
                                        <Route path="/nghien-cuu">
                                            <Research />
                                        </Route>
                                        <Route path="/tai-lieu">
                                            <Document />
                                        </Route>
                                        <Route path="/bai-viet/:id">
                                            <PostDetailPage />
                                        </Route>
                                        <Route path="/bai-viet">
                                            <Post />
                                        </Route>
                                        <Route path="/danh-muc-bai-viet/:id">
                                            <PostListByCategory />
                                        </Route>
                                        <Route path="/nhom">
                                            <TeamPage />
                                        </Route>
                                        <Route path="/hoat-dong">
                                            <ActivityPage />
                                        </Route>
                                        <Route path="/lien-he">
                                            <Contact />
                                        </Route>
                                        <Route path="/san-pham">
                                            <Products />
                                        </Route>
                                        <Route path="/thiet-bi">
                                            <Devices />
                                        </Route>
                                        <Route path="/huong-nghien-cuu/:id">
                                            <ResearchTopicPage />
                                        </Route>
                                        <Route path="/noi-quy">
                                            <RulesPage />
                                        </Route>

                                        <Route path="/:any">
                                            <UnavailableContent />
                                        </Route>
                                        <Route exact path="/">
                                            <HomePage />
                                        </Route>

                                        <Redirect to="/" />
                                    </Switch>
                                </Body>
                                <ScrollToTopButton onClick={executeScroll}>
                                    <i className="bi bi-arrow-up" />
                                </ScrollToTopButton>
                                <Footer />
                            </Wrapper>
                        </React.Suspense>
                    </ApolloProvider>
                </BrowserRouter>
            </ResponsiveContext.Provider>
        </ThemeProvider>
    );
};

export default App;
