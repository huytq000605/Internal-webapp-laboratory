import Page, { PageWrapper } from 'elements/Page';
import React, { useState } from 'react';

import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { useStudentCategoryQuery } from 'generated/graphql';
import { uniqueArrayObject } from 'utils';
import Loading from 'shared/loading/Loading';
import SEO from 'common/SEO';
import MasterListController from 'controllers/MasterList';
import {
    Content,
    Menu,
    Navigation,
    PersonnelWrapper,
    MenuHead,
    MenuItem,
} from './Personnel.styled';
import Students from '../Students';
import OldStudents from '../OldStudents';

interface IMenuItemComponent {
    title: string;
    link?: string;
    subMenu?: IMenuItemComponent[];
}

const MenuItemComponent: React.FC<{ item: IMenuItemComponent }> = ({
    item,
}) => {
    const [active, setActive] = useState<boolean>();

    const toggleActive = () => {
        setActive((prevState) => !prevState);
    };

    return (
        <MenuItem className={active ? 'active' : undefined}>
            {item.link ? (
                <NavLink onClick={toggleActive} to={item.link}>
                    {item.title}
                </NavLink>
            ) : (
                <>
                    <MenuHead onClick={toggleActive}>
                        <span>{item.title}</span>
                        {item.subMenu && item.subMenu.length > 0 && (
                            <i className="bi bi-caret-down" />
                        )}
                    </MenuHead>

                    <Menu>
                        {item.subMenu?.map((menuItem, i) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <MenuItemComponent key={i} item={menuItem} />
                        ))}
                    </Menu>
                </>
            )}
        </MenuItem>
    );
};

const Personnel: React.FC = () => {
    const { loading, data } = useStudentCategoryQuery();

    const studentCategories = uniqueArrayObject(
        data?.members
            ?.filter(
                (item) =>
                    item?.course &&
                    item.school &&
                    item.isMember &&
                    !item.isOldMember
            )
            ?.map((item) => ({
                ...item,
                course: item?.course,
                school: item?.school?.toUpperCase(),
            }))
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            .sort((a, b) => b!.course! - a!.course!) || []
    );

    const menus: {
        head: string;
        menus: IMenuItemComponent[];
    }[] = [
        {
            head: 'Thành viên',
            menus: [
                {
                    title: 'Sinh viên',
                    link: `/nhan-su/0/sinh-vien/tat-ca`,
                },
                // {
                //     title: 'Học viên cao học',
                //     link: `/nhan-su/0/hoc-vien-cao-hoc`,
                // },
            ],
        },
        {
            head: 'Cựu thành viên',
            menus: [
                {
                    title: 'Sinh viên',
                    link: `/nhan-su/0/cuu-sinh-vien/tat-ca`,
                },
            ],
        },
    ];

    if (loading) return <Loading />;

    return (
        <PageWrapper>
            <SEO title="Nhân sự" />
            <Page rounded>
                <PersonnelWrapper>
                    <Navigation>
                        {menus.map((menu, i) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <React.Fragment key={i}>
                                <MenuHead>{menu.head}</MenuHead>
                                <Menu>
                                    {
                                        // eslint-disable-next-line react/no-array-index-key
                                        menu.menus?.map((item, j) => (
                                            <MenuItemComponent
                                                item={item}
                                                // eslint-disable-next-line react/no-array-index-key
                                                key={j}
                                            />
                                        ))
                                    }
                                </Menu>
                            </React.Fragment>
                        ))}
                    </Navigation>
                    <Content>
                        <Switch>
                            <Route path="/nhan-su/0/sinh-vien/:course">
                                <Students />
                            </Route>
                            <Route path="/nhan-su/0/cuu-sinh-vien/:course">
                                <OldStudents />
                            </Route>
                            <Route path="/nhan-su/0/hoc-vien-cao-hoc">
                                <MasterListController />
                            </Route>
                            <Redirect
                                to={`/nhan-su/0/sinh-vien/${
                                    // @ts-ignore
                                    studentCategories.filter(
                                        // @ts-ignore
                                        (item) => item?.isMember
                                    )[0]?.course
                                }`}
                            />
                        </Switch>
                    </Content>
                </PersonnelWrapper>
            </Page>
        </PageWrapper>
    );
};

export default Personnel;
