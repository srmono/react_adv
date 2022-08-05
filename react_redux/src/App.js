import './App.css';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HookCake from './components/HookCake';
import CookieContainer from './components/CookieContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <UserContainer />

        {/* <HookCake />
        <NewCakeContainer />

        <CakeContainer />

        <CookieContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
