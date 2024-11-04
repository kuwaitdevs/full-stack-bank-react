import Header from '../components/Header';
import Meta from '../components/Meta';

const License = () => {
    // page content
    const pageTitle = 'License Page';
    const pageDescription = 'Example license page';

    return (
        <div>
            <Meta title={pageTitle} />
            <Header head={pageTitle} description={pageDescription} />
        </div>
    );
};

export default License;
