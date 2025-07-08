let students = [];

function addStudent() {
    let name = document.getElementById("name").value;
    let math = parseFloat(document.getElementById("math").value);
    let literature = parseFloat(document.getElementById("literature").value);
    if (math < 0 || literature < 0 || isNaN(math) || isNaN(literature)) {
        alert("Điểm không hợp lệ! Vui lòng nhập điểm từ 0 trở lên.");
        return;
    }
    let average = (math + literature) / 2;
    students.push({ name, math, literature, average });
    document.getElementById("result").innerHTML += `<p>${name}: ${average}</p>`;
}

function exportReport() {
    if (students.length === 0) {
        alert("Chưa có dữ liệu để xuất!");
        return;
    }
    let csv = "Tên,Toán,Văn,Trung bình\n";
    students.forEach(student => {
        csv += `${student.name},${student.math},${student.literature},${student.average}\n`;
    });
    let blob = new Blob([csv], { type: "text/csv" });
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "student_report.csv";
    a.click();
    window.URL.revokeObjectURL(url);
}