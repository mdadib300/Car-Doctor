import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import SignUp from './components/SignUp/SignUp';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path: '/*',
          element: <NotFound />
        }
      ]
    }
  ])

  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
