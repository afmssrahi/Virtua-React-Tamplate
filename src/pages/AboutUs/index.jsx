// Import Local Components
import PremiumFeaturesBtn from './../../components/PremiumFeaturesBtn';
import Nav from './../../components/Nav';
import HeroArea from './../../components/HeroArea';
import WhoWeAre from './../../components/WhoWeAre';
import Footer from './../../components/Footer';

function AboutUsPage() {
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
						title='About Us'
						description='Duis autem vel eum iriure dolor in hendrerit in'
					/>
					{/* Who We Are Section */}
					<WhoWeAre />
				</article>
			</main>
			{/* FOOTER */}
			<Footer />
		</div>
	);
}

export default AboutUsPage;
