// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
	apiKey: "AIzaSyBBSG3GCHvEr9tusG-osjD7aa9341ecMAc",
	authDomain: "tolux-storage.firebaseapp.com",
	projectId: "tolux-storage",
	storageBucket: "tolux-storage.firebasestorage.app",
	messagingSenderId: "838395711516",
	appId: "1:838395711516:web:3665d30921160a6c7b0fd9",
	measurementId: "G-KY209M24VL",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export { db, analytics };
