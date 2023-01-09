import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './components/Main/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    }
  ])

  return (
    <div className="App max-w-[1440px] mx-auto border">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
