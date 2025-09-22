import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts";

export default function Navbar() {
	const { isLoggedIn, user, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	return (
		<div className="navbar bg-base-100 shadow-sm">
			<div className="navbar-start">
				<Link to="/" className="btn btn-ghost text-xl">
					daisyUI
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>
					<li>
						<details>
							<summary>Parent</summary>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				{isLoggedIn ? (
					<button onClick={handleLogout} className="btn">
						Logout ({user?.name})
					</button>
				) : (
					<Link to="/login" className="btn">
						Login
					</Link>
				)}
			</div>
		</div>
	);
}
