import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MyProvider from './context/MyProvider';
import './App.css';
import Login from './pages/Login'

import RegisterProducts from './pages/RegisterProducts';

function App() {
  return (
        <MyProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ Login } />
              <Route exact path="/register" component={ RegisterProducts } />
            </Switch>
          </BrowserRouter>
        </MyProvider>
  );
}

export default App;
