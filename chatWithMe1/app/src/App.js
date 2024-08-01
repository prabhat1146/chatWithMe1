
// import './App.css';
import './index.css'
import {Layout,Home} from './AllPages';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';

const router=createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<Layout/>}>
      <Route path=''  element={<Home/>}/>
      
      
    </Route>
))
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
