export default function Sidebar() {
	return (
		<aside className="w-64 min-h-screen bg-base-200 hidden lg:block fixed left-0 top-0 z-10">
			<div className="p-4">
				<h2 className="text-xl font-bold mb-6">Menu</h2>
				<ul className="menu">
					<li>
						<a
							href="/dashboard"
							className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-300"
						>
							Dashboard
						</a>
					</li>
					<li>
						<a
							href="/profile"
							className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-300"
						>
							Profile
						</a>
					</li>
					<li>
						<a
							href="/settings"
							className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-300"
						>
							Settings
						</a>
					</li>
				</ul>
			</div>
		</aside>
	);
}
