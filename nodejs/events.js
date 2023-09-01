const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("event", (...data) => {
  console.log("data:", data);
  console.log("an event occurred!");
});

//Add listener and will automatically remove the listener after the first emit.
myEmitter.once("eventOnce", (data) => {
  console.log("data:", data);
  console.log("an event once occurred!");
});

// To remove lister we use off()

//to trigger event we use emit()
myEmitter.emit("event");
myEmitter.emit("event", 1, 2, 3);
myEmitter.emit("event", 1);

myEmitter.emit("eventOnce");
myEmitter.emit("eventOnce");
