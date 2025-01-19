import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Octokit } from 'octokit';


const octokit = new Octokit({ auth: import.meta.env.VITE_APP_GITHUB_TOKEN });

function App() {
  const [count, setCount] = useState(0)


  useEffect(() => {
    (async() => {

      const {
        data: { login },
      } = await octokit.rest.users.getAuthenticated();
      console.log("Hello, %s", login);

      const repos = await octokit.rest.repos.listForUser({type: "all",per_page: 100, username:import.meta.env.VITE_APP_USER_NAME})
      console.log({repos})
      // console.log({token : import.meta.env.VITE_APP_GITHUB_TOKEN})
      // console.log({user: import.meta.env.VITE_APP_USER_NAME})
      // const response = await fetch(`https://api.github.com/repos/${import.meta.env.VITE_APP_USER_NAME!}`, {
      //   headers: {
      //     Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_TOKEN!}`,
      //     'Content-Type': 'application/json',
      //   },
      // });

      // console.log({response:await response.json()})
    })()
  },[])
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
