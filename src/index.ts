const $root = document.querySelector<HTMLDivElement>('div#root');

let word = 'World';

$root.textContent = `Hello ${word}!!`;

const $button = document.body.appendChild(document.createElement('button'));

$button.type = 'button';
$button.textContent = '클릭';

$button.onclick = function onClickButton(event) {
  console.log(event);

  if (word === 'World') {
    word = 'Earth';
  } else {
    word = 'World';
  }

  $root.textContent = `Hello ${word}!!`;
};
