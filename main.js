const ideas = [
	"No necesitas tenerlo todo claro. Solo dar el primer paso.",
	"Hazlo sencillo. Lo importante es ponerlo en marcha.",
	"Una buena idea también empieza con una pregunta.",
	"Avanzar un poco sigue siendo avanzar."
];

const idea = document.querySelector("#idea");
const newIdeaButton = document.querySelector("#new-idea");
const ideaCount = document.querySelector(".idea-count");
const clock = document.querySelector("#clock");
const clockHour = document.querySelector("#clock-hour");
const clockMinute = document.querySelector("#clock-minute");
const clockSecond = document.querySelector("#clock-second");
const clockTime = document.querySelector("#clock-time");
let currentIdea = 0;

newIdeaButton.addEventListener("click", () => {
	currentIdea = (currentIdea + 1) % ideas.length;
	idea.textContent = ideas[currentIdea];
	ideaCount.textContent = `${String(currentIdea + 1).padStart(2, "0")} / ${String(ideas.length).padStart(2, "0")}`;
});

function updateClock() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes() + seconds / 60;
	const hours = (now.getHours() % 12) + minutes / 60;

	clockHour.style.transform = `rotate(${hours * 30}deg)`;
	clockMinute.style.transform = `rotate(${minutes * 6}deg)`;
	clockSecond.style.transform = `rotate(${seconds * 6}deg)`;
	clock.dateTime = now.toISOString();
	clockTime.textContent = `Hora local: ${now.toLocaleTimeString("es-ES")}`;
}

updateClock();
window.setInterval(updateClock, 1000);
