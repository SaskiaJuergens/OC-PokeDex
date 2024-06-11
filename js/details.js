    // Function to parse URL parameters
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
      }
  
      // Get OC name from URL parameter
      var ocName = getParameterByName('name');
      if (ocName) {
        document.getElementById('ocNameHeading').innerHTML = ocName + " Details"; // Set OC name in heading
        //document.getElementById('ocName').innerHTML = "<h2>" + ocName + "Detail" + "</h2>";
        document.title = ocName + " Details"; // Set page title
      } else {
        document.getElementById('ocNameHeading').innerHTML = "OC details";
        //document.getElementById('ocName').innerHTML = "<p>No OC name provided.</p>";
        document.title = "OC Details";
      }