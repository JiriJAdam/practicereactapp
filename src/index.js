import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './Timer.js'
import Book from './Book.js'
import Button from './Button.js'
import MyInput from './MyInput.js'
//import App from './App';
import reportWebVitals from './reportWebVitals';

function Welcome() {
  return <h1>Hello from React!</h1>
}

function Cya(props) {
  return <h1>C ya, from {props.someName} {props.age} {props.galaxy}</h1>
}

function Person(props) {
  console.log("the person props are ", props)
  return <div>My name is {props.name}</div>
}

const BookList = () => {
  return (
    <ul>
      <Book title="Think and Grow Rich" author="Naploeon Hill" price="20" />{" "}
      <Book title="The Hunger Games" author="Suzanne Collins" price="10" />
    </ul>
  );
};

const HelloMessage = (props) => <div>Hello {props.name}</div>;

ReactDOM.render(
  <div>
  <Welcome />
    <Welcome />
    <Person name="Crypto Jiri"/>
    <HelloMessage name="Jiri"/>
    <Timer />
    <BookList />
    <Button buttonText="Click me NOW" />
    <MyInput />
 

  <Cya someName="CoinFlip" age="20" galaxy="Avengers" />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
