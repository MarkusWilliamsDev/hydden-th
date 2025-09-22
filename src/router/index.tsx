import { createBrowserRouter, type RouteObject } from "react-router-dom";
import Layout from "../Layout";
import {
	HomePage,
	LoginPage,
	DashboardPage,
	SettingsPage,
	ProfilePage,
} from "../pages";
import ProtectedRoute from "../components/ProtectedRoute";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "login",
				element: <LoginPage />,
			},
			{
				path: "dashboard",
				element: (
					<ProtectedRoute>
						<DashboardPage />
					</ProtectedRoute>
				),
			},
			{
				path: "settings",
				element: (
					<ProtectedRoute>
						<SettingsPage />
					</ProtectedRoute>
				),
			},
			{
				path: "profile",
				element: (
					<ProtectedRoute>
						<ProfilePage />
					</ProtectedRoute>
				),
			},
		],
	},
];

export const router = createBrowserRouter(routes);
