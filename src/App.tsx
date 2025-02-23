import { Suspense } from "react";
import { GithubRepositoriesTable } from "./features/github-repositories/GithubRepositoriesTable";
import { Spinner } from "./features/spinner/Spinner";

const App = () => (
	<main className="container mx-auto">
		<h1 className="text-2xl py-4">Github Repository Manager</h1>
		<Suspense fallback={<Spinner />}>
			<GithubRepositoriesTable />
		</Suspense>
	</main>
);

export default App;
