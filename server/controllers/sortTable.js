let ascending = true; // Biến để xác định sắp xếp tăng dần hoặc giảm dần
let currentColumn = 0; // Cột hiện tại đang được sắp xếp

function sortTable(column) {
  const table = document.getElementById("student-table");
  const rows = Array.from(table.rows).slice(1); // Bỏ qua hàng đầu tiên (tiêu đề)
  
  rows.sort((a, b) => {
    const cellA = a.cells[column].textContent;
    const cellB = b.cells[column].textContent;

    if (ascending) {
      return cellA.localeCompare(cellB);
    } else {
      return cellB.localeCompare(cellA);
    }
  });

  // Xóa tất cả các hàng trong bảng
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  // Thêm các hàng đã được sắp xếp lại vào bảng
  rows.forEach(row => {
    table.tBodies[0].appendChild(row);
  });

  // Đảo chiều sắp xếp và cập nhật cột hiện tại
  ascending = !ascending;
  currentColumn = column;
}
