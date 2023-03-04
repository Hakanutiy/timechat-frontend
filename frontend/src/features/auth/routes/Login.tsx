import { Snackbar } from '@/components/Form/Snackbar'
import storage from '@/utils/storage'

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
      <LoginForm onSuccess={() => alert('asdasd')} />
    </Layout>
  )
}
