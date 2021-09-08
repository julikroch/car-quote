import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import styled from '@emotion/styled';
import Form from './components/Form';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: white;
  padding: 3rem;
`;

function App() {

  const [resume, setResume] = useState({})

  return (
    <Container>
      <Header title="Car Quote" />
      <FormContainer>
        <Form setResume={setResume}/>
      </FormContainer>
    </Container>
  );
}

export default App;