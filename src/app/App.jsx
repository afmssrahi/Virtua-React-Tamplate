import { Helmet } from 'react-helmet';
import AppRouter from './router';

function App() {
	return (
		<div className='App'>
			<Helmet>
				<title>Virtua - New Amazing React Template</title>
				<link
					href='https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,700,900&amp;subset=latin-ext'
					rel='stylesheet'
				/>
				<script
					type='text/javascript'
					src='../assets/js/jquery-1.8.3.min.js'
				></script>
				<script
					type='text/javascript'
					src='../assets/js/jquery-ui.min.js'
				></script>
			</Helmet>
			<AppRouter />
		</div>
	);
}

export default App;
