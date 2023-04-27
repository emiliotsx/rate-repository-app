import { useEffect, useState } from 'react'

export const useRepositories = () => {

  const [repositories, setRepositories] = useState(null)

  const fetchRepositories = async () => {
    try {
      const response = await globalThis.fetch('http://10.0.2.2:5001/api/repositories')
      const json = await response.json()
      setRepositories(json)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchRepositories()
  }, [])

  const repositoriesNodes = (repositories)
    ? repositories.edges.map((edge) => edge.node)
    : []

  return {
    repositories: repositoriesNodes
  }
}