var editor = ace.edit("editor");
function run(){
  var code = editor.getValue();
  var currentfile = localStorage.getItem('currentFileName');
  localStorage.setItem(currentfile,code);
  const fs = require('helper/brofs');

  (async function () {
    await fs.init({type: window.TEMPORARY, bytes: 5 * 1024 * 1024});
    await fs.mkdir('dir');
    await fs.writeFile('dir/' + currentfile, localStorage.getItem(currentfile));
    document.getElementById('program').src = await fs.getUrl('dir/index.html');
  })();
}