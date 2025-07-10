const password = [];
const showPassword = document.querySelector("#password");
const passwordLength = document.querySelector("#length");
const btnGeneratePassword = document.querySelector("#generate");
const pElement = showPassword.querySelector("p");
const smallElement = document.querySelector("small");

const validChars = {
	uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	lowercase: "abcdefghijklmnopqrstuvwxyz",
	numbers: "0123456789",
	symbols: "!@#$%^&*()_-+=<>?{}[]~",
};

const checks = {
	uppercase: document.querySelector("#uppercase"),
	lowercase: document.querySelector("#lowercase"),
	numbers: document.querySelector("#numbers"),
	symbols: document.querySelector("#symbols"),
};

const getSelectedChars = () => {
	let selectedChars = "";

	if (checks.uppercase.checked) selectedChars += validChars.uppercase;
	if (checks.lowercase.checked) selectedChars += validChars.lowercase;
	if (checks.numbers.checked) selectedChars += validChars.numbers;
	if (checks.symbols.checked) selectedChars += validChars.symbols;

	return selectedChars;
};

const getRandomChar = (validCharsString) => {
	const randomIndex = Math.floor(Math.random() * validCharsString.length);
	return validCharsString[randomIndex];
};

const validateSelection = () => {
	if (
		!checks.uppercase.checked &&
		!checks.lowercase.checked &&
		!checks.numbers.checked &&
		!checks.symbols.checked
	) {
		smallElement.style.display = "block";
		pElement.textContent = "";
		return false;
	}
	return true;
};

const generatePassword = () => {
	pElement.textContent = "";
	smallElement.style.display = "none";

	if (!validateSelection()) return;

	password.length = 0;
	const selectedChars = getSelectedChars();

	for (let i = 0; i < passwordLength.value; i++) {
		password.push(getRandomChar(selectedChars));
	}
	pElement.textContent += `${password.join("")}`;
};

btnGeneratePassword.addEventListener("click", generatePassword);
