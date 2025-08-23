
import Giaoviendata from "../constants/Giaoviendata";
import TeacherCard from "../giaovien/TeacherCard";

export default function GiaovienList() {
  return (
    <div className="w-full md:px-16 sm:px-10 px-4 py-6 space-y-6 mt-20">
      <h2 className="text-2xl font-bold text-neutral-800">Giáo Viên</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Giaoviendata.map((t) => (
          <TeacherCard key={t.id} {...t} />
        ))}
      </div>
    </div>
  );
}