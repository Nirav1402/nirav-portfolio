import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

const Journey = () => (
	<section className="section section-tinted" id="journey">
		<Container>
			<SectionTitle eyebrow="06 / Journey" title="Learning by shipping." />
			<div className="timeline">
				<article><p className="timeline-date">Nov 2025</p><div><h3>Web Development Intern</h3><p className="timeline-place">TechnoGuide Infosoft Pvt. Ltd.</p><p>Built an end-to-end Django and MySQL e-commerce application during a 21-day full-stack internship, delivering features daily against assigned requirements under mentor review.</p></div></article>
				<article><p className="timeline-date">2023 — May 2026</p><div><h3>B.Sc. Computer Applications & IT</h3><p className="timeline-place">Sardar Patel University, Vallabh Vidyanagar · CGPA 7.50</p><p>Developing strong foundations across programming, data structures, databases, and modern application development.</p></div></article>
			</div>
		</Container>
	</section>
);

export default Journey;
