import { NavLink, useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useProductSideMenuQuery } from 'generated/graphql';

import {
    Menu,
    MenuHead,
    MenuList,
    MenuItem,
    MenuItemNav,
    MenuItemText,
    // MenuItemTimeList,
    // MenuItemTimeItem,
} from './Products.styled';

// const MenuItemTimeLink = ({
//     label,
//     to,
// }: {
//     label: number | null | undefined;
//     to: string;
// }) => {
//     return (
//         <Route
//             path={to}
//             // eslint-disable-next-line react/no-children-prop
//             children={({ match }) => {
//                 const active = match ? 'activeLink' : '';
//                 return (
//                     <MenuItemTimeItem className={active}>
//                         <NavLink to={to}>{label}</NavLink>
//                     </MenuItemTimeItem>
//                 );
//             }}
//         />
//     );
// };
const MenuProducts: React.FC = () => {
    const [activeDATN, setActiveDATN] = useState<string | undefined>('active');
    // const [activeNCKH, setActiveNCKH] = useState<string | undefined>('');
    // const [activeDA, setActiveDA] = useState<string | undefined>('');
    const history = useHistory();

    const funcActiveDATN = () => {
        if (activeDATN === '') {
            // setActiveDA('');
            setActiveDATN('active');
            // setActiveNCKH('');
        } else {
            setActiveDATN('');
        }
    };
    // const funcActiveNCKH = () => {
    //     if (activeNCKH === '') {
    //         setActiveDA('');
    //         setActiveDATN('');
    //         setActiveNCKH('active');
    //     } else {
    //         setActiveNCKH('');
    //     }
    // };
    // const funcActiveDA = () => {
    //     if (activeDA === '') {
    //         setActiveDA('active');
    //         setActiveDATN('');
    //         setActiveNCKH('');
    //     } else {
    //         setActiveDA('');
    //     }
    // };
    const { data } = useProductSideMenuQuery();
    const productsDATN = data?.products?.filter((product) => {
        return product?.type === 'DATN';
    });
    const productsNCKH = data?.products?.filter((product) => {
        return product?.type === 'NCKH';
    });
    const productsDA = data?.products?.filter((product) => {
        return product?.type === 'DA';
    });

    useEffect((): void => {
        if (productsDATN && productsDATN[0]) {
            return history.push(`/san-pham/DATN/${productsDATN[0].semester}`);
        }
        if (productsNCKH && productsNCKH[0]) {
            return history.push(`/san-pham/NCKH/${productsNCKH[0].semester}`);
        }
        if (productsDA && productsDA[0]) {
            return history.push(`/san-pham/DA/${productsDA[0].semester}`);
        }
    }, [data]);

    return (
        <Menu>
            <MenuHead>Danh mục sản phẩm</MenuHead>
            <MenuList>
                <MenuItem className={activeDATN}>
                    <MenuItemNav onClick={funcActiveDATN}>
                        <i className="bi bi-circle" />
                        <NavLink
                            to={`/san-pham/DATN/${productsDATN?.[0]?.semester}`}
                        >
                            <MenuItemText>Đồ án tốt nghiệp</MenuItemText>
                        </NavLink>
                    </MenuItemNav>
                    {/* <MenuItemTimeList>
                        {productsDATN?.map((project) => {
                            return (
                                <MenuItemTimeLink
                                    key={project?.id}
                                    label={project?.semester}
                                    to={`/san-pham/DATN/${project?.semester}`}
                                />
                            );
                        })}
                    </MenuItemTimeList> */}
                </MenuItem>
                {/* <MenuItem className={activeNCKH}>
                    <MenuItemNav onClick={funcActiveNCKH}>
                        <i className="bi bi-circle" />
                        <NavLink
                            to={`/san-pham/NCKH/${productsNCKH?.[0]?.semester}`}
                        >
                            <MenuItemText>Nghiên cứu khoa học</MenuItemText>
                        </NavLink>
                    </MenuItemNav>
                    <MenuItemTimeList>
                        {productsNCKH?.map((project) => {
                            return (
                                <MenuItemTimeLink
                                    key={project?.id}
                                    label={project?.semester}
                                    to={`/san-pham/NCKH/${project?.semester}`}
                                />
                            );
                        })}
                    </MenuItemTimeList>
                </MenuItem>
                <MenuItem className={activeDA}>
                    <MenuItemNav onClick={funcActiveDA}>
                        <i className="bi bi-circle" />
                        <NavLink
                            to={`/san-pham/DA/${productsDA?.[0]?.semester}`}
                        >
                            <MenuItemText>Dự án</MenuItemText>
                        </NavLink>
                    </MenuItemNav>
                    <MenuItemTimeList>
                        {productsDA?.map((project) => {
                            return (
                                <MenuItemTimeLink
                                    key={project?.id}
                                    label={project?.semester}
                                    to={`/san-pham/DA/${project?.semester}`}
                                />
                            );
                        })}
                    </MenuItemTimeList>
                </MenuItem> */}
            </MenuList>
        </Menu>
    );
};

export default MenuProducts;
