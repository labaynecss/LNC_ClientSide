import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage } from '../../store/reducers/globalReducer';
import toast, { Toaster } from 'react-hot-toast';
import Wrapper from './Wrapper';
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from '../../store/services/productService';
import ScreenHeader from '../../components/ScreenHeader';
import Spinner from '../../components/Spinner';
import Pagination from '../../components/Pagination';
const Products = () => {
  let { page } = useParams();
  if (!page) {
    page = 1;
  }
  const { data = [], isFetching } = useGetProductsQuery(page);
  console.log(data);
  const { success } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (success) {
      toast.success(success);
    }
    return () => {
      dispatch(clearMessage());
    };
  }, [dispatch, success]);
  const [delProduct, response] = useDeleteProductMutation();
  console.log('Your response', response);

  const deleteProduct = (id) => {
    if (window.confirm('Are you really want to delete this product?')) {
      delProduct(id);
    }
  };
  return (
    <Wrapper>
      <ScreenHeader>
        <Link
          to="/dashboard/create-product"
          className="btn-dark inline-block py-2 px-4 rounded-md text-white text-center">
          Create Product
        </Link>
        <Link
          to="/dashboard/product-updates"
          className="btn-dark inline-block py-2 px-4 rounded-md text-white text-center ml-2">
          Product Updates
        </Link>
        <Toaster position="top-right" />
      </ScreenHeader>
      {!isFetching ? (
        data?.products?.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-900 rounded-md ">
                <thead>
                  <tr className="border-b border-gray-800 text-left">
                    <th className="p-3 uppercase text-sm font-medium text-gray-500">
                      name
                    </th>
                    <th className="p-3 uppercase text-sm font-medium text-gray-500">
                      price
                    </th>
                    <th className="p-3 uppercase text-sm font-medium text-gray-500">
                      stock
                    </th>
                    <th className="p-3 uppercase text-sm font-medium text-gray-500">
                      image
                    </th>
                    <th className="p-3 uppercase text-sm font-medium text-gray-500">
                      edit
                    </th>
                    <th className="p-3 uppercase text-sm font-medium text-gray-500">
                      delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.products?.map((product) => (
                    <tr className="odd:bg-gray-800" key={product._id}>
                      <td className="p-3 capitalize text-xsm font-normal text-gray-400">
                        {product.title}
                      </td>
                      <td className="p-5 capitalize text-sm font-normal text-gray-400">
                        ₱ {product.price}
                      </td>
                      <td className="p-3 capitalize text-sm font-normal text-gray-400">
                        {product.stock}
                      </td>
                      <td className="p-3 capitalize text-sm font-normal text-gray-400">
                        <img
                          src={`/images/${product.image1}`}
                          alt="machine"
                          className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-md object-cover"
                        />
                      </td>
                      <td className="p-3 capitalize text-sm font-normal text-gray-400">
                        <Link
                          to={`/dashboard/edit-product/${product._id}`}
                          className="btn btn-warning ">
                          edit
                        </Link>
                      </td>
                      <td className="p-3 capitalize text-sm font-normal text-gray-400">
                        <span
                          className="btn btn-danger cursor-pointer text-center "
                          onClick={() => deleteProduct(product._id)}>
                          delete
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination
              page={parseInt(page)}
              perPage={data.perPage}
              count={data.count}
              path="dashboard/products"
            />
          </>
        ) : (
          'No products!'
        )
      ) : (
        <Spinner />
      )}
    </Wrapper>
  );
};
export default Products;
