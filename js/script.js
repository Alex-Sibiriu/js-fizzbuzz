const container = document.getElementById('main-wrapper')

for (i = 1; i <= 100; i++) {
  const element = document.createElement('div');
  element.className = 'box';

  if (!(i % 3) && !(i % 5))  {
    element.innerHTML = 'fizzbuzz';
  } else if (!(i % 3)) {
    element.innerHTML = 'fizz';
  } else if (!(i % 5)) {
    element.innerHTML = 'buzz';
  } else {
    element.innerHTML = i; 
  }

  container.append(element)

  console.log(element)
}