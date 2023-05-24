import { Link } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';

const AboutUs = () => {
  return (
    <>
      <Nav />
      <div className="mt-10">
        <div
          className="bg-cover bg-center py-5"
          style={{ backgroundImage: "url('/images/storybanner.png')" }}>
          <div className="py-8 md:py-16 px-4 md:px-8 lg:px-16 max-w-screen-lg mx-auto text-left text-gray-900">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-base md:text-lg mb-8">
              LNC HOLLOW BLOCK MACHINE MANUFACTURER began selling their product
              in 1997 and is still doing so today, in 2023, in St. Rita
              Guiguinto, Bulacan.
            </p>
            <p className="text-base md:text-lg mb-8">
              Despite the store experiencing many ups and downs over the past 20
              years, the owner has persevered because they have faith in the
              people who work very hard for the business and support them by
              giving and assisting them to get through tough times.
            </p>
            <p className="text-base md:text-lg mb-8">
              We pride ourselves on providing the best possible shopping
              experience for our customers. From our top-quality products to our
              exceptional customer service, we're here to make sure you're
              completely satisfied with your purchase.
            </p>
            <div className="flex justify-center">
              <Link
                to="/shop"
                className="bg-white text-black text-center px-3 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all hover:bg-sky-500 hover:text-white">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <hr className="border-t-2 text-red-500" />
        <div
          className="bg-sky-200 py-12 px-4 sm:px-6 lg:px-8"
          style={{ backgroundImage: "url('/images/banner.png')" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="mt-10 lg:mt-0 lg:col-span-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center typewriter">
                {' '}
                Meet Our Business Owners
              </h1>
              <div className="grid grid-cols-2 gap-4 ">
                <div className="flex flex-col items-center justify-center">
                  <div className="max-w-4xl mx-auto my-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex items-center justify-center shadow-lg  ">
                        <img
                          src="/images/owner2.jpg"
                          alt="CEO"
                          className="w-full h-full object-cover rounded-lg "
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <p className="text-gray-700 text-lg  font-bold mt-1">
                          Name: Hernanie B. Clacio
                        </p>
                        <p className="text-gray-700 text-lg mb-6">
                          I have been running this business for 20 years; it was
                          inherited by my boss, and I continued until I grew as
                          an owner. I plan every new machine I discover and
                          offer it to the market.
                        </p>

                        <p className="text-gray-700 text-lg">
                          Contact: 0949 958 2443
                        </p>
                        <Link
                          to="https://www.facebook.com/hernanie.clacio.1"
                          className="text-gray-700 text-lg">
                          Email:hernanie.clacio.@gmail.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="max-w-4xl mx-auto my-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex items-center justify-center ">
                        <img
                          src="/images/owner1.jpg"
                          alt="CEO"
                          className="w-full h-full object-cover rounded-lg shadow-lg "
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <p className="text-gray-700 text-lg  font-bold mt-1">
                          Name: Lilia T. Clacio
                        </p>
                        <p className="text-gray-700 text-lg mb-6">
                          We take great satisfaction in giving our clients the
                          greatest purchasing experience possible. We're here to
                          make sure you're entirely satisfied with your
                          purchase, from our high-quality items.
                        </p>

                        <p className="text-gray-700 text-lg">
                          Contact: 0949 958 2443
                        </p>
                        <Link
                          to="https://www.facebook.com/hernanie.clacio.1"
                          className="text-gray-700 text-lg">
                          Email: lilia.clacio.90@gmail.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-sky-200 py-5"
            style={{ backgroundImage: "url('/images/banner.png')" }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl text-center font-bold text-gray-900 mb-8">
                Our Online Marketing Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6   hover:pointer-up">
                  <img
                    src="/images/team-member-1.jpg"
                    alt="Team Member 1"
                    className="w-40 h-40 object-cover rounded-full mb-4"
                  />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Mary Rose Clacio
                  </h3>
                  <p className="text-gray-700 text-base">Head of Marketing</p>
                  <p className="text-gray-700 text-base mt-2">
                    As a marketing manager, you'll be responsible for managing a
                    team of marketing professionals.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6  hover:pointer-up">
                  <img
                    src="/images/team-member-2.jpg"
                    alt="Team Member 2"
                    className="w-40 h-40 object-cover rounded-full mb-4"
                  />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Mark Anthony Mayhay
                  </h3>
                  <p className="text-gray-700 text-base">Marketing Manager</p>
                  <p className="text-gray-700 text-base mt-2">
                    Able to come up with creative ideas for marketing campaigns
                    and solutions to problems.
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6  hover:pointer-up">
                  <img
                    src="/images/team-member-3.jpg"
                    alt="Team Member 3"
                    className="w-40 h-40 object-cover rounded-full mb-4"
                  />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Jonathan Camero
                  </h3>
                  <p className="text-gray-700 text-base">
                    Marketing Coordinator
                  </p>
                  <p className="text-gray-700 text-base mt-2">
                    I have a good understanding of the industry they work in,
                    including market trends, consumer behavior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t-2 text-red-500" />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
