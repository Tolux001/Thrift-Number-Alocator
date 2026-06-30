// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
	apiKey: process.env.Next_apiKey,
	authDomain: process.env.Next_authDomain,
	projectId: process.env.Next_projectId,
	storageBucket: process.env.Next_storageBucket,
	messagingSenderId: process.env.Next_messagingSenderId,
	appId: process.env.Next_appId,
	measurementId: process.env.Next_measurementId,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export { db, analytics };
