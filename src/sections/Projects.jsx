import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import GlassCard from "../components/GlassCard";
import projects from "../data/projects";

const Projects = () => (
	<section className="section" id="projects">
		<Container>
			<SectionTitle eyebrow="05 / Selected work" title="Projects with a point of view." description="A selection of systems where the engineering decisions matter as much as the interface." />
			<div className="projects-grid">
				{projects.map((project) => (
					<GlassCard key={project.number} className="project-card">
						<div className="project-top"><span>{project.number}</span><span>{project.type}</span></div>
						<h3>{project.title}</h3>
						<p className="stack">{project.stack}</p>
						<p>{project.description}</p>
						<ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
					</GlassCard>
				))}
			</div>
		</Container>
	</section>
);

export default Projects;
