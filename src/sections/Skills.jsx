import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

const skillGroups = [
	["AI / ML", "Python", "LLM API integration", "RAG", "LangChain","LangGraph", "Vector databases", "Embeddings", "Prompt engineering"],
	["Backend & Data", "Django MVT / ORM", "FastAPI", "REST APIs", "MySQL", "PostgreSQL", "SQL"],
	["Frontend", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive design"],
	["Engineering", "Data Structures", "Algorithms", "Authentication", "Access control", "REST architecture"],
];

const Skills = () => (
	<section className="section section-tinted" id="skills">
		<Container>
			<SectionTitle eyebrow="04 / Capabilities" title="Tools I use to turn ideas into working systems." />
			<div className="skills-grid">
				{skillGroups.map(([name, ...skills]) => (
					<div className="skill-group" key={name}>
						<h3>{name}</h3>
						<ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
					</div>
				))}
			</div>
		</Container>
	</section>
);

export default Skills;
