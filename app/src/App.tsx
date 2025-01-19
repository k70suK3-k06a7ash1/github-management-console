import { useEffect ,useState} from 'react'

import { Octokit } from 'octokit';
import { GithubRepositoriesTable, GithubRepository } from './components/GithubRepositoriesTable';

const octokit = new Octokit({ auth: import.meta.env.VITE_APP_GITHUB_TOKEN });

// リポジトリを再帰的に取得する関数
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
const getAllRepositories = async (): Promise<RepoData> => {
  const initialPage = 1;
  const perPage = 100;
    try{
        return await fetchAllRepositories(octokit, initialPage, perPage);
    } catch (error) {
    console.error("An error occurred:", error);
    return [];
    }
};

function App() {
  const [repos ,setRepos] = useState<GithubRepository[]>([])

  useEffect(() => {
    (async() => {
      const repos = await getAllRepositories()
      console.log({repos})
      const dataSorce: GithubRepository[] = repos?.map((e) => ({id: e.id, repo: e.name, visibility :e.visibility ?? "unknown" })) 
      setRepos(dataSorce??[] )
     
    })()
  },[])
  return (
    <main className='container mx-auto'>
      <h1 className='text-2xl py-4'>Github Repository Manager</h1>
      <GithubRepositoriesTable rows={repos} />
    </main>
  )
}



export default App
