import PubSub from './pubsub.js';

var data = new PubSub()
window.mfeEvent = data
data.publish("auth", {
  isLogin: true
})
console.log(window.mfeEvent)
var button1 = document.getElementById('client1');
var button2 = document.getElementById('client2');
button1.onclick = function() {
  window.location.replace("/react-app");
} 
button2.onclick = function() {
  window.location.replace("/vue-app");
}   