import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CounterExample from './Components/CounterExample';
import MyBurger from './Components/NameSpaced';
import FunctionalComponent from './Components/FunctionalComponent';

import reportWebVitals from './reportWebVitals';
import MyComponent from './Components/MyComponent';
import PropsValidation from './Components/PropsValidation';
import ListExample from './Components/ListExample';
import Form from './Components/Form';
import ControlledForm from './Components/ControlledForm';
import UncontrolledForm from './Components/UncontrolledForm';
import Animation from './Components/Animation';
import FormsyForm from './Components/FormsyExample/FormsyForm';
import 'bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyBurger/> */}
    {/* <FunctionalComponent name ="Rooma" education="Masters"/> */}
     {/* <MyComponent name="Hello"/> */}
     {/* <PropsValidation /> */}
     {/* <ListExample/> */}
    {/* <CounterExample name="Rooma"/> */}
    {/* <Form/> */}
    {/* <ControlledForm/> */}
    {/* <UncontrolledForm/> */}
    {/* <Animation /> */}
    <FormsyForm/>


  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
