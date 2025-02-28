import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #ff9966, #ff5e62);
  padding: 20px;
`;

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <ProductList />
      </AppContainer>
    </Provider>
  );
}

export default App;
