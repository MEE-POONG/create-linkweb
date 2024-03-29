import React, { useEffect, useState } from 'react';
import RootLayoutAccount from '@/components/RootLayoutAcc';
import { TableLinkData } from '@/data/default';
import { FaAngleDown, FaCopy, FaSearch, FaTimes } from 'react-icons/fa';

const TableLinkPage: React.FC = () => {

  const handleCopyLink = async (link: any) => {
    try {
      await navigator.clipboard.writeText(link);
      alert('Success to copy!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  return (
    <RootLayoutAccount>
      <div className="table-link container px-6 mx-auto mt-6 grid">

        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">

          <div className="flex justify-between flex-1">
            <h2 className="font-semibold text-gray-700 dark:text-gray-200 lg:text-xl lx:text-2xl flex items-center">
              รายการ Get Link
            </h2>
            <div className="relative w-full lg:w-72 md:w-64 focus-within:text-purple-500">
              <div className="absolute inset-y-0 flex items-center pl-2">
                <FaSearch />
              </div>
              <input
                className="w-full pl-8 pr-2 py-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-gray-100 focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                type="text" placeholder="Search for projects" aria-label="Search" />
            </div>
          </div>
          <div className="items-center justify-center py-4">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="text-left w-full border border-gray-300">
                <thead className="flex w-full text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-xs overflow-y-scroll scroll-cler">
                  <tr className="flex w-full">
                    <th className="p-2 border border-gray-300 w-14">No.</th>
                    <th className="p-2 border border-gray-300 w-60">Title</th>
                    <th className="p-2 border border-gray-300 w-60">Prototype</th>
                    <th className="p-2 border border-gray-300 md:w-full w-60">Link Build</th>
                    <th className="p-2 border border-gray-300 w-32">Count Use</th>
                    <th className="p-2 border border-gray-300 w-12"></th>
                  </tr>
                </thead>
                <tbody className="bg-grey-light text-center flex flex-col items-center justify-between overflow-y-scroll w-full h-auto md:max-h-[70vh] max-h-[67vh]">
                  {TableLinkData?.map((item, index) => (
                    <tr key={index} className="flex w-full">
                      <td className="p-2 border border-gray-300 w-14 text-right">{index + 1}</td>
                      <td className="p-2 border border-gray-300 w-60">{item?.title}</td>
                      <td className="p-2 border border-gray-300 w-60">{item?.destination}</td>
                      <td className="p-2 border border-gray-300 md:w-full w-60">
                        {item?.linkBuild}
                        <button
                          onClick={() => handleCopyLink(item?.linkBuild)}
                          className='ml-2 text-green-500 hover:text-green-800'
                        >
                          <FaCopy />
                        </button>
                      </td>
                      <td className="p-2 border border-gray-300 w-32">
                        <p className="text-md font-medium text-gray-600 dark:text-white">
                          {item?.count}
                        </p>
                      </td>
                      <td className="p-2 border border-gray-300 w-12 text-center">
                        <button className='flex justify-center items-center w-full h-full text-red-500 hover:text-red-800'>
                          <FaTimes className='' />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-between">

            <nav aria-label="Page navigation example">
              <ul className="inline-flex items-center -space-x-px">
                <li>
                  <a href="#" className="block py-2 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    <span className="sr-only">Previous</span>
                    &lsaquo;
                  </a>
                </li>
                <li>
                  <a href="#" aria-current="page" className="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100">1</a>
                </li>
                <li>
                  <a href="#" className="py-2 px-3 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                </li>
                <li>
                  <a href="#" className="py-2 px-3 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">3</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    <span className="sr-only">Next</span>
                    &rsaquo;
                  </a>
                </li>
              </ul>
            </nav>
            <div className="relative inline-block w-24 text-gray-700">
              <select
                className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
                aria-placeholder='Regular input'
              >
                <option>10</option>
                <option>50</option>
                <option>100</option>
                <option>500</option>
                <option>1000</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <FaAngleDown className='text-black-500' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayoutAccount >
  )
}

export default TableLinkPage;