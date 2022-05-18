import Landing from './pages/Landing';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Browse from './pages/Browse';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/signin' element={<SignIn />} />
				<Route path='/browse' element={<Browse />} />
			</Routes>
		</Router>
	);
}

export default App;