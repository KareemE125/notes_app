import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import AppContextProvider from './context/AppContext';


const APP_ROUTER = createBrowserRouter([
  {path: '/', element: <Home/>},
  {path: '/about', element: <About/>},
]);

function App() {
  return <AppContextProvider>
    <RouterProvider router={APP_ROUTER}/>
  </AppContextProvider>
}

export default App;
