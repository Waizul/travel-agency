import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Booking from './pages/Booking/Booking';
import Footer from './pages/Footer/Footer';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import MyBooking from './pages/MyBooking/MyBooking';
import Login from './pages/Login/Login';
import ProvideAuth from './pages/context/ProvideAuth';
import Admin from './pages/Admin/Admin';

function App() {
	return (
		<ProvideAuth>
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path='/'>
						<Home></Home>
					</Route>
					<Route path='/home'>
						<Home></Home>
					</Route>
					<Route path='/login'>
						<Login></Login>
					</Route>
					<PrivateRoute exact path='/booking/:id'>
						<Booking></Booking>
					</PrivateRoute>
					<PrivateRoute exact path='/myBooking'>
						<MyBooking></MyBooking>
					</PrivateRoute>
					<PrivateRoute exact path='/admin'>
						<Admin></Admin>
					</PrivateRoute>
				</Switch>
				<Footer></Footer>
			</Router>
		</ProvideAuth>
	);
}
export default App;
