function foo(one) {
  return function foo2(two) {
    return function foo3(three) {
      console.log(one, two, three)
    }
  }
}


// Javascript NO VÁLIDO
// -------------------------------------

function foo(one, two, three) {
  console.log(one, two, three)
}

const bar = foo('one', 'two')
bar('three')
