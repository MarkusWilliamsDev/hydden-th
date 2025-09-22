import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex">
			<Sidebar />
			<div className="flex-1 flex flex-col">
				<Navbar />
				<main className="flex-1 p-4">{children}</main>
			</div>
		</div>
	);
}
