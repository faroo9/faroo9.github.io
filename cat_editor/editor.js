kofiWidgetOverlay.draw('ounanefarouk27484', {
  'type': 'floating-chat',
  'floating-chat.donateButton.text': 'Support me',
  'floating-chat.donateButton.background-color': '#333',
  'floating-chat.donateButton.text-color': '#fff'
});


function compile(){
    document.body.innerHTML = document.body.innerHTML.replace(/\*\*([^\*]*)\*\*/g, "<strong onclick=\"text_edit(this)\">$1</strong>");
    document.body.innerHTML = document.body.innerHTML.replace(/\#\#([^\#]*)\#/g, "<h3>$1</h3>");
    document.body.innerHTML = document.body.innerHTML.replace(/\$\$([^\$]*)\$\$/g, "<p onclick=\"eq_edit(this)\">\\[$1\\]<\/p>");
    document.body.innerHTML = document.body.innerHTML.replace(/\$([^\$]*)\$/g, "<strong onclick=\"ineq_edit(this)\">\\($1\\)<\/strong>");
    document.body.innerHTML = document.body.innerHTML.replace(/\#\d+\#\d+\#/g, function(match) { return table(match);});
    document.body.innerHTML = document.body.innerHTML.replace(/\#IMG\#([^\#]*)\#/g, "<img src=\"$1\" />");
    document.body.innerHTML = document.body.innerHTML.replace(/\#LINK\#([^\#]*)\#([^\#]*)\#/g, "<a href=\"$1\">$2</a>");
    document.body.innerHTML = document.body.innerHTML.replace(/\#LIST\#/g, "&nbsp;<ul><li>First Item</li></ul>");
    document.body.innerHTML = document.body.innerHTML.replace(/\#ENUM\#/g, "&nbsp;<ol><li>First Item</li></ol>");
    document.body.innerHTML = document.body.innerHTML.replace(/\#CODE\#/g, "<pre><code class=\"language-cpp\">return 9;</code><\/pre>");
    newTypeset();
    
    var tag = document.createElement("p");
    var text = document.createTextNode("~");
    tag.appendChild(text);
    var element = document.getElementById("content");
    element.appendChild(tag);

    kofiWidgetOverlay.draw('ounanefarouk27484', {
      'type': 'floating-chat',
      'floating-chat.donateButton.text': 'Support me',
      'floating-chat.donateButton.background-color': '#333',
      'floating-chat.donateButton.text-color': '#fff'
    });
  }

function newTypeset(){
    MathJax.typeset();
}

function ineq_edit(element) {
  
  const node = document.createTextNode('$' + findTeX(element) + '$');
  
  element.replaceWith(node);
}

function eq_edit(element) {
  
  const node = document.createTextNode("$$" + findTeX(element) + "$$");
  
  element.replaceWith(node);
  
}

function findTeX(container) {
  for (const math of MathJax.startup.document.math) {
    if (container === math.typesetRoot) return math.math;
  }
}

function text_edit(element) {
    element.style.fontWeight = "normal";
    element.innerText = "**" + element.innerText + "**";
    element.removeAttribute("onclick");
}

function table(dimensions){
    
    const splited = dimensions.split("#");

    let lin = parseInt(splited[1]);
    let col = parseInt(splited[2]);
  

    let mytable = '<table><colgroup>';
  
    for (let i = 1; i < col; i++) {
      mytable += '<col style="width:'+ (100 / col) +'%">';
    }

    mytable += '<col style="width:'+ ((100 / col) + 100%col) +'%">';

    mytable += '</colgroup>';
  
    mytable += '<thead><tr class="header">';
  
    for (let i = 0; i < col; i++) {
      mytable += '<th>Property</th>';
    }

    mytable += '</tr></thead>';

    mytable += '<tbody>';

    for (let j = 0; j < lin; j++) {
      mytable += '<tr>';

      for (let i = 0; i < col; ++i) {
        mytable += '<td>'+ i +'</td>';
      }

      mytable += '</tr>';
    }

    mytable += '</tbody>'
    mytable += '</table>'; 

    return mytable;
}

function save() {
    let file_content = new XMLSerializer().serializeToString(document)
    file_content = file_content.replace("<script src=\"editor.js\"></script>", "");
    file_content = file_content.replace("<script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></script>", "");
    file_content = file_content.replace(/style=\"display: block\"/g, "style=\"display: none\"");
    file_content = file_content.replace(/contenteditable=\"true\"/g, "");
    file_content = file_content.replace(/onclick=\"eq_edit(this)\"/g, "");
    file_content = file_content.replace(/onclick=\"ineq_edit(this)\"/g, "");
    file_content = file_content.replace(/onclick=\"text_edit(this)\"/g, "");

    var blob = new Blob([file_content], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "file.html");

}
