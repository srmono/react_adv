import './App.css';
import React from 'react';
import ComponentC from './components/ComponentC';
import DisplayList from './components/DisplayList';
import EventContainer from './components/EventContainer';
import FetchPosts from './components/FetchPosts';
import FullName from './components/FullName';
import Header from './components/Header';
import HookCounter from './components/HookCounter';
import MousePos from './components/MousePos';
import UpdateTitle from './components/UpdateTitle';
import CountReducer from './components/CountReducer';
import ParentComponent from './components/ParentComponent';
import Title from './components/Title';
import Button from './components/Button';
import Count from './components/Count';
import UseMemoCounter from './components/UseMemoCounter';
import FocusInput from './components/FocusInput';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import LayoutEffectTopic from './components/LayoutEffectTopic';

export const UserContext = React.createContext();
export const AccessContext = React.createContext();

function App() {

  return (
    <div className="App">

    <LayoutEffectTopic />

    {/* <DocTitleOne />
    <DocTitleTwo />  */}
      {/* <FocusInput /> */}

      {/* <UseMemoCounter /> */}

      {/* <ParentComponent /> */}
      {/* <Title></Title>  */}

      {/* <CountReducer /> */}
      {/* <UserContext.Provider value={'Venkat'}>
        <AccessContext.Provider value={"access"}>
          <ComponentC />
        </AccessContext.Provider>
      </UserContext.Provider> */}

      {/* <FetchPosts /> */}
      {/* <EventContainer /> */}
      {/* <MousePos /> */}
      {/* <UpdateTitle /> */}
      {/* <DisplayList /> */}
      {/* <FullName /> */}
      {/* <HookCounter /> */}
    </div>
  );
}

export default App;
