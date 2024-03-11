// import {Button} from 'antd'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <div
    // className='flex justify-center h-screen items-center flex-col bg-primary'
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </BrowserRouter>

      {/* <h1>Project Tracker</h1>
        <Button type="primary">Button</Button> */}
    </div>
  );
}

export default App;
