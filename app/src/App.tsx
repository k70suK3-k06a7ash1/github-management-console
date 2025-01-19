import { Suspense } from "react";
import { GithubRepositoriesTable } from "./components/GithubRepositoriesTable";

function App() {
	return (
		<main className="container mx-auto">
			<h1 className="text-2xl py-4">Github Repository Manager</h1>
			<Suspense>
				<GithubRepositoriesTable />
			</Suspense>
		</main>
	);
}

export default App;
