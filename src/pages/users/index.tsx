import Layout from '../../layout/Layout'
import FormLogin from './FormLogin'
import { useDataContext } from '../../hooks/useUserContext'
import Welcome from './Welcome'

const Index = () => {
  const { loggedIn } = useDataContext()

  return <Layout>{loggedIn ? <Welcome /> : <FormLogin />}</Layout>
}

export default Index
