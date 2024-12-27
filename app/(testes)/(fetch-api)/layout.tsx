export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<h2>Um contexto pontual</h2>
			{children}
		</div>
		);
}