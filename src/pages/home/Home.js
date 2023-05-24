import HomeProduct from '../../components/home/HomeProduct';
import Nav from '../../components/home/Nav';
import videoFile from '../../assets/videos/videolnc.mp4';
import Footer from '../../components/home/Footer';
import { useRandomCategoriesQuery } from '../../store/services/categoryService';
import { Link } from 'react-router-dom';
const Home = () => {
  const { data, isFetching } = useRandomCategoriesQuery();
  return (
    <>
      <Nav />
      <div className="bg-gray-100 mt-[70px]">
        <div className="relative">
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <video
              src={videoFile}
              type="video/mp4"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.6,
                backgroundColor: 'skyblue',
              }}
              autoPlay
              loop
              muted
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <div className=" text-container text-center md:text-left">
                <h1 className="text-3xl md:text-6xl lg:text-7xl text-gray-700  font-bold mb-4 mt-10">
                  Welcome to {/**/}
                  <span className="text-3xl md:text-6xl lg:text-7xl text-sky-500 font-bold">
                    L
                  </span>
                  <span className="text-3xl md:text-6xl lg:text-7xl text-blue-500 font-bold">
                    N
                  </span>
                  <span className="text-3xl md:text-6xl lg:text-7xl text-indigo-500 font-bold">
                    C
                  </span>
                </h1>
              </div>
              <h2 className="typewriter text-xl text-rose-500 sm:text-xl md:text-2xl lg:text-3xl mb-3">
                <h1>Hollow Block Machine Manufacturer</h1>
              </h2>

              <Link
                to="/shop"
                className="bg-white text-black px-2 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all hover:bg-black hover:text-white">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div
          className="my-container pt-10 pb-10 md:pt-10 md:pb-10"
          style={{ zIndex: 1 }}>
          <h2 className="text-md md:text-3xl lg:text-4xl font-bold text-gray-600 mb-5 mt-5">
            Featured Products
          </h2>
          {!isFetching &&
            data?.categories?.length > 0 &&
            data?.categories
              .slice(0, 1)
              .map((category) => (
                <HomeProduct category={category} key={category._id} />
              ))}
        </div>

        <hr className="border-t-2 text-red-500" />

        <div className="bg-gradient-to-b from-gray-100 via-blue-100 to-blue-100 p-6 ">
          <h2 className="text-3xl font-bold mb-4 text-gray-500">
            Store Located at :
          </h2>
          <div className="mapouter rounded-lg overflow-hidden">
            <div className="gmap_canvas">
              <iframe
                title="location"
                width="100%"
                height="300"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=lnc hollow&t=&z=14&ie=UTF8&iwloc=&output=embed"
                allowFullScreen=""
                loading="lazy"
              />
              <Link href="https://2yu.co"></Link>
              <br />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '.mapouter{position:relative;text-align:right;height:100%;width:100%;}',
                }}
              />
              <Link href="https://embedgooglemap.2yu.co/"></Link>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
