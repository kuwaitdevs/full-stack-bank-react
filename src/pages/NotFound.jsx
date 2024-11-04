import Header from '../components/Header';
import Meta from '../components/Meta';

const NotFound = () => {
  const pageTitle = 'Not Found';
  const pageDescription = 'Example not found';

  return (
        <div>
            <Meta title={pageTitle} />
            <Header head={pageTitle} description={pageDescription} />
        </div>
  );
};

export default NotFound;
