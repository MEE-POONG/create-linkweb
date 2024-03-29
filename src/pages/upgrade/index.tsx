import React, { useEffect, useState } from 'react';
import RootLayoutAccount from '@/components/RootLayoutAcc';
import { PriceData, TableLinkData } from '@/data/default';
import { FaAngleDown, FaCheckCircle, FaCopy, FaSearch, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const UpgradePage: React.FC = () => {

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
      <div className="upgrade container px-6 mx-auto mt-6 grid">
        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Designed for
                business teams like yours
              </h2>
              <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Here at Landwind we focus on
                markets where technology, innovation, and capital can unlock long-term value and drive economic
                growth.
              </p>
            </div>


            {/* Card */}
            <div className="flex flex-wrap justify-center gap-5">
              {PriceData.map((item) => (
                <div key={item?.id} className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                  <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
                    {item?.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    ฿{item?.price}
                    <span className="text-sm text-gray-300">
                      / เดือน
                    </span>
                  </p>
                  <p className="mt-4 text-xs text-gray-600 dark:text-gray-100">
                    {item?.subtitle}
                  </p>
                  <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
                    <li className="mb-3 flex items-center gap-2 ">
                      <FaCheckCircle />
                      {item?.addOn?.linkMax} ลิงค์/เดือน
                    </li>
                    <li className="mb-3 flex items-center gap-2 ">
                      <FaCheckCircle />
                      {item?.addOn?.qr} QR Code/เดือน
                    </li>
                    {item?.addOn?.backoffice ?
                      <li className="mb-3 flex items-center gap-2 ">
                        <FaCheckCircle />
                        ระบบจัดการ
                      </li>
                      : ''}
                  </ul>
                  <Link href={`/upgrade/${item?.id}`} className="py-2 px-4 block w-full bg-black hover:bg-white hover:text-black border-2 border-black text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                    เลือกแผนนี้
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RootLayoutAccount >
  )
}

export default UpgradePage;