import { View, Image, StyleSheet, Platform } from 'react-native'

import StyledText from '../StyledText'
import theme from '../../theme'

export const RepositoryItemHeader = ({
  ownerAvatarUrl,
  fullName,
  description,
  language
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={styles.containerFooter}>
        <StyledText fontWeight='bold'>{fullName}</StyledText>
        <StyledText color='secondary' >{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 2
  },
  containerHeader: {
    paddingRight: 10
  },
  containerFooter: {
    flex: 1
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: 'orange',
      default: 'purple'
    }),
    alignSelf: 'flex-start',
    marginVertical: 4,
    borderRadius: 4,
    overflow: 'hidden'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4
  }
})

