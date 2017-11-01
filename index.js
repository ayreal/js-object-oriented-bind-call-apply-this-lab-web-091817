function justInvoke(fn) {
  // The function simply invokes the function passed through to it. It also returns the return value of the passed through function.
  return fn();
}

function setThisWithCall(fn, thisValue, arg) {
  // The function again invokes the function passed to it, but uses the call method to return the function's this value.
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, args) {
  // Again, invoke the function passed to it, change the this value of that function passed to it. In addition, we ask you to invoked the passed function with arguments.
  return fn.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  // write a function that returns a copy of the function passed through, but sets the this value of the function's copy.
  return functionToBeCopied.bind(thisValue);
}
