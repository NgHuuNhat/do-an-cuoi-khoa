import React from 'react'
import './css/KhamPha.css'

export default function KhamPha() {
    return (
        // <></>
        <div id='khamPha' className='container'>
            <div className="my-5 p-1 bg-light flex flex-wrap justify-center gap-3">
                <button className="rounded-lg text-md bg-white text-black border border-gray-300 hover:border-gray-900 duration-300 px-6 py-2">
                    Loại nơi ở
                </button>
                <button className="rounded-lg text-md bg-white text-black border border-gray-300 hover:border-gray-900 duration-300 px-6 py-2">
                    Giá
                </button>
                <button className="rounded-lg text-md bg-white text-black border border-gray-300 hover:border-gray-900 duration-300 px-6 py-2">
                    Đặt ngay
                </button>
                <button className="rounded-lg text-md bg-white text-black border border-gray-300 hover:border-gray-900 duration-300 px-6 py-2">
                    Phòng và phòng ngủ
                </button>
                <button className="rounded-lg text-md bg-white text-black border border-gray-300 hover:border-gray-900 duration-300 px-6 py-2">
                    Bộ lọc khác
                </button>
            </div>

            <div className="my-5 p-1 bg-light grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a href="/rooms/ho-chi-minh" className="w-full ant-card ant-card-bordered ant-card-hoverable flex items-center cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out css-mzwlov">
                    <div className="ant-card-body">
                        <div className="flex items-center gap-3">
                            <img src="https://res.cloudinary.com/rawn/image/upload/hnevi0eqxhxjgh6skplj.webp" alt='' className="w-12 h-12 rounded-lg object-cover" />
                            <div>
                                <h2 className="font-bold" style={{ fontSize: '1rem', color: 'black' }}>Hồ Chí Minh</h2>
                                <p className="text-gray-700 text-sm">15 phút lái xe</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/rooms/can-tho" className="w-full ant-card ant-card-bordered ant-card-hoverable flex items-center cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out css-mzwlov">
                    <div className="ant-card-body">
                        <div className="flex items-center gap-3">
                            <img src="https://res.cloudinary.com/rawn/image/upload/lbe3gpqkrwmzt98ce2nj.webp" alt='' className="w-12 h-12 rounded-lg object-cover" />
                            <div>
                                <h2 className="font-bold" style={{ fontSize: '1rem', color: 'black' }}>Cần Thơ</h2>
                                <p className="text-gray-700 text-sm">3 giờ lái xe</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/rooms/nha-trang" className="w-full ant-card ant-card-bordered ant-card-hoverable flex items-center cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out css-mzwlov">
                    <div className="ant-card-body">
                        <div className="flex items-center gap-3">
                            <img src="https://res.cloudinary.com/rawn/image/upload/xi99sldgebhfvd3n66yx.webp" alt='' className="w-12 h-12 rounded-lg object-cover" />
                            <div>
                                <h2 className="font-bold" style={{ fontSize: '1rem', color: 'black' }}>Nha Trang</h2>
                                <p className="text-gray-700 text-sm">6.5 giờ lái xe</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/rooms/ha-noi" className="w-full ant-card ant-card-bordered ant-card-hoverable flex items-center cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out css-mzwlov">
                    <div className="ant-card-body">
                        <div className="flex items-center gap-3">
                            <img src="https://res.cloudinary.com/rawn/image/upload/hnevi0eqxhxjgh6skplj.webp" alt='' className="w-12 h-12 rounded-lg object-cover" />
                            <div>
                                <h2 className="font-bold" style={{ fontSize: '1rem', color: 'black' }}>Hà Nội</h2>
                                <p className="text-gray-700 text-sm">15 phút lái xe</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/rooms/phu-quoc" className="w-full ant-card ant-card-bordered ant-card-hoverable flex items-center cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out css-mzwlov">
                    <div className="ant-card-body">
                        <div className="flex items-center gap-3">
                            <img src="https://res.cloudinary.com/rawn/image/upload/v1skk44cynr7gauhzb4e.webp" alt='' className="w-12 h-12 rounded-lg object-cover" />
                            <div>
                                <h2 className="font-bold" style={{ fontSize: '1rem', color: 'black' }}>Phú Quốc</h2>
                                <p className="text-gray-700 text-sm">7.5 giờ lái xe</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/rooms/da-nang" className="w-full ant-card ant-card-bordered ant-card-hoverable flex items-center cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out css-mzwlov">
                    <div className="ant-card-body">
                        <div className="flex items-center gap-3">
                            <img src="https://res.cloudinary.com/rawn/image/upload/tqrm3cthowneesuafbp0.webp" alt='' className="w-12 h-12 rounded-lg object-cover" />
                            <div>
                                <h2 className="font-bold" style={{ fontSize: '1rem', color: 'black' }}>Đà Nẵng</h2>
                                <p className="text-gray-700 text-sm">45 phút lái xe</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/rooms/da-lat" className="w-full ant-card ant-card-bordered ant-card-hoverable flex items-center cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out css-mzwlov">
                    <div className="ant-card-body">
                        <div className="flex items-center gap-3">
                            <img src="https://res.cloudinary.com/rawn/image/upload/tgt8dxlfwdh41jkptxeg.webp" alt='' className="w-12 h-12 rounded-lg object-cover" />
                            <div>
                                <h2 className="font-bold" style={{ fontSize: '1rem', color: 'black' }}>Đà Lạt</h2>
                                <p className="text-gray-700 text-sm">30 phút lái xe</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/rooms/phan-thiet" className="w-full ant-card ant-card-bordered ant-card-hoverable flex items-center cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out css-mzwlov">
                    <div className="ant-card-body">
                        <div className="flex items-center gap-3">
                            <img src="https://res.cloudinary.com/rawn/image/upload/bt5jrxsl5ljq5bmfqqw0.webp" alt='' className="w-12 h-12 rounded-lg object-cover" />
                            <div>
                                <h2 className="font-bold" style={{ fontSize: '1rem', color: 'black' }}>Phan Thiết</h2>
                                <p className="text-gray-700 text-sm">5 giờ lái xe</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

        </div>
    )
}
