var $ = Spark

function getPosts(){
    $.get('/post', function(res){
    $.sel('#myDiv').innerHTML = res
    })
}

$.create('div', {'id': 'myDiv', 'class': 'test'})
$.start('form', {'method': 'POST', 'action': '/upload'})
$.create('input', {"type": 'text', 'name': 'msg'})
$.create('button', {'type': 'submit'}, 'Submit')
$.end('form')
getPosts()
setInterval(getPosts, 500)