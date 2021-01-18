import googlePlay from './../../assets/img/google-play.svg';
import appStore from './../../assets/img/google-play.svg';

function AppDwonload() {
	return (
		<section class='section-small-padding background-dark text-center'>
			<div class='line'>
				{/* App Dwonload Heading */}
				<h2 class='text-white text-size-50 text-m-size-40 margin-bottom-20'>
					Get <b>Free Version</b>
				</h2>
				<div class='m-10 l-6 xl-4 center'>
					<div class='margin'>
						<a class='s-12 m-6 margin-s-bottom' href='/'>
							<img
								class='full-img right'
								src={googlePlay}
								alt='Google Play Image'
							/>
						</a>
						<a class='s-12 m-6' href='/'>
							<img
								class='full-img'
								src={appStore}
								alt='App Store Image'
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AppDwonload;
