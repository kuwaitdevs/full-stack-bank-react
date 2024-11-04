import { Helmet, HelmetProvider } from 'react-helmet-async'

const Meta = ({ title }) => {
  return (
  <HelmetProvider>
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      </div>
    </HelmetProvider>
  )
}

export default Meta
