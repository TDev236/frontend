import './App.css';
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom"
import Layout from './components/Layout';
import Categorias from './components/Categorias';

const router  = createBrowserRouter([
  { path: "*", Component: Root },
]);

export default function App(){
  return <RouterProvider router={router} />
}

function Root() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>} />
      <Route path='/categorias' element={<Categorias/>}/>
    </Routes>
  );
}

 