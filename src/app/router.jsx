import { Router } from '@reach/router';

// Custom Components
import HomePage from './../pages/Home';
import AboutUsPage from './../pages/AboutUs';
import OurServicesPage from './../pages/OurServices';
import GalleryPage from './../pages/Gallery';
import ContactPage from './../pages/Contact';

function AppRouter() {
	return (
		<Router>
			<HomePage path='/' />
			<AboutUsPage path='/about' />
			<OurServicesPage path='/services' />
			<GalleryPage path='/gallery' />
			<ContactPage path='/contact' />
		</Router>
	);
}

export default AppRouter;
