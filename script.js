function getworth(e, usernam) {
e.preventDefault();
fetch("https://scratchdb.lefty.one/v3/forum/user/info/" + usernam)
    .then(response => response.json())
    .then(data => waitForElement(data.counts.total.count))
}
function waitForElement(b){
    if(b == ""){
       setTimeout(waitForElement, 250);
    }else{
       if(b > 30000) {
       alert(`Veteran - ${b} posts!`);
       }else{
       if(b > 10000) {
       alert(`Experienced! - ${b} posts!`);
       }else{
       if(b > 5000) {
       alert(`Trusty - ${b} posts!`);
       }else{
       if(b > 1000) {
       alert(`Helper - ${b} posts!`);
       }else{
       if(b > 500) {
       alert(`Assistive Trainee - ${b} posts!`);
       }else{
       if(b > 100) {
       alert(`Trainee - ${b} posts!`);
       }else{
       alert(`Newcomer - ${b} posts!`);
       }
       }
       }
       }
       }
       }
    }
}
