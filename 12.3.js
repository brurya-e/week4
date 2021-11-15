// Take the school object and create the following methods to
// that object:
// 3. A method called “assignTeachersSubject” that takes two
// arguments, the teacher’s id, a new subject.
// Assign the new subject to that particular teacher if that
// subject doesn’t exist in their array of subjects
// 4. Create a new method of anything you want.


const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
};

// 1. A method called “findPerson” that takes two arguments,
// a type (either a student or teacher), and an id.
// It will return a particular object of that person.
const findPerson = (type, id) => {
    person = school[type].filter(element => element.id == id)
    return person[0];
}

// console.log(findPerson('teachers', 2));

// 2. A method called “assignStudent” that takes two
// arguments, a student’s id and a subject.
// Assign all of the students to the first available teacher who
// teaches that subject and who is not in full capacity. If all of
// the teachers are in full capacity log to the console “Sorry,
// no available teachers left”.
const assignStudent = (id, subject) => {
    let flag = false;
    (school['teachers']).forEach(element => {
        if (((element.subjects).find(ele => ele == subject)) && element.capacityLeft) {
            element.students.push(id);
            element.capacityLeft--;
            flag = true;
        }
    });
    if (!flag)
        console.log(`Sorry,no available teachers left.`);
}

// assignStudent(1, 'history');
// assignStudent(2, 'history');
// assignStudent(3, 'history');

// console.log(school['teachers']);

// 3. A method called “assignTeachersSubject” that takes two
// arguments, the teacher’s id, a new subject.
// Assign the new subject to that particular teacher if that
// subject doesn’t exist in their array of subjects
const assignTeachersSubject = (id, subject) => {
    let person = school['teachers'].filter(element => element.id == id)
    if (!((person[0].subjects).find(ele => ele == subject)))
        (person[0].subjects).push(subject);
}
assignTeachersSubject(2, 'njnj');
console.log(school['teachers']);