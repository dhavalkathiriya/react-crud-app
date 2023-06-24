import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
      <Routes>
          <Route path='/create' element={<Create/>} />
          <Route path='/' element={<Read/>} />
          <Route path='/update' element={<Update/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;