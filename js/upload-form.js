const uploadControl = document.querySelector('.img-upload__start');
const editForm = document.querySelector('.img-upload__overlay');
const editFormCloseButton = editForm.querySelector('.img-upload__cancel');

editForm.querySelector('.img-upload__text').addEventListener('keydown', (evt) => evt.stopPropagation());

const onDocumentEscKeyDown  = (evt) => {
  if (evt.key === 'Escape') {
    editForm.classList.add('hidden');
    document.body.classList.remove('modal-open');

    document.querySelector('#upload-file').value = '';

    document.removeEventListener('keydown', onDocumentEscKeyDown);
  }
};

editFormCloseButton.onclick = () => {
  editForm.classList.add('hidden');
  document.querySelector('#upload-file').value = '';

  document.removeEventListener('keydown', onDocumentEscKeyDown);
};

uploadControl.onchange = () => {
  editForm.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentEscKeyDown);
};
