// =======================================
// STUDENT GRADE CALCULATOR
// =======================================

// Subjects Offered
var subjects = ["maths", "science", "english", "history", "programming"];

// Rules
var honourRollThreshold = 90;
var passingGrade = 60;


// =======================================
// STUDENT DATA (Now Includes ID)
// =======================================

var students = [
    {
        name: "Raj",
        id: 101,
        marks: { maths: 95, science: 92, english: 88, history: 90, programming: 98 }
    },
    {
        name: "Aman",
        id: 102,
        marks: { maths: 70, science: 65, english: 72, history: 60, programming: 68 }
    },
    {
        name: "Priya",
        id: 103,
        marks: { maths: 85, science: 80, english: 82, history: 88, programming: 90 }
    },
    {
        name: "Neha",
        id: 104,
        marks: { maths: 55, science: 58, english: 52, history: 60, programming: 57 }
    }
];


// =======================================
// FUNCTIONS
// =======================================

// Calculate Average
function calculateAverage(marks){
    var total = 0;

    for (let subject of subjects) {
        total += marks[subject];
    }

    return total / subjects.length;
}


// Determine Letter Grade
function determineLetterGrade(average){
    if (average >= 90) return "A";
    else if (average >= 80) return "B";
    else if (average >= 70) return "C";
    else if (average >= 60) return "D";
    return "F";
}


// Honour Roll Check
function isHonourRoll(average){
    return average >= honourRollThreshold;
}


// Passing Check
function isPassing(average){
    return average >= passingGrade;
}



// =======================================
// CLASS STATISTICS SETUP
// =======================================

var classTotal = 0;
var honourCount = 0;
var passCount = 0;

var subjectTotals = {};
for (let subject of subjects) {
    subjectTotals[subject] = 0;
}



// =======================================
// PROCESS STUDENTS
// =======================================

for (let student of students) {

    console.log("========== REPORT CARD ==========");
    console.log("Name:", student.name);
    console.log("Student ID:", student.id);

    // Print Subject Marks
    for (let subject of subjects) {
        console.log(subject + ":", student.marks[subject]);
        subjectTotals[subject] += student.marks[subject];
    }

    var avg = calculateAverage(student.marks);
    var grade = determineLetterGrade(avg);

    console.log("Average:", avg.toFixed(2));
    console.log("Letter Grade:", grade);

    if (isHonourRoll(avg)) {
        console.log("Honour Roll: YES");
        honourCount++;
    } else {
        console.log("Honour Roll: NO");
    }

    if (isPassing(avg)) passCount++;

    console.log();

    classTotal += avg;
}



// =======================================
// CLASS STATISTICS
// =======================================

console.log("========== CLASS STATISTICS ==========");

var classAverage = classTotal / students.length;
console.log("Class Average:", classAverage.toFixed(2));

console.log("\nSubject-wise Averages:");
for (let subject of subjects) {
    var subjectAvg = subjectTotals[subject] / students.length;
    console.log(subject + " Average:", subjectAvg.toFixed(2));
}

console.log("\nHonour Roll Students:", honourCount);

var passPercentage = (passCount / students.length) * 100;
console.log("Pass Percentage:", passPercentage.toFixed(2) + "%");
