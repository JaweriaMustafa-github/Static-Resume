var showSkillsBtn = document.getElementById("Show-skills");
var skillsList = document.getElementById("skills-list");
console.log("Button:", showSkillsBtn);
console.log("Skills", skillsList);
// Check if elements are found
console.log(showSkillsBtn, skillsList);
if (showSkillsBtn && skillsList) {
    showSkillsBtn.addEventListener("click", function () {
        console.log("Button clicked");
        if (skillsList.style.display === "none") {
            skillsList.style.display = "block";
            showSkillsBtn.textContent === "Hide Skills";
        }
        else {
            skillsList.style.display === "none";
            showSkillsBtn.textContent === "Show Skills";
        }
    });
}
else {
    console.log("Elements not found");
}
