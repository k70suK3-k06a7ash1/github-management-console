import { useEffect ,useState} from 'react'

import { Octokit } from 'octokit';
import { GithubRepositoriesTable, GithubRepository } from './components/GithubRepositoriesTable';

const octokit = new Octokit({ auth: import.meta.env.VITE_APP_GITHUB_TOKEN });

function App() {
  const [repos ,setRepos] = useState<GithubRepository[]>([])

  useEffect(() => {
    (async() => {
      const repos = await octokit.rest.repos.listForUser({type: "all",per_page: 100, username:import.meta.env.VITE_APP_USER_NAME})
      const dataSorce: GithubRepository[] = repos?.data?.map((e) => ({id: e.id, repo: e.name, visibility :e.visibility ?? "unknown" })) 
      setRepos(dataSorce??[] )
     
    })()
  },[])
  return (
    <main className='container mx-auto'>
      <GithubRepositoriesTable rows={repos} />
    </main>
  )
}



export default App
