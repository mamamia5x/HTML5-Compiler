function run(){
  var editor = ace.edit("editor");
  var code = editor.getValue();
  localStorage.setItem('index.html',code);
  document.getElementById("program").innerHTML = code;
}
