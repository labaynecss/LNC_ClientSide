import { useState } from 'react';
import currency from 'currency-formatter';
import { motion } from 'framer-motion';
import h2p from 'html2plaintext';
import htmlParser from 'html-react-parser';
import toast, { Toaster } from 'react-hot-toast';
import { BsCheck2 } from 'react-icons/bs';
import { useGetReviewsQuery } from '../../store/services/reviewService';
import DetailsImage from './DetailsImage';
import Quantity from './Quantity';
import { addCart } from '../../store/reducers/cartReducer';
import { discount } from '../../utils/discount';
import { useDispatch } from 'react-redux';
import RatingStars from 'react-rating-stars-component';
import moment from 'moment';

const DetailsCard = ({ product }) => {
  const { data } = useGetReviewsQuery();

  const [sizeState, setSizeState] = useState(
    product?.sizes?.length > 0 && product.sizes[0].name,
  );
  const [motorState, setMotorState] = useState(
    product?.motor?.length > 0 && product.motors[0].name,
  );
  const [colorState, setColorState] = useState(
    product?.colors?.length > 0 && product.colors[0].color,
  );

  const [quantity, setQuantity] = useState(1);
  const inc = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  const dec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const discountPrice = discount(product.price, product.discount);
  let desc = h2p(product.description);
  desc = htmlParser(desc);
  const dispatch = useDispatch();
  const addToCart = () => {
    const { colors, sizes, motors, createdAt, updatedAt, ...newProduct } =
      product;
    newProduct['size'] = sizeState;
    newProduct['color'] = colorState;
    newProduct['quantity'] = quantity;
    newProduct['motor'] = motorState;
    //console.log(newProduct);
    const cart = localStorage.getItem('cart');
    const cartItems = cart ? JSON.parse(cart) : [];
    const checkItem = cartItems.find((item) => item._id === newProduct._id);
    if (!checkItem) {
      dispatch(addCart(newProduct));
      cartItems.push(newProduct);
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } else {
      toast.error(`${newProduct.title} is already in cart`);
      return;
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-wrap -mx-5">
      <Toaster />
      <div className="w-full order-2 md:order-1 md:w-6/12 p-5">
        <div className="flex flex-wrap -mx-1">
          <DetailsImage image={product.image1} />
          <DetailsImage image={product.image2} />
          <DetailsImage image={product.image3} />
        </div>
      </div>
      <div className="w-full order-1 md:order-2 md:w-6/12 p-5">
        <h1 className="text-2xl font-bold text-gray-900 capitalize">
          {product.title}
        </h1>

        <div className="flex justify-between my-5">
          <span className="text-2xl font-bold text-gray-900">
            {' '}
            {currency.format(discountPrice, { code: 'PHP' })}
          </span>
          <span className="text-xl line-through text-gray-500">
            {currency.format(product.price, { code: 'PHP' })}
          </span>
        </div>

        {product.sizes.length > 0 && (
          <>
            <h3 className="text-base font-medium capitalize text-gray-600 mb-3">
              sizes
            </h3>
            <div className="flex flex-wrap -mx-1">
              {product.sizes.map((size) => (
                <div
                  className={`p-2 m-1 border border-gray-300 rounded cursor-pointer ${
                    sizeState === size.name && 'bg-sky-600'
                  }`}
                  key={size.name}
                  onClick={() => setSizeState(size.name)}>
                  <span
                    className={`text-sm font-semibold uppercase  ${
                      sizeState === size.name ? 'text-white' : 'text-gray-900'
                    }`}>
                    {size.name}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
        {product.motors.length > 0 && (
          <>
            <h3 className="text-base font-medium capitalize text-gray-600 mb-3">
              motors
            </h3>
            <div className="flex flex-wrap -mx-1">
              {product.motors.map((motor) => (
                <div
                  className={`p-2 m-1 border border-gray-300 rounded cursor-pointer ${
                    motorState === motor.name && 'bg-sky-500'
                  }`}
                  key={motor.name}
                  onClick={() => setMotorState(motor.name)}>
                  <span
                    className={`text-sm font-semibold uppercase  ${
                      sizeState === motor.name ? 'text-white' : 'text-gray-900'
                    }`}>
                    {motor.name}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
        {product.colors.length > 0 && (
          <>
            <h3 className="text-base font-medium capitalize text-gray-600 mb-2 mt-3">
              colors
            </h3>
            <div className="flex flex-wrap -mx-1">
              {product.colors.map((color) => (
                <div
                  key={color.color}
                  onClick={() => setColorState(color.color)}
                  className="border border-gray-300 rounded m-1 p-1 cursor-pointer">
                  <span
                    className="min-w-[40px] min-h-[40px] rounded flex items-center justify-center"
                    style={{ backgroundColor: color.color }}>
                    {colorState === color.color && (
                      <BsCheck2 className="text-white" size={20} />
                    )}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
        <>
          <div className="text-sm text-gray-600 mt-2">
            Available Stock: {product.stock}
          </div>
        </>

        <div className="flex -mx-3 items-center">
          <div className="w-full sm:w-6/12 p-3">
            <Quantity quantity={quantity} inc={inc} dec={dec} />
          </div>
          <div className="w-full sm:w-6/12 p-3">
            <button className="btn btn bg-sky-500" onClick={addToCart}>
              add to cart
            </button>
          </div>
        </div>
        <div class=" bg-gray-100 text-gray-700 text-sm md:text-base py-2 px-3 md:py-3 md:px-4 capitalize">
          <h3 className="text-base font-medium capitalize flex text-gray-600 mb-2 mt-2">
            Description
          </h3>
        </div>
        <div className="mt-4 leading-[27px] description text-gray-700">
          {desc}
        </div>

        <div className="mt-5">
          <div class=" bg-gray-100 text-gray-700 text-sm md:text-base py-2 px-3 md:py-3 md:px-4 capitalize">
            <h3 className="text-base font-medium capitalize flex text-gray-600 mb-2 mt-2">
              Product Ratings
            </h3>
          </div>
          {data?.slice(0, 4).map((review) => (
            <div key={review._id} className="my-4">
              <article>
                <div className="flex items-center mb-4 space-x-4">
                  <div className="space-y-1 font-medium dark:text-white">
                    <p className="text-gray-700 text-sm font-medium mr-2">
                      {review.user.name}
                    </p>
                    <time
                      dateTime={review.updatedAt}
                      className="block text-sm text-gray-500 dark:text-gray-400">
                      {moment(review.updatedAt).format('MMM DD, YYYY')}
                    </time>
                  </div>
                </div>
                <div className="flex items-center mb-1">
                  <RatingStars
                    count={5}
                    value={review.rating}
                    size={23}
                    edit={false}
                    activeColor="#ffd700"
                  />
                </div>

                <p className="mb-2 font-light text-gray-700 dark:text-gray-700">
                  {review.comment}
                </p>

                <aside>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    people found this comment
                  </p>
                  <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600"></div>
                </aside>
              </article>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DetailsCard;
