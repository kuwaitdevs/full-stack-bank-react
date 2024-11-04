import Header from '../components/Header'
import Meta from '../components/Meta'

const Home = () => {
  const pageTitle = 'Full Stack Bank Home'
  const pageDescription = 'Welcome to Full Stack Bank Home'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}

export default Home