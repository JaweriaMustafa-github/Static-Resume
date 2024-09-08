const showSkillsBtn = document.getElementById("Show-skills") as HTMLButtonElement;
const skillsList = document.getElementById("skills-list") as HTMLUListElement;

console.log("Button:", showSkillsBtn);
console.log("Skills", skillsList);

// Check if elements are found

console.log(showSkillsBtn, skillsList);

if(showSkillsBtn && skillsList){
    showSkillsBtn.addEventListener("click", ()=> {
        console.log("Button clicked")
        if (skillsList.style.display === "none"){
            skillsList.style.display = "block";
            showSkillsBtn.textContent === "Hide Skills";
        } else {
            skillsList.style.display === "none";
            showSkillsBtn.textContent === "Show Skills"
        }
    })
}
else{
    console.log("Elements not found");
}

