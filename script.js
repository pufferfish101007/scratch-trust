function getworth(usernam) {
fetch("https://scratchdb.lefty.one/v3/forum/user/info/" + usernam)
    .then(response => response.json())
    .then(data => waitForElement(data.counts.total.count))
}
function waitForElement(b){
    if(b == ""){
       setTimeout(waitForElement, 250);
    }else{
       if(b > 30000) {
       alert("Veteran!");
       }else{
       if(b > 10000) {
       alert("Experienced!");
       }else{
       if(b > 5000) {
       alert("Trusty!");
       }else{
       if(b > 1000) {
       alert("Helper!");
       }else{
       if(b > 100) {
       alert("Trainee!");
       }else{
       alert("Newcomer!");
       }
       }
       }
       }
       }
    }
}
