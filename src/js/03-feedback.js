import throttle from 'lodash.throttle';
import refs from './refs';
import localstorageApi from './localstoridg';

const LOCAL_STORAGE_KEY = 'feedback-form-state';

refs.formEl.addEventListener('input', onEmailEndFeedbackInput);
refs.formEl.addEventListener('submit', onEmailEndFeedbackSubmit);

returnPrivesPosition();

function onEmailEndFeedbackInput(ev) {
  const localStorigData = {
    email: ev.currentTarget.elements[0].value,
    message: ev.currentTarget.elements[1].value,
  };

  localstorageApi.save(LOCAL_STORAGE_KEY, localStorigData);
}

function onEmailEndFeedbackSubmit(ev) {
  ev.preventDefault();
  if (!ev.currentTarget.elements[2]) {
    return;
  }

  const savedData = localstorageApi.load(LOCAL_STORAGE_KEY);
  console.log(savedData);
  ev.currentTarget.reset();
  localstorageApi.remove(LOCAL_STORAGE_KEY);
}

function returnPrivesPosition() {
  const saveMesage = localstorageApi.load(LOCAL_STORAGE_KEY);
  if (!saveMesage) {
    return;
  }

  const { email, message } = saveMesage;
  refs.formEl.elements[0].value = email;
  refs.formEl.elements[1].value = message;
}
