import { useEffect, useState } from "react";
import axios from 'axios';
import CardRepos from "./components/CardRepos";
import CardAboutMe from "./components/CardAboutMe";
import Loading from "./components/Loading";

function App() {
  const [data, setData] = useState({});
  const [reposList, setReposList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  async function getDataApi() {
    try {
      const res = await axios.get('https://api.github.com/users/jonathasdias');
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getDataRepos() {
    try {
      setIsLoading(true);
      const res = await axios.get('https://api.github.com/users/jonathasdias/repos');
      setIsLoading(false);
      const reposFilter = res.data.filter(repos => repos.name !== "jonathasdias" && repos.name !== 'sobre-mim');
      setReposList(reposFilter);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDataApi();
    getDataRepos();
  }, [])

  if(isLoading) {
    return <Loading/>;
  }

  return (
    <main className="bg-[url('./imgs/background-img.jpg')] min-h-screen bg-center bg-cover">
      <h1 className="text-center text-3xl pt-6">Sobre Mim</h1>

      <section className="max-w-[30rem] md:max-w-[70rem] m-auto py-6">
        <CardAboutMe data={data}/>
      </section>

      <h2 className="text-center max-w-[70rem] mt-6 mx-auto text-2xl">Meus Principais Projetos</h2>

      <section className="grid grid-cols-2 md:grid-cols-auto-fill gap-2 p-1 md:p-6">
        <CardRepos reposList={reposList}/>
      </section>
    </main>
  )
}

export default App;
