import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Layout() {
	return (
		<div className="flex">
			<Sidebar />
			<div className="flex-1 flex flex-col">
				<Navbar />
				<main className="flex-1 p-4">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
