var currentfile = 'index.html';

function addfile(){
  var filename = prompt("What is the filename?", "index.js");
  currentfile = filename;
  localStorage.setItem('currentFileName', currentfile);
  var setmode = get_url_extension(filename);
  var newFile = document.createElement('div');
  newFile.innerHTML = '<button onclick="loadfile(this.innerText)" class="mouse select">' + currentfile + '</button>';
  document.getElementById('afterFirst').appendChild(newFile);
  var filecontent = localStorage.getItem(filename);
  if (filecontent === null){
    filecontent = 'Type Something';
  }
  if (setmode == 'js'){
    setmode = 'javascript';
  }
  editor.session.setMode("ace/mode/" + setmode);
  editor.setValue(filecontent);
  document.getElementById("maker").classList.toggle("hidden");
  document.getElementById("addButton").classList.toggle("hidden");
}

function loadfile(filename){
  currentfile = filename;
  localStorage.setItem('currentFileName', currentfile); 
  localStorage.setItem(currentfile, localStorage.getItem(filename));
  var filecontent = localStorage.getItem(filename);
  var setmode = get_url_extension(filename);
  if (filecontent === null){
    filecontent = 'Type Something';
  }
  if (setmode == 'js'){
    setmode = 'javascript';
  }
  editor.setValue(filecontent);
  editor.session.setMode("ace/mode/" + setmode);
  document.getElementById("maker").classList.toggle("hidden");
  document.getElementById("addButton").classList.toggle("hidden");
}

function get_url_extension( url ) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
}

// Sidebar
function sidebar(){
  //Some is from an old project
  document.getElementById("maker").classList.toggle("hidden");
  document.getElementById("addButton").classList.toggle("hidden");
}