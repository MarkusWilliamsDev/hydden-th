import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts";

const mockNotifications = [
	{
		id: 1,
		message: "Welcome to the platform!",
		time: "2 min ago",
		read: false,
	},
	{
		id: 2,
		message: "Your profile has been updated",
		time: "1 hour ago",
		read: false,
	},
	{ id: 3, message: "New feature available", time: "3 hours ago", read: true },
	{
		id: 4,
		message: "System maintenance scheduled",
		time: "1 day ago",
		read: true,
	},
];

export default function Navbar() {
	const { isLoggedIn, user, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	const unreadCount = mockNotifications.filter((n) => !n.read).length;

	return (
		<div className="navbar bg-base-100 shadow-sm">
			<div className="navbar-start">
				<Link to="/" className="btn btn-ghost text-xl">
					daisyUI
				</Link>
			</div>
			<div className="navbar-end">
				{isLoggedIn ? (
					<div className="flex items-center gap-2">
						<div className="dropdown dropdown-end">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle"
							>
								<div className="indicator">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										className="size-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
										/>
									</svg>

									{unreadCount > 0 && (
										<span className="badge badge-xs badge-primary indicator-item">
											{unreadCount}
										</span>
									)}
								</div>
							</div>
							<div
								tabIndex={0}
								className="dropdown-content menu bg-base-100 rounded-box z-[1] w-80 p-2 shadow-lg border"
							>
								<div className="p-3 border-b">
									<h3 className="font-semibold">Notifications</h3>
								</div>
								<div className="max-h-64 overflow-y-auto">
									{mockNotifications.map((notification) => (
										<div
											key={notification.id}
											className={`p-3 hover:bg-base-200 border-b last:border-b-0 ${
												!notification.read ? "bg-base-50" : ""
											}`}
										>
											<div className="flex items-start gap-2">
												<div
													className={`w-2 h-2 rounded-full mt-2 ${
														!notification.read ? "bg-primary" : "bg-base-300"
													}`}
												></div>
												<div className="flex-1">
													<p className="text-sm">{notification.message}</p>
													<p className="text-xs text-base-content/60 mt-1">
														{notification.time}
													</p>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						<button onClick={handleLogout} className="btn">
							Logout ({user?.name})
						</button>
					</div>
				) : (
					<Link to="/login" className="btn">
						Login
					</Link>
				)}
			</div>
		</div>
	);
}
