class StudentGradeManager {
    constructor() {
        this.grades = [];
    }

    // Method to add a new grade
    addGrade(grade) {
        if (typeof grade === 'number' && grade >= 0 && grade <= 100) {
            this.grades.push(grade);
            console.log(`Grade ${grade} added.`);
        } else {
            console.log('Please enter a valid grade (0-100).');
        }
    }

    // Method to calculate the average grade
    calculateAverage() {
        if (this.grades.length === 0) {
            console.log('No grades available to calculate average.');
            return 0;
        }
        const total = this.grades.reduce((acc, grade) => acc + grade, 0);
        const average = total / this.grades.length;
        console.log(`Average grade: ${average.toFixed(2)}`);
        return average;
    }

    // Method to find the highest grade
    findHighestGrade() {
        if (this.grades.length === 0) {
            console.log('No grades available to find the highest grade.');
            return null;
        }
        const highest = Math.max(...this.grades);
        console.log(`Highest grade: ${highest}`);
        return highest;
    }

    // Method to find the lowest grade
    findLowestGrade() {
        if (this.grades.length === 0) {
            console.log('No grades available to find the lowest grade.');
            return null;
        }
        const lowest = Math.min(...this.grades);
        console.log(`Lowest grade: ${lowest}`);
        return lowest;
    }

    // Method to display all grades
    displayGrades() {
        if (this.grades.length === 0) {
            console.log('No grades available.');
            return;
        }
        console.log('All grades:', this.grades.join(', '));
    }
}

// Example usage
const gradeManager = new StudentGradeManager();
gradeManager.addGrade(85);
gradeManager.addGrade(90);
gradeManager.addGrade(78);
gradeManager.addGrade(92);
gradeManager.addGrade(88);

gradeManager.displayGrades();
gradeManager.calculateAverage();
gradeManager.findHighestGrade();
gradeManager.findLowestGrade();