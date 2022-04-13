/**
 * Khối 1: Input
 * + tyGia
 * + soTienUSD
 * 
 * Khối 2: Các bước xử lý
 * + B1: Tạo biến và gán giá trị
 * + B2: Xây dựng công thức
 * soTienVND = soTienUSD * tyGia
 * + B3: Hiển thị kết quả
 * 
 * Khối 3: Output
 * + soTienVND
 */

// B1:
var tyGia = 23500;
var soTienUSD = 3;
var soTienVND = 0;

// B2:
soTienVND = soTienUSD * tyGia;

// B3:
console.log("Số tiền sau khi quy đổi: " + soTienVND.toLocaleString('vi', {style: 'currency', currency: 'VND'}));