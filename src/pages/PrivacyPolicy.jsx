import Header from '../components/Header';
import Meta from '../components/Meta';

const PrivacyPolicy = () => {
    // page content
    const pageTitle = 'Privacy Policy';
    const pageDescription = 'Example privacy policy';

    return (
        <div>
            <Meta title={pageTitle} />
            <Header head={pageTitle} description={pageDescription} />
        </div>
    );
};

export default PrivacyPolicy;
