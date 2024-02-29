import RootLayoutAccount from "@/components/RootLayoutAcc";
import Link from "next/link";
import React from "react";


const PaymentHistory: React.FC = () => {
    return (
        <RootLayoutAccount>
            <div className="container mx-auto my-10 p-5">
                <h2 className="text-2xl font-semibold ">ประวัติการชำระเงิน</h2>
                <p className="text-gray-400 text-base mt-1">ดูประวัติการชำระเงินทั้งหมดได้ที่นี่</p>
                <hr />
                <div className="overflow-x-auto drop-shadow-xl mt-8">
                    <table className="w-full my-0 bg-white rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-purple-500 text-gray-50">
                                <th className="py-3 px-4 text-left">วันที่ชำระ</th>
                                <th className="py-3 px-4 text-left">รสายละเอียด</th>
                                <th className="py-3 px-4 text-left">เดือนที่ใช้</th>
                                <th className="py-3 px-4 text-left">จำนวนเงิน <span className="text-xs ">(รวมภาษี)</span></th>
                                <th className="py-3 px-4 text-left">รายละเอียดการชำระเงิน</th>
                                <th className="py-3 px-4 text-left">Status</th>
                                <th className="py-3 px-4 text-left">ข้อมูลใบกำกับภาษี</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-blue-gray-200 hover:bg-purple-50">
                                <td className="py-3 px-4">12/02/2567</td>
                                <td className="py-3 px-4">พรีเมียม</td>
                                <td className="py-3 px-4">12/02/2567 - 11/03/2567</td>
                                <td className="py-3 px-4">฿ 600.08</td>
                                <td className="py-3 px-4 text-purple-500">
                                    <Link href=''>View</Link>
                                </td>
                                <td className="py-3 px-4 text-green-500">success</td>
                                <td className="py-3 px-4 text-purple-500">
                                    <Link href=''>View</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </RootLayoutAccount>
    )
}
export default PaymentHistory;