import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CounterExample from './Components/2_ClassCounterExample';
import MyBurger from './Components/1_NameSpaced';
import FunctionalComponent from './Components/2_FunctionalComponent';

import reportWebVitals from './reportWebVitals';
import MyComponent from './Components/2_ClassComponent';
import PropsValidation from './Components/2_PropsValidation';
import ListExample from './Components/ListExample';
import Form from './Components/3_Form';
import ControlledForm from './Components/3_ControlledForm';
import UncontrolledForm from './Components/3_UncontrolledForm';
import Animation from './Components/3_Animation';
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
import { Provider } from 'react-redux';
import { store } from './store';
import ReduxForm from './Components/FormsyExample/ReduxForm';
import CCRedux from './Components/CCRedux';
import Test from './Components/Session2';
import TodoList from './Components/3_AnimationEx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <Provider store={store}> */}

     {/* <CookiesProvider> */}
    {/* <App /> */}
     {/* <MyBurger/>  */}
    {/* <FunctionalComponent name ="Rooma" education="Masters"/> */}
    {/* <Test education="BE"  /> */}
     {/* <MyComponent name="Hello"/> */}
   
     {/* <PropsValidation propArray ="test"  /> */}
     {/* <ListExample/> */}
    {/* <CounterExample name="Rooma"/> */}
    {/* <Form/> */}
    {/* <ControlledForm/> */}
    {/* <UncontrolledForm/> */}
    {/* <Animation /> */}
    {/* <TodoList/> */}
    <FormsyForm/>
    {/* <ReduxForm/> */}
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
    {/* <CCCookieexample/> */}
    {/* <CCRedux/>
    </CookiesProvider>
    </Provider> */}

   </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
