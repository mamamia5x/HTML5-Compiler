let root = document.documentElement;

requirejs(["helper/ace"], function(util) {
  doneload();
});
// Important that helper/ace loads first, did it twice just for safety.
function doneload(){
  requirejs(["helper/ace", "themes/tommorow_night", "modes/html", "extensions/lang_tools", "run", "files", "themes/github", "helper/brofs"], function(util) {
    var i = 0;
    while (i <= Object.entries(localStorage).length - 1){
      if (Object.entries(localStorage)[i][0] == 'index.html'){
        // Nothing, but just here so I know what's going on
      }
      else if (Object.entries(localStorage)[i][0] == 'currentFileName'){
        // same
      }
      else {
        var newFile = document.createElement('div');
        newFile.innerHTML = '<button onclick="loadfile(this.innerText)" class="mouse select">' + Object.entries(localStorage)[i][0] + '</button>';
        document.getElementById('afterFirst').appendChild(newFile);
      }
      i ++;
    }
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("loading").classList.remove("shown");
    document.getElementById("toload").classList.add("shown");
    document.getElementById("toload").classList.remove("hidden");
    
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/github");
    editor.setOptions({
        enableLiveAutocompletion: true
    });
    root.style.setProperty('--topbar-color', '#001628');
    editor.session.setMode("ace/mode/html");
    var filecontent = localStorage.getItem('index.html');
    localStorage.setItem('currentFileName', 'index.html');
    if (filecontent === null){
      filecontent = '<h1>Hello World!</h1>';
    }
    editor.setValue(filecontent);
  });
}