<script>
  // Correct element selection
  const para = document.querySelector('#message'); 
  const textButton = document.getElementById('textButton'); 

  // Correct event listener
  textButton.addEventListener('click', () => {
    para.textContent = 'New Message'; // Correct property for changing text
  });

  const box = document.getElementById('box');
  const colorButton = document.getElementById('colorButton');

  // Correct event listener + correct property name
  colorButton.addEventListener('click', () => {
    box.style.backgroundColor = 'blue';
  });
</script>
