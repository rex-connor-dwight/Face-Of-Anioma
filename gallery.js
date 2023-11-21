document.addEventListener('DOMContentLoaded', function () {
    // Simulate scrolling on page load
    const row = document.getElementById('row');
    row.scrollTop = row.scrollHeight - row.clientHeight;
  });