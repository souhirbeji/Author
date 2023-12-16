import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import DisplayAll from './Components/DisplayAll';
import Author from './Components/Author';
import EditAuthor from './Components/EditAuthor';
function App() {
  return (
    <div className="App">
      <h1>Favourite Authors</h1>
      <Routes>
      <Route path ="/" element= {<DisplayAll/>}/>
      <Route path ="/new" element= {<Author/>}/>
      <Route path="/edit/:id" element={<EditAuthor />} />


      </Routes>
    </div>
  );
}

export default App;
