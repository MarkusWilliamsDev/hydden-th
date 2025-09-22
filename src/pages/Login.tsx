import React, { useState } from "react";
import { useAuth } from "../contexts";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const { login } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError("");

		try {
			const success = await login(email, password);
			if (success) {
				navigate("/");
			} else {
				setError("Invalid email or password");
			}
		} catch {
			setError("Login failed. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex justify-center items-center min-h-full py-8">
			<div className="w-full max-w-md">
				<div className="text-center mb-8">
					<h1 className="text-4xl font-bold">Login now!</h1>
					<p className="py-4 text-base-content/70">
						Welcome back! Please sign in to your account to continue.
					</p>
				</div>
				<div className="card bg-base-100 w-full shadow-2xl">
					<form className="card-body" onSubmit={handleSubmit}>
						<div className="form-control flex flex-col">
							<label className="label mb-2">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="email@example.com"
								className="input input-bordered"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="form-control flex flex-col">
							<label className="label mt-6 mb-2">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								placeholder="password"
								className="input input-bordered"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						{error && (
							<div className="alert alert-error">
								<span>{error}</span>
							</div>
						)}
						<div className="form-control mt-6">
							<button
								className={`btn btn-primary ${isLoading ? "loading" : ""}`}
								type="submit"
								disabled={isLoading}
							>
								{isLoading ? "Signing in..." : "Login"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
