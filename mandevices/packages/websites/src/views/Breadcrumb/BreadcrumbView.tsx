import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Wrapper from './BreadcrumbView.styled';

interface IBreadcrumbView {
    data: { name?: string | null; link?: string }[];
}

const BreadcrumbView: React.FC<IBreadcrumbView> = ({ data }) => {
    return (
        <Wrapper>
            <Breadcrumb>
                {data.slice(0, data.length - 1).map((item) => (
                    <Breadcrumb.Item href="#" key={item.name}>
                        <Link to={item.link || '#'}>{item.name}</Link>
                    </Breadcrumb.Item>
                ))}
                {data[data.length]}

                <Breadcrumb.Item active>
                    {data[data.length - 1].name}
                </Breadcrumb.Item>
            </Breadcrumb>
        </Wrapper>
    );
};

export default BreadcrumbView;
