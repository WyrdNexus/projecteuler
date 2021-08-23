Meant only a simple sandbox for playing around with javascript, 
and toying with the euler problems. I'm going to start stepping 
through them. 

### Setup
1. get nginx running
    1. use `scripts/nginx.jstool.conf` for vhost
    2. add the entry to your hosts: `127.0.0.1 jstool.local`
2. load whatever script you want to play with
    1. `$ ./loadscript.sh [ euler/blank | euler/problem1 ]`
3. Browser: [http://jstool.local]()

Note: to simplify perms, add your user to nginx user's group (www-data),
and set all files to that group, with 77x, or at least 74x. `loadscript.sh` has a
hidden additional function to fixperms by calling it: `$ ./loadscript.sh fixperm`.
You might want to tweak that function before you call it.  

### Add scripts, and use as a sandbox
Just add a new script on any path, with the below pattern, and call `loadscript`.
* `export default class`
* method: `init(objA)`
* method: `main()`

If you want to add content to the DOM, store a reference to `objA`, and call:
* `objA.add('tagname', 'content')`
    * `'content'` may be a DOM element