# Learn NodeJS

## Intro
### How Node.js handles a file request?

1) Sends the task to the computer's file system.
2) Ready to handle the next request.
3) When the file system has opened and read the file, the server returns the content to the client.
Node.js eliminates the waiting, and simply continues with the next request.

Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.
1. **Single-Threaded:**
**Definition:** Node.js operates on a single thread, meaning it executes JavaScript code on one main thread.\
**Implication:** Unlike multi-threaded models where multiple threads are used to handle different tasks concurrently, Node.js uses a single thread for executing JavaScript code. This design simplifies the development process, as you don't need to deal with issues like thread synchronization or race conditions that can occur in multi-threaded environments.
2. **Non-Blocking:**
**Definition:** Non-blocking means that operations (especially I/O operations like reading files, making HTTP requests, or querying a database) do not block the execution of the program. Instead of waiting for these operations to complete, Node.js continues to execute other code.\
**Implication:** In a blocking model, if a thread is waiting for an I/O operation to complete, it can’t do anything else. In contrast, in Node.js, the single thread can continue executing other code while waiting for I/O operations to finish, greatly improving the efficiency and responsiveness of applications.
3. **Asynchronous Programming:**
**Definition:** Asynchronous programming in Node.js is a key feature that allows it to handle many operations concurrently on a single thread. Asynchronous programming involves performing tasks asynchronously, allowing operations to run in the background while other code continues to execute. When the operation completes, a callback function, a promise, or an async/await syntax is used to handle the result.\
**Implication:** Node.js uses asynchronous I/O, meaning that operations like reading a file or making an HTTP request do not stop the execution of the program. Instead, Node.js registers a callback or returns a promise, which will be invoked when the operation completes. This allows Node.js to handle many operations concurrently without needing multiple threads.
4. **Memory Efficiency:**
**Definition:** Memory efficiency refers to the ability to use system memory (RAM) in a way that maximizes performance while minimizing resource usage.\
**Implication:** Because Node.js runs on a single thread and uses non-blocking I/O with asynchronous programming, it can handle many connections and requests without consuming large amounts of memory. Traditional multi-threaded servers create a new thread for each connection, which can lead to high memory usage. In contrast, Node.js handles many connections in a single thread, keeping memory usage low.

### Event loop
JavaScript is single-threaded but the lower level api enable asynchronous nature of JS.\
Inside NodeJS there is a C library called Libuv responsible for the event loop and asynchronously handling tasks such as network requests, DNS resolution, file system operations, data encryption, etc.

Pseudo code explaining the high level idea of Event loop in NodeJS:
```
while (TaskList is not empty or EventQueue is not empty):
    if EventQueue is not empty:
        CallStack.put(EventQueue.pop())
    elif TaskList is not empty:
        CallStack.put(TaskList.pop())
    else:
        break
    task = CallStack.top()
    if task is not asynchronous:
        do task
    else:
        Libuv.add(task)
        // when Libuv finish the task, it will put it back to the EventQueue waiting for next call\
    CallStack.pop()
```

![Event loop in JS](https://res.cloudinary.com/practicaldev/image/fetch/s--Dg8fq92f--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pp9n3grfwgcaqgi30t4e.gif)

Preference: 
[Node.js animated: Event Loop](https://dev.to/nodedoctors/an-animated-guide-to-nodejs-event-loop-3g62)\
[The Node.js Event Loop](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop)

## NodeJS Events
In Node.js, an event is an occurrence that can trigger a response from our application. The EventEmitter class is used to create, manage, and handle events. With EventEmitter, we can emit (trigger) events and register listeners (callbacks) to respond to those events.\
This [Youtube video](https://www.youtube.com/watch?v=l20MBBFZAmA) explained the term "events".\
Since Node.js is single-threaded, using events allows it to handle multiple I/O operations efficiently. Instead of blocking the main thread, Node.js uses events to notify the application when an operation is complete, freeing up the main thread to handle other tasks.



