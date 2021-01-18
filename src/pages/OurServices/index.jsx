// Import Local Components
import PremiumFeaturesBtn from './../../components/PremiumFeaturesBtn';
import Nav from './../../components/Nav';
import HeroArea from './../../components/HeroArea';
import OurServicesArticals from './../../components/OurServicesArticals';
import SatisfiedClients from './../../components/SatisfiedClients';
import ContactCard from './../../components/ContactCard';
import Footer from './../../components/Footer';

function OurServicesPage() {
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
					<HeroArea
						title='Our Services'
						description='Duis autem vel eum iriure dolor in hendrerit in'
					/>
					{/* Our Services Articals Section */}
					<OurServicesArticals />
				</article>
				{/* Satisfied Clients Section */}
				<SatisfiedClients />
				{/* Contact Card Section */}
				<ContactCard />
			</main>
			{/* FOOTER */}
			<Footer />
		</div>
	);
}

export default OurServicesPage;
