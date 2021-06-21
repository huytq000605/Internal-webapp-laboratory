import React, { useEffect } from 'react';
import {
    Route,
    Switch,
    NavLink,
    useLocation,
    useHistory,
} from 'react-router-dom';

import Documents from 'components/Documents';

import { useDocumentCategoriesQuery } from 'generated/graphql';
import { uniqueTextInArray } from 'utils';
import { PageWrapper } from 'elements/Page';
import SEO from 'common/SEO';
import { Wrapper, LeftMenu, MenuItem } from '../Research/Research.styled';

const Document: React.FC = () => {
    const { data } = useDocumentCategoriesQuery();
    const menu = data?.documentCategories
        ?.map((item) => item?.name)
        ?.sort() as string[];
    const history = useHistory();

    const menuitem = uniqueTextInArray(menu);
    const test = useLocation().pathname;

    useEffect(() => {
        return history.push(`/tai-lieu/${menuitem?.[0]}`);
    }, [data]);

    return (
        <PageWrapper>
            <SEO title="Tài liệu" />
            <Wrapper>
                <LeftMenu>
                    <MenuItem>
                        <h5>Danh mục tài liệu</h5>
                        {menuitem?.map((item, i) => (
                            <li key={item}>
                                <NavLink
                                    className={
                                        i === 0 && test === '/tai-lieu'
                                            ? 'active'
                                            : undefined
                                    }
                                    to={`/tai-lieu/${item}`}
                                >
                                    {`${item}`}
                                </NavLink>
                            </li>
                        ))}
                    </MenuItem>
                </LeftMenu>
                <Switch>
                    <Route path="/tai-lieu/:categoryName">
                        <Documents />
                    </Route>
                </Switch>
            </Wrapper>
        </PageWrapper>
    );
};

export default Document;
