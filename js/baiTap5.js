/**
 * Khối 1: Input
 * + num (số dương có 2 chữ số)
 * 
 * Khối 2: Các bước xử lý
 * B1: Khai báo biến và gán giá trị
 * B2: Xây dựng công thức
 * ten = floor(num / 10)
 * unit = num % 10
 * sum = ten + unit
 * B3: Hiển thị kết quả
 * 
 * Khối 3: Output
 * + sum (tổng các chữ số)
 */

// B1:
var num = 46;
var ten = 0;
var unit = 0;
var sum = 0;

// B2:
ten = Math.floor(num / 10);
unit = num % 10;
sum = ten + unit;

// B3:
console.log("Tổng 2 chữ số: " + sum);