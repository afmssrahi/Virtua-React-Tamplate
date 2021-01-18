import SectionHeading from './../SectionHeading';
import TemplateFeaturesDetails from './TemplateFeatuersDetails.jsx';

function TemplateFeatures() {
	return (
		<section class='section-top-padding background-white'>
			{/* Section Heading */}
			<SectionHeading />
			<div class='line'>
				<div class='margin2x'>
					{/* Template Features Details */}
					<TemplateFeaturesDetails />
					<TemplateFeaturesDetails />
					<TemplateFeaturesDetails />
					<TemplateFeaturesDetails />
					<TemplateFeaturesDetails />
					<TemplateFeaturesDetails />
				</div>
			</div>
		</section>
	);
}

export default TemplateFeatures;
