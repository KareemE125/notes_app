import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/Store';

import Home from './components/Home';
import About from './components/About';

import './App.css';

const APP_ROUTER = createBrowserRouter([
  {path: '/', element: <Home/>},
  {path: '/about', element: <About/>},
]);

function App() 
{


  return <Provider store={store}>
    <RouterProvider router={APP_ROUTER}/>

  </Provider>
  
 
}

export default App;

