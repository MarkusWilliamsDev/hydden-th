import type * as matchers from "@testing-library/jest-dom/matchers";

declare module "vitest" {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	interface Assertion<T = any>
		extends jest.Matchers<void, T>,
			matchers.TestingLibraryMatchers<T, void> {}
}
