const container = document.getElementById('main-wrapper')

for (i = 1; i <= 100; i++) {
  const element = document.createElement('div');
  element.className = 'box';

  if (!(i % 3) && !(i % 5))  {
    element.innerHTML = 'fizzbuzz';
    element.classList.add('fizzbuzz');
  } else if (!(i % 3)) {
    element.innerHTML = 'fizz';
    element.classList.add('fizz');
  } else if (!(i % 5)) {
    element.innerHTML = 'buzz';
    element.classList.add('buzz');
  } else {
    element.innerHTML = i; 
    element.classList.add('counter-number');
  }

  container.append(element)

  console.log(element)
}