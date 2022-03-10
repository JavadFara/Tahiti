var score = 0;
var a = 0;
var b= 0;
var c= 0;
var d=0;
var e=0;
var f=0;
var g=0;
var resp = 0

$(".right1").click (function() {
    if (a<1) {
score++;
$(".emt").text(score)
 a= 1;
}})

$(".right2").click (function() {
    if (b<1) {
score++;
$(".emt").text(score)
 b= 1;
}})

$(".right3").click (function() {
    if (c<1) {
score++;
$(".emt").text(score)
 c= 1;
}})

$(".right4").click (function() {
    if (d<1) {
score++;
$(".emt").text(score)
 d= 1;
}})

$(".right5").click (function() {
    if (e<1) {
score++;
$(".emt").text(score)
 e= 1;
}})

$(".right6").click (function() {
    if (f<1) {
score++;
$(".emt").text(score)
 f= 1;
}})

$(".right7").click (function() {
    if (g<1) {
score++;
$(".emt").text(score)
 g= 1;
}})


$("#fini").click(function(){
    if (score===7) {
        alert ("حرفه‌ای تک‌تاز لقب شایسته شماست")
    } else if (score>4) {
      alert ("حضور فعال در تهیتی، موجب رشدتان شده است")
   } else if (score>2) {
       alert ("با فضای تهیتی تا حدودی آشنا هستید")
   } else {
alert ("شما اهل تهیتی نیستید ، سیک خود را بزنید")
   }
 
})
