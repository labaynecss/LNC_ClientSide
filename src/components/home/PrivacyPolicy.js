import Footer from './Footer';
import Nav from './Nav';

const PrivacyPolicy = () => {
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          At LNC Hollow BLocks Machine Manufacturer, we are committed to
          protecting your privacy. This Privacy Policy explains our data
          processing practices and the ways in which your personal data is used.
          If you have any requests concerning your personal information or any
          queries with regard to these practices please contact us.
        </p>

        <h2 className="text-2xl font-bold mb-4">Information Collected</h2>

        <p className="mb-4">
          We collect personal information from you when you create an account,
          place an order, or sign up for our newsletter. This information may
          include your name, email address, shipping address, billing address,
          and order information.
        </p>

        <h2 className="text-2xl font-bold mb-4">Use of Personal Information</h2>

        <p className="mb-4">
          We use personal information collected via our website for the purposes
          of processing your orders, providing customer service, and sending
          marketing communications if you have opted in to receive them.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Disclosure of Personal Information
        </h2>

        <p className="mb-4">
          We will not disclose your personal information to any third parties
          without your consent except where required by law or to fulfill your
          order (such as sharing your address with a shipping carrier).
        </p>

        <h2 class="text-2xl font-bold mb-4">Security</h2>

        <p class="mb-4">
          We take precautions to protect your information. When you submit
          sensitive information via the website, your information is protected
          both online and offline. We use industry-standard encryption to
          protect your payment information, and we limit access to your personal
          information to those employees who need it to fulfill your order or
          provide customer service.
        </p>

        <h2 class="text-2xl font-bold mb-4">Changes to this Policy</h2>

        <p>
          We may change this Privacy Policy from time to time. If we make any
          significant changes in the way we treat your personal information we
          will make this clear on our website or by contacting you directly.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
