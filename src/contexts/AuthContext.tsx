import React, { useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { User, AuthContextType } from "./types";
import { AuthContext } from "./context";

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const savedUser = localStorage.getItem("user");
		if (savedUser) {
			try {
				setUser(JSON.parse(savedUser));
			} catch (error) {
				console.error("Error parsing saved user:", error);
				localStorage.removeItem("user");
			}
		}
		setIsLoading(false);
	}, []);

	const login = async (email: string, password: string): Promise<boolean> => {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		if (email && password) {
			const mockUser: User = {
				id: "1",
				email: email,
				name: email.split("@")[0],
			};
			setUser(mockUser);
			localStorage.setItem("user", JSON.stringify(mockUser));
			return true;
		}
		return false;
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("user");
	};

	const value: AuthContextType = {
		user,
		isLoggedIn: !!user,
		isLoading,
		login,
		logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
