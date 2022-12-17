
import './App.css';
import { 
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import PaginaNoticias from './Pages/PaginaBuscador';




const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaNoticias/>,
  }
  
  
  
]);

function App() {
  return (
    <div className="App">
         <RouterProvider router={router} />
    </div>
  );
}


export default App;


