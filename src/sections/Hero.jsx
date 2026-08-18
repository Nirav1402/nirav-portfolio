import Container from "../components/Container";

const Hero = () => {
	return (
		<section className="hero" id="home">
			<Container>
				<div className="hero-grid">
					<div>
						<p className="eyebrow">AI/ML Developer · Available for freelance work</p>
						<h1>Building useful intelligence with <em>grounded</em> software.</h1>
						<p className="hero-copy">
							I am Nirav H. Acharya, a Python developer focused on LLM-powered applications,
							retrieval systems, and dependable full-stack products.
						</p>
						<p className="availability"><span aria-hidden="true" /> Available for freelance projects</p>
						<div className="hero-actions">
							<a className="button button-primary" href="#projects">View my work</a>
							<a className="button button-secondary" href="#contact">Start a conversation</a>
						</div>
						<div className="hero-socials">
							<a href="https://www.linkedin.com/in/nirav-acharya-5a280a395?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" aria-label="View Nirav on LinkedIn">LinkedIn</a>
							<a href="https://github.com/Nirav1402" target="_blank" rel="noreferrer" aria-label="View Nirav on GitHub">GitHub</a>
							<a href="https://wa.me/918140944547?text=Hi%20Nirav%2C%20I%20would%20like%20to%20discuss%20a%20freelance%20project." target="_blank" rel="noreferrer">WhatsApp</a>
							<a href="mailto:niravacharya1402@gmail.com">Email</a>
						</div>
					</div>
					<aside className="hero-note">
						<span className="note-mark">NHA</span>
						<p>Currently deepening applied machine-learning skills.</p>
						<span className="note-line" />
						<p className="note-small">Python · LLMs · Django · REST APIs</p>
					</aside>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
