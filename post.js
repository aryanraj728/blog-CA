function editPara() {
    document.getElementById("editP").contentEditable = true;
    document.getElementById("editBtn").style.visibility = 'hidden';
    document.getElementById("saveBtn").style.visibility = 'visible';
}

function savePara() {
    document.getElementById("editP").contentEditable = false;
    document.getElementById("saveBtn").style.visibility = 'hidden';
    document.getElementById("editBtn").style.visibility = 'visible';
}

var like = 0;

function likeOne() {
    like += 1;
    document.getElementById("likeBtn").innerHTML = '<span class="iconify" data-icon="simple-line-icons:like" data-inline="false"></span> Liked!'
    document.getElementById("likePara").innerHTML = like + ' person liked this!'
}

function addComments(id) {
    document.getElementById("commentBox").style.visibility = "visible";
    var addEventName = id.value + '<br>';
    var a = document.getElementById('userComments');
    document.getElementById('addEventNames').innerHTML += '<p id="inCom">' + addEventName + '</p>';
    a.value = a.defaultValue;
}
