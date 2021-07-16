import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Services from './pages/Services';
import Singleroom from './pages/Singleroom';
import Singleservice from './pages/Singleservice';
import Error from './pages/Error';
import Navigation from './componets/Nav';
import Footer from './componets/Footer';
import { Router} from "@reach/router"

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Router>
      <Home path="/" />
      <Rooms path="/rooms"/>
      <Services path="/services"/>
      <Singleroom path="/rooms/:roomid"/>
      <Singleservice path="/services/serviceid" />
      <Error path="/error"/>
      </Router>

      <Footer></Footer>
   
    </div>
  );
}

export default App;
