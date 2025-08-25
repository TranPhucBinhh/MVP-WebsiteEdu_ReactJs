import React from 'react'

const Modal = ({ open, onClose, course }) => {
    if (!open) return null; // nếu không bật thì không hiển thị

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md space-y-4">
                <h2 className="text-2xl font-bold">Đăng ký {course?.title}</h2>

                <form className="space-y-3">
                    <input
                        type="text"
                        placeholder="Tên của bạn"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                    />
                    <textarea
                        placeholder="Tin nhắn"
                        className="w-full p-2 border rounded"
                        rows="3"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700"
                    >
                        Gửi đăng ký
                    </button>
                </form>

                <button
                    onClick={onClose}
                    className="text-sm text-gray-600 hover:text-red-500"
                >
                    Đóng
                </button>
            </div>
        </div>
    );
};
const KhoahocCard = ({ img, gradientFrom, gradientVia, gradientTo, title, description, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`w-full flex flex-col items-center justify-center gap-8 rounded-2xl 
                  bg-gradient-to-tr hover:bg-gradient-to-tl 
                  ${gradientFrom} ${gradientVia} ${gradientTo} 
                  px-10 py-12 transition-all ease-in-out duration-300 cursor-pointer`}
        >
            {/* img */}
            <div
                className="w-25 h-30 flex items-center justify-center 
                   rounded-2xl bg-gradient-to-tr from-indigo-500 via-sky-700 to-purple-700"
            >
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Tieu de */}
            <h3 className="text-xl font-semibold text-white">{title}</h3>

            {/* Mo ta */}
            <p className="text-sm text-neutral-200 text-center">{description}</p>

        </div>
    )
}

export default KhoahocCard