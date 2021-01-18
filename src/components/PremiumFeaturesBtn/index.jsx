import PremiumFeature from './../../assets/img/premium-features.png';

function PremiumFeaturesBtn() {
	return (
		<a
			target='_blank'
			className='hide-s'
			href='../template/virtua-premium-responsive-business-template/'
		>
			<img src={PremiumFeature} alt='Premium Features Image' />
		</a>
	);
}

export default PremiumFeaturesBtn;
