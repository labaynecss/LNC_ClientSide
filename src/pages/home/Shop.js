import Categories from '../../components/home/Categories';
import HomeProduct from '../../components/home/HomeProduct';
import Nav from '../../components/home/Nav';
import Slider from '../../components/home/Slider';
import Footer from '../../components/home/Footer';
import { useRandomCategoriesQuery } from '../../store/services/categoryService';

const Shop = () => {
  const { data, isFetching } = useRandomCategoriesQuery();
  return (
    <>
      <Nav />
      <div className="mt-[70px]">
        <Slider />
      </div>
      <div className="my-container mt-10">
        <h5 className="text-2xl my-10 text-container text-center capitalize font-bold text-gray-800">
          Categories
        </h5>

        <Categories />
        {!isFetching &&
          data?.categories?.length > 0 &&
          data?.categories.map((category) => (
            <HomeProduct category={category} key={category._id} />
          ))}
      </div>

      <Footer />
    </>
  );
};

export default Shop;
