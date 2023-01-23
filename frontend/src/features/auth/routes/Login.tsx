import { Layout } from '../components/Layout'
import { LoginForm } from '../components/LoginForm'

export const Login = () => {
  return (
    <Layout
      title={'Login to your Account'}
      navigationLink={{
        subtext: 'Not Registered Yet?',
        label: 'Create an account',
        to: '../register',
      }}>
      <LoginForm onSuccess={() => alert('dasdadas')} />
    </Layout>
  )
}
