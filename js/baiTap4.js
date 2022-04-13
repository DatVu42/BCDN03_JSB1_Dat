/**
 * Khối 1: Input
 * + chieuDai
 * + chieuRong
 * 
 * Khối 2: Các bước xử lý
 * + B1: Tạo biến và gán giá trị
 * + B2: Xây dựng công thức
 * dienTichHCN = chieuDai * chieuRong
 * chuViHCN = (chieuDai + chieuRong) * 2
 * + B3: Hiển thị kết quả
 * 
 * Khối 3: Output
 * + dienTichHCN
 * + chuViHCN
 */

// B1:
var chieuDai = 2;
var chieuRong = 3;
var dienTichHCN = 0;
var chuViHCN = 0;

// B2:
dienTichHCN = chieuDai * chieuRong;
chuViHCN = (chieuDai + chieuRong) * 2;

// B3:
console.log("Diện tích HCN: " + dienTichHCN + "(m2)" + "\n"
            + "Chu vi HCN: " + chuViHCN + "(m)");
         