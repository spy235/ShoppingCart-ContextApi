import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Rootlayout from './layout/Rootlayout';
import Products from './paages/Products';
import Cart from './paages/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout />,
    children:[{
      path: '/',
      element: <Products />,
    },
    {
      path: '/cart',
      element: <Cart />,
    },

    ]
  },
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
