function outer() {
  // this is just like remember
  let i = 0;
  let j = [1, 2, 3];
  let k = "sanket";

  function inner() {
    // this is not quick the snapshot
    i += 1;
    j;
    console.log(j);
    return i;
  }
  i += 2;
  return inner;
}

const x = outer();
x();
