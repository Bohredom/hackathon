const form = document.querySelector('.contactUs');

const inputEmail = form.querySelector('#email');
const inputName = form.querySelector('#name');
const inputSubj = form.querySelector('#subject');
const inputMessage = form.querySelector('#message');

const config = {
    apiKey: "AIzaSyCLIvTNWezAUHmw29YH_qK0NmFwx62vQjU",
    authDomain: "bohredom-2020.firebaseapp.com",
    databaseURL: "https://bohredom-2020.firebaseio.com",
    projectId: "bohredom-2020",
    storageBucket: "bohredom-2020.appspot.com",
    messagingSenderId: "651767213628",
    appId: "1:651767213628:web:bca3faee48f491f8a61d39"
};

function firebasePush(name, email, subject, message) {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    var mailsRef = firebase.database().ref('emails').push().set({
        name: name.value,
        mail: email.value,
        subject: subject.value,
        message: message.value
    });

    inputName.value = '';
    inputEmail.value = '';
    inputSubj.value = '';
    inputMessage.value = '';
}

if (form) {
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        firebasePush(inputName, inputEmail, inputSubj, inputMessage);
        return alert('Your message successfully sent to Bohredom developers');
    })
}