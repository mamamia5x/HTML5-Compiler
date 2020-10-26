let root = document.documentElement;

requirejs(["helper/ace"], function(util) {
  firstload();
});

//Fix this

function firstload(){
  requirejs(["themes/tommorow_night"], function(util){
    secondload();
  });
}
function secondload(){
  requirejs(["modes/html"], function(util){
    thirdload();
  });
}
function thirdload(){
  requirejs(["extensions/lang_tools"], function(util){
    fourthload();
  });
}
function fourthload(){
  requirejs(["run"], function(util){
    fifthload();
  });
}
function fifthload(){
  requirejs(["themes/github"], function(util){
    doneload();
  });
}
function doneload(){
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
  if (filecontent === null){
    filecontent = '<h1>Hello World!</h1>';
  }
  editor.setValue(filecontent);
}