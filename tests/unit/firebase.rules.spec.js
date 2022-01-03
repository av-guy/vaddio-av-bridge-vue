import {
    getDatabase,
    connectDatabaseEmulator,
    set,
    ref,
    remove
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
    assertSucceeds
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
    const db = getDatabase();                            // Get the database instance
    const auth = getAuth();                              // Get the authentication instance
    connectDatabaseEmulator(db, 'localhost', 9000);      // Point the database reference to the emulator
    connectAuthEmulator(auth, 'http://localhost:9099');  // Point the authentication reference to the emulator
    await createUserWithEmailAndPassword(
        auth, 'jonathan@rpi-gpio.dev', 'test123'
    );                                                   // Create a fake user account for the tests
}

async function tearDownTestingEnvironment() {
    const auth = getAuth();                             // Get the authentication instance
    const user = auth.currentUser;                      // Get the current user
    await deleteUser(user);                             // Delete the current user from the database
}

beforeAll(async () => {
    await initializeTestingEnvironment();
})

afterAll(async () => {
    await tearDownTestingEnvironment()
})

describe('Firebase', () => {
    it('logs in the user', async () => {
        const auth = getAuth();                         // Get the authentication instance
        const user = auth.currentUser;                  // Get the current user
        expect(
            user.providerData[0].uid
        ).toEqual("jonathan@rpi-gpio.dev");     // Expects the current user to be the one created earlier
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
        // The database should not allow any writes outside of the chairs scope.
        const db = getDatabase();
        await assertFails(set(ref(db, `users/123`), {
            username: 'XxCLEANBOIxX'
        }));
    })
})

describe('Firebase', () => {
    it('allows a transaction with a new chair and the correct text property', async () => {
        /**
         * The database should permit writes to the chairs scope so long as the key value is greater than 1 but less
         * than 18. Furthermore, the text value should a string value. There is no size constraint on the amount of
         * text that can be supplied by the user. Additionally, the user should be able to delete a chair instance.
         */
        const db = getDatabase();
        await assertSucceeds(
            set(ref(db, 'chairs/1'), {
                text: 'Jonathan Chaidez'
            })
        )
        await assertSucceeds(
            remove(ref(db, 'chairs/1'))
        )
    })
})

describe('Firebase', () => {
    it('fails write when chair key value is not within range', async () => {
        const db = getDatabase();
        await assertFails(
            set(ref(db, 'chairs/2000'), {
                text: 'Jonathan Chaidez'
            })
        )
        await assertFails(
            set(ref(db, 'chairs/0'), {
                text: 'Jonathan Chaidez'
            })
        )
    })
})