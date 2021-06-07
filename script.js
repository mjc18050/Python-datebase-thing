// // GET is the default method, so we don't need to set it
// fetch('/hello')
//     .then(function (response) {
//         return response.text();
//     }).then(function (text) {
//         console.log('GET response text:');
//         console.log(text); // Print the greeting as text
//     });

// // Send the same request
// fetch('/hello')
//     .then(function (response) {
//         return response.json(); // But parse it as JSON this time
//     })
//     .then(function (json) {
//         console.log('GET response as JSON:');
//         console.log(json); // Here’s our JSON object
//     })


function searchBar() {


	  var xmlhttp = new XMLHttpRequest();
	  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
        document.getElementById("tem").innerHTML = this.responseText;
      }
	  };
  
	  let variables = "input=" + "MEGAN!!!";
	  xmlhttp.open("GET", "file.php?" + variables, true);
	  xmlhttp.send();
}