const lessons = {

    1: {
        title: "Your First Program",
        description:
            "Understand how the basic pieces of a C program work.",

        steps: [
            {
                title: "Step 1 — The program starts",
                code: "int main() {",
                name: "main",
                value: "()",
                explainTitle: "main() is the entry point",
                explain:
                    "Every normal C program starts executing from the main() function."
            },
            {
                title: "Step 2 — C executes instructions",
                code: 'printf("Hello");',
                name: "printf",
                value: "Hello",
                explainTitle: "printf displays output",
                explain:
                    "printf() sends text or values to the program's output."
            },
            {
                title: "Step 3 — Program finishes",
                code: "return 0;",
                name: "return",
                value: "0",
                explainTitle: "return 0 means success",
                explain:
                    "The main function returns 0 to tell the operating system that the program finished successfully."
            }
        ],

        code:
`#include <stdio.h>

int main() {

    printf("Hello, World!");

    return 0;
}`,

        output: "Hello, World!",

        question:
            "Which function is the starting point of a C program?",

        options: [
            ["printf()", false],
            ["main()", true],
            ["start()", false],
            ["run()", false]
        ]
    },


    2: {
        title: "Variables",
        description:
            "See how C stores information inside named memory locations.",

        steps: [
            {
                title: "Step 1 — Create a variable",
                code: "int age = 18;",
                name: "age",
                value: "18",
                explainTitle: "A named storage location",
                explain:
                    "The variable age gives us a name for a piece of stored data."
            },
            {
                title: "Step 2 — Store the value",
                code: "age = 18;",
                name: "age",
                value: "18",
                explainTitle: "The value lives in memory",
                explain:
                    "The number 18 is stored in the memory location represented by age."
            },
            {
                title: "Step 3 — Read the value",
                code: 'printf("%d", age);',
                name: "age",
                value: "18",
                explainTitle: "C retrieves the value",
                explain:
                    "When printf uses age, C reads the value currently stored there."
            }
        ],

        code:
`#include <stdio.h>

int main() {

    int age = 18;

    printf("%d", age);

    return 0;
}`,

        output: "18",

        question:
            "What value is stored in int age = 18;?",

        options: [
            ["8", false],
            ["18", true],
            ["80", false],
            ["0", false]
        ]
    },


    3: {
        title: "Data Types",
        description:
            "Learn how C uses different data types to represent different kinds of information.",

        steps: [
            {
                title: "Step 1 — Integer",
                code: "int age = 18;",
                name: "int",
                value: "18",
                explainTitle: "int stores whole numbers",
                explain:
                    "int is commonly used when your value has no decimal part."
            },
            {
                title: "Step 2 — Decimal",
                code: "float price = 9.5;",
                name: "float",
                value: "9.5",
                explainTitle: "float stores decimals",
                explain:
                    "float can represent numbers containing a fractional part."
            },
            {
                title: "Step 3 — Character",
                code: "char grade = 'A';",
                name: "char",
                value: "'A'",
                explainTitle: "char stores one character",
                explain:
                    "char is used for a single character such as A, b or 7."
            }
        ],

        code:
`#include <stdio.h>

int main() {

    int age = 18;
    float price = 9.5;
    char grade = 'A';

    printf("%d %.1f %c",
           age, price, grade);

    return 0;
}`,

        output: "18 9.5 A",

        question:
            "Which data type is normally used for a whole number?",

        options: [
            ["float", false],
            ["char", false],
            ["int", true],
            ["string", false]
        ]
    },


    4: {
        title: "Input & Output",
        description:
            "Learn how your program communicates with the user.",

        steps: [
            {
                title: "Step 1 — Show something",
                code: 'printf("Enter age: ");',
                name: "printf",
                value: "→",
                explainTitle: "printf sends output",
                explain:
                    "printf allows your program to display messages and values."
            },
            {
                title: "Step 2 — Create input storage",
                code: "int age;",
                name: "age",
                value: "?",
                explainTitle: "We need somewhere to store input",
                explain:
                    "Before receiving input, we create a variable to hold the value."
            },
            {
                title: "Step 3 — Read input",
                code: "scanf(\"%d\", &age);",
                name: "age",
                value: "20",
                explainTitle: "scanf reads user input",
                explain:
                    "scanf receives data from the user and stores it in the variable."
            }
        ],

        code:
`#include <stdio.h>

int main() {

    int age;

    printf("Enter age: ");

    scanf("%d", &age);

    printf("You are %d", age);

    return 0;
}`,

        output: "Enter age: 20\nYou are 20",

        question:
            "Which function is commonly used to take input in C?",

        options: [
            ["printf()", false],
            ["scanf()", true],
            ["input()", false],
            ["read()", false]
        ]
    },


    5: {
        title: "Operators",
        description:
            "Use operators to calculate, compare and manipulate values.",

        steps: [
            {
                title: "Step 1 — Addition",
                code: "int result = 10 + 5;",
                name: "result",
                value: "15",
                explainTitle: "+ adds values",
                explain:
                    "The + operator combines two numbers by addition."
            },
            {
                title: "Step 2 — Multiplication",
                code: "int result = 10 * 5;",
                name: "result",
                value: "50",
                explainTitle: "* multiplies values",
                explain:
                    "The multiplication operator produces the product of two values."
            },
            {
                title: "Step 3 — Comparison",
                code: "10 > 5",
                name: "result",
                value: "1",
                explainTitle: "Comparisons produce true or false",
                explain:
                    "In C, a true comparison is represented by 1 and false by 0."
            }
        ],

        code:
`#include <stdio.h>

int main() {

    int a = 10;
    int b = 5;

    printf("%d", a + b);

    return 0;
}`,

        output: "15",

        question:
            "What is the result of 10 + 5?",

        options: [
            ["5", false],
            ["10", false],
            ["15", true],
            ["50", false]
        ]
    },


    6: {
        title: "Conditions",
        description:
            "Teach your program to make decisions using if and else.",

        steps: [
            {
                title: "Step 1 — Check a condition",
                code: "age >= 18",
                name: "condition",
                value: "true",
                explainTitle: "The condition is checked",
                explain:
                    "C evaluates whether the expression is true or false."
            },
            {
                title: "Step 2 — Enter if block",
                code: 'if (age >= 18)',
                name: "if",
                value: "YES",
                explainTitle: "if runs when true",
                explain:
                    "If the condition is true, the instructions inside the if block execute."
            },
            {
                title: "Step 3 — Otherwise",
                code: "else",
                name: "else",
                value: "NO",
                explainTitle: "else handles the other case",
                explain:
                    "If the condition is false, C can execute the else block."
            }
        ],

        code:
`#include <stdio.h>

int main() {

    int age = 20;

    if (age >= 18) {

        printf("Adult");

    } else {

        printf("Minor");

    }

    return 0;
}`,

        output: "Adult",

        question:
            "What does an if statement do?",

        options: [
            ["Repeats code", false],
            ["Stores data", false],
            ["Makes a decision", true],
            ["Creates a variable", false]
        ]
    },


    7: {
        title: "Loops",
        description:
            "Make your program repeat instructions without writing the same code again.",

        steps: [
            {
                title: "Step 1 — Start the loop",
                code: "for (int i = 1; i <= 3; i++)",
                name: "i",
                value: "1",
                explainTitle: "The counter starts at 1",
                explain:
                    "A for loop can use a counter to control how many times code repeats."
            },
            {
                title: "Step 2 — Repeat",
                code: 'printf("%d", i);',
                name: "i",
                value: "2",
                explainTitle: "The loop executes again",
                explain:
                    "After one iteration, the counter changes and the loop checks its condition again."
            },
            {
                title: "Step 3 — Stop",
                code: "i <= 3",
                name: "i",
                value: "4",
                explainTitle: "The condition becomes false",
                explain:
                    "When i becomes 4, i <= 3 is false, so the loop stops."
            }
        ],

        code:
`#include <stdio.h>

int main() {

    for (int i = 1; i <= 3; i++) {

        printf("%d ", i);

    }

    return 0;
}`,

        output: "1 2 3",

        question:
            "How many times does this loop run?\nfor(int i=1; i<=3; i++)",

        options: [
            ["1", false],
            ["2", false],
            ["3", true],
            ["4", false]
        ]
    }

};


