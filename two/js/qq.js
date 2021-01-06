$(function () {
    var sign=document.getElementById("two");
    cg(sign);
});
function cg(h) {
    h.onmouseover=function(){this.className="tw"};
    alert("ok")
}