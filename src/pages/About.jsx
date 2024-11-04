import Header from '../components/Header'
import Meta from '../components/Meta'

const About = () => {
  const pageTitle = 'About'
  const pageDescription = 'Example about page'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}

export default About