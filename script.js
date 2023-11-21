let students = [];

function babovkaskakaem() {
    const userInput = document.getElementById("userInput").value.trim();

    if (userInput) {
        if (!students.includes(userInput)) {
            students.push(userInput);
            displayStudents();
            document.getElementById("userInput").value = "";
        } else {
            alert("Žák již existuje ve seznamu.");
        }
    }
}

function ledshorcici() {
    if (students.length === 0) {
        alert("Seznam žáků je prázdný.");
        return;
    }

    const userInput = document.getElementById("userInput").value.trim();
    const indexToRemove = students.indexOf(userInput);

    if (indexToRemove !== -1) {
        students.splice(indexToRemove, 1);
        displayStudents();
        document.getElementById("userInput").value = "";
    } else {
        alert("Žák nenalezen ve seznamu.");
    }
}

function displayStudents() {
   const studentElement = document.getElementById("studentitext");

    studentElement.textContent = "Žáci: " + students.join(", ");
}

function ledshorciciamaslem() {
    const studentElement = document.getElementById("studentitext");


 students.length = 0;
 studentElement.textContent = "Žáci:"

}