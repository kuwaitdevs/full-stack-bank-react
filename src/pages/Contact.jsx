import Header from '../components/Header';
import Meta from '../components/Meta';

const Contact = () => {
    // page content
    const pageTitle = 'Contact Page';
    const pageDescription = 'Example Contact Page';

    return (
        <div>
            <Meta title={pageTitle} />
            <Header head={pageTitle} description={pageDescription} />
        </div>
    );
};

export default Contact;
