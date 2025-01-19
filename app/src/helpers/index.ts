import { Octokit } from 'octokit';

const octokit = new Octokit({ auth: import.meta.env.VITE_APP_GITHUB_TOKEN });


type RepoData = Awaited<
  ReturnType<
    Octokit["rest"]["repos"]["listForUser"]
  >
>["data"];

const fetchAllRepositories = async (
  octokit: Octokit,
  page: number,
  perPage: number,
  accumulator: RepoData = []
): Promise<RepoData> => {
  const response = await octokit.rest.repos.listForUser({
    per_page: perPage,
    page,
    username:import.meta.env.VITE_APP_USER_NAME
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
    try{
        return await fetchAllRepositories(octokit, initialPage, perPage);
    } catch (error) {
    console.error("An error occurred:", error);
    return [];
    }
};