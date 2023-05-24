import { Link } from 'react-router-dom';
import ScreenHeader from '../../components/ScreenHeader';
import Wrapper from './Wrapper';

const ProductUpdates = () => {
  return (
    <Wrapper>
      <ScreenHeader>
        <Link
          to="/dashboard/products"
          className="btn-dark inline-block py-2 px-4 rounded-md text-white text-center">
          <i className="bi bi-arrow-left-short"></i> Products list
        </Link>
      </ScreenHeader>
      <>
        <div className="grid grid-cols-2 gap-4">
          <div className="top-product p-3">
            <article>
              <div className="w-full bg-gray-900 rounded-md overflow-x:auto;">
                <iframe
                  className="text-center"
                  title="product-monitoring"
                  style={{
                    background: '"bg-gray-900"',
                    border: 'none',
                    boxShadow: '0 2px 10px 0 rgba(70, 76, 79,  .2)',
                    borderRadius: 2,
                    width: '100%',
                    height: 350,
                  }}
                  src="https://charts.mongodb.com/charts-online-ordering-system-hhvqg/embed/charts?id=6405fb3b-a859-451f-8952-0f6841b1be22&maxDataAge=60&theme=dark&autoRefresh=true"
                />
              </div>
            </article>
          </div>
          <div className="productstats p-3">
            <article>
              <div className="w-full bg-gray-900 rounded-md overflow-x:auto">
                <iframe
                  className="text-center"
                  title="product-monitoring"
                  style={{
                    background: '"bg-gray-900"',
                    border: 'none',
                    boxShadow: '0 2px 10px 0 rgba(70, 76, 79,  .2)',
                    borderRadius: 2,
                    width: '100%',
                    height: 350,
                  }}
                  src="https://charts.mongodb.com/charts-online-ordering-system-hhvqg/embed/charts?id=63fd2b45-276b-411c-8567-76a6e811d518&maxDataAge=60&theme=dark&autoRefresh=true"
                />
              </div>
            </article>
          </div>
        </div>

        <div className="sales p-3">
          <div>
            <article>
              <div className="w-full bg-gray-900 rounded-md overflow-x:auto;">
                <iframe
                  className="text-center"
                  title="product-monitoring"
                  style={{
                    background: 'bg-gray-900',
                    border: 'none',
                    boxShadow: '0 2px 10px 0 rgba(70, 76, 79,  .2)',
                    borderRadius: '2px',
                    width: '100%',
                    height: '350px',
                  }}
                  src="https://charts.mongodb.com/charts-online-ordering-system-hhvqg/embed/charts?id=63f00885-26ab-4a12-839b-981f33283c47&maxDataAge=300&theme=dark&autoRefresh=true"></iframe>
              </div>
            </article>
          </div>
        </div>
      </>
    </Wrapper>
  );
};

export default ProductUpdates;
