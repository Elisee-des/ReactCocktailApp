import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '@/pages/public/Home';
import Service from '@/pages/public/Service';
import Contact from '@/pages/public/Contact';
import Error from '@/_utils/Error'
import Layout from '@/pages/public/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={ <Error/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
