import { Spinner } from "@/components/Spinner";
import {
	GithubRepositoriesTable,
	type GithubRepository,
} from "./components/GithubRepositoriesTable";
import { getAllRepositories } from "./helpers";
import { useQuery } from "@tanstack/react-query";

function App() {
	const { isLoading, data, isRefetching } = useQuery({
		queryKey: ["repos"],
		queryFn: async () => {
			const repos = await getAllRepositories();
			const dataSorce: GithubRepository[] = repos?.map((e) => ({
				id: e.id,
				isArchived: e.archived ?? false,
				repo: e.name,
				visibility: e.visibility ?? "unknown",
			}));
			return dataSorce;
		},
	});
	console.log({ isRefetching });

	if (isLoading) return <Spinner />;

	return (
		<main className="container mx-auto">
			<h1 className="text-2xl py-4">Github Repository Manager</h1>
			{/* keyを更新し、仮想DOMを再計算する */}
			<GithubRepositoriesTable rows={data ?? []} />
		</main>
	);
}

export default App;
