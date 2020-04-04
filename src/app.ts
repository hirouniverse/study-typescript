let items = (<HTMLInputElement>document.getElementById('items-list')!);
let taskTitle = (<HTMLInputElement>document.getElementById('title-value')!);

document.getElementById('add-controller')?.addEventListener('click', () => {
  let value = taskTitle.value;
  if (value && value !== '') {
    let item = document.createElement('li');
    item.innerText = value;
    items.appendChild(item);
    taskTitle.value = '';
  }
});
