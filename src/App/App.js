/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable consistent-return */
/* eslint-disable space-before-function-paren */
import React, {useEffect, useState}from 'react'
import './App.css';
import AppBar from '../components/AppBar';
import Container from '../components/Container';
import axios from "axios"
import FinalForm from 'components/FinalForm';

function App(props) {


  const [quote, setQuote] = useState();
  console.log(quote);
  useEffect(()=>{
    getQuote();
},[])
  const getQuote = () => {
    axios.get('http://quotes.rest/qod?category=inspire')
    .then(res=> {
        console.log(res);
        setQuote(res.data.contents.quotes[0].quote);
    })
}

  return (
    <div className='App'>
      <AppBar />
      {/* <FinalForm /> */}
      <Container text={`"${quote}"`}/>
    </div>
  );
}

export default App;
