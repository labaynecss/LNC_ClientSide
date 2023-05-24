import { Link } from 'react-router-dom';
import Nav from './Nav';

const ContactUs = () => {
  return (
    <>
      <Nav />
      <div className="container mt-10 mx-auto py-12">
        <h1 className="text-3xl font-semibold mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-4 text-gray-400">Mobile Number :</p>
            <p className="mb-4 text-gray-400">+63 920 2653 002</p>

            <p className="mb-4 text-gray-400 space-between">Email :</p>
            <Link to="/#" className="mb-4 text-gray-400">
              LNCManufaturing@gmail.com
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
            <form action="#" method="POST">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full border border-gray-400 p-2 rounded-md"
                  required=""
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full border border-gray-400 p-2 rounded-md"
                  required=""
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2">
                  Message:
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={5}
                  className="w-full border border-gray-400 p-2 rounded-md"
                  required=""
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  disabled={true}
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
