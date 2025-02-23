import { Octokit } from "octokit";

export const octokit = new Octokit({
	auth: import.meta.env.VITE_APP_GITHUB_TOKEN,
});

export const owner = import.meta.env.VITE_APP_USER_NAME;

type RepoData = Awaited<
	ReturnType<Octokit["rest"]["repos"]["listForUser"]>
>["data"];

const fetchAllRepositories = async (
	octokit: Octokit,
	page: number,
	perPage: number,
	accumulator: RepoData = [],
): Promise<RepoData> => {
	const response = await octokit.rest.repos.listForUser({
		per_page: perPage,
		page,
		username: owner,
	});

	if (response.data.length === 0) {
		return accumulator;
	}
	const newAccumulator = [...accumulator, ...response.data];
	return fetchAllRepositories(octokit, page + 1, perPage, newAccumulator);
};

// エントリーポイント関数
export const getAllRepositories = async (): Promise<RepoData> => {
	const initialPage = 1;
	const perPage = 100;
	try {
		return await fetchAllRepositories(octokit, initialPage, perPage);
	} catch (error) {
		console.error("An error occurred:", error);
		return [];
	}
};

const archiveRepository =
	(octokit: Octokit) =>
	(owner: string) =>
	async (repo: string): Promise<void> => {
		try {
			await octokit.rest.repos.update({
				owner,
				repo,
				archived: true,
			});
			console.log(`Repository ${owner}/${repo} archived successfully.`);
		} catch (error) {
			console.error(`Failed to archive repository ${owner}/${repo}:`, error);
			throw error; // エラーを再スローして、呼び出し元で処理できるようにする
		}
	};

export const handleArchive = archiveRepository(octokit)(owner);
