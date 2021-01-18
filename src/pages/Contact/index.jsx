// Import Local Components
import PremiumFeaturesBtn from './../../components/PremiumFeaturesBtn';
import Nav from './../../components/Nav';
import HeroArea from './../../components/HeroArea';
import SectionHeading from './../../components/SectionHeading';
import ContactInformation from './../../components/ContactInformation';
import ContactForm from './../../components/ContactForm';
import Footer from './../../components/Footer';

function ContactPage() {
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
						title='Contact Us'
						description='Duis autem vel eum iriure dolor in hendrerit in'
					/>
					{/* Section Heading */}
					<SectionHeading />
					{/* Contact Information Section */}
					<ContactInformation />
					{/* Contact Form Section */}
					<ContactForm />
				</article>
			</main>
			{/* FOOTER */}
			<Footer />
		</div>
	);
}

export default ContactPage;
