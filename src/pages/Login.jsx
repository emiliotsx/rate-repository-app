import { Button, StyleSheet, View } from 'react-native'
import { Formik, useField } from 'formik'

import { loginValidationSchema } from '../validationSchemas/login'

import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'

const initialValues = {
  email: '',
  password: ''
}

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)

  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.email}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.inputError}>{meta.error}</StyledText>}
    </>
  )
}


export default function LoginPage() {
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={values => console.log('--values--', values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              name='email'
              placeholder='E-mail'
            />
            <FormikInputValue
              name='password'
              placeholder='Password'
              secureTextEntry
            />
            <Button onPress={handleSubmit} title='Log In'></Button>
          </View>
        )
      }}
    </Formik>
  )
}

const styles = StyleSheet.create({
  form: {
    margin: 12
  },
  inputError: {
    color: 'red',
    fontSize: 13,
    marginBottom: 20,
    marginTop: -10
  }
})