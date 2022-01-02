import {
    getDatabase,
    connectDatabaseEmulator,
    set,
    ref
} from "@firebase/database";

import {
    getAuth,
    createUserWithEmailAndPassword,
    connectAuthEmulator,
    deleteUser
} from "@firebase/auth";

import {
    initializeApp
} from "firebase/app";

import {
  assertFails,
} from "@firebase/rules-unit-testing"



import firebase from "@/credentials/firebase.config";

const firebaseConfig = {
  apiKey: firebase.FIREBASE_API_KEY,
  authDomain: firebase.FIREBASE_AUTH_DOMAIN,
  databaseURL: firebase.FIREBASE_DATABASE_URL,
  projectId: firebase.FIREBASE_PROJECT_ID,
  storageBucket: firebase.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: firebase.FIREBASE_MESSAGING_SENDER_ID,
  appId: firebase.FIREBASE_APP_ID,
  measurementId: firebase.FIREBASE_MEASUREMENT_ID
};

initializeApp(firebaseConfig);

async function initializeTestingEnvironment() {
    const db = getDatabase();
    const auth = getAuth();
    connectDatabaseEmulator(db, 'localhost', 9000);
    connectAuthEmulator(auth, 'http://localhost:9099');
    await createUserWithEmailAndPassword(auth, 'jonathan@rpi-gpio.dev', 'test123');
}

async function tearDownTestingEnvironment() {
    const auth = getAuth();
    const user = auth.currentUser;
    await deleteUser(user);
}

beforeAll(async () => {
    await initializeTestingEnvironment();
})

afterAll(async () => {
    await tearDownTestingEnvironment()
})

describe('Firebase', () => {
    it('logs in the user', async () => {
        const auth = getAuth();
        const user = auth.currentUser;
        expect(user.providerData[0].uid).toEqual("jonathan@rpi-gpio.dev");
    })
})

describe('Firebase', () => {
    it('maintains the session throughout the tests', async () => {
        const auth = getAuth();
        const user = auth.currentUser;
        expect(user.providerData[0].uid).toEqual("jonathan@rpi-gpio.dev");
    })
})

describe('Firebase', () => {
    it('denies a transaction falling outside of chairs scope', async () => {
        const db = getDatabase();
        await assertFails(set(ref(db, `users/123`), {
            username: 'XxCLEANBOIxX'
        }));
    })
})

describe('Firebase', () => {
    it('allows writing to the chair scope', async () => {
        const db = getDatabase();
        await assertFails(set(ref(db, `chairs/1`), {
            text: 'XxCLEANBOIxX'
        }));
    })
})