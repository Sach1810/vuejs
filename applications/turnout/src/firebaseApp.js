import firebase from 'firebase'

  const config = {
    apiKey: "AIzaSyBoyVM1kcZcheBJeSQLUqmPhtuZzSPyyws",
    authDomain: "turnout-8f248.firebaseapp.com",
    databaseURL: "https://turnout-8f248.firebaseio.com",
    projectId: "turnout-8f248",
    storageBucket: "turnout-8f248.appspot.com",
    messagingSenderId: "666275596810"
  };

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebase.database().ref().child('events')