import { Link } from 'react-router-dom';
const Sidebar = ({ side, closeSidebar }) => {
  return (
    <div
      className={`fixed top-0 ${side} sm:left-0 w-64 h-screen bg-gray-800 z-10 transition-all`}>
      <i
        className="bi bi-x-lg absolute top-4 right-4 sm:hidden block cursor-pointer text-lg text-cyan-50"
        onClick={closeSidebar}></i>
      <div className=" bg-gray-800 p-4">
        <img src="/images/lnc_logo.png" alt="logo" />
      </div>
      <ul className="mt-4">
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
          <i className="bi bi-card-list mr-2 inline-block text-lg"></i>{' '}
          <Link to="/dashboard/products" className="text-base capitalize">
            products
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
          <i className="bi bi-grid mr-2 inline-block text-lg"></i>{' '}
          <Link to="/dashboard/categories" className="text-base capitalize">
            categories
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
          <i className="bi bi-bag-check mr-2 inline-block text-lg"></i>{' '}
          <Link to="/dashboard/orders" className="text-base capitalize">
            orders
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
          <i className="bi bi-file-bar-graph-fill mr-2 inline-block text-lg"></i>{' '}
          <Link to="/dashboard/sales-stats" className="text-base capitalize">
            Statistics
          </Link>
        </li>

        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
          <i className="bi bi-arrow-left-right mr-2 inline-block text-lg"></i>{' '}
          <Link to="/dashboard/report/all" className="text-base capitalize">
            Transactions
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
