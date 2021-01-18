// Import Local Components
import PremiumFeaturesBtn from './../../components/PremiumFeaturesBtn';
import Nav from './../../components/Nav';
import HeroArea from './../../components/HeroArea';
import ImageGallery from './../../components/ImageGallery';
import ContactCard from './../../components/ContactCard';
import Footer from './../../components/Footer';

function GalleryPage() {
	return (
		<div>
			{/* PREMIUM FEATURES BUTTON */}
			<PremiumFeaturesBtn />
			{/* HEADER */}
			<Nav />
			{/* MAIN */}
			<main role='main'>
				<article>
					{/* Hero Area */}
					<HeroArea title='Gallery' />
					{/* Image Gallery Section */}
					<ImageGallery />
				</article>
				<hr className='break' />
				{/* Contact Card Section */}
				<ContactCard />
			</main>
			{/* FOOTER */}
			<Footer />
		</div>
	);
}

export default GalleryPage;
