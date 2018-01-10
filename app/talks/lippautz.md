Browsers these days are more than just simple renderers for web content. They bundle all sorts of fundamental infrastructure and increasingly offer functionality traditionally found only in operating systems. For example, Chrome ships with a sandbox for privileged execution, a JavaScript virtual machine for executing user code, a scheduler, a rendering engine, a network stack, and much, much more. In this talk we will go on a journey to explore two of those components: the V8 JavaScript virtual machine and how it is connected to the Blink rendering engine. More specifically, we will have a look at how JavaScript connects to the DOM and how objects live and die together. The takeaway? Appreciation for the abstractions that browsers and the web platform provide.