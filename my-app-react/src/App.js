
import './App.css';
import { 
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import BuscadorNoticias from './Pages/PaginaBuscador';


const router = createBrowserRouter([
  {
    path: "/",
    element: <BuscadorNoticias/>,
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


