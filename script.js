function getworth(usernam) {
fetch("https://scratchdb.lefty.one/v3/forum/user/info/" + usernam)
    .then(response => response.json())
    .then(data => waitForElement(data.counts.total.count))
}
function waitForElement(b){
    if(b == ""){
       setTimeout(waitForElement, 250);
    }else{
       if(b > 50000) {
       console.log("Veteran!");
       }else{
       if(b > 10000) {
       console.log("Experienced!");
       }else{
       if(b > 5000) {
       console.log("Trusty!");
       }else{
       if(b > 1000) {
       console.log("Helper!");
       }else{
       if(b > 100) {
       console.log("Newcomer!");
       }else{
       console.log("Untrained!");
       }
       }
       }
       }
       }
    }
}
