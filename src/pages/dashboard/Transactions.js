import { useParams } from 'react-router-dom';
import ScreenHeader from '../../components/ScreenHeader';
import Spinner from '../../components/Spinner';
import currency from 'currency-formatter';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import { useGetAllOrdersQuery } from '../../store/services/orderService';
import Wrapper from './Wrapper';
import ReactToPrint from 'react-to-print';
import { BsPrinter, BsSearch } from 'react-icons/bs';
import React, { useEffect, useRef, useState } from 'react';
import Pagination from '../../components/Pagination';
import 'react-datepicker/dist/react-datepicker.css';

const Transactions = () => {
  let { page } = useParams();
  page = page ? page : 1;
  const [searchQuery, setSearchQuery] = useState('');
  const [reportType, setReportType] = useState('');

  const handleReportTypeChange = (e) => {
    setReportType(e.target.value);
  };

  const { data, isFetching, refetch } = useGetAllOrdersQuery({
    page: page,
    perPage: 10,
    sort: 'date',
    search: searchQuery,
  });
  console.log(data, isFetching);
  const componentRef = useRef();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleSearch = () => {
    refetch({ search: searchQuery });
  };
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortColumn, setSortColumn] = useState('createdAt');

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  return (
    <Wrapper>
      <ScreenHeader>
        <div className="px-2 py-2">
          <h3 className="text-xl font-semibold mb-4 btn-dark inline-block py-2 px-4 rounded-md text-white text-center">
            Sales Report
          </h3>
          <div className="flex items-center mb-4">
            <label htmlFor="reportType" className="mr-2 ">
              Report Type:
            </label>
            <select
              id="reportType"
              className="border rounded px-2 py-1 text-gray-800"
              value={reportType}
              onChange={handleReportTypeChange}>
              <option value="">Select a report type</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthlyAndYearly">Monthly and Yearly</option>
            </select>
          </div>
          {reportType === 'daily' && (
            <div>
              <h2 className="text-l font-semibold mb-4">Daily Sales Report</h2>
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-gray-900 text-gray-500">
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Total Sales</th>
                    <th className="px-4 py-2">Daily Order Value</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.dailyReport.map((item) => (
                    <tr key={item._id} className="bg-gray-900 text-gray-500">
                      <td className="border px-4 py-2">{item._id}</td>
                      <td className="border px-4 py-2">
                        {currency.format(item.totalDailySales, { code: 'PHP' })}
                      </td>
                      <td className="border px-4 py-2">
                        {currency.format(item.dailyOrderValue, { code: 'PHP' })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {reportType === 'weekly' && (
            <div>
              <h2 className="text-l font-semibold mb-4">Weekly Sales Report</h2>
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-gray-900 text-gray-500">
                    <th className="px-4 py-2">Weeks</th>
                    <th className="px-4 py-2">Total Sales</th>
                    <th className="px-4 py-2"> Weekly Order Value: </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.weeklyReport.map((item) => (
                    <tr key={item._id} className="bg-gray-900 text-gray-500">
                      <td className="border px-4 py-2">Week - {item._id}</td>
                      <td className="border px-4 py-2">
                        {currency.format(item.totalWeeklySales, {
                          code: 'PHP',
                        })}
                      </td>
                      <td className="border px-4 py-2">
                        {currency.format(item.weeklyOrderValue, {
                          code: 'PHP',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {reportType === 'monthlyAndYearly' && (
            <div>
              <h2 className="text-l font-semibold mb-4">
                Monthly and Yearly Sales Report
              </h2>
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-gray-900 text-gray-500">
                    <th className="px-4 py-2">Year</th>
                    <th className="px-4 py-2">Total Sales</th>
                    <th className="px-4 py-2">Yearly Order Value</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.monthlyAndYearlyReport.map((yearlyReport) => (
                    <React.Fragment key={yearlyReport._id}>
                      <tr className="bg-green-600 text-gray-900">
                        <td className="border px-4 py-2">{yearlyReport._id}</td>
                        <td className="border px-4 py-2">
                          {currency.format(yearlyReport.yearlySales, {
                            code: 'PHP',
                          })}
                        </td>
                        <td className="border px-4 py-2">
                          {currency.format(yearlyReport.yearlyOrderValue, {
                            code: 'PHP',
                          })}
                        </td>
                      </tr>
                      {yearlyReport.monthlyReport.map((monthlyReport) => (
                        <tr
                          key={`${yearlyReport._id}-${monthlyReport.month}`}
                          className="bg-gray-900 text-gray-500">
                          <td className="border px-4 py-2">
                            {moment()
                              .month(monthlyReport.month - 1)
                              .format('MMMM')}
                          </td>
                          <td className="border px-4 py-2">
                            {currency.format(monthlyReport.totalMonthlySales, {
                              code: 'PHP',
                            })}
                          </td>
                          <td className="border px-4 py-2">
                            {currency.format(monthlyReport.monthlyOrderValue, {
                              code: 'PHP',
                            })}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </ScreenHeader>
      <div className="flex items-center">
        <span className="ml-4">
          <ReactToPrint
            trigger={() => (
              <button className="flex items-center btn bg-indigo-600 py-2 text-sm font-semibold px-2">
                <BsPrinter /> <span className="ml-2">Print</span>
              </button>
            )}
            content={() => componentRef.current}
          />
        </span>
        <span className="w-full flex justify-between sm:justify-end items-center py-2">
          <input
            type="text"
            value={searchQuery}
            className="block w-full mr-2 sm:w-auto py-1 px-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by customer name"
          />
          <button
            className="flex items-center btn bg-indigo-600 py-1 text-sm font-semibold px-2"
            onClick={handleSearch}>
            <BsSearch /> <span className="ml-2">Search</span>
          </button>
        </span>
      </div>

      {!isFetching ? (
        data?.orders.length > 0 && (
          <>
            <div ref={componentRef}>
              <div className="overflow-x-auto">
                <table className="dashboard-table">
                  <thead>
                    <tr className="dashboard-tr">
                      <th className="dashboard-th">Order No.</th>
                      <th className="dashboard-th">Customer</th>
                      <th className="dashboard-th">
                        Order Date
                        <button onClick={() => handleSort('createdAt')}>
                          <i className=" ml-2 bi bi-sort-numeric-down-alt text-white"></i>
                        </button>
                      </th>
                      <th className="dashboard-th"> Total Orders</th>
                      <th className="dashboard-th">
                        Status
                        <button onClick={() => handleSort('status')}>
                          <i className=" ml-2 bi bi-sort-numeric-down-alt text-white"></i>
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.orders
                      .filter(
                        (order) =>
                          order._id
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()) ||
                          order.userId.name
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()),
                      )
                      .sort((a, b) => {
                        if (sortOrder === 'asc') {
                          return a[sortColumn] > b[sortColumn] ? 1 : -1;
                        } else {
                          return a[sortColumn] < b[sortColumn] ? 1 : -1;
                        }
                      })
                      .map((order) => (
                        <tr key={order._id}>
                          <td className="dashboard-td">{order._id}</td>
                          <td className="dashboard-td">{order.userId.name}</td>
                          <td className="dashboard-td">
                            {moment(order.createdAt).format('MMMM Do YYYY')}
                          </td>
                          <td className="dashboard-td">
                            {currency.format(order.total, { code: 'PHP' })}
                          </td>
                          <td className="dashboard-td">
                            {order.status ? 'Delivered' : 'Under Process'}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <Pagination
              page={parseInt(page)}
              count={data.count}
              perPage={data.perPage}
              path="dashboard/report/all"
            />
          </>
        )
      ) : (
        <Spinner />
      )}
    </Wrapper>
  );
};

export default Transactions;
