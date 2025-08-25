import React, { useEffect } from 'react'
import Hero from '../hero/Hero.jsx'
import Khoahoc from '../khoahoc/KhoahocCard.jsx';
import Giaovien from '../giaovien/Giaovien.jsx';
import TeacherCard from '../giaovien/TeacherCard.jsx';
import GiaoVienPage from '../pages/GiaoVienPage.jsx';
import Giaoviendata from "../constants/Giaoviendata";
import { Link } from "react-router-dom";
import Khoahocdata from '../constants/Khoahocdata.js';
import KhoahocCard from '../khoahoc/KhoahocCard.jsx';

export const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); //cuộn màn hình

    return (
        <div className='space-y-16 w-full min-h-screen flex flex-col pb-10'>
            {/* {Hero section} */}
            <Hero />
            {/* Container chung cho 2 section */}
            <div className="w-full md:px-16 sm:px-10 px-4 pt-4 pb-8 space-y-8">
                {/* Khóa Học */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-neutral-800">Khóa Học</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        {Khoahocdata.slice(0, 4).map((t) => (
                            <KhoahocCard key={t.id} {...t} />
                        ))}
                    </div>
                    <Link
                        to="/khoahoc"   // 👈 đường dẫn trang tất cả khóa học
                        className="mt-4 text-sky-600 hover:underline"
                    >
                        Xem tất cả khóa học
                    </Link>
                </section>
                {/* Giáo Viên */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-neutral-800">Giáo Viên</h2>
                    {/* ở đây chỉ lấy 6 giáo viên */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {Giaoviendata.slice(0, 6).map((t) => (
                            <TeacherCard key={t.id} {...t} />
                        ))}
                    </div>
                </section>
            </div>


        </div>

    )
}

export default Home