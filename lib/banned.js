const fs = require('fs');
const path = './database/banned.json';
const BAN_DURATION = 30 * 60 * 1000; // Durasi banned dalam milidetik (30 menit)

// Fungsi untuk membaca daftar banned dari file JSON
function getBannedData() {
    return fs.existsSync(path) ? JSON.parse(fs.readFileSync(path)) : [];
}

// Fungsi untuk menyimpan data banned ke file JSON
function saveBannedData(data) {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

// Fungsi untuk menghitung sisa waktu unban dalam format menit dan detik
function getRemainingTime(bannedAt) {
    const remainingTime = BAN_DURATION - (Date.now() - bannedAt);
    if (remainingTime <= 0) return 'Sudah bisa digunakan';

    const minutes = Math.floor(remainingTime / (60 * 1000));
    const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
    return `${minutes} menit ${seconds} detik`;
}

// Fungsi untuk melakukan ban pada pengguna
function banUser(userId) {
    let user_ban = getBannedData();

    // Memastikan pengguna belum ada di daftar banned
    if (!user_ban.some(user => user.id === userId)) {
        user_ban.push({ id: userId, bannedAt: Date.now() });
        saveBannedData(user_ban);
    }
}

// Fungsi untuk melakukan unban pada pengguna
function unbanUser(userId) {
    let user_ban = getBannedData();

    // Menghapus pengguna dari daftar banned
    user_ban = user_ban.filter(user => user.id !== userId);
    saveBannedData(user_ban);
}

// Fungsi untuk memeriksa apakah pengguna dibanned
function isUserBanned(userId) {
    const now = Date.now();
    let user_ban = getBannedData();

    // Filter untuk menghapus pengguna yang sudah melewati waktu banned
    user_ban = user_ban.filter(user => {
        const isExpired = now - user.bannedAt < BAN_DURATION;
        return isExpired;
    });

    saveBannedData(user_ban); // Simpan perubahan ke file

    // Periksa apakah pengguna masih ada di daftar banned
    return user_ban.some(user => user.id === userId);
}

// Ekspor fungsi-fungsi
module.exports = {
    getBannedData,
    saveBannedData,
    getRemainingTime,
    banUser,
    unbanUser,
    isUserBanned
};