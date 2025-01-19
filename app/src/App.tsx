import { useEffect } from 'react'

import './App.css'
import { Octokit } from 'octokit';
import { Button } from './components/ui/button';


const octokit = new Octokit({ auth: import.meta.env.VITE_APP_GITHUB_TOKEN });

function App() {


  useEffect(() => {
    (async() => {

      const {
        data: { login },
      } = await octokit.rest.users.getAuthenticated();
      console.log("Hello, %s", login);

      const repos = await octokit.rest.repos.listForUser({type: "all",per_page: 100, username:import.meta.env.VITE_APP_USER_NAME})
      console.log({repos})
     
    })()
  },[])
  return (
    <>
      <Button>hello</Button>
    </>
  )
}

export default App
