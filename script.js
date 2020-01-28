// alert('Hello world');
// console.log('hello world');

// var demoModule = document.querySelectorAll('.demo-module');
var demoModule = document.getElementsByClassName('demo-module')[0];

function swapColorClasses(event) {
  event.preventDefault();

  console.log(event.target);

  if (demoModule.classList.contains('blue')) {
    demoModule.classList.remove('blue');
    demoModule.classList.add('green');
  } else if (demoModule.classList.contains('green')) {
    demoModule.classList.remove('green');
    demoModule.classList.add('purple');
  } else if (demoModule.classList.contains('purple')) {
    demoModule.classList.remove('purple');
    demoModule.classList.add('blue');
  } else {
    demoModule.classList.add('blue');
  }
}

function toggleDifferentDivs(event) {
  event.preventDefault();

  // $('.demo-module').addClass('hidden');
  demoModule.classList.add('hidden');

  // console.log($(event.target).attr('href'));
  // $(event.target).attr('href')
  var _target = event.target.getAttribute('href');

  // $($(event.target).attr('href')).removeClass('hidden');
  document.getElementById(_target).classList.remove('hidden');
}

// $('#firstClick').click(toggleDifferentDivs);
// document.getElementById('firstClick').addEventListener('click', toggleDifferentDivs);
// $('#secondClick').click(toggleDifferentDivs);
// document.getElementById('secondClick').addEventListener('click', toggleDifferentDivs);

// $('#clickMe').click(swapColorClasses);
document.getElementById('clickMe').addEventListener('click', swapColorClasses);
// $('#orMe').click(swapColorClasses);
document.getElementById('orMe').addEventListener('click', swapColorClasses);
