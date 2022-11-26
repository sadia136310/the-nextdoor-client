import { RouterProvider } from 'react-router-dom';
import './App.css';
// import router from './Routes/Routes/Routes';
import toast, { Toaster } from 'react-hot-toast';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
