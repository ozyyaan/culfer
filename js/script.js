


  // Optional: Tambahkan event listener untuk mengubah ikon
  document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(function(element) {
    element.addEventListener('click', function() {
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    });
});