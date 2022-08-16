function toggleText() {


  document.querySelector(".toggle-text-button").addEventListener('click', function() {
   

    if (document.getElementById('text').hidden === true) {

      document.getElementById('text').hidden = false;


    } else { document.getElementById('text').hidden = true; }
  });

};






