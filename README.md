# student-management-app

- hooks:
  - useState – Quản lý trạng thái form nhập dữ liệu.
  - useEffect – Gọi API khi component load lên.
  - Custom hooks – Tách logic gọi API để tái sử dụng dễ dàng hơn.

- context - global state:
  - Đăng nhập, lưu thông tin user	✅ Cần dùng Context (AuthContext)
  - Lưu danh sách sinh viên	✅ Nếu dữ liệu dùng nhiều nơi
  - Quản lý trạng thái của một component đơn lẻ	❌ Không cần, chỉ cần useState
  - Gọi API riêng lẻ (ví dụ lấy 1 sinh viên)	❌ Dùng useEffect trong component

- Tóm lại: Dùng Context API khi nào?
  - AuthContext: Giữ thông tin người dùng đăng nhập.
  - StudentContext: Lưu danh sách sinh viên, tránh gọi API nhiều lần.
  - Không nên lạm dụng Context nếu chỉ cần useState cho 1 component
