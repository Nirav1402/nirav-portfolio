import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import GlassCard from "../components/GlassCard";

const services = [
  {
    number: "01",
    title: "RAG & LLM Applications",
    description: "Grounded AI tools that turn PDFs, documents, images, and web sources into reliable, searchable answers.",
    deliverables: "Ingestion · Embeddings · Chroma · LangChain · Evaluation",
  },
  {
    number: "02",
    title: "Python Backend Systems",
    description: "Well-structured APIs and business logic for products that need a dependable server-side foundation.",
    deliverables: "Django · FastAPI · REST APIs · SQL · Authentication",
  },
  {
    number: "03",
    title: "Full-Stack Web Apps",
    description: "Responsive web applications from database design through the user interface, with roles and workflows built in.",
    deliverables: "React · JavaScript · Django · PostgreSQL · MySQL",
  },
  {
    number: "04",
    title: "AI-First Product Features",
    description: "Conversational workflows that help teams capture, summarize, and act on information more efficiently.",
    deliverables: "LangGraph · OpenAI · CRM workflows · Data modeling",
  },
];

const Services = () => (
  <section className="section" id="services">
    <Container>
      <SectionTitle
        eyebrow="02 / Services"
        title="Useful software, built around your actual workflow."
        description="From a focused AI feature to a complete web application, I can help shape the technical path and build the working product."
      />
      <div className="services-grid">
        {services.map((service) => (
          <GlassCard key={service.number} className="service-card">
            <div className="service-number">{service.number}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-deliverables">{service.deliverables}</div>
            <a className="service-link" href="#contact">Discuss this service <span aria-hidden="true">-&gt;</span></a>
          </GlassCard>
        ))}
      </div>
    </Container>
  </section>
);

export default Services;
