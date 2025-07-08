// script.js

function showModal(title, desc) {
  const modal = document.getElementById('infoModal');
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDesc').textContent = desc;
  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('infoModal').style.display = 'none';
}

// Optional: Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById('infoModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
