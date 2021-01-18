// Import Assets
import img_o2 from './../../assets/img/img-02.jpg';
import startYourBusinessImg from './../../assets/img/start-your-business.svg';

function AlwaysNearby() {
	return (
		<section className='background-primary full-width'>
			<div className='m-12 l-6 xl-5 xxl-4'>
				<img className='full-img' src={img_o2} />
			</div>
			<div className='m-12 l-6 xl-7 xxl-8'>
				<div className='l-12 xl-11 xxl-8 padding-2x'>
					<h2 className='text-l-size-40 text-size-50 text-white'>
						Always <b>Nearby</b>
					</h2>
					<p className='margin-bottom'>
						Lorem ipsum dolor sit amet, consectetuer adipiscing
						elit, sed diam nonummy nibh euismod tincidunt ut laoreet
						dolore magna aliquam erat volutpat. Ut wisi enim ad
						minim veniam, quis nostrud exerci tation ullamcorper
						suscipit lobortis nisl ut aliquip.
					</p>
					{/* white Start your Business object img */}
					<img
						className='margin-left-20 margin-top-30 margin-bottom-60'
						src={startYourBusinessImg}
						alt=''
					/>
				</div>
			</div>
		</section>
	);
}

export default AlwaysNearby;
