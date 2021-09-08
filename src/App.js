import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import styled from '@emotion/styled';
import Form from './components/Form';
import Resume from './components/Resume';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: white;
  padding: 3rem;
`;

function App() {

  const [resume, setResume] = useState({
    quote: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  })

  const [loading, setLoading] = useState(false)

  const { quote, data } = resume

  return (
    <Container>
      <Header title='Car Quote' />
      <FormContainer>
        <Form setResume={setResume} setLoading={setLoading} />
        <Resume data={data} />
        { loading ?  <Spinner /> : <Result quote={quote}/>}
      </FormContainer>
    </Container>
  );
}

export default App;