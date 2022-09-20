import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Keyboard
} from 'react-native'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function LoginForm() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formValue) => {
      console.log('Form sent')
    }
  })
  return (
    <View>
      <Text style={styles.title}>Log In</Text>
      <TextInput
        placeholder='Username'
        style={styles.input}
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder='Password'
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Button title='Log in' onPress={formik.handleSubmit} />
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
    </View>
  )
}

function initialValues() {
  return {
    username: '',
    password: ''
  }
}

function validationSchema() {
  return {
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#FFF',
    padding: 10,
    borderRadius: 10
  },
  error: {
    textAlign: 'center',
    color: '#F00',
    marginTop: 20
  }
})
