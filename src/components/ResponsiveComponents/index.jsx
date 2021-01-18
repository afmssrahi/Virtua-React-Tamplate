// Imports Assets
import reponsiveImg_01 from './../../assets/img/responsive-01.png';
import reponsiveImg_02 from './../../assets/img/responsive-02.png';
import reponsiveImg_03 from './../../assets/img/responsive-03.png';
import reponsiveImg_04 from './../../assets/img/responsive-04.png';

// Import Local Components
import SectionHeading from './../SectionHeading';
import ResponsiveComponentsDetails from './ResponsiveComponentsDetails.jsx';

function ResponsiveComponents() {
	return (
		<section class='section background-white'>
			{/* Responsive Components Heading */}
			<SectionHeading />

			<div class='l-12 xl-7 center'>
				<div class='margin'>
					{/* Left Column */}
					<div class='s-12 m-12 l-4 text-right'>
						{/* Responsive Components Details */}
						<ResponsiveComponentsDetails />

						<div class='line'>
							<hr class='break background-primary break-small right margin-top-bottom-40' />
						</div>
						{/* Responsive Components Details */}
						<ResponsiveComponentsDetails />
					</div>

					{/* Middle Column (carousel) */}
					<div class='s-12 m-12 l-4'>
						<div class='carousel-default owl-carousel carousel-hide-arrows margin-m-top-bottom-50'>
							<div class='item'>
								<img src={reponsiveImg_01} />
							</div>
							<div class='item'>
								<img src={reponsiveImg_02} />
							</div>
							<div class='item'>
								<img src={reponsiveImg_03} />
							</div>
							<div class='item'>
								<img src={reponsiveImg_04} />
							</div>
						</div>
					</div>

					{/* Right Column */}
					<div class='s-12 m-12 l-4'>
						{/* Responsive Components Details */}
						<ResponsiveComponentsDetails />

						<div class='line'>
							<hr class='break background-primary break-small margin-top-bottom-40' />
						</div>
						{/* Responsive Components Details */}
						<ResponsiveComponentsDetails />
					</div>
				</div>
			</div>
		</section>
	);
}

export default ResponsiveComponents;