let currentLesson = 2;

let currentStep = 1;

let xp =
    Number(localStorage.getItem("craftcXP")) || 120;

let completedLessons =
    JSON.parse(
        localStorage.getItem("craftcCompleted") || "[1,2]"
    );


/* XP */

function updateXP() {

    const level =
        Math.floor(xp / 200) + 1;

    const currentXP =
        xp % 200;

    const progress =
        (currentXP / 200) * 100;

    document.getElementById("xpText")
        .textContent = `${xp} XP`;

    document.getElementById("levelText")
        .textContent = `Level ${level}`;

    document.getElementById("xpBar")
        .style.width = `${progress}%`;

    document.getElementById("xpNext")
        .textContent =
        `${200 - currentXP} XP to next level`;
}

updateXP();


/* OPEN LESSON */

function openLesson(number) {

    currentLesson = number;

    currentStep = 1;


    const lesson =
        lessons[number];


    if (!lesson) {
        return;
    }


    document.querySelector(".hero")
        .style.display = "none";

    document.querySelector("#learn")
        .style.display = "none";


    document
        .getElementById("lessonView")
        .classList.remove("hidden");


    document.getElementById("lessonLabel")
        .textContent =
        `LESSON ${String(number).padStart(2,"0")} • C FUNDAMENTALS`;


    document.getElementById("lessonTitle")
        .textContent =
        lesson.title;


    document.getElementById("lessonDescription")
        .textContent =
        lesson.description;


    document.getElementById("codeEditor")
        .value =
        lesson.code;


    document.getElementById("outputContent")
        .innerHTML =
        '<span class="muted">Run your program to see the output.</span>';


    document.getElementById("runStatus")
        .textContent =
        "Ready";


    document.getElementById("completeBox")
        .classList.remove("show");


    setupQuiz(lesson);


    showStep(1);


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* CLOSE */

function closeLesson() {

    document
        .getElementById("lessonView")
        .classList.add("hidden");


    document.querySelector(".hero")
        .style.display = "";

    document.querySelector("#learn")
        .style.display = "";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* STEP */

function showStep(step) {

    currentStep = step;


    const lesson =
        lessons[currentLesson];

    const data =
        lesson.steps[step - 1];


    document
        .querySelectorAll(".step")
        .forEach(button => {

            const number =
                Number(button.dataset.step);

            button.classList.toggle(
                "active",
                number === step
            );

            button.classList.toggle(
                "done",
                number < step
            );

        });


    document.getElementById("visualTitle")
        .textContent =
        data.title;


    document.getElementById("visualCode")
        .textContent =
        data.code;


    document.getElementById("memoryName")
        .textContent =
        data.name;


    document.getElementById("memoryValue")
        .textContent =
        data.value;


    document.getElementById("explainTitle")
        .textContent =
        data.explainTitle;


    document.getElementById("explainText")
        .textContent =
        data.explain;


    pulseMemory();

}


/* ANIMATION */

function pulseMemory() {

    const memory =
        document.getElementById("memoryBox");


    memory.classList.remove("pulse");


    void memory.offsetWidth;


    memory.classList.add("pulse");

}


/* PLAY */

function playAnimation() {

    const button =
        document.getElementById("playBtn");


    button.disabled = true;

    button.textContent =
        "Animating...";


    showStep(1);


    setTimeout(() => {
        showStep(2);
    }, 900);


    setTimeout(() => {
        showStep(3);
    }, 1800);


    setTimeout(() => {

        button.disabled = false;

        button.textContent =
            "↻ Replay";

    }, 2700);

}


/* CODE RUNNER */

function runCode() {

    const lesson =
        lessons[currentLesson];


    const output =
        document.getElementById("outputContent");


    const status =
        document.getElementById("runStatus");


    status.textContent =
        "Running...";


    output.textContent =
        "";


    setTimeout(() => {

        output.textContent =
            lesson.output;


        status.textContent =
            "Finished";

    }, 600);

}


/* RESET */

function resetCode() {

    document.getElementById("codeEditor")
        .value =
        lessons[currentLesson].code;


    document.getElementById("outputContent")
        .innerHTML =
        '<span class="muted">Run your program to see the output.</span>';


    document.getElementById("runStatus")
        .textContent =
        "Ready";

}


/* QUIZ */

function setupQuiz(lesson) {

    const question =
        document.getElementById("quizQuestion");


    const options =
        document.getElementById("quizOptions");


    const feedback =
        document.getElementById("quizFeedback");


    question.textContent =
        lesson.question;


    options.innerHTML = "";


    feedback.textContent = "";


    lesson.options.forEach(
        ([text, correct]) => {

            const button =
                document.createElement("button");


            button.textContent =
                text;


            button.onclick =
                () => answerQuiz(
                    button,
                    correct
                );


            options.appendChild(button);

        }
    );

}


/* ANSWER */

function answerQuiz(button, correct) {

    const buttons =
        document.querySelectorAll(
            "#quizOptions button"
        );


    const feedback =
        document.getElementById(
            "quizFeedback"
        );


    buttons.forEach(
        b => b.disabled = true
    );


    if (correct) {

        button.classList.add(
            "correct"
        );


        feedback.textContent =
            "Correct! Nice work.";

        
        const quizKey =
            `craftcQuiz${currentLesson}`;


        if (
            localStorage.getItem(
                quizKey
            ) !== "true"
        ) {

            xp += 10;


            localStorage.setItem(
                "craftcXP",
                xp
            );


            localStorage.setItem(
                quizKey,
                "true"
            );


            updateXP();

        }


        document
            .getElementById("completeBox")
            .classList.add("show");

    }

    else {

        button.classList.add(
            "wrong"
        );


        feedback.textContent =
            "Not quite. Think about the concept again.";

    }

}


/* FINISH */

function finishLesson() {

    if (
        !completedLessons.includes(
            currentLesson
        )
    ) {

        completedLessons.push(
            currentLesson
        );


        xp += 20;


        localStorage.setItem(
            "craftcXP",
            xp
        );


        localStorage.setItem(
            "craftcCompleted",
            JSON.stringify(
                completedLessons
            )
        );


        updateXP();

    }


    updateProgress();


    document.getElementById(
        "completeBox"
    ).innerHTML = `

        <div>

            <strong>
                ✓ ${lessons[currentLesson].title} completed
            </strong>

            <span>
                Great. Continue to the next concept.
            </span>

        </div>

        <button onclick="nextLesson()">
            Next lesson →
        </button>
    `;

}


/* NEXT LESSON */

function nextLesson() {

    const next =
        currentLesson + 1;


    if (lessons[next]) {

        openLesson(next);

    }

    else {

        closeLesson();

        alert(
            "🎉 You completed the entire C Fundamentals path!"
        );

    }

}


/* PROGRESS */

function updateProgress() {

    const count =
        completedLessons.length;


    document.getElementById(
        "courseProgress"
    ).textContent =
        Math.min(count,7);


    for (
        let i = 1;
        i <= 7;
        i++
    ) {

        const cards =
            document.querySelectorAll(
                ".lesson-card"
            );


        const card =
            cards[i - 1];


        if (!card) continue;


        const status =
            card.querySelector(
                ".status"
            );


        if (
            completedLessons.includes(i)
        ) {

            card.classList.add(
                "completed"
            );

            status.textContent =
                "✓ Completed";

        }

    }

}


updateProgress();


/* TAB SUPPORT */

document
    .getElementById("codeEditor")
    .addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Tab") {

                event.preventDefault();


                const start =
                    this.selectionStart;

                const end =
                    this.selectionEnd;


                this.value =
                    this.value.substring(
                        0,
                        start
                    )
                    +
                    "    "
                    +
                    this.value.substring(
                        end
                    );


                this.selectionStart =
                    this.selectionEnd =
                    start + 4;

            }

        }
    );