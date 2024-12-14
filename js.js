// Ngày sinh nhật (thay thế bằng ngày sinh nhật của bạn)
const birthday = new Date("2024-12-15T00:00:00").getTime();

// Cập nhật đếm ngược mỗi giây
const countdownInterval = setInterval(function() {
    // Lấy thời gian hiện tại
    const now = new Date().getTime();

    // Tính toán thời gian còn lại
    const timeLeft = birthday - now;

    // Tính toán ngày, giờ, phút, giây
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Hiển thị đếm ngược
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Khi đếm ngược kết thúc, hiển thị quà và dừng đếm
    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("gift").classList.remove("hidden");
        document.getElementById("countdown").style.display = "none";
    }
}, 1000);