function addStudent() {
    let name = document.getElementById("name").value;
    let math = parseFloat(document.getElementById("math").value);
    let literature = parseFloat(document.getElementById("literature").value);
    if (math < 0 || literature < 0 || isNaN(math) || isNaN(literature)) {
        alert("Điểm không hợp lệ! Vui lòng nhập điểm từ 0 trở lên.");
        return;
    }
    let average = (math + literature) / 2;
    document.getElementById("result").innerHTML += `<p>${name}: ${average}</p>`;
}