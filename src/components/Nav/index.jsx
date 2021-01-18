import logo from './../../assets/img/logo.svg';
import logoDark from './../../assets/img/logo-dark.svg';

function Nav() {
	return (
		<header role='banner' className='position-absolute'>
			{/* Top Navigation */}
			<nav className='background-transparent background-primary-dott full-width sticky'>
				<div className='top-nav'>
					{/* mobile version logo */}
					<div className='logo hide-l hide-xl hide-xxl'>
						<a href='/' className='logo'>
							{/* Logo White Version */}
							<img className='logo-white' src={logo} alt='' />
							{/* Logo Dark Version */}
							<img className='logo-dark' src={logoDark} alt='' />
						</a>
					</div>
					<p className='nav-text'></p>

					{/* left menu items */}
					<div className='top-nav left-menu'>
						<ul className='right top-ul chevron'>
							<li>
								<a href='/'>Home</a>
							</li>
							<li>
								<a href='about'>About Us</a>
							</li>
							<li>
								<a href='services'>Our Services</a>
							</li>
						</ul>
					</div>

					{/* logo */}
					<ul className='logo-menu'>
						<a href='/l' className='logo'>
							{/* Logo White Version */}
							<img className='logo-white' src={logo} alt='' />
							{/* Logo Dark Version */}
							<img className='logo-dark' src={logoDark} alt='' />
						</a>
					</ul>

					{/* right menu items */}
					<div className='top-nav right-menu'>
						<ul className='top-ul chevron'>
							<li>
								<a href='#'>Products</a>
								<ul>
									<li>
										<a href='#'>Product 1</a>
									</li>
									<li>
										<a href='#'>Product 2</a>
									</li>
								</ul>
							</li>
							<li>
								<a href='gallery'>Gallery</a>
							</li>
							<li>
								<a href='contact'>Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Nav;
