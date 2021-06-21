import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useTeamsQuery } from 'generated/graphql';
import { PageWrapper } from 'elements/Page';
import SEO from 'common/SEO';
import Loading from 'shared/loading/Loading';
import TeamIntroduce from 'components/TeamIntroduce';
import MenuActive from './MenuActive';
import { Wrapper, LeftMenu, MenuItem, Root } from './TeamPage.styled';

const TeamPage: React.FC = () => {
    const { loading, data } = useTeamsQuery();

    const history = useHistory();

    useEffect(() => {
        if (data?.teams?.[0]?.id && '/nhom/'.includes(window.location.pathname))
            history.push(`/nhom/${data?.teams?.[0]?.id}`);
    }, [data]);

    if (loading) return <Loading />;

    return (
        <Root>
            <PageWrapper>
                <SEO title="Nhóm chuyên môn" />
                <Wrapper>
                    <LeftMenu>
                        <p> Các nhóm chuyên môn</p>
                        <MenuItem>
                            {data?.teams?.map((team) => {
                                return (
                                    <MenuActive
                                        key={team?.id}
                                        label={team?.name}
                                        to={`/nhom/${team?.id}`}
                                    />
                                );
                            })}
                        </MenuItem>
                    </LeftMenu>

                    <Switch>
                        <Route path="/nhom/:id">
                            <TeamIntroduce />
                        </Route>
                    </Switch>
                </Wrapper>
            </PageWrapper>
        </Root>
    );
};

export default TeamPage;
