import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions";
import styled from "styled-components";

const CounterContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  border-radius: 10px;
  background: #282c34;
  color: white;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const CountText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 20px 0;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "#61dafb" : "#ff6b6b")};
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const Counter = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <CounterContainer>
      <h2>Redux Counter</h2>
      {products.map(product => (
        <div key={product.id}>
          <CountText>{product.name}: {product.quantity}</CountText>
          <Button primary onClick={() => dispatch(increment(product.id))}>+</Button>
          <Button onClick={() => dispatch(decrement(product.id))}>-</Button>
        </div>
      ))}
    </CounterContainer>
  );
};

export default Counter;
