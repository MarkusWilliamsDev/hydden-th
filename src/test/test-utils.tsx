import React from "react";
import {
	render as rtlRender,
	type RenderOptions,
	cleanup,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { vi, afterEach } from "vitest";
import { AuthContext } from "../contexts/context";
import type { AuthContextType, User } from "../contexts/types";

// Mock user for testing
export const mockUser: User = {
	id: "1",
	name: "Test User",
	email: "test@example.com",
};

// Automatically cleanup after each test
afterEach(() => {
	cleanup();
});

// Custom render function that includes providers
interface CustomRenderOptions extends Omit<RenderOptions, "wrapper"> {
	authValue?: Partial<AuthContextType>;
}

export function render(
	ui: React.ReactElement,
	options: CustomRenderOptions = {}
) {
	const { authValue, ...renderOptions } = options;

	// Default auth context values
	const defaultAuthValue: AuthContextType = {
		user: null,
		isLoggedIn: false,
		isLoading: false,
		login: vi.fn().mockResolvedValue(true),
		logout: vi.fn(),
		...authValue,
	};

	function Wrapper({ children }: { children: React.ReactNode }) {
		return (
			<BrowserRouter>
				<AuthContext.Provider value={defaultAuthValue}>
					{children}
				</AuthContext.Provider>
			</BrowserRouter>
		);
	}

	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// Re-export testing utilities for convenience
export { screen, fireEvent, waitFor } from "@testing-library/react";
