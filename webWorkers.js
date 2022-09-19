const slowButton = document.getElementById("slow");
const sayHelloButton = document.getElementById("say-hello");

slowButton.addEventListener("click", slowOperation);
sayHelloButton.addEventListener("click", sayHello);

// Working with a Dedicated Worker

// function slowOperation() {

// We're using to use a webworker to create another thread that this code will run in
// The 'Worker()' takes the file path of our worker as an argument.

// const worker = new Worker('worker.js');
// worker.postMessage(10);

// worker.addEventListener('message', event => {
//     console.log(event.data);
// })

// We can also terminate a worker with:
// worker.terminate();
// }

// Now to work with a SharedWorker. Note SharedWorkers can be shared with multiple tabs or
// iFrames
// Also, you have remember to use ".port" with portMessage
// If you're using the onmessage event, you won't have to use the .port

function slowOperation() {
    const worker =  new SharedWorker('worker.js')
  worker.port.postMessage(10);

  worker.onmessage = function (event){
    console.log(event.data);
  }
}

function sayHello() {
  console.log("hello world");
}
