import { render, screen } from "@testing-library/react";
import { ArchivedLabel } from "./ArchivedLabel";
import { describe, it, expect } from "vitest";
describe("ArchivedLabel", () => {
	it("renders the ArchivedLabel component", () => {
		render(<ArchivedLabel />);
		const archivedLabel = screen.getByText("Public archive");
		expect(archivedLabel).toBeInTheDocument();
	});
});
