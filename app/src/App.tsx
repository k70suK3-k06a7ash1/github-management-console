import { useEffect ,useState} from 'react'

import { GithubRepositoriesTable, GithubRepository } from './components/GithubRepositoriesTable';
import { getAllRepositories } from './helpers';
import { Spinner } from './components/Spinner';

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
