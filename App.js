import './App.css';
import {Route, Routes} from 'react-router-dom';
import {SearchForm} from './components/SearchForm';
import {NotFound} from './views/NotFound'
import {OnePerson} from './components/OnePerson';
import {OnePlanet} from './components/OnePlanet';

const App = (props) => {

  return (
  <div className="align-items center text-center">
    <h1>Luke API-Walker</h1>
        <Routes>
          <Route path="/" element={<SearchForm/>}/>
          <Route path="/home/" element={<SearchForm/>}/>
          <Route path="/people/:id/" element={<OnePerson/>}/>
          <Route path="/planets/:id/" element={<OnePlanet/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
  </div>
  );
}
export default App;




