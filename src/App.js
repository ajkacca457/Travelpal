import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Singleroom from './pages/Singleroom';
import Singleservice from './pages/Singleservice';

function App() {
  return (
    <div className="App">

      <Home></Home>
      <Rooms></Rooms>
      <Singleroom></Singleroom>
      <Singleservice></Singleservice>
   
    </div>
  );
}

export default App;
