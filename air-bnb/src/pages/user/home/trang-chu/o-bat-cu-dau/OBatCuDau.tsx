import React from 'react'
import './OBatCuDau.css'

export default function OBatCuDau() {
    return (
        <div id='oBatCuDau' className='container'>
            <div className="space-y-3 my-5">
                <h3 className="font-bold mb-4">Ở bất cứ đâu</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
                    <a data-aos="flip-left" href="/rooms/ho-chi-minh" className="aos-init aos-animate">
                        <div className="ant-card ant-card-bordered ant-card-hoverable w-full css-mzwlov">
                            <div className="ant-card-cover">
                                <img className='rounded' alt='' src="https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329222%2Fmjwqhra4wbzlvoo2pe27.jpg&w=1920&q=75" />
                            </div>
                            <div className="ant-card-body">
                                <div className="ant-card-meta">
                                    <div className="ant-card-meta-detail">
                                        <div className="ant-card-meta-title">Toàn bộ nhà</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a data-aos="flip-left" href="/rooms/nha-trang" className="aos-init aos-animate">
                        <div className="ant-card ant-card-bordered ant-card-hoverable w-full css-mzwlov">
                            <div className="ant-card-cover">
                                <img className='rounded' alt='' src="https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329186%2Ffmoml05qcd0yk2stvl9r.jpg&w=1920&q=75" />
                            </div>
                            <div className="ant-card-body">
                                <div className="ant-card-meta">
                                    <div className="ant-card-meta-detail">
                                        <div className="ant-card-meta-title">Chỗ ở độc đáo</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a data-aos="flip-left" href="/rooms/da-lat" className="aos-init aos-animate">
                        <div className="ant-card ant-card-bordered ant-card-hoverable w-full css-mzwlov">
                            <div className="ant-card-cover">
                                <img className='rounded' alt='' src="https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329121%2Fguagj5r2bkccgr1paez3.jpg&w=1920&q=75" />
                            </div>
                            <div className="ant-card-body">
                                <div className="ant-card-meta">
                                    <div className="ant-card-meta-detail">
                                        <div className="ant-card-meta-title">Trang trại và thiên nhiên</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a data-aos="flip-left" href="/rooms/da-nang" className="aos-init aos-animate">
                        <div className="ant-card ant-card-bordered ant-card-hoverable w-full css-mzwlov">
                            <div className="ant-card-cover">
                                <img className='rounded' alt='' src="https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329252%2Fgqhtg9ua6jdrffhbrfv1.jpg&w=1920&q=75" />
                            </div>
                            <div className="ant-card-body">
                                <div className="ant-card-meta">
                                    <div className="ant-card-meta-detail">
                                        <div className="ant-card-meta-title">Cho phép mang theo thú cưng</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
