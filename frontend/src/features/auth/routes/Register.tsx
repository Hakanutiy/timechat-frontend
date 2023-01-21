import { Layout } from '../components/Layout'
import { RegisterForm } from '../components/RegisterForm'

export const Register = () => {
  return (
    <Layout
      title={'Create your account'}
      navigationLink={{
        subtext: 'Do you have an account?',
        label: 'Login',
        to: '../login',
      }}>
      <RegisterForm />
    </Layout>
  )
}
