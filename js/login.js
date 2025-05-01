document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // supaya gak reload halaman

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Data user dummy
  const users = {
    siswa123: { password: "siswa123", redirect: "dashboard-siswa.html" },
    guru123: { password: "guru123", redirect: "dashboard-guru.html" },
    admin123: { password: "admin123", redirect: "dashboard-admin.html" }
  };

  if (users[username] && password === users[username].password) {
    alert(`Login berhasil sebagai ${username}`);
    window.location.href = users[username].redirect;
  } else {
    alert("Username atau Password salah!");
  }
});
