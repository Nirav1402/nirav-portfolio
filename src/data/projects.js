const projects = [
	{
		number: "01",
		title: "Multi-Source RAG System",
		type: "AI / Machine Learning",
		stack: "Python | LangChain | Chroma | FastAPI",
		description:
			"A grounded question-answering system that ingests PDF, DOCX, TXT, image, and web sources, then connects answers back to the real source content.",
		details: [
			"Compared dense, hybrid, multi-query, and reranked retrieval strategies.",
			"Tuned chunking and embedding settings against a small evaluation set.",
		],
	},
	{
		number: "02",
		title: "AI-First CRM System",
		type: "HCP Module",
		stack: "React | Redux | FastAPI | LangGraph | OpenAI",
		description:
			"A compliant interaction workspace for healthcare field reps, combining structured form entry with conversational AI logging and summarization.",
		details: [
			"Built the Log Interaction Screen for structured and natural language workflows.",
			"Architected MySQL/Postgres data flows for accurate CRM analytics.",
		],
	},
	{
		number: "03",
		title: "FastFood / Gym Management System",
		type: "In progress",
		stack: "Python | Django | PostgreSQL",
		description:
			"A role-based management system with dedicated experiences for administrators, trainers, and members.",
		details: [
			"Added custom profiles, access-control decorators, and role-aware redirects.",
			"Tracks membership type, join date, and active status in member records.",
		],
	},
];

export default projects;
