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
import LifeCycle from './Components/LifeCycle';
import UseEffecthook from './Components/UseEffecthook';
import RoutingExample from './Components/RoutingExample/RoutingExample';
import Navigation from './Components/RoutingExample/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Greeting from './Components/RoutingExample/ConditionalRendering';
import EventBind from './Components/EventBind';
import EventBubbling from './Components/EventBubbling';
import Parent from './Components/Parent';
import Styled from './Components/CSS Styling/Styled';
import StyledComponent from './Components/CSS Styling/StyledComponent';
import { CookiesProvider } from "react-cookie";
import CookieExample from './Components/CookieExample';
import CCCookieexample from './Components/CCCookieexample';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
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
    {/* <FormsyForm/> */}
    {/* <LifeCycle favcol='pink'/> */}
    {/* <UseEffecthook/> */}
    {/* <BrowserRouter>

    <RoutingExample/>
    </BrowserRouter> */}
    {/* <Greeting isLoggedIn={true} /> */}
    {/* <EventBind/> */}
    {/* <EventBubbling/> */}
    {/* <Parent/> */}
    {/* <Styled/> */}
    {/* <StyledComponent/> */}
    {/* <CookieExample/> */}
    <CCCookieexample/>
    </CookiesProvider>

  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
