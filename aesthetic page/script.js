function showDiary(){
    document.getElementById("diary").style.display = "block";
}

function saveEntry(){
    let entry = document.getElementById("diaryEntry").value;
    if(entry.trim() !== ""){
        localStorage.setItem("myDiaryEntry", entry);
        document.getElementById("savedMessage").innerText = "✨ Entry Saved ✨";
    }else{
        alert("Write Something first!");
        }
}

window.onload = function(){
    let savedEntry = localStorage.getItem("myDiaryEntry");
    if(savedEntry){
        document.getElementById("diaryEntry").value = savedEntry;
    }
};