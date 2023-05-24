import currency from 'currency-formatter';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import RatingStars from 'react-rating-stars-component';

const ProductCard = ({ product }) => {
  const percentage = product.discount / 100;
  const discountPrice = product.price - product.price * percentage;
  let result = 0;
  let one = 0,
    two = 0,
    three = 0,
    four = 0,
    five = 0,
    total = 0;
  if (product?.reviews?.length > 0) {
    product?.reviews?.forEach((item) => {
      if (item.rating === 1) {
        one += 1;
      }
      if (item.rating === 2) {
        two += 1;
      }
      if (item.rating === 3) {
        three += 1;
      }
      if (item.rating === 4) {
        four += 1;
      }
      if (item.rating === 5) {
        five += 1;
      }
    });
    total = one + two + three + four + five;
    result = (1 * one + 2 * two + 3 * three + 4 * four + 5 * five) / total;
  } else {
    total = 0;
    result = 0;
  }
  const finalResult = parseFloat(result).toFixed(1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
      key={product._id}>
      <div className="bg-sky-100 overflow-hidden shadow-xl hover:pointer-up">
        <Link to={`/product/${product._id}`} className="block relative h-48  ">
          <img
            className="object-cover object-center w-full h-full  block transition-all duration-300  cursor-pointer filter grayscale hover:grayscale-0"
            src={`/images/${product.image1}`}
            alt="product"
          />
          {product.discount > 0 && (
            <span className="absolute top-0 right-0 bg-green-500 text-white text-sm py-1 px-2 rounded-bl">
              {product.discount}% Off
            </span>
          )}
        </Link>

        <div className="flex flex-col items-center mt-2">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {product.title}
          </h2>

          <div className="flex items-center space-x-2 mb-1">
            <RatingStars
              value={finalResult}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <span>({total})</span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-gray-700 text-lg font-medium">
              {currency.format(discountPrice, { code: 'PHP' })}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
