import ProjectList from 'components/ProjectList';
import PublicationList from 'components/PublicationList';
import MenuDown from 'components/MenuDown';
import React, { useEffect } from 'react';
import {
    Route,
    Switch,
    NavLink,
    useLocation,
    useHistory,
} from 'react-router-dom';
import { useProjectQuery } from 'generated/graphql';
import { uniqueTextInArray } from 'utils';
import { PageWrapper } from 'elements/Page';
import SEO from 'common/SEO';
import { Wrapper, LeftMenu, MenuItem } from './Research.styled';

const Research: React.FC = () => {
    const test = useLocation().pathname;

    const { data } = useProjectQuery();
    const menu = data?.projects?.map((item) => item?.level)?.sort() as string[];

    const menuitem = uniqueTextInArray(menu);
    const history = useHistory();
    useEffect(() => {
        return history.push(`/nghien-cuu/0/${menuitem?.[0]}`);
    }, [data]);

    return (
        <PageWrapper>
            <SEO title="Nghiên cứu" />
            <Wrapper>
                <LeftMenu>
                    <h3>Danh mục</h3>
                    <MenuItem>
                        <h4>Đề tài</h4>
                        {menuitem?.map((item, i) => {
                            let projectLevel: string | undefined = 'lalala';
                            switch (item) {
                                case 'national': {
                                    projectLevel = 'Nhà nước';
                                    break;
                                }
                                case 'school': {
                                    projectLevel = 'Cơ sở';
                                    break;
                                }
                                case 'ministry': {
                                    projectLevel = 'Bộ';
                                    break;
                                }
                                default:
                                    projectLevel = undefined;
                                    break;
                            }
                            return (
                                <li key={item}>
                                    <NavLink
                                        to={`/nghien-cuu/0/${item}`}
                                        className={
                                            i === 0 && test === '/nghien-cuu'
                                                ? 'active'
                                                : undefined
                                        }
                                    >
                                        {`${projectLevel}`}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </MenuItem>
                    <MenuDown />
                </LeftMenu>

                <Switch>
                    <Route path="/nghien-cuu/0/:level">
                        <ProjectList />
                    </Route>
                    <Route path="/nghien-cuu/1/:type">
                        <PublicationList />
                    </Route>
                </Switch>
            </Wrapper>
        </PageWrapper>
    );
};

export default Research;
