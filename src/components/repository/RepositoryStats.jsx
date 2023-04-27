import { View, StyleSheet } from 'react-native'

import StyledText from '../StyledText'

const parseThousands = value => {
  return value >= 1000
    ? `${Math.round(value / 100) / 10} k`
    : String(value)
}

export const RepositoryStats = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage
}) => {
  return (
    <View style={styles.container}>
      <View>
        <StyledText align='center'>{parseThousands(stargazersCount)}</StyledText>
        <StyledText fontWeight='bold' >Stars</StyledText>
      </View>
      <View>
        <StyledText align='center'>{parseThousands(forksCount)}</StyledText>
        <StyledText fontWeight='bold'>Forks</StyledText>
      </View>
      <View>
        <StyledText align='center'>{parseThousands(reviewCount)}</StyledText>
        <StyledText fontWeight='bold'>Review</StyledText>
      </View>
      <View>
        <StyledText align='center'>{parseThousands(ratingAverage)}</StyledText>
        <StyledText fontWeight='bold'>Rating</StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
})