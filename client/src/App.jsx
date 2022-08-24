import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductForm from './components/ProductForm';
import ShoppingCart from './components/ShoppingCart';
// import SignInSide from './components/SignIn';
import SignInUp from './components/formsUsers/Index';
import Try from './components/Try';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Landin2 from './pages/Landin2';
import Page404 from './components/Pag404';

function App() {
	return (
		<>
			{/* {location.pathname !== '/' && <Navbar />} */}
			<Navbar />
			<Switch>
				<Route exact path='/' component={Landin2} />
				<Route exact path='/home' component={Home} />
				<Route exact path='/addproduct' component={ProductForm} />
				<Route exact path='/shop/shoppingCart' component={ShoppingCart} />
				{/* <Route exact path='/bases/signin' component={SignInSide} /> */}
				<Route exact path='/bases/try' component={Try} />
				<Route exact path='/user/auth' component={SignInUp} />
				<Route exact path='/:id' component={Detail} />
				<Route path='/' component={Page404} />
			</Switch>
			{/* <Footer /> */}
		</>
	);
}

export default App;
