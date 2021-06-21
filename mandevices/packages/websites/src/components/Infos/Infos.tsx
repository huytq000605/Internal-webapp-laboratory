import React from 'react';

import Info from './Infos.styled';

interface Props {
    infos?: ({ id?: string; value?: string | null } | null)[] | null;
}

const Infos: React.FC<Props> = ({ infos }) => {
    return (
        <div>
            {infos?.map((info) => (
                <Info key={info?.id}>
                    <i className="bi bi-check-circle-fill" />
                    <p>{info?.value}</p>
                </Info>
            ))}
        </div>
    );
};

export default Infos;
