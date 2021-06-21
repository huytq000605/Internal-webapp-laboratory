import React from 'react';
import { Route } from 'react-router-dom';
import { PageWrapper } from 'elements/Page';
import SEO from 'common/SEO';
import { Enum_Products_Type, useProductsQuery } from 'generated/graphql';
import Loading from 'shared/loading/Loading';
import { ProductsContainer } from './Products.styled';
import MenuProducts from './Menu';
import ProductListView from './ProductListView';

const ProductPage: React.FC = () => {
    const { data, loading } = useProductsQuery({
        variables: { type: Enum_Products_Type.Datn },
    });
    if (loading) return <Loading />;
    return (
        <PageWrapper>
            <SEO title="Sản phẩm" />
            <ProductsContainer>
                <MenuProducts />
                <Route path="/san-pham/:type/:semester">
                    <ProductListView
                        navigationLink="/san-pham/DATN"
                        title="Danh sách sản phẩm"
                        loading={loading}
                        products={data?.products}
                    />
                </Route>
            </ProductsContainer>
        </PageWrapper>
    );
};

export default ProductPage;
