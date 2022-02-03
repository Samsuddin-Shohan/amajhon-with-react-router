import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div >
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' >
            <Shop></Shop>
          </Route>
          <Route exact path='/shop' >
            <Shop></Shop>
          </Route>
          <Route exact path='/review' >
            <Review></Review>
          </Route>
          <Route exact path='/inventory' >
            <Inventory></Inventory>
          </Route>
          <Route exact path='/placeorder' >
            <PlaceOrder></PlaceOrder>
        </Route>

        </Switch>
     
      </Router>

     
    </div>
  );
}

export default App;
