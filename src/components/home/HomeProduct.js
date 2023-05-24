import { Link } from 'react-router-dom';
import { useCatProductsQuery } from '../../store/services/homeProducts';
import ProductSkeleton from './ProductSkeleton';
import ProductCard from './ProductCard';
const HomeProduct = ({ category }) => {
  const { data, isFetching } = useCatProductsQuery({
    name: category.name,
    page: '',
  });
  return isFetching ? (
    <ProductSkeleton />
  ) : (
    data?.products?.length > 0 && (
      <>
        <div className="flex justify-between">
          <span className="text-lg font-medium capitalize text-container mt-2">
            {category.name}
          </span>
          <span className="capitalize">
            <Link to={`/cat-products/${category.name}`}>𝗦𝗲𝗲 𝗔𝗟𝗟</Link>
          </span>
        </div>
        <div className="flex flex-wrap -mx-5">
          {data?.products.map((item) => (
            <ProductCard product={item} key={item._id} />
          ))}
        </div>
      </>
    )
  );
};

export default HomeProduct;
