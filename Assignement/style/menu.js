// Add event listener to toggle bookmark
const bookmarkedJobs = document.querySelectorAll('.bookmarked');
bookmarkedJobs.forEach(job => {
  job.addEventListener('click', () => {
    job.classList.toggle('active');
  });
});