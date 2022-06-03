import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { publicRoutes } from './routes/publicRoutes';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoutes.map(({ path, Component }, index) =>
              <Route key={index} path={path} element={<Component />} />
            )
          }
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
