import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { RiShoppingCartFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search';
import { toggleSearchBar } from '../../store/reducers/globalReducer';

const Nav = () => {
  const { userToken, user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cartReducer);
  console.log(total);

  return (
    <>
      <nav className="nav bg-white shadow-lg">
        <div className="my-container ">
          <div className="flex flex-wrap items-center justify-between mx-auto">
            <Link to="/">
              <img
                className="h-9 object-cover "
                src="/images/lnc_logo.png"
                alt="logo"
              />
            </Link>
            <ul className="flex items-center">
              <li className="nav-li cursor-pointer">
                <FiSearch
                  size={20}
                  onClick={() => dispatch(toggleSearchBar())}
                />
              </li>
              <li className="nav-li relative">
                <Link to="/" className="nav-link ">
                  ʜᴏᴍᴇ
                </Link>
              </li>
              <li className="nav-li">
                <Link to="/shop" className="nav-link ">
                  ꜱʜᴏᴘ
                </Link>
              </li>

              {userToken ? (
                <li className="nav-li">
                  <Link to="/user" className="nav-link">
                    {user?.name}
                  </Link>
                </li>
              ) : (
                <li className="nav-li">
                  <Link to="/login" className="nav-link">
                    ʟᴏɢɪɴ
                  </Link>
                </li>
              )}
              <li className="nav-li relative ">
                <Link to="/cart">
                  <RiShoppingCartFill size={25} />
                  <span className="nav-circle">{items}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Search />
    </>
  );
};

export default Nav;
