// Import Local Components
import SectionHeading from './../SectionHeading';
import Client from './Client';

function SatisfiedClients() {
	return (
		<section className='section background-dark'>
			{/* Section Heading */}
			<SectionHeading />
			<div class='line'>
				<div class='carousel-default owl-carousel carousel-wide-arrows'>
					{/* Client */}
					<Client />
					{/* Client */}
					<Client />
					{/* Client */}
					<Client />
				</div>
			</div>
		</section>
	);
}

export default SatisfiedClients;
