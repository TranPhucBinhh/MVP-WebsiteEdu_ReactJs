# React + Vite

Hướng dẫn cài đặt và chạy:
=> B1: Clone or tải file zip về máy tính
=> B2: Mở Visual Studio Code và open file : MVP-WebsiteEdu_ReactJs-main
=> B3: Mở Terminal và chạy lệnh: cd MVP-WebsiteEdu_ReactJs-main
=> B4: chạy lệnh npm run dev

MVP Website TPB Education bằng ReactJs
Bao gồm các giao diện: Trang Chủ, Giáo Viên, Khóa Học, Đánh giá, Cộng Đồng, Liên Hệ
Core chính: Người học có thể tìm giáo viên phù hợp, đặt lịch học thử, và sau đó mua gói học
Website đã thực hiện được theo core được các trang: Trang Chủ, Giáo Viên, Khóa Học để người học có thể hình dung và tìm được giáo viên, khóa học phù hợp.
những trang còn lại sẽ phát triển và update dần thêm cho hoàn thiện.
# TPB Education — React + Vite (MVP)

> **Vi / En** – README song ngữ. Scroll xuống dưới để xem tiếng Anh.

---

## 🧭 Giới thiệu (VI)

MVP Website giáo dục giúp **người học tìm giáo viên phù hợp, đặt lịch học thử, và mua gói học**. Phiên bản hiện tại đã triển khai các trang cốt lõi để người dùng hình dung hành trình học tập.

**Các trang đã có:** Trang Chủ, Giáo Viên, Khóa Học
**Sẽ phát triển:** Đánh giá, Cộng Đồng, Liên Hệ


## 🚀 Yêu cầu hệ thống

* **Node.js** ≥ 18.x (khuyến nghị LTS)
* **npm** ≥ 9.x (hoặc **pnpm** / **yarn**)
* Hệ điều hành: Windows / macOS / Linux

Kiểm tra phiên bản:

```bash
node -v
npm -v
```

---

## 📦 Cài đặt & Chạy (Quick Start)

> Nếu bạn chỉ cần chạy nhanh bản dev, làm theo 4 bước gốc bên dưới. Khuyến nghị thêm `npm install` để cài dependencies.

### Cách 1 – Theo hướng dẫn gốc

1. **Clone / Tải zip** dự án về máy
2. **Mở Visual Studio Code** và mở thư mục: `MVP-WebsiteEdu_ReactJs-main`
3. **Mở Terminal** và chạy:

   ```bash
   cd MVP-WebsiteEdu_ReactJs-main
   ```
4. **Chạy dev server**:

   ```bash
   npm install   # (khuyến nghị – nếu chưa cài deps)
   npm run dev
   ```

### Cách 2 – Dùng pnpm / yarn (tuỳ chọn)

```bash
# pnpm
pnpm install
pnpm dev

# yarn
yarn
yarn dev
```

> Vite sẽ hiển thị URL (`http://localhost:3000`).

---

## 🧰 Scripts hữu ích

```bash
npm run dev        # chạy môi trường phát triển
npm run build      # build sản phẩm (dist/)
npm run preview    # chạy cục bộ bản build
```
---

## ✨ Tính năng (MVP)

* **Tìm giáo viên phù hợp** theo bộ lọc cơ bản
* **Khám phá khoá học** theo danh mục / mức độ
* **Hành trình dùng thử**: xem thông tin, đặt lịch học thử (wireflow/UI đã có)
* **Trang cốt lõi đã hoàn thiện UI**: Trang Chủ, Giáo Viên, Khóa Học

### Lộ trình mở rộng

* **Đánh giá (Reviews):** hiển thị điểm số, nhận xét học viên
* **Cộng Đồng (Community):** bài viết, hỏi đáp, tài nguyên
* **Liên Hệ (Contact):** form liên hệ / hỗ trợ
* **Xác thực & Hồ sơ:** đăng nhập, hồ sơ người học/giáo viên
* **Thanh toán:** mua gói học, lịch sử đơn hàng

> PR được khuyến khích theo phạm vi nhỏ, có test (nếu áp dụng) và mô tả rõ ràng.

## ⚙️ Cấu hình môi trường (tuỳ chọn)

Nếu dự án dùng biến môi trường, tạo file `.env`:

```
VITE_API_BASE_URL=
VITE_ENABLE_MOCK=false
```

> Vite chỉ đọc biến bắt đầu bằng `VITE_`.

---

## 🧪 Kiểm thử (khuyến nghị)

* **Unit/UI testing** với Vitest + React Testing Library (tuỳ chọn)
* **E2E** với Playwright/Cypress (tuỳ chọn)

---

## 🖌️ Quy ước code

* **Component-first**, tách nhỏ, tái sử dụng
* **Đặt tên rõ ràng**, dùng TypeScript (nếu có) để kiểm tra kiểu
* **Styling**: TailwindCSS/SCSS/Styled-Components (tuỳ dự án)
* **Commit**: Conventional Commits (`feat:`, `fix:`, `docs:`…)

---

## 🐞 Khắc phục sự cố

* `npm run dev` không chạy → kiểm tra **Node ≥ 18**, xoá `node_modules` & `package-lock.json` rồi cài lại
* Port xung đột → đặt biến `PORT=5174` hoặc chỉnh trong `vite.config.*`
* Lỗi import ảnh/CSS → kiểm tra đường dẫn tương đối & alias Vite
  

---


## 🌐 English Version

### Overview

TPB Education MVP built with **React + Vite**. Learners can **discover teachers, book trial lessons, and purchase study packages**.

**Implemented pages:** Home, Teachers, Courses
**Planned:** Reviews, Community, Contact

### Requirements

* **Node.js** ≥ 18.x (LTS recommended)
* **npm** ≥ 9.x (or **pnpm** / **yarn**)

### Installation & Run

```bash
# Clone or download the zip
cd MVP-WebsiteEdu_ReactJs-main
npm install    # recommended
npm run dev
```

Alternative:

```bash
pnpm install && pnpm dev
# or
yarn && yarn dev
```

Vite dev server will print the local URL (e.g., `http://localhost:5173`).

### Useful Scripts

```bash
npm run dev
npm run build
npm run preview
```

### Folder Structure (suggested)


### Features

* Teacher discovery with basic filters
* Course browsing by category/level
* Trial lesson flow (UI/wireflow ready)
* Core pages: Home, Teachers, Courses

### Roadmap

* Reviews, Community, Contact
* Auth & Profiles, Payments

### Environment (optional)

Use `.env` and prefix variables with `VITE_`.

### Contributing

Fork → feature branch → conventional commits → PR → review.

### License

**MIT** (or update accordingly).

---

## 📬 Liên hệ
* Email: [binhbinh240204@gmail.com]
* Phone: 0352336537 (Phúc Bình)

English: 
Installation and running instructions:
=> Step 1: Clone or download the zip file to your computer
=> Step 2: Open Visual Studio Code and open the file: MVP-WebsiteEdu_ReactJs-main
=> Step 3: Open Terminal and run the command: cd MVP-WebsiteEdu_ReactJs-main
=> Step 4: run the command npm run dev

TPB Education Website MVP using ReactJs
Includes interfaces: Home, Teachers, Courses, Reviews, Community, Contact
Main core: Learners can find suitable teachers, schedule trial lessons, and then buy a study package
The website has been implemented according to the core pages: Home, Teachers, Courses so that learners can visualize and find suitable teachers and courses.
The remaining pages will be developed and gradually updated for completion.

