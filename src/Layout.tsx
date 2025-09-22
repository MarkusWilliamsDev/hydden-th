import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="drawer">
			<div className="drawer-content flex flex-col">
				<Navbar />
				<div className="flex-1 lg:ml-64">
					<main className="p-4">{children}</main>
				</div>
			</div>
			<Sidebar />
		</div>
	);
}
