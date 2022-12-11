import { RouterProvider } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import './App.css';
import router from './routers/Routes';


function App() {
  return (
    <div className="App">
     <RouterProvider router={router}>
     </RouterProvider> 
     <Toaster />
    </div>
  );
}

export default App;
