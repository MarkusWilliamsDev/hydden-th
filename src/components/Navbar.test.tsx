import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "../contexts/context";
import type { AuthContextType } from "../contexts/types";
import Navbar from "./Navbar";

// Clean up after each test
afterEach(() => {
	cleanup();
});

// Helper to render Navbar with authentication context
function renderNavbar(authValue: Partial<AuthContextType> = {}) {
	const defaultAuthValue: AuthContextType = {
		user: null,
		isLoggedIn: false,
		isLoading: false,
		login: async () => true,
		logout: () => {},
		...authValue,
	};

	return render(
		<BrowserRouter>
			<AuthContext.Provider value={defaultAuthValue}>
				<Navbar />
			</AuthContext.Provider>
		</BrowserRouter>
	);
}

describe("Navbar Component", () => {
	describe("when user is logged out", () => {
		it("renders top navigation with logo", () => {
			renderNavbar({ isLoggedIn: false });
			
			// Check that the brand logo is present
			expect(screen.getByText("daisyUI")).toBeInTheDocument();
		});

		it("shows login button when logged out", () => {
			renderNavbar({ isLoggedIn: false });
			
			// Check that login button is present
			expect(screen.getByText("Login")).toBeInTheDocument();
		});

		it("does not show logout button when logged out", () => {
			renderNavbar({ isLoggedIn: false });
			
			// Check that logout button is not present
			expect(screen.queryByText(/logout/i)).not.toBeInTheDocument();
		});
	});

	describe("when user is logged in", () => {
		const mockUser = {
			id: "1",
			name: "Test User", 
			email: "test@example.com",
		};

		it("shows logout button with user name when logged in", () => {
			renderNavbar({ isLoggedIn: true, user: mockUser });
			
			// Check that logout button with user name is present
			expect(screen.getByText("Logout (Test User)")).toBeInTheDocument();
		});

		it("does not show login button when logged in", () => {
			renderNavbar({ isLoggedIn: true, user: mockUser });
			
			// Check that login button is not present
			expect(screen.queryByText("Login")).not.toBeInTheDocument();
		});

		it("shows notification badge with unread count", () => {
			renderNavbar({ isLoggedIn: true, user: mockUser });
			
			// Check that notification badge shows the unread count
			const badge = screen.getByText("2");
			expect(badge).toBeInTheDocument();
			expect(badge).toHaveClass("badge");
		});
	});
});