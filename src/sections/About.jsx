import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

const About = () => {
	return (
		<section className="section" id="about">
			<Container>
				<div className="about-layout">
					<SectionTitle eyebrow="01 / About" title="A practical builder behind the models." />
					<div className="about-content">
						<p className="lead">My work sits at the intersection of applied AI and solid web engineering.</p>
						<p>I build systems that make language models more useful: ingesting messy source material, searching it intelligently, and grounding responses in content people can verify. Alongside AI work, I have built production-style Django applications with authentication, role-based access, databases, and responsive interfaces.</p>
						<dl className="facts">
							<div><dt>Education</dt><dd>B.Sc. Computer Applications & IT</dd></div>
							<div><dt>University</dt><dd>Sardar Patel University · CGPA 7.50</dd></div>
							<div><dt>Languages</dt><dd>English · Hindi · Gujarati</dd></div>
						</dl>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default About;
