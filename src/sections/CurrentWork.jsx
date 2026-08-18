import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import GlassCard from "../components/GlassCard";

const CurrentWork = () => (
  <section className="section section-tinted" id="current-work">
    <Container>
      <div className="current-work-layout">
        <SectionTitle
          eyebrow="03 / Current work"
          title="Currently building for The SKY Gym."
          description="A live project where I am applying my backend and full-stack experience to a practical product for a real business."
        />
        <GlassCard className="current-work-card">
          <div className="project-top"><span>In progress</span><span>Live project</span></div>
          <h3>The SKY Gym</h3>
          <p>Working on a focused digital experience for The SKY Gym, with an emphasis on useful workflows, clear information, and dependable software.</p>
          <div className="current-work-points">
            <span>Product development</span>
            <span>Backend workflows</span>
            <span>Full-stack implementation</span>
          </div>
          <a className="service-link" href="#contact">Discuss the project <span aria-hidden="true">-&gt;</span></a>
        </GlassCard>
      </div>
    </Container>
  </section>
);

export default CurrentWork;
