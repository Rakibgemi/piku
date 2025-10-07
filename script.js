// Function to show home view
function showHome() {
  document.getElementById('home-view').classList.remove('hidden');
  document.getElementById('detail-view').classList.add('hidden');
}

// Function to show specific detail section
function showDetail(section) {
  document.getElementById('home-view').classList.add('hidden');
  document.getElementById('detail-view').classList.remove('hidden');
  document.querySelectorAll('.detail-section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(section + '-detail').classList.remove('hidden');
}

// Example popup (optional)
function showAlert() {
  Swal.fire({
    title: "Hello!",
    text: "Welcome to your website!",
    icon: "success",
    confirmButtonColor: "#2F7C32"
  });
}
