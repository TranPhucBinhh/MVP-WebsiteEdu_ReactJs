
import Khoahocdata from "../constants/Khoahocdata";
import { useState } from "react";
import KhoahocCard from "../khoahoc/KhoahocCard";

//Bảng điền form nhập đăng ký
function CourseModal({ open, onClose, course }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 w-full max-w-md space-y-4">
                <h2 className="text-2xl font-bold">Đăng ký {course?.title}</h2>
                <form
                    className="space-y-3"
                    onSubmit={(e) => {
                        e.preventDefault();
                        onClose();
                    }}
                >
                    <input className="w-full p-2 border rounded" placeholder="Tên của bạn" required />
                    <input type="email" className="w-full p-2 border rounded" placeholder="Email" required />
                    <input type="sdt" className="w-full p-2 border rounded" placeholder="Số điện thoại" required />
                    <textarea rows="3" className="w-full p-2 border rounded" placeholder="Tin nhắn" />
                    <button className="w-full px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700">
                        Gửi đăng ký
                    </button>
                </form>
                <button onClick={onClose} className="text-sm text-gray-600 hover:text-red-500">
                    Đóng
                </button>
            </div>
        </div>
    );
}

export default function KhoahocList() {
    // return (
    //     <div className="w-full md:px-16 sm:px-10 px-4 py-6 space-y-6 mt-20">
    //         <h2 className="text-2xl font-bold text-neutral-800">Khóa Học</h2>
    //         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    //             {Khoahocdata.map((t) => (
    //                 <KhoahocCard key={t.id} {...t} />

    //             ))}
    //         </div>
    //     </div>
    // );
    const [open, setOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleOpen = (course) => {
        setSelectedCourse(course);
        setOpen(true);
    };

    return (
        <div className="w-full md:px-16 sm:px-10 px-4 py-6 space-y-6 mt-20">
            <h2 className="text-2xl font-bold text-neutral-800">Khóa Học</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {Khoahocdata.map((t) => (
                    <KhoahocCard key={t.id} {...t} onClick={() => handleOpen(t)} />
                ))}
            </div>

            {/* Modal */}
            <CourseModal open={open} onClose={() => setOpen(false)} course={selectedCourse} />
        </div>
    )
}