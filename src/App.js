import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PublicRouter from '@/pages/public/PublicRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<PublicRouter/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
