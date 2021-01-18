// Import Local Components
import Social from './Social';
import Copyright from './CopyRight';
import QuickLinks from './QuickLinks';

function Footer() {
	return (
		<footer>
			{/* Social */}
			<Social />
			{/* Main Footer */}
			<section className='section background-dark'>
				<div className='line'>
					<div className='margin2x'>
						{/* QuickLinks */}
						<QuickLinks />
						{/* QuickLinks */}
						<QuickLinks />
						{/* QuickLinks */}
						<QuickLinks />
						{/* QuickLinks */}
						<QuickLinks />
					</div>
				</div>
			</section>
			<div className='background-dark'>
				<div className='line'>
					<hr className='break margin-top-bottom-0 hr-footer' />
				</div>
			</div>
			{/* Copyright Section */}
			<Copyright />
		</footer>
	);
}

export default Footer;
