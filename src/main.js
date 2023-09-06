const gl = document.getElementById("root").getContext("webgl");
gl.clearColor(...[1, 0, 0, 1]);
gl.clear(gl.COLOR_BUFFER_BIT);

setTimeout(() => {
  gl.clearColor(...[0, 1, 0, 1]);
  gl.clear(gl.COLOR_BUFFER_BIT);
}, 1000);

setTimeout(() => {
  gl.clearColor(...[0, 0, 1, 1]);
  gl.clear(gl.COLOR_BUFFER_BIT);
}, 2000);

setTimeout(() => {
  // The window freezes before this is called.
  gl.clearColor(...[1, 0, 0, 1]);
  gl.clear(gl.COLOR_BUFFER_BIT);
}, 3000);
