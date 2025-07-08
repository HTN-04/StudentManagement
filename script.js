function addStudent() {
    let name = document.getElementById("name").value;
    let math = parseFloat(document.getElementById("math").value);
    let literature = parseFloat(document.getElementById("literature").value);
    let average = (math + literature) / 2; // Lỗi: Không kiểm tra điểm âm
    document.getElementById("result").innerHTML += `<p>${name}: ${average}</p>`;
}