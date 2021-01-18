// Import Local Components
import PremiumFeaturesBtn from './../../components/PremiumFeaturesBtn';
import Nav from './../../components/Nav';
import HeroArea from './../../components/HeroArea';
import AppDwonload from './../../components/AppDwonload';
import TemplateFeatures from './../../components/TemplateFetures';
import ResponsiveComponents from './../../components/ResponsiveComponents';
import AlwaysNearby from './../../components/AlwaysNearby';
import Sponsors from './../../components/Sponsors';
import Footer from './../../components/Footer';

function HomePage() {
	return (
		<div>
			{/* PREMIUM FEATURES BUTTON */}
			<PremiumFeaturesBtn />
			{/* HEADER */}
			<Nav />
			{/* MAIN  */}
			<main role='main'>
				{/* Hero Area */}
				<HeroArea
					extra
					darkArrowObject
					title='Save your Time and Keep Calm'
					description='Duis autem vel eum iriure dolor in hendrerit in vulputate velit
					esse molestie consequat, vel illum dolore eu feugiat nulla facilisis'
					noBottomPadding
				/>
				{/* App Download Section */}
				<AppDwonload />
				{/* Template Features Section */}
				<TemplateFeatures />
				{/* Responsive Components Section */}
				<ResponsiveComponents />
				{/* Always Nearby Section  */}
				<AlwaysNearby />
				{/* Sponsors Section */}
				<Sponsors />
				{/* Before Footer App Download Section */}
				<AppDwonload />
			</main>
			{/* FOOTER */}
			<Footer />
		</div>
	);
}

export default HomePage;
