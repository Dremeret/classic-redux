import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  width: 100%;
`;

const ProductList = () => {
  const products = useSelector(state => state.products); 

  return (
    <ListContainer>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ListContainer>
  );
};

export default ProductList;
