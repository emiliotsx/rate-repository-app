import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { Link, useLocation } from 'react-router-native'
import Constants from 'expo-constants';

import StyledText from './StyledText'
import theme from '../theme'


const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation()
  const active = pathname === to

  const textStyles = [
    styles.text,
    active && styles.active
  ]

  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight='bold' style={textStyles}>
        {children}
      </StyledText>
    </Link>
  )
}

const WebAppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab active to='/'>Repositories</AppBarTab>
        <AppBarTab to='/superzombie'>Esta es la version Web</AppBarTab>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 10,
  },
  scroll: {
    paddingBottom: 15,
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10
  },
  active: {
    color: theme.appBar.textPrimary
  }
})

export default WebAppBar