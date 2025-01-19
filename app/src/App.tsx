import { Suspense } from "react";
import { GithubRepositoriesTable } from "./components/GithubRepositoriesTable";
import { Spinner } from "@/components/Spinner";

function App() {
	return (
		<main className="container mx-auto">
			<h1 className="text-2xl py-4">Github Repository Manager</h1>
			<Suspense fallback={<Spinner />}>
				<GithubRepositoriesTable />
			</Suspense>
		</main>
	);
}

export default App;
