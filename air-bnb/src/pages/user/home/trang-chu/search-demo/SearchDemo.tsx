import React from 'react'
import './SearchDemo.css'

export default function SearchDemo() {
    return (
        <div id='searchDemo' className='container'>
            <div className="custom-shadow grid grid-cols-12 smm:grid-cols-1 border-1 border-gray-300 md:rounded-full">
                <div className="col-span-3 flex-1 px-6 py-3 flex flex-col justify-center items-center cursor-pointer">
                    <p className="text-sm">Địa điểm</p>
                    <p className="text-sm text-gray-400">Bạn sắp đi đâu?</p>
                    <div className="smm:border-b md:hidden smm:border-gray-400 smm:w-9/12 py-2" />
                </div>
                <div className="col-span-1 smm:hidden flex justify-center">
                    <div className="my-3 border-l border-gray-400" />
                </div>
                <div className="col-span-4 flex-1 smm:h-16 p-3 flex flex-col justify-center items-center cursor-pointer relative">
                    <p>19/06/2024 – 26/06/2024</p>
                    <div className="smm:border-b md:hidden smm:border-gray-400 smm:w-9/12 py-2" />
                </div>
                <div className="col-span-1 flex smm:hidden justify-center">
                    <div className="my-3 border-l border-gray-400" />
                </div>
                <div className="col-span-3 flex-1 p-3 flex justify-center items-center cursor-pointer relative gap-3">
                    <p>Thêm khách</p>
                    <div style={{backgroundColor: '#fe6b6e'}} className="w-12 h-12 bg-main ml-5 hover:bg-[#9e3e4e] duration-300 text-white rounded-full p-2 flex justify-center items-center">
                        <span role="img" aria-label="search" className="pb-3 pr-3 anticon anticon-search h-3 w-3">
                            <svg className='w-5 h-5' viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}
