import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import CardPage from './components/CardPage';

const App = () => {
  const [cardArray, setCardArray] = React.useState([{publisher: '', text: '', media: '', date: ''}])


  return (
    <div className="App">
      <CardPage cardArray={cardArray} setCardArray={setCardArray}/>
    </div>
  )
}

export default App;
