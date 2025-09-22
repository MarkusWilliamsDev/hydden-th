import { Link } from "react-router-dom";

export default function Sidebar() {
	return (
		<aside className="w-64 min-h-screen bg-base-200 hidden lg:block">
			<div className="p-4">
				<h2 className="text-xl font-bold mb-6">Menu</h2>
				<ul className="menu">
					<li>
						<Link
							to="/dashboard"
							className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-300"
						>
							Dashboard
						</Link>
					</li>
					<li>
						<Link
							to="/profile"
							className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-300"
						>
							Profile
						</Link>
					</li>
					<li>
						<Link
							to="/settings"
							className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-300"
						>
							Settings
						</Link>
					</li>
				</ul>
			</div>
		</aside>
	);
}
