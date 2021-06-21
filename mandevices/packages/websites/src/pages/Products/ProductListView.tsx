import React from 'react';
import func from 'assets/func.png';
import info from 'assets/info.png';
import checkFunc from 'assets/checkFunc.png';
import performerIcon from 'assets/performer.png';
import advisor from 'assets/advisor.png';
import Slide from 'blocks/Slide2';
import { NavLink, useParams } from 'react-router-dom';
import { ProductsQuery } from 'generated/graphql';
import getHumanReadableNominalRole from 'utils/getHumanReadableNominalRole';
import { groupBy } from 'lodash';
import { Nav } from 'react-bootstrap';
import {
    Title,
    Text,
    Wrapper,
    ProductList,
    ProductItem,
    Info,
    ContentInforTextMain,
    ProductName,
    Function,
    FunctionItem,
    FunctionItemText,
    ExtraInfo,
    Performer,
    PerformerList,
    PerformerItem,
    PerformerItemName,
    PerformerItemPosition,
    PerformerItemCourses,
    Advisor,
    AdvisorList,
    AdvisorItem,
    SlideWrapper,
} from './Products.styled';

interface IProductListView {
    products: ProductsQuery['products'];
    loading: boolean;
    title: string;
    navigationLink: string;
}

const ProductListView: React.FC<Partial<IProductListView>> = ({
    products,
    title,
    navigationLink,
}) => {
    const { semester: currentSemester } = useParams<{ semester: string }>();

    const productsGroupedBySemester = groupBy(products, 'semester');

    const data =
        currentSemester === 'tat-ca'
            ? products
            : productsGroupedBySemester[currentSemester];

    return (
        <Wrapper>
            <h2>
                {title}
                <span>{data?.length}</span>
            </h2>
            <Nav
                variant="tabs"
                defaultActiveKey={window.location.pathname}
                activeKey={window.location.pathname}
            >
                <Nav.Item>
                    <Nav.Link
                        eventKey={`${navigationLink}/tat-ca`}
                        as={NavLink}
                        to={`${navigationLink}/tat-ca`}
                    >
                        Tất cả
                    </Nav.Link>
                </Nav.Item>
                {Object.keys(productsGroupedBySemester)
                    .filter((semester) => semester !== 'null')
                    .map((course) => (
                        <Nav.Item key={course}>
                            <Nav.Link
                                as={NavLink}
                                to={`${navigationLink}/${course}`}
                                eventKey={`${navigationLink}/${course}`}
                            >
                                {`Kì ${course}`}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
            </Nav>
            <ProductList>
                {data?.map((product, index) => {
                    return (
                        <ProductItem key={product?.id}>
                            <Info>
                                <ProductName>
                                    <div className="Index">{index + 1}</div>
                                    <h3 className="Title">{product?.name}</h3>
                                </ProductName>
                                <ContentInforTextMain>
                                    <Function>
                                        <Title>
                                            <img src={func} alt="" />

                                            <Text>Chức năng</Text>
                                        </Title>
                                        <div className="FunctionList ">
                                            {product?.functions?.map((f) => {
                                                return (
                                                    <FunctionItem key={f?.id}>
                                                        <img
                                                            src={checkFunc}
                                                            alt=""
                                                        />

                                                        <FunctionItemText>
                                                            {f?.title}
                                                        </FunctionItemText>
                                                    </FunctionItem>
                                                );
                                            })}
                                        </div>
                                    </Function>
                                    <ExtraInfo>
                                        <Title>
                                            <img src={info} alt="" />
                                            {product?.extraInfo?.map(
                                                (extraInfo) => {
                                                    return (
                                                        <Text
                                                            key={extraInfo?.id}
                                                        >
                                                            {extraInfo?.title}
                                                        </Text>
                                                    );
                                                }
                                            )}
                                        </Title>
                                    </ExtraInfo>
                                    <Performer>
                                        <Title>
                                            <img src={performerIcon} alt="" />
                                            <Text>Thực hiện</Text>
                                        </Title>
                                        <PerformerList>
                                            {product?.performers?.map(
                                                (performer) => {
                                                    return (
                                                        <PerformerItem
                                                            key={performer?.id}
                                                        >
                                                            <PerformerItemName>
                                                                {
                                                                    performer?.fullName
                                                                }
                                                            </PerformerItemName>
                                                            <PerformerItemPosition>
                                                                {getHumanReadableNominalRole(
                                                                    performer?.nominalRole
                                                                )}
                                                            </PerformerItemPosition>
                                                            <PerformerItemCourses>
                                                                k
                                                                {
                                                                    performer?.course
                                                                }
                                                            </PerformerItemCourses>
                                                        </PerformerItem>
                                                    );
                                                }
                                            )}
                                        </PerformerList>
                                    </Performer>
                                    <Advisor>
                                        <Title>
                                            <img src={advisor} alt="" />

                                            <Text>Hướng dẫn</Text>
                                        </Title>
                                        <AdvisorList>
                                            {product?.instructors?.map(
                                                (instructor) => {
                                                    return (
                                                        <AdvisorItem
                                                            key={instructor?.id}
                                                        >
                                                            {
                                                                instructor?.fullName
                                                            }
                                                        </AdvisorItem>
                                                    );
                                                }
                                            )}
                                        </AdvisorList>
                                    </Advisor>
                                </ContentInforTextMain>
                            </Info>
                            <SlideWrapper>
                                <Slide images={product?.images} />
                            </SlideWrapper>
                        </ProductItem>
                    );
                })}
            </ProductList>
        </Wrapper>
    );
};

export default ProductListView;
