import { View, StyleSheet } from 'react-native'

import { RepositoryStats } from './RepositoryStats'
import { RepositoryItemHeader } from './RepositoryItemHeader'


export const RepositoryItem = ({
  id,
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl
}) => {
  return (
    <View key={id} style={styles.container}>
      <RepositoryItemHeader
        fullName={fullName}
        description={description}
        language={language}
        ownerAvatarUrl={ownerAvatarUrl}
      />
      <RepositoryStats
        stargazersCount={stargazersCount}
        forksCount={forksCount}
        reviewCount={reviewCount}
        ratingAverage={ratingAverage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5
  }
})
