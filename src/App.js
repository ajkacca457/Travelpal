import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Services from './pages/Services';
import Singleroom from './pages/Singleroom';
import Singleservice from './pages/Singleservice';
import Error from './pages/Error';
import Nav from './componets/Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <Rooms></Rooms>
      <Services></Services>
      <Singleroom></Singleroom>
      <Singleservice></Singleservice>
      <Error></Error>
   
    </div>
  );
}

export default App;
