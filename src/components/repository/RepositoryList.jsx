import { Text, FlatList } from 'react-native'

import { useRepositories } from '../../hooks/useRepositories'

import { RepositoryItem } from './RepositoryItem'


export const ReporitoryList = () => {

  const { repositories } = useRepositories()

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item }) => (
        <RepositoryItem
          key={item.id}
          id={item.id}
          fullName={item.fullName}
          description={item.description}
          language={item.language}
          forksCount={item.forksCount}
          stargazersCount={item.stargazersCount}
          ratingAverage={item.ratingAverage}
          reviewCount={item.reviewCount}
          ownerAvatarUrl={item.ownerAvatarUrl}
        />
      )}
    >
    </FlatList>
  )
}