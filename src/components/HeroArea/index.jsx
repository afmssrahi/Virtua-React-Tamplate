import appImg from './../../assets/img/app.png';
import arrowObjectDark from './../../assets/img/arrow-object-dark.svg';
import arrowObjectWhite from './../../assets/img/arrow-object-white.svg';

function HeroArea({
	extra,
	darkArrowObject,
	title,
	description,
	noBottomPadding,
}) {
	const headerClases = `${
		noBottomPadding ? 'section-top-padding' : 'section'
	} section background-image text-center hero-area-home`;
	return (
		<header className={headerClases}>
			<h1 className='text-extra-thin text-white text-s-size-30 text-m-size-40 text-size-50 text-line-height-1 margin-bottom-40 margin-top-130'>
				{title}
			</h1>
			<p className='text-white'>{description}</p>
			{extra && (
				<i className='slow icon-sli-arrow-down text-white margin-top-20 text-size-16'></i>
			)}
			{/* Image */}
			{extra && (
				<img
					className='margin-top-20 center'
					src={appImg}
					alt='App Image'
				/>
			)}

			{/* dark/white full width arrow object */}
			{darkArrowObject ? (
				<img
					className='arrow-object'
					src={arrowObjectDark}
					alt='Dark Arrow Object Dark Image'
				/>
			) : (
				<img
					class='arrow-object'
					src={arrowObjectWhite}
					alt='White Arrow Object Image'
				/>
			)}
		</header>
	);
}

export default HeroArea;
