import { useNavigate } from 'react-router-dom'

import { Layout } from '../components/Layout'
import { RegisterForm } from '../components/RegisterForm'

export const Register = () => {
  const navigate = useNavigate()
  return (
    <Layout
      title={'Create your account'}
      navigationLink={{
        subtext: 'Do you have an account?',
        label: 'Login',
        to: '../login',
      }}>
      <RegisterForm onSuccess={() => navigate('/login')} />
    </Layout>
  )
}
