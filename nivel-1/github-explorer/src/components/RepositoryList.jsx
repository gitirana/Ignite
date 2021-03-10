import { RepositoryItem } from "./RepositoryItem";
import '../styles/Repositories.scss'
import { useEffect, useState } from "react";

const repository = {
  name: 'Traveler',
  description: 'Forms in React',
  link: 'https://github.com/gitirana/traveler-web'
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/gitirana/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [repositories]);

  return (
    <section className="repository-list">
      <h1>Lista de repositório</h1>

      <ul>
        {repositories.map(repository => <RepositoryItem key={repository.name} repository={repository}/>)}
      </ul>
    </section>
  )
}