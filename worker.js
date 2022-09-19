// Note that workers can't manipulate the DOM.

// for (let i = 0; i < 3000000000; i++) {
//   1 + 2;
// }

// Note that addEventListener() and postMessage() in workers can work without the self

// self.addEventListener("message", (event) => {
//   console.log(event.data);
//   postMessage(event.data * 10);
// });

/*
 Another way to do the above is to use the onmessage event:

 onmessage = function(event){
  console.log(event.data);
 }

*/


// Now that we're working with a SharedWorker, we need to listen for
// the "connect" event.

addEventListener('connect', event => {
    const port = event.ports(0);
      
    port.onmessage = function (event) {
        console.log(event.data);
        port.postMessage(event.data * 10)
    }
    console.log(event.data);
    postMessage(event.data * 10);
})

console.log("slow operation finished");
