const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        completed: false
    }
];


const courseContainer =
    document.querySelector("#course-container");

const creditTotal =
    document.querySelector("#credit-total");

const allButton =
    document.querySelector("#all-btn");

const cseButton =
    document.querySelector("#cse-btn");

const wddButton =
    document.querySelector("#wdd-btn");

function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("div");

        card.classList.add("course");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.textContent =
            `${course.subject} ${course.number}`;

        courseContainer.appendChild(card);
    });

    const credits = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );

    creditTotal.textContent =
        `The total credits for course listed above is ${credits}`;
}

allButton.addEventListener("click", () => {
    displayCourses(courses);
});

cseButton.addEventListener("click", () => {

    const filtered =
        courses.filter(course =>
            course.subject === "CSE"
        );

    displayCourses(filtered);
});

wddButton.addEventListener("click", () => {

    const filtered =
        courses.filter(course =>
            course.subject === "WDD"
        );

    displayCourses(filtered);
});

displayCourses(courses);