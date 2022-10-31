const uploadForm = document.querySelector('.img-upload__form');
uploadForm.method = 'post';
uploadForm.action = 'https://26.javascript.pages.academy/kekstagram';

const uploadControl = document.querySelector('.img-upload__start');
const editForm = document.querySelector('.img-upload__overlay');
const editFormCloseButton = editForm.querySelector('.img-upload__cancel');
const inputHashtags = editForm.querySelector('.text__hashtags');
const inputDescription = editForm.querySelector('.text__description');

let isInputBoxesOnFocus = false;
inputHashtags.onfocus = () => {isInputBoxesOnFocus = true;};
inputHashtags.onblur = () => {isInputBoxesOnFocus = false;};
inputDescription.onfocus = () => {isInputBoxesOnFocus = true;};
inputDescription.onblur = () => {isInputBoxesOnFocus = false;};

const onDocumentEscKeyDown  = (evt) => {
  if (isInputBoxesOnFocus) {
    return;
  }
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
