// Bai 1
// let mycolor = ["Red", "Green", "White", "Black"];
// console.log(mycolor.toString());

// Bai 2
// function convert() {
// 	let num = document.getElementById("enterNum").value;
// BẺ NHỎ RA STRING VÀ NÉM VÀO ARRAY KHÁC
// 	let str = num.toString();
// 	let result = [str[0]];
// 	console.log(result);
// 	for (let i = 1; i < str.length; i++) {
// Nếu số trước đó và hiện tại chia hết cho 2 thì thêm -
// 		if (str[i - 1] % 2 == 0 && str[i] % 2 == 0) {
// 			result.push("-", str[i]);
// 		} else {
// Nếu số trc đó ko chia hết 2 vd 5 thì chỉ nối tiếp
// 			result.push(str[i]);
// 		}
// 	}
// 	console.log(result);
// 	console.log(result.join(""));
// }
// Bai 3
// function converter() {
// let UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let LOWER = "abcdefghijklmnopqrstuvwxyz";
// console.log(UPPER.toLowerCase());
// let result = [];
// let str = document.getElementById("text").value;
// 	for (let i = 0; i < str.length; i++) {
// 		if (UPPER.indexOf(str[i]) !== -1) {
// 			result.push(str[i].toLowerCase());
// 		} else if (LOWER.indexOf(str[i] !== -1)) {
// 			result.push(str[i].toUpperCase());
// 		} else {
// 			result.push(str[i]);
// 		}
// 	}
// 	console.log(result.join(""));
// }
function converter() {
	let result = [];
	let str = document.getElementById("text").value;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i].toUpperCase()) {
			result.push(str[i].toLowerCase());
		} else {
			result.push(str[i].toUpperCase());
		}
	}
	document.getElementById("result").innerHTML = result.join("").toString();
}
