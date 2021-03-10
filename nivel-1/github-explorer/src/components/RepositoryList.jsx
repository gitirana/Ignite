import { RepositoryItem } from "./RepositoryItem";
import '../styles/Repositories.scss'

const repository = {
  name: 'Traveler',
  description: 'Forms in React',
  link: 'https://github.com/gitirana/traveler-web'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositório</h1>

      <ul>
        <RepositoryItem
          repository={repository}
        />
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  )
}