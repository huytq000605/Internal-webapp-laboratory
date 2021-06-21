import React from 'react';
import TitleIcon from 'assets/TitleIcon.png';
import HotNews from 'components/HotNews';
import { useNewscastQuery } from 'generated/graphql';
import { PageWrapper } from 'elements/Page';
import { NarrowTinyLargeBoldText } from 'common/typography';
import { useMediaQuery } from 'react-responsive';
import NewscastItem from 'components/NewscastItem';
import SEO from 'common/SEO';
import {
    RecentNewsWrapper,
    Wrapper,
    ScrollBar,
    Icon,
    RecentNewHeadWrapper,
} from './News.styled';

const News: React.FC = () => {
    const { data } = useNewscastQuery();

    const isLargeScreen = useMediaQuery({
        query: '(min-device-width: 992px)',
    });

    const mainData = data?.newscasts
        ?.slice(0)
        ?.sort(
            (a, b) =>
                new Date(b?.published_at).getTime() -
                new Date(a?.published_at).getTime()
        );

    return (
        <PageWrapper>
            <SEO title="Tin tức - Sự kiện" />
            <Wrapper>
                {isLargeScreen && <HotNews />}
                <RecentNewsWrapper>
                    <RecentNewHeadWrapper>
                        <Icon src={TitleIcon} />
                        <NarrowTinyLargeBoldText>
                            Tin mới nhất
                        </NarrowTinyLargeBoldText>
                    </RecentNewHeadWrapper>
                    <ScrollBar>
                        {mainData?.map((item) => (
                            <NewscastItem
                                key={item?.id}
                                navigationLink={`/tin-tuc-su-kien/${item?.id}`}
                                title={item?.title}
                                thumbnail={item?.thumbnail?.url}
                                publishedAt={item?.published_at}
                            />
                        ))}
                    </ScrollBar>
                </RecentNewsWrapper>
            </Wrapper>
        </PageWrapper>
    );
};
export default News;
