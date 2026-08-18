const GlassCard = ({ children, className = "" }) => {
	return <article className={`classic-card ${className}`}>{children}</article>;
};

export default GlassCard;
