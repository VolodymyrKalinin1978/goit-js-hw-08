import throttle from 'lodash.throttle';
import refs from './refs';
import localstorageApi from './localstoridg';

const LOCAL_STORAGE_KEY = 'feedback-form-state';

refs.formEl.addEventListener('input', throttle(onEmailEndFeedbackInput, 500));
refs.formEl.addEventListener('submit', onEmailEndFeedbackSubmit);

let localStorigData = {};

function onEmailEndFeedbackInput(ev) {
  const target = ev.target;
  const formElValue = target.value;
  const formElName = target.name;

  localStorigData[formElName] = formElValue;

  localstorageApi.save(LOCAL_STORAGE_KEY, localStorigData);
}

function onEmailEndFeedbackSubmit(ev) {
  ev.preventDefault();

  const {
    elements: { email, message },
  } = ev.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Please fill in both email and message');
  }

  // const savedData = localstorageApi.load(LOCAL_STORAGE_KEY);
  console.log(localStorigData);
  ev.currentTarget.reset();
  localstorageApi.remove(LOCAL_STORAGE_KEY);
  localStorigData = {};
}

function returnPrivesPosition() {
  const saveMesage = localstorageApi.load(LOCAL_STORAGE_KEY);
  if (!saveMesage) {
    return;
  }

  const formElements = refs.formEl.elements;

  for (const key in saveMesage) {
    if (saveMesage.hasOwnProperty(key)) {
      formElements[key].value = saveMesage[key];
      if (saveMesage[key]) {
        localStorigData[key] = saveMesage[key];
      }
    }
  }
}

returnPrivesPosition();
