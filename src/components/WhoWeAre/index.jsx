// Import Assets
import whoWeAreImg from './../../assets/img/img-01.jpg';

// Import Local Components
import SectionHeading from './../SectionHeading';
import WhoWeAreDetails from './WhoWeAreDetails';

function WhoWeAre() {
	return (
		<section class='section background-white'>
			{/* Section Heading */}
			<SectionHeading />
			<div class='line'>
				<div class='margin2x'>
					<div class='m-12 l-6 margin-m-bottom-30'>
						<img src={whoWeAreImg} alt='Who We Are Image' />
					</div>
					<div class='m-12 l-6'>
						{/* Who We Are Details */}
						<WhoWeAreDetails />
						{/* Who We Are Details */}
						<WhoWeAreDetails />
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhoWeAre;
