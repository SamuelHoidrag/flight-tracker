import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBoDmn0PigjNK2qeQseMc4yCau1_kLJGxk',
  authDomain: 'flight-tracker-a7c4a.firebaseapp.com',
  projectId: 'flight-tracker-a7c4a',
  storageBucket: 'flight-tracker-a7c4a.appspot.com',
  messagingSenderId: '932267994018',
  appId: '1:932267994018:web:9934efaa916f7e10e420fb',
  measurementId: 'G-CSKFEP1EN6',
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
