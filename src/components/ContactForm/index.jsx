function ContactForm() {
	return (
		<section class='section background-dark'>
			<div class='s-12 m-12 l-4 center'>
				<h3 class='text-size-30 margin-bottom-40 text-center'>
					<b>Contact Form</b>
				</h3>
				<form
					class='customform text-white'
					method='post'
					enctype='multipart/form-data'
				>
					<div class='line'>
						<div class='margin'>
							<div class='s-12 m-12 l-6'>
								<input
									name='email'
									class='required email'
									placeholder='Your e-mail'
									title='Your e-mail'
									type='text'
								/>
							</div>
							<div class='s-12 m-12 l-6'>
								<input
									name='name'
									class='name'
									placeholder='Your name'
									title='Your name'
									type='text'
								/>
							</div>
						</div>
					</div>

					<div class='line'>
						<div class='s-12'>
							<input
								name='subject'
								class='required subject'
								placeholder='Subject'
								title='Subject'
								type='text'
							/>
						</div>
						<div class='s-12'>
							<textarea
								name='message'
								class='required message'
								placeholder='Your message'
								rows='3'
							></textarea>
						</div>
						<div class='s-12'>
							<button
								class='button border-radius text-white background-primary'
								type='submit'
							>
								Submit Button
							</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
}

export default ContactForm;
