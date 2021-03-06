<a name="module_@quisitive/utils"></a>

## @quisitive/utils
**Example**  
```js
const utils = require('@quisitive/utils')
```

* [@quisitive/utils](#module_@quisitive/utils)
    * [.promisify(fn)](#module_@quisitive/utils.promisify) ⇒ <code>Promise</code>
    * ~~[.exists()](#module_@quisitive/utils.exists)~~
    * ~~[.format()](#module_@quisitive/utils.format)~~
    * _Async helpers_
        * [.makeRetryable(fn, [opts])](#module_@quisitive/utils.makeRetryable) ⇒ <code>Promise</code>
        * [.retry(fn, [opts])](#module_@quisitive/utils.retry) ⇒ <code>Promise</code>
        * [.forever(fn)](#module_@quisitive/utils.forever) ⇒ <code>Promise</code>
    * _Child Process_
        * [.exec(command, [args], [options])](#module_@quisitive/utils.exec) ⇒ <code>Promise</code>
        * [.shell(command, [options])](#module_@quisitive/utils.shell) ⇒ <code>Promise</code>
    * _Crypto_
        * [.encrypt(decrypted, encryptionKey)](#module_@quisitive/utils.encrypt) ⇒ <code>String</code>
        * [.decrypt(encrypted, decryptionKey)](#module_@quisitive/utils.decrypt) ⇒ <code>String</code>
        * [.hash(input)](#module_@quisitive/utils.hash) ⇒ <code>String</code>
    * _File system_
        * [.rm](#module_@quisitive/utils.rm) ⇒ <code>Promise</code>
        * [.mkd(path)](#module_@quisitive/utils.mkd) ⇒ <code>Promise</code>
        * [.readFile(filePath, [options])](#module_@quisitive/utils.readFile) ⇒ <code>Promise</code>
        * [.writeFile(filePath, data, [opts])](#module_@quisitive/utils.writeFile) ⇒ <code>Promise</code>
        * [.deleteFile(filePath)](#module_@quisitive/utils.deleteFile) ⇒ <code>Promise</code>
        * [.readJson(filePath)](#module_@quisitive/utils.readJson) ⇒ <code>Promise</code>
        * [.writeJson(filepath, data, [options])](#module_@quisitive/utils.writeJson) ⇒ <code>Promise</code>
        * ~~[.saveFile()](#module_@quisitive/utils.saveFile)~~
        * ~~[.saveJson()](#module_@quisitive/utils.saveJson)~~
    * _Humanizers_
        * [.getDuration(start)](#module_@quisitive/utils.getDuration) ⇒ <code>Number</code>
        * [.humanizeStatusCode(status)](#module_@quisitive/utils.humanizeStatusCode) ⇒ <code>String</code>
        * [.cleanUrl(url)](#module_@quisitive/utils.cleanUrl) ⇒ <code>String</code>
    * _Object Utils_
        * [.extend(mergeInto, ...mergeFrom)](#module_@quisitive/utils.extend) ⇒ <code>Object</code>
        * [.diff(objA, objB)](#module_@quisitive/utils.diff) ⇒ <code>Object</code>
        * [.clone(obj)](#module_@quisitive/utils.clone) ⇒ <code>Object</code>
        * [.sortKeys(obj, [sortWith])](#module_@quisitive/utils.sortKeys) ⇒ <code>Object</code>
    * _Promise Chains_
        * [.tap](#module_@quisitive/utils.tap) ⇒ <code>Promise</code>
        * [.pipe](#module_@quisitive/utils.pipe) ⇒ <code>Promise</code>
        * [.forEach(coll, iteratee)](#module_@quisitive/utils.forEach) ⇒ <code>Promise</code>
        * [.forEachSeries(coll, iteratee)](#module_@quisitive/utils.forEachSeries) ⇒ <code>Promise</code>
        * [.forEachLimit(coll, limit, iteratee)](#module_@quisitive/utils.forEachLimit) ⇒ <code>Promise</code>
        * [.map(coll, iteratee, options)](#module_@quisitive/utils.map) ⇒ <code>Promise</code>
        * [.mapSeries(coll, iteratee)](#module_@quisitive/utils.mapSeries) ⇒ <code>Promise</code>
        * [.mapLimit(coll, limit, iteratee)](#module_@quisitive/utils.mapLimit) ⇒ <code>Promise</code>
        * [.mapValues(obj, iteratee)](#module_@quisitive/utils.mapValues) ⇒ <code>Promise</code>
    * _Promised Timers_
        * [.wait([ms])](#module_@quisitive/utils.wait) ⇒ <code>Promise</code>
        * [.nextTick()](#module_@quisitive/utils.nextTick) ⇒ <code>Promise</code>

<a name="module_@quisitive/utils.promisify"></a>

### utils.promisify(fn) ⇒ <code>Promise</code>
Takes a function following the common error-first callback style, i.e.
  taking an `(err, value) => ... callback` as the last argument, and
  returns a version that returns promises.

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to be converted. |

<a name="module_@quisitive/utils.exists"></a>

### ~~utils.exists()~~
***Deprecated***

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**See**: [utils.validate.exists](utils.validate.exists)  
<a name="module_@quisitive/utils.format"></a>

### ~~utils.format()~~
***Deprecated***

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**See**: [util.format](https://nodejs.org/api/util.html#util_util_format_format_args) from the native Node Docs.  
<a name="module_@quisitive/utils.makeRetryable"></a>

### utils.makeRetryable(fn, [opts]) ⇒ <code>Promise</code>
A close relative of retry. This method wraps a task and makes it retryable,
  rather than immediately calling it with retries.

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: Async helpers  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>function</code> |  | Async function to be wrapped. |
| [opts] | <code>Number</code> | <code>5</code> | The number of attempts to make before giving up |

<a name="module_@quisitive/utils.retry"></a>

### utils.retry(fn, [opts]) ⇒ <code>Promise</code>
Attempts to get a successful response from task no more than times times
  before returning an error. If the task is successful, the Promise will
  return the result of the successful task. If all attempts fail, the
  Promise will Throw

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: Async helpers  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>function</code> |  | Async function or Callback Style taks |
| [opts] | <code>Number</code> | <code>5</code> | The number of attempts to make before giving up |

<a name="module_@quisitive/utils.forever"></a>

### utils.forever(fn) ⇒ <code>Promise</code>
Calls the asynchronous function in series, indefinitely. If the function
  throws the execution will stop.

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: Async helpers  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | an async function to call repeatedly |

<a name="module_@quisitive/utils.exec"></a>

### utils.exec(command, [args], [options]) ⇒ <code>Promise</code>
A better child_process:
  - Promise interface.
  - Strips EOF from the output so you don't have to `stdout.trim()`.
  - Supports shebang binaries cross-platform.
  - Higher max buffer. 10 MB instead of 200 KB.
  - Executes locally installed binaries by name. (from `node_modules`)
  - Cleans up spawned processes when the parent process dies.

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Returns**: <code>Promise</code> - Returns a child_process instance, which is enhanced to
  also be a Promise for a result Object with stdout and stderr properties.  
**Category**: Child Process  
**See**: [execa](https://github.com/sindresorhus/execa#readme) for details  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| command | <code>String</code> |  |  |
| [args] | <code>Array</code> | <code>[]</code> | Either an Array of arguments or a String with the arguments. |
| [options] | <code>Object</code> |  |  |
| [options.cwd] | <code>String</code> | <code>process.cwd()</code> | Current working directory of the child process. |
| [options.env] | <code>Object</code> | <code>process.env</code> | Environment key-value pairs. Extends automatically from `process.env` |
| [options.extendEnv] | <code>Boolean</code> | <code>true</code> | Set to false if you don't want to extend the environment variables when providing the env property. |
| [options.argv0] | <code>String</code> |  | Explicitly set the value of `argv[0]` |
| [options.stdio] | <code>String</code> \| <code>Array.&lt;String&gt;</code> | <code>pipe</code> | Child's stdio configuration. |
| [options.detached] | <code>Boolean</code> | <code>false</code> | Prepare child to run independently of its parent process. |
| [options.shell] | <code>Boolean</code> | <code>false</code> | If `true`, runs command inside of a shell. Uses `/bin/sh` on `UNIX` and `cmd.exe` on `Windows`. |
| [options.preferLocal] | <code>Boolean</code> | <code>true</code> | Prefer locally installed binaries when looking for a binary to execute. If you `npm install foo`, you can then `utils.exec('foo')`. |
| [options.localDir] | <code>String</code> | <code>process.cwd()</code> | Preferred path to find locally installed binaries in (use with `preferLocal`). |
| [options.input] | <code>String</code> |  | Write some input to the `stdin` of your binary. |
| [options.reject] | <code>Boolean</code> | <code>true</code> | Setting this to `false` resolves the promise with the error instead of rejecting it. |
| [options.cleanup] | <code>Boolean</code> | <code>true</code> | Keep track of the spawned process and `kill` it when the parent process exits. |
| [options.timeout] | <code>Boolean</code> | <code>0</code> | If timeout is greater than `0`, the parent will send the signal identified by the `killSignal` property (the default is `SIGTERM`) if the child runs longer than timeout milliseconds. |
| [options.killSignal] | <code>String</code> | <code>SIGTERM</code> | Signal value to be used when the spawned process will be killed. |

**Example**  
```js
(async () => {
    const result = await utils.exec('omxplayer', ['~/color-factory/assets/videoFile'])
  })();
```
<a name="module_@quisitive/utils.shell"></a>

### utils.shell(command, [options]) ⇒ <code>Promise</code>
A better child_process.exec:

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Returns**: <code>Promise</code> - Returns a child_process instance, which is enhanced to
  also be a Promise for a result Object with stdout and stderr properties.  
**Category**: Child Process  
**See**: [execa](https://github.com/sindresorhus/execa#readme) for details  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| command | <code>String</code> |  |  |
| [options] | <code>Object</code> |  |  |
| [options.cwd] | <code>String</code> | <code>process.cwd()</code> | Current working directory of the child process. |
| [options.env] | <code>Object</code> | <code>process.env</code> | Environment key-value pairs. Extends automatically from `process.env` |
| [options.extendEnv] | <code>Boolean</code> | <code>true</code> | Set to false if you don't want to extend the environment variables when providing the env property. |
| [options.argv0] | <code>String</code> |  | Explicitly set the value of `argv[0]` |
| [options.stdio] | <code>String</code> \| <code>Array.&lt;String&gt;</code> | <code>pipe</code> | Child's stdio configuration. |
| [options.detached] | <code>Boolean</code> | <code>false</code> | Prepare child to run independently of its parent process. |
| [options.shell] | <code>Boolean</code> | <code>false</code> | If `true`, runs command inside of a shell. Uses `/bin/sh` on `UNIX` and `cmd.exe` on `Windows`. |
| [options.preferLocal] | <code>Boolean</code> | <code>true</code> | Prefer locally installed binaries when looking for a binary to execute. If you `npm install foo`, you can then `utils.exec('foo')`. |
| [options.localDir] | <code>String</code> | <code>process.cwd()</code> | Preferred path to find locally installed binaries in (use with `preferLocal`). |
| [options.input] | <code>String</code> |  | Write some input to the `stdin` of your binary. |
| [options.reject] | <code>Boolean</code> | <code>true</code> | Setting this to `false` resolves the promise with the error instead of rejecting it. |
| [options.cleanup] | <code>Boolean</code> | <code>true</code> | Keep track of the spawned process and `kill` it when the parent process exits. |
| [options.timeout] | <code>Boolean</code> | <code>0</code> | If timeout is greater than `0`, the parent will send the signal identified by the `killSignal` property (the default is `SIGTERM`) if the child runs longer than timeout milliseconds. |
| [options.killSignal] | <code>String</code> | <code>SIGTERM</code> | Signal value to be used when the spawned process will be killed. |

<a name="module_@quisitive/utils.encrypt"></a>

### utils.encrypt(decrypted, encryptionKey) ⇒ <code>String</code>
Encrypts the given String using the aes192 algorithm.

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: Crypto  

| Param | Type |
| --- | --- |
| decrypted | <code>String</code> | 
| encryptionKey | <code>String</code> | 

<a name="module_@quisitive/utils.decrypt"></a>

### utils.decrypt(encrypted, decryptionKey) ⇒ <code>String</code>
Decrypts the given String using the aes192 algorithm.

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: Crypto  

| Param | Type |
| --- | --- |
| encrypted | <code>String</code> | 
| decryptionKey | <code>String</code> | 

<a name="module_@quisitive/utils.hash"></a>

### utils.hash(input) ⇒ <code>String</code>
Creates a hash for file revving.

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Returns**: <code>String</code> - an MD5 hash truncated to 10 characters  
**Category**: Crypto  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> \| <code>Object</code> | The object to be hashed |

<a name="module_@quisitive/utils.rm"></a>

### utils.rm ⇒ <code>Promise</code>
Delete files and folders using globs, It also protects you against deleting
  the current working directory and above. - Think `rm -rf`.

**Kind**: static property of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: File system  
**See**: [minimatch](https://github.com/isaacs/minimatch#usage) usage for patterns examples  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| patterns | <code>String</code> \| <code>Array</code> |  | Path, or globs to be deleted |
| [options] | <code>Object</code> |  | Options |
| [options.force] | <code>Object</code> | <code>false</code> | Allow deleting outside the cwd |

<a name="module_@quisitive/utils.mkd"></a>

### utils.mkd(path) ⇒ <code>Promise</code>
Make a directory and its parents if needed - Think` mkdir -p`.

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Returns**: <code>Promise</code> - Promise for the path to the created directory.  
**Category**: File system  
**Author**: sindresorhus@gmail.com  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Directory to create. |

<a name="module_@quisitive/utils.readFile"></a>

### utils.readFile(filePath, [options]) ⇒ <code>Promise</code>
Asynchronously reads data to from a file

Just a promisified version of fs.readFile

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: File system  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>String</code> | Where to save the data |
| [options] | <code>Object</code> |  |

<a name="module_@quisitive/utils.writeFile"></a>

### utils.writeFile(filePath, data, [opts]) ⇒ <code>Promise</code>
Atomically writes data to a file, replacing the file if it already
  exists. Creates directories for you as needed.

  Sync Version is also available under: `utils.writeFile.sync`

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: File system  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>String</code> | Where to save the data |
| data | <code>String</code> \| <code>Buffer</code> | Data to be saved |
| [opts] | <code>Object</code> |  |

**Example**  
```js
// Promise mode.
  utils.writeFile('path/to/foo.jpg', imageData)
    .then(() => console.log('done'))
```
**Example**  
```js
// async/await mode.
  (async () => {
  utils.writeFile('path/to/foo.jpg', imageData)
    console.log('done')
  })
```
**Example**  
```js
// Sync mode. (THIS BLOCKS THE EVENT LOOP)
  utils.writeFile.sync('path/to/foo.jpg', imageData)
  console.log('done')
```
<a name="module_@quisitive/utils.deleteFile"></a>

### utils.deleteFile(filePath) ⇒ <code>Promise</code>
Asynchronous unlink(2). The Promise is resolved with no arguments upon success.

Just a promisified version of fs.unlink

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: File system  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>String</code> | the file to delete |

<a name="module_@quisitive/utils.readJson"></a>

### utils.readJson(filePath) ⇒ <code>Promise</code>
Read and parse a JSON file. Strips UTF-8 BOM, uses graceful-fs, and throws
  more helpful JSON errors.

  Sync Version is also available under: `utils.readJson.sync`

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Returns**: <code>Promise</code> - Returns a promise for the parsed JSON.  
**Category**: File system  

| Param | Type |
| --- | --- |
| filePath | <code>String</code> | 

<a name="module_@quisitive/utils.writeJson"></a>

### utils.writeJson(filepath, data, [options]) ⇒ <code>Promise</code>
Stringify and write JSON to a file atomically, Creates directories for you
  as needed.

  Sync Version is also available under: `utils.writeJson.sync`

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: File system  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| filepath | <code>String</code> |  | Where to save the data |
| data | <code>Object</code> |  | Data to be saved |
| [options] | <code>Object</code> |  |  |
| [options.indent] | <code>String</code> \| <code>Number</code> | <code>&#x27;\t&#x27;</code> | Indentation as a `string` or `number` of spaces. Pass in `null` for no formatting. |
| [options.detectIndent] | <code>Boolean</code> | <code>false</code> | Detect indentation automatically if the file exists. |
| [options.sortKeys] | <code>Boolean</code> | <code>false</code> | Sort the keys recursively. |
| [options.replace] | <code>function</code> |  | Passed into `JSON.stringify`. |

**Example**  
```js
// Promise mode.
  utils.writeJson('foo.json', {foo: true})
    .then(() => console.log('done'))
```
**Example**  
```js
// async/await mode.
  (async () => {
    await utils.writeJson('foo.json', {foo: true})
    console.log('done')
  })
```
**Example**  
```js
// Sync mode. (THIS BLOCKS THE EVENT LOOP)
  utils.writeJson.sync('foo.json', {foo: true})
  console.log('done')
```
<a name="module_@quisitive/utils.saveFile"></a>

### ~~utils.saveFile()~~
***Deprecated***

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: File system  
**See**: [utils.writeFile](utils.writeFile)  
<a name="module_@quisitive/utils.saveJson"></a>

### ~~utils.saveJson()~~
***Deprecated***

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: File system  
**See**: [utils.writeJson](utils.writeJson)  
<a name="module_@quisitive/utils.getDuration"></a>

### utils.getDuration(start) ⇒ <code>Number</code>
Gets the duration in milliseconds from the given start time.

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: Humanizers  

| Param | Type | Description |
| --- | --- | --- |
| start | <code>Object</code> | A result of process.hrtime() |

<a name="module_@quisitive/utils.humanizeStatusCode"></a>

### utils.humanizeStatusCode(status) ⇒ <code>String</code>
Humanizes the given status code

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: Humanizers  

| Param | Type |
| --- | --- |
| status | <code>Number</code> | 

<a name="module_@quisitive/utils.cleanUrl"></a>

### utils.cleanUrl(url) ⇒ <code>String</code>
Returns the path part of the given url

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: Humanizers  

| Param | Type |
| --- | --- |
| url | <code>String</code> | 

<a name="module_@quisitive/utils.extend"></a>

### utils.extend(mergeInto, ...mergeFrom) ⇒ <code>Object</code>
Extend an object (and any object it contains) with one or more objects (and
  objects contained in them). This does not replace deep objects as other
  extend functions do, but dives into them extending individual elements
  instead.

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Returns**: <code>Object</code> - The altered mergeInto object is returned  
**Category**: Object Utils  

| Param | Type | Description |
| --- | --- | --- |
| mergeInto | <code>Object</code> | The object to merge into. ({} recommended) |
| ...mergeFrom | <code>Object</code> | Any number of objects to merge from |

<a name="module_@quisitive/utils.diff"></a>

### utils.diff(objA, objB) ⇒ <code>Object</code>
Returns an object containing all elements that differ between two objects.

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Returns**: <code>Object</code> - A differential object, which if extended onto objA would result in objB.  
**Category**: Object Utils  

| Param | Type | Description |
| --- | --- | --- |
| objA | <code>Object</code> | The object to compare from |
| objB | <code>Object</code> | The object to compare with |

<a name="module_@quisitive/utils.clone"></a>

### utils.clone(obj) ⇒ <code>Object</code>
This returns a new object with all elements copied from the specified
  object. Deep copies are made of objects and arrays so you can do anything
  with the returned object without affecting the input object.

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Returns**: <code>Object</code> - A new object with the elements copied from the copyFrom object  
**Category**: Object Utils  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The original object to copy from |

<a name="module_@quisitive/utils.sortKeys"></a>

### utils.sortKeys(obj, [sortWith]) ⇒ <code>Object</code>
Returns a copy of an object with all keys sorted.

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: Object Utils  
**Requires**: <code>module:sort-object-keys</code>  
**Author**: keithamus  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The Object to sort. |
| [sortWith] | <code>Array</code> \| <code>function</code> | An `Array` containing ordered keys or a `Function` (same signature as in `Array.prototype.sort()`). |

<a name="module_@quisitive/utils.tap"></a>

### utils.tap ⇒ <code>Promise</code>
Tap into a promise chain without affecting its value or state

**Kind**: static property of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Returns**: <code>Promise</code> - An observer `corutine`.  
**Category**: Promise Chains  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>function</code> | Async function to be wrapped. |

**Example**  
```js
Promise.resolve('unicorn')
    .then(utils.tap(console.log)) // Logs `unicorn`
    .then(value => { // `value` is still `unicorn` })
```
<a name="module_@quisitive/utils.pipe"></a>

### utils.pipe ⇒ <code>Promise</code>
Creates a Promise that returns the result of invoking the given Async
  Functions, where each successive invocation is supplied the return value
  of the previous. ALA fp.pipe but for async functions.

**Kind**: static property of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: Promise Chains  

| Param | Type | Description |
| --- | --- | --- |
| ...fn | <code>function</code> | Any number of Async Functions where each consumes the return value of the previous one. |

<a name="module_@quisitive/utils.forEach"></a>

### utils.forEach(coll, iteratee) ⇒ <code>Promise</code>
Array.forEach in parallel

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: Promise Chains  

| Param | Type | Description |
| --- | --- | --- |
| coll | <code>Array</code> \| <code>Object</code> | A collection to iterate over. |
| iteratee | <code>function</code> | An async function to apply to each item in coll |

<a name="module_@quisitive/utils.forEachSeries"></a>

### utils.forEachSeries(coll, iteratee) ⇒ <code>Promise</code>
Array.forEach in series

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: Promise Chains  

| Param | Type | Description |
| --- | --- | --- |
| coll | <code>Array</code> \| <code>Object</code> | A collection to iterate over. |
| iteratee | <code>function</code> | An async function to apply to each item in coll |

<a name="module_@quisitive/utils.forEachLimit"></a>

### utils.forEachLimit(coll, limit, iteratee) ⇒ <code>Promise</code>
Array.forEach in parallel with a concurrency limit

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: Promise Chains  

| Param | Type | Description |
| --- | --- | --- |
| coll | <code>Array</code> \| <code>Object</code> | A collection to iterate over. |
| limit | <code>Number</code> | The maximum number of async operations at a time. |
| iteratee | <code>function</code> | An async function to apply to each item in coll |

<a name="module_@quisitive/utils.map"></a>

### utils.map(coll, iteratee, options) ⇒ <code>Promise</code>
Array.map in parallel

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: Promise Chains  

| Param | Type | Description |
| --- | --- | --- |
| coll | <code>Array</code> | A collection to iterate over. |
| iteratee | <code>function</code> | An async function to apply to each item in coll |
| options | <code>Object</code> | Options |

<a name="module_@quisitive/utils.mapSeries"></a>

### utils.mapSeries(coll, iteratee) ⇒ <code>Promise</code>
Array.map in series

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: Promise Chains  

| Param | Type | Description |
| --- | --- | --- |
| coll | <code>Array</code> | A collection to iterate over. |
| iteratee | <code>function</code> | An async function to apply to each item in coll |

<a name="module_@quisitive/utils.mapLimit"></a>

### utils.mapLimit(coll, limit, iteratee) ⇒ <code>Promise</code>
Array.map in parallel with a concurrency limit

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: Promise Chains  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| coll | <code>Array</code> |  | A collection to iterate over. |
| limit | <code>Number</code> | <code>1</code> | The maximum number of async operations at a time. |
| iteratee | <code>function</code> |  | An async function to apply to each item in coll |

<a name="module_@quisitive/utils.mapValues"></a>

### utils.mapValues(obj, iteratee) ⇒ <code>Promise</code>
Relative of `utils.map`, designed for use with `objects`. Produces a new
  Object by mapping each `value` of `obj` through the `iteratee function`.

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: Promise Chains  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | A collection to iterate over. |
| iteratee | <code>function</code> | An Async function to apply to each `value` in `obj`. The iteratee should return the transformed value as its result. Invoked with `(value, key, callback)`. |

<a name="module_@quisitive/utils.wait"></a>

### utils.wait([ms]) ⇒ <code>Promise</code>
Will resolve the promise after the given milliseconds.

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: Promised Timers  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [ms] | <code>Number</code> | <code>1000</code> | Milliseconds to wait |

<a name="module_@quisitive/utils.nextTick"></a>

### utils.nextTick() ⇒ <code>Promise</code>
Promisified version of process.nextTick

**Kind**: static method of [<code>@quisitive/utils</code>](#module_@quisitive/utils)  
**Category**: Promised Timers  
