let test = document.getElementById('forButton');
test.addEventListener('click', () => {
  test.textContent = 'Processing...';
  test.display = true;

  setTimeout(() => {
    test.textContent = 'Is Done:';
    test.display = false;
  }, 2000);
});