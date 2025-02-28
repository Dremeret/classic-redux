import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 10px;
  background-color: #f8f8f8;
`;

const Title = styled.h3`
  margin: 10px 0;
  font-size: 1.4rem;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #ff5e62;
  margin-bottom: 10px;
`;

const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  background: ${props => (props.primary ? '#4caf50' : '#f44336')};
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.9rem;
  }
`;

const Count = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <Image
        src={product.image}
        alt={product.name}
        onError={e => (e.target.src = 'https://via.placeholder.com/300')}
      />
      <Title>{product.name}</Title>
      <Description>{product.description}</Description>
      <Price>{product.price} $</Price>
      <CounterContainer>
        <Button onClick={() => dispatch(decrement(product.id))}>-</Button>
        <Count>{product.quantity}</Count>
        <Button onClick={() => dispatch(increment(product.id))}>+</Button>
      </CounterContainer>
    </Card>
  );
};

export default ProductCard;
