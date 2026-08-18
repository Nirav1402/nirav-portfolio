import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

const Contact = () => (
	<section className="section" id="contact">
		<Container>
			<div className="contact-layout">
				<SectionTitle eyebrow="07 / Contact" title="Have a problem worth solving?" description="Tell me what you are building. I am available for AI products, backend systems, and thoughtful full-stack work." />
				<div className="contact-links">
					<a href="mailto:niravacharya1402@gmail.com?subject=Freelance%20project%20inquiry"><span>Email</span>niravacharya1402@gmail.com</a>
					<a href="https://wa.me/918140944547?text=Hi%20Nirav%2C%20I%20would%20like%20to%20discuss%20a%20freelance%20project." target="_blank" rel="noreferrer"><span>WhatsApp</span>Message me directly</a>
					<a href="https://www.linkedin.com/in/Nirav" target="_blank" rel="noreferrer"><span>LinkedIn</span>View my profile</a>
					<a href="https://github.com/Nirav1402" target="_blank" rel="noreferrer"><span>GitHub</span>View my repositories</a>
					<a href="tel:+918140944547"><span>Phone</span>+91 81409 44547</a>
				</div>
			</div>
		</Container>
	</section>
);

export default Contact;
