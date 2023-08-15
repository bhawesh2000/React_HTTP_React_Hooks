import logo from './logo.svg';
import './App.css';
import PostLists from './Components/PostLists';
import FormPost from './Components/FormPost';
import HooksCounter from './Components/HooksCounter';
import HooksComponentTwo from './Components/HooksComponentTwo';
import HooksComponentThree from './Components/HooksComponentThree';
import HooksComponentFour from './Components/HooksComponentFour';
import UseEffectOne from './Components/useEffectOne';
import HookMouse from './Components/HookMouse';
import MouseContainer from './Components/MouseContainer';
import DataFetching from './Components/DataFetching';
import ComponentC from './Components/ComponentC';
import React from 'react';
import CounterTwo from './Components/CounterTwo';

export const UserContext=React.createContext()
export const ChannelContext=React.createContext()
//now provide these context with value in jsx

function App() {
  return (
    <div className="App">
     {/* <PostLists /> */}
     {/* <FormPost /> */}
     {/* <HooksCounter /> */}
     {/* <HooksComponentTwo /> */}
     {/* <HooksComponentThree /> */}
     {/* <HooksComponentFour /> */}
     {/* <UseEffectOne /> */}
     {/* <HookMouse /> */}
     {/* <MouseContainer /> */}
     {/* <DataFetching /> */}

    {/*  <UserContext.Provider value={'Bhawesh'}>
      <ChannelContext.Provider value={'Developer'}>
        <ComponentC />
      </ChannelContext.Provider>
     </UserContext.Provider> */}

     <CounterTwo />
    </div>
  );
}

export default App;
