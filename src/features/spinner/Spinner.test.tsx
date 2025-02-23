import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
	it("should render the spinner", () => {
		render(<Spinner />);
		const spinnerElement = screen.getByTestId("spinner");
		expect(spinnerElement).toBeInTheDocument();
	});

	it("should have the correct CSS classes", () => {
		render(<Spinner />);
		const spinner = screen.getByTestId("spinner");
		expect(spinner).toHaveClass("animate-spin");
		expect(spinner).toHaveClass("rounded-full");
		expect(spinner).toHaveClass("h-16");
		expect(spinner).toHaveClass("w-16");
		expect(spinner).toHaveClass("border-t-4");
		expect(spinner).toHaveClass("border-blue-500");
		expect(spinner).toHaveClass("border-solid");
	});
});
