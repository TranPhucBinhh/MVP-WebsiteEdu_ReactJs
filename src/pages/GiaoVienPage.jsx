
import Giaoviendata from "../constants/Giaoviendata";
import TeacherCard from "../giaovien/TeacherCard";


export default function GiaovienList() {
  return (

    <div className="w-full md:px-16 sm:px-10 px-4 py-6 space-y-6 mt-20">
      <div className="w-full md:px-16 sm:px-10 px-4 py-6 space-y-6 mt-20">
        {/* Header + ô tìm kiếm */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-2xl font-bold text-neutral-800">Giáo Viên</h2>

          {/* Ô tìm kiếm */}
          <div className="flex items-center gap-2 w-full md:w-96">
            <input
              placeholder="Tìm giáo viên..."
              className="w-full p-2 border rounded text-black"
            />
            <button className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700">
              Tìm
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Giaoviendata.map((t) => (
          <TeacherCard key={t.id} {...t} />
        ))}
      </div>
    </div>
  );

}
