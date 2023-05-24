import { useState } from 'react';
import ScreenHeader from '../../components/ScreenHeader';
import Wrapper from './Wrapper';

const Statistics = () => {
  const [timeFrame, setTimeFrame] = useState('monthly'); // set initial time frame to monthly
  const handleTimeFrameChange = (event) => {
    setTimeFrame(event.target.value);
  };
  return (
    <Wrapper>
      <ScreenHeader>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="total p-3  ">
            <div>
              <article>
                <div className="w-full bg-gray-900 rounded-md overflow-x:auto;">
                  <iframe
                    className="text-center"
                    title="product-monitoring"
                    style={{
                      background: ' #212121, rgb(33, 33, 33)',
                      border: 'none',
                      boxShadow: ' 0 2px 10px 0 rgba(70, 76, 79, .2)',
                      borderRadius: '3px',
                      width: '100%',
                      height: '350px',
                    }}
                    src="https://charts.mongodb.com/charts-online-ordering-system-hhvqg/embed/charts?id=640e48d5-9d2d-4fc1-86a9-02e6c3330485&maxDataAge=60&theme=dark&autoRefresh=true"></iframe>
                </div>
              </article>
            </div>
          </div>

          <div className="total p-3  ">
            <div>
              <article>
                <div className="w-full bg-gray-900 rounded-md overflow-x:auto;">
                  <iframe
                    className="text-center"
                    title="product-monitoring"
                    style={{
                      background: ' #212121, rgb(33, 33, 33)',
                      border: 'none',
                      boxShadow: ' 0 2px 10px 0 rgba(70, 76, 79, .2)',
                      borderRadius: '3px',
                      width: '100%',
                      height: '350px',
                    }}
                    src="https://charts.mongodb.com/charts-online-ordering-system-hhvqg/embed/charts?id=640e4a25-a859-4224-85a1-0f684188ad3b&maxDataAge=60&theme=dark&autoRefresh=true"></iframe>
                </div>
              </article>
            </div>
          </div>
          <div className="total p-3  ">
            <div>
              <article>
                <div className="w-full bg-gray-900 rounded-md overflow-x:auto;">
                  <iframe
                    className="text-center"
                    title="product-monitoring"
                    style={{
                      background: ' #212121, rgb(33, 33, 33)',
                      border: 'none',
                      boxShadow: ' 0 2px 10px 0 rgba(70, 76, 79, .2)',
                      borderRadius: '3px',
                      width: '100%',
                      height: '350px',
                    }}
                    src="https://charts.mongodb.com/charts-online-ordering-system-hhvqg/embed/charts?id=640e4adb-70e0-45d8-86f8-5494f85669eb&maxDataAge=60&theme=dark&autoRefresh=true"></iframe>
                </div>
              </article>
            </div>
          </div>
          <div className="total p-3  ">
            <div>
              <article>
                <div className="w-full bg-gray-900 rounded-md overflow-x:auto;">
                  <iframe
                    className="text-center"
                    title="product-monitoring"
                    style={{
                      background: ' #212121, rgb(33, 33, 33)',
                      border: 'none',
                      boxShadow: ' 0 2px 10px 0 rgba(70, 76, 79, .2)',
                      borderRadius: '3px',
                      width: '100%',
                      height: '350px',
                    }}
                    src="https://charts.mongodb.com/charts-online-ordering-system-hhvqg/embed/charts?id=6405d3e7-7b98-4f09-8193-22764cf18ec4&maxDataAge=60&theme=dark&autoRefresh=true"></iframe>
                </div>
              </article>
            </div>
          </div>
        </div>
      </ScreenHeader>
      <>
        <div className="bg-gray-800 text-gray-400">
          <label htmlFor="reportType" className="mr-2 ">
            Report Type:
          </label>
          <select value={timeFrame} onChange={handleTimeFrameChange}>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>

          {timeFrame === 'daily' && (
            <div className="daily-sales p-3">
              <div>
                <article>
                  <div className="w-full bg-gray-900 rounded-md overflow-x:auto">
                    <iframe
                      className="text-center"
                      title="product-monitoring"
                      style={{
                        background: 'bg-gray-900',
                        border: 'none',
                        boxShadow: '0 2px 10px 0 rgba(70, 76, 79,  .2)',
                        borderRadius: '2px',
                        width: '100%',
                        height: '350px',
                      }}
                      src="https://charts.mongodb.com/charts-online-ordering-system-hhvqg/embed/charts?id=640e15cc-e7f9-48d2-8982-04cbc0e68543&maxDataAge=60&theme=dark&autoRefresh=true"></iframe>
                  </div>
                </article>
              </div>
            </div>
          )}

          {timeFrame === 'weekly' && (
            <div className="weekly-sales p-3">
              <div>
                <article>
                  <div className="w-full bg-gray-900 rounded-md overflow-x:auto;">
                    <iframe
                      className="text-center"
                      title="product-monitoring"
                      style={{
                        background: ' #212121, rgb(33, 33, 33)',
                        border: 'none',
                        boxShadow: ' 0 2px 10px 0 rgba(70, 76, 79, .2)',
                        borderRadius: '3px',
                        width: '100%',
                        height: '350px',
                      }}
                      src="https://charts.mongodb.com/charts-online-ordering-system-hhvqg/embed/charts?id=63f00d35-5123-457a-8d4c-7f4712c9d68c&maxDataAge=60&theme=dark&autoRefresh=true"></iframe>
                  </div>
                </article>
              </div>
            </div>
          )}
          {timeFrame === 'monthly' && (
            <div className="mothtly-sales p-3">
              <div>
                <article>
                  <div className="w-full bg-gray-900 rounded-md overflow-x:auto">
                    <iframe
                      className="text-center"
                      title="product-monitoring"
                      style={{
                        background: 'bg-gray-900',
                        border: 'none',
                        boxShadow: '0 2px 10px 0 rgba(70, 76, 79,  .2)',
                        borderRadius: '2px',
                        width: '100%',
                        height: '350px',
                      }}
                      src="https://charts.mongodb.com/charts-online-ordering-system-hhvqg/embed/charts?id=64047b27-a859-467c-85e0-0f684190bf1d&maxDataAge=60&theme=dark&autoRefresh=true"></iframe>
                  </div>
                </article>
              </div>
            </div>
          )}
        </div>
      </>
    </Wrapper>
  );
};

export default Statistics;
