import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <div>main home page</div>
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
