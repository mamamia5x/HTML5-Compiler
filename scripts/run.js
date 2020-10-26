function run(){
  var editor = ace.edit("editor");
  var code = editor.getValue();
  localStorage.setItem('index.html',code);

  const fs = require('helper/brofs');

  (async function () {
    await fs.init({type: window.TEMPORARY, bytes: 5 * 1024 * 1024});
    await fs.mkdir('dir');
    await fs.writeFile('dir/index.html', localStorage.getItem('index.html'));
    // const content = await fs.readFile('dir/index.html');
    // console.log(content); // => "hello world"
    document.getElementById('program').src = await fs.getUrl('dir/index.html');
  })();
}
