import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItem } from 'pages/Research/Research.styled';
import { usePublicationsQuery } from 'generated/graphql';
import { uniqueTextInArray } from 'utils';

const MenuDown: React.FC = () => {
    const { data } = usePublicationsQuery();
    const menu = data?.publications
        ?.map((item) => item?.type)
        ?.sort() as string[];
    const menuitem = uniqueTextInArray(menu);

    return (
        <MenuItem>
            <h4>Một số công trình khoa học</h4>
            {menuitem.map((item) => {
                let name: string | undefined = 'lalala';
                switch (item) {
                    case 'domestic': {
                        name = 'Trong nước';
                        break;
                    }
                    case 'international': {
                        name = 'Quốc tế';
                        break;
                    }
                    default: {
                        name = undefined;
                    }
                }
                return (
                    <li key={item}>
                        <NavLink to={`/nghien-cuu/1/${item}`}>
                            {`${name}`}
                        </NavLink>
                    </li>
                );
            })}
        </MenuItem>
    );
};

export default MenuDown;
