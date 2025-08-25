import { Link } from "react-router-dom";
import React from "react";
const TeacherCard = ({
    id,
    gradientFrom,
    gradientVia,
    gradientTo,
    title,
    description,
    country,
    review,
    img,
}) => {
    return (
        <div
            className={`w-full flex flex-col items-center justify-center gap-4 rounded-2xl
                  bg-gradient-to-tr hover:bg-gradient-to-tl
                  ${gradientFrom} ${gradientVia} ${gradientTo}
                  px-10 py-5 transition-all ease-in-out duration-300`}
        >
            {/* Ảnh */}
            <div className="w-60 h-60 rounded-2xl overflow-hidden bg-white/10">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Thông tin */}
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-sm text-neutral-200 text-center">{description}</p>

            {/* Quốc gia + review */}
            <div className="flex items-center gap-2">
                <span className="text-xs bg-white/70 text-sky-900 rounded-full px-3 py-1">
                    {country}
                </span>
                <span className="text-xs bg-yellow-100 text-yellow-700 rounded-full px-3 py-1">
                    ⭐ {review}
                </span>
            </div>

            {/* Nút điều hướng */}
            <div className="flex items-center gap-3 mt-1">
                {/* <Link
                    to="/giaovien"
                    className="px-4 py-2 rounded-full bg-white text-sky-800 font-semibold hover:bg-sky-100 transition"
                >
                    Danh sách
                </Link> */}
                <Link
                    to={`/GiaoVienDetail/${id}`}
                    className="px-4 py-2 rounded-full bg-white text-sky-800 font-semibold hover:bg-sky-100 transition"
                >
                    Xem giáo viên
                </Link>
            </div>
        </div>
    );
};

export default TeacherCard;
