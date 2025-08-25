import React from 'react'
import { Link } from "react-router-dom";
// const Giaovien = () => {
//     return (
//         <div className="w-full md:px-15 sm:px-10 px-4 space-y-8">
//             {/* Top Section */}
//             <div className="w-full flex items-center justify-between">
//                 <h2 className="text-2xl font-bold text-neutral-800">
//                     Giáo Viên
//                 </h2>

//                 <div className="flex items-center gap-4">
//                     <Link
//                         to="/giaovien"
//                         className="flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-sky-800 cursor-pointer ease-in-out duration-300"
//                     >
//                         View All <FaAnglesRight />
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Giaovien

const Giaovien = ({ id, gradientFrom, gradientVia, gradientTo, title, description, country, review, img }) => {
    return (
        <div
            className={`w-full flex flex-col items-center justify-center gap-4 rounded-2xl
                  bg-gradient-to-tr hover:bg-gradient-to-tl
                  ${gradientFrom} ${gradientVia} ${gradientTo}
                  px-10 py-5 transition-all ease-in-out duration-300 cursor-pointer`}
        >
            {/* Vòng tròn icon */}
            <div
                className="w-60 h-60 flex items-center justify-center
                   rounded-2xl bg-gradient-to-tr from-indigo-500 via-sky-700 to-purple-700"
            >
                {/* <span className="text-4xl font-bold text-neutral-50">{icon}</span> */}
                <img src={img} alt={title} className="w-60 h-60" />
            </div>
            {/* Tieu de */}
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            {/* Mo ta */}
            <p className="text-sm text-neutral-200 text-center">{description}</p>
            <p className="text-sm text-neutral-200 text-center">Quốc tịch: {country}</p>
            <p className="text-sm text-neutral-200 text-center">Đánh giá: {review}</p>
            <Link
                to="/giaovien"
                className="mt-2 px-5 py-2 rounded-full bg-white text-sky-800 font-semibold hover:bg-sky-100 transition">
                Xem Giáo Viên
            </Link>
            <Link
                to={`/pages/GiaoVienDetail/${id}`} // id là props hoặc index của giáo viên
                className="mt-2 px-5 py-2 rounded-full bg-white text-sky-800 font-semibold hover:bg-sky-100 transition">
                Xem Giáo Viên
            </Link>

        </div>

    )
}

export default Giaovien
