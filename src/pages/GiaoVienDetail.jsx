
import { useParams, Link } from "react-router-dom";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Giaoviendata from "../constants/Giaoviendata";

export default function GiaovienDetail() {
    const { id } = useParams();
    const teacher = Giaoviendata.find((t) => t.id === id);

    const formRef = useRef(null);
    const [status, setStatus] = useState("");

    if (!teacher) return <div className="p-6">Không tìm thấy giáo viên.</div>;
    // GỬI EMAIL
    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus("Đang gửi...");
        try {
            await emailjs.sendForm(
                "service_siba2cf",
                "template_rm7j8bs",
                formRef.current,
                { publicKey: "C-2bHq98i5Evfn4GA" }
            );
            setStatus("Đã gửi liên hệ thành công!");
            formRef.current.reset();
        } catch (err) {
            console.error(err);
            setStatus("Gửi thất bại. Vui lòng thử lại.");
        }
    };


    return (
        <div className="w-full md:px-16 sm:px-10 px-4 py-6 space-y-6 mt-20">
            <Link to="/Giaovien" className="text-sky-700 underline">← Quay lại danh sách</Link>
            <div className="flex flex-col md:flex-row gap-6">
                <img src={teacher.img} alt={teacher.title} className="w-72 h-72 object-cover rounded-xl" />
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">{teacher.title}</h1>
                    <p className="text-neutral-700">{teacher.description}</p>
                    <p>Quốc tịch: <b>{teacher.country}</b></p>
                    <p>Đánh giá: <b>⭐ {teacher.review}</b></p>

                    {/* dùng iframe để nhảy qua youtube */}
                    {teacher.youtube && (
                        <div className="space-y-2">
                            <a
                                href={teacher.youtube}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                            >
                                Xem lớp học mẫu
                            </a>

                            {/* Nhúng xem trực tiếp */}
                            <div className="aspect-video w-full max-w-2xl">
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src={teacher.youtube.replace("watch?v=", "embed/")}
                                    title="YouTube demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}

                    {/* form đăng ký gửi email về (chưa thực hiện được) */}
                    <div className="border rounded-lg p-4 space-y-3 max-w-md ">
                        <h2 className="text-xl font-semibold">Học với giáo viên này</h2>
                        <form ref={formRef} onSubmit={sendEmail} className="space-y-3">

                            <input name="to_name" className="w-full p-2 border rounded" placeholder="Tên của bạn" required />
                            <input type="email" name="email" className="w-full p-2 border rounded" placeholder="Email" required />
                            <textarea name="message" rows="3" className="w-full p-2 border rounded" placeholder="Tin nhắn cho giáo viên" required />
                            <input type="hidden" name="teacher_id" value={teacher.id} />
                            <input type="hidden" name="teacher_name" value={teacher.title} />
                            {/* <input type="hidden" name="teacher_id" value={teacher.id} /> */}
                            <button className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700">Hoàn tất lựa chọn</button>
                        </form>
                        {status && <p className="text-sm text-neutral-600">{status}</p>}

                        {/* Đặt lịch chỉ mới hiển thị ở màn hình chưa thực hiện được code logic */}
                        <div className="border rounded-lg p-4 space-y-3 max-w-md">
                            <h2 className="text-xl font-semibold">Đặt lịch học thử</h2>
                            <input type="date" className="w-full p-2 border rounded" />
                            <input type="time" className="w-full p-2 border rounded" />
                            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                                Đặt lịch
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
