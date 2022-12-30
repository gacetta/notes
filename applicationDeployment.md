# deployment
Software deployment includes all of the steps, processes, and activities that are required to make a software system or update available to its intended users.

`software release` vs `software deployment`

`software release` refers to the stages of development for a piece of computer software, whether it is released as a piece of physical media, online, or as a web-based app.

`software deployment` refers to the process of running an application on a server or device.  

--------------------
## PORT information
--------------------
for an Node.js app to know where to listen, it needs the `port` information.

when hosting on our local machine, typically `port = 3000` is used.  But in a deployment setting, that port value will always vary.  We have access to the value of the environment's variable, PORT with `process.env.PORT`

We can use the following code to set Node.js to listen to the environment PORT 
```
const port = process.env.PORT || 3000;       // use port 3000 unless there
                                             // exists a preconfigured port
app.listen(port, () => { ...server code })   // tells express app where to listen
```