import { db } from "./firebase.js";

import {
	collection,
	addDoc,
	serverTimestamp,
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const addParticipantBtn = document.getElementById("addParticipantBtn");

const participantsContainer = document.getElementById("participantsContainer");

const generateBtn = document.getElementById("generateBtn");

addParticipantBtn.addEventListener("click", () => {
	const input = document.createElement("input");

	input.type = "text";
	input.placeholder = "Enter participant name";
	input.classList.add("participant-input");

	participantsContainer.appendChild(input);
});

function generateUniqueNumbers(count, max) {
	const numbers = [];

	while (numbers.length < count) {
		const random = Math.floor(Math.random() * max) + 1;

		if (!numbers.includes(random)) {
			numbers.push(random);
		}
	}

	return numbers;
}

generateBtn.addEventListener("click", async () => {
	const collectorName = document.getElementById("collectorName").value;

	const maxNumber = Number(document.getElementById("maxNumber").value);

	const participantInputs = document.querySelectorAll(".participant-input");

	const participants = [];

	participantInputs.forEach((input) => {
		if (input.value.trim() !== "") {
			participants.push(input.value.trim());
		}
	});

	if (!collectorName || !maxNumber || participants.length === 0) {
		alert("Please fill all fields");
		return;
	}

	if (participants.length > maxNumber) {
		alert("Participants exceed maximum number");
		return;
	}

	const randomNumbers = generateUniqueNumbers(participants.length, maxNumber);

	const results = participants.map((name, index) => ({
		name,
		number: randomNumbers[index],
	}));

	const data = {
		collectorName,
		maxNumber,
		results,
		createdAt: serverTimestamp(),
	};

	try {
		// Save to Firestore
		const docRef = await addDoc(collection(db, "randomResults"), data);

		// Redirect
		window.location.href = `result.html?id=${docRef.id}`;
	} catch (error) {
		console.error(error);
		alert("Error saving data");
	}
});
