import './App.css';
import { RouterProvider } from 'react-router-dom'
import { routes } from './routerse/Routes/Routes';


function App() {
  return (
    <div className='container mx-auto'>
          <RouterProvider router={routes}></RouterProvider> 
    </div>
  );
}

export default App;
