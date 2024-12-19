//Student Grade Management

class GradeManagement {
    constructor() {
        this.grades = [];
    }

    // Method to add a new grade
    addGrade(grade) {
        if (typeof grade === 'number' && grade >= 0 && grade <= 100) {
            this.grades.push(grade);
            console.log(`Grade ${grade} added.`);
        } else {
            console.log('Invalid grade. Please enter a number between 0 and 100.');
        }
    }

    // Method to calculate the average grade
    calculateAverage() {
        if (this.grades.length === 0) {
            return 0;
        }
        const total = this.grades.reduce((acc, grade) => acc + grade, 0);
        return total / this.grades.length;
    }

    // Method to find the highest grade
    findHighestGrade() {
        if (this.grades.length === 0) {
            return null;
        }
        return Math.max(...this.grades);
    }

    // Method to find the lowest grade
    findLowestGrade() {
        if (this.grades.length === 0) {
            return null;
        }
        return Math.min(...this.grades);
    }

    // Method to display all grades
    displayGrades() {
        if (this.grades.length === 0) {
            console.log('No grades available.');
        } else {
            console.log('Grades:', this.grades.join(', '));
        }
    }
}

// Example usage
const gradeManager = new GradeManagement();

// Adding grades
gradeManager.addGrade(85);
gradeManager.addGrade(90);
gradeManager.addGrade(78);
gradeManager.addGrade(92);
gradeManager.addGrade(88);

// Displaying all grades
gradeManager.displayGrades();

// Calculating average grade
const average = gradeManager.calculateAverage();
console.log('Average Grade:', average.toFixed(2));

// Finding highest and lowest grades
const highest = gradeManager.findHighestGrade();
const lowest = gradeManager.findLowestGrade();
console.log('Highest Grade:', highest);
console.log('Lowest Grade:', lowest);