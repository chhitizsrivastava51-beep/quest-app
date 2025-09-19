const quests = [
  "⚔️ Complete a coding challenge",
  "📖 Read 10 pages of a book",
  "🏋️‍♂️ Do 20 push-ups",
  "🧘 Practice meditation",
  "💧 Drink 2L of water"
];

let currentXP = 0;
let currentLevel = 1;
const xpToLevelUp = 100;

const questList = document.getElementById("quest-list");
const xpFill = document.getElementById("xp-fill");

// Inject quests
quests.forEach(q => {
  const li = document.createElement("li");
  li.textContent = q;
  questList.appendChild(li);
});

// Complete quest button
document.getElementById("complete-quest").addEventListener("click", () => {
  currentXP += 25;
  if (currentXP >= xpToLevelUp) {
    currentLevel++;
    currentXP -= xpToLevelUp;
    alert("🎉 Level Up! You are now Level " + currentLevel);
  }

  // Update UI
  document.getElementById("char-level").textContent = currentLevel;
  document.getElementById("char-xp").textContent = currentXP;
  xpFill.style.width = `${(currentXP / xpToLevelUp) * 100}%`;
});
