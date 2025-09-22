import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
	children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
	const { isLoggedIn, isLoading } = useAuth();

	console.log(
		"ProtectedRoute - isLoading:",
		isLoading,
		"isLoggedIn:",
		isLoggedIn
	);

	if (isLoading) {
		return (
			<div className="flex justify-center items-center min-h-full">
				<span className="loading loading-spinner loading-lg"></span>
			</div>
		);
	}

	if (!isLoggedIn) {
		console.log("Not logged in, redirecting to /login");
		return <Navigate to="/login" replace />;
	}

	return <>{children}</>;
}
