
import './App.css';
import { 
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import PaginaNoticias from './Pages/PaginaBuscador';
import PaginaDetalle from './Pages/PaginaDetalle';



const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaNoticias/>,
  },
  {
    path: "/:id",
    element: <PaginaDetalle/>,
  },
  
  
  
]);

function App() {
  return (
    <div className="App">
         <RouterProvider router={router} />
    </div>
  );
}


export default App;


