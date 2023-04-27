import { View, StyleSheet } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'

import { ReporitoryList } from './repository'

// OPCION 2, LA QUE ES RECOMENDADA, no poner la extension del archivo
import AppBar from './AppBar'

import LoginPage from '../pages/Login'

// OPCION 1, recordar importar Platform de 'react-native'
// const AppBar = Platform.select({
//   web: () => require('./AppBar.web').default,
//   default: () => require('./AppBar').default,
// })()

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <>
          <Route
            exact
            path='/'
            element={<ReporitoryList />}
          />
          <Route
            exact
            path='/signin'
            element={<LoginPage />}
          />
          <Route
            exact
            path='*'
            element={<Navigate to='/' />}
          />
        </>
      </Routes>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  }
})

export default Main