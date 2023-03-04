const certificateData = [
    {
        id: 1,
        front: {
            title: 'React Basics',
            img: 'https://i.imgur.com/Be3XCry.png ',
            desc: 'Introduction to building web applications with React'
        },
        back: {
            keyPoints: [
                "1. What is React and why use it?",
                "2. Understanding the Virtual DOM and React's rendering process",
                "3. Creating React components and rendering them in the browser",
                "4. Passing data between components using props",
                "5. Managing component state and re-rendering components on state changes",
                "6. Handling user events using event handlers",
                "7. Using JSX to create dynamic and reusable components",
                "8. Working with React hooks like useState and useEffect",
                "9. Debugging React applications using browser developer tools",
                "10. Building a simple React application from scratch"
            ]
        }
    },
    {
        id: 2,
        front: {
            title: 'Basics of Data Structures',
            img: 'https://i.imgur.com/rW6Iexw.png',
            desc: 'Introduction to basic Data Structures Concepts'
        },
        back: {
            keyPoints: [
                "1. Arrays: ordered collections of elements accessed by an index",
                "2. Linked Lists: collections of elements where each element points to the next",
                "3. Stacks: collections of elements where the last added element is the first one removed (LIFO)",
                "4. Queues: collections of elements where the first added element is the first one removed (FIFO)",
                "5. Hash Tables: collections of key-value pairs that allow constant time access to values",
                "6. Trees: hierarchical structures consisting of nodes with parent-child relationships",
                "7. Heaps: specialized trees that satisfy the heap property",
                "8. Graphs: non-linear structures consisting of nodes (vertices) and edges"
            ]
        }
    },
    {
        id: 3,
        front: {
            title: 'Basics of JavaScript',
            img: 'https://i.imgur.com/Gf8wFRl.png',
            desc: 'Introduction to basic Javascript Concepts'
        },
        back: {
            keyPoints: [
                "1. Variables: containers for storing data values",
                "2. Data types: string, number, boolean, null, undefined, symbol, and object",
                "3. Operators: used to perform operations on values",
                "4. Control flow: using conditional statements (if/else, switch) and loops (for, while, do/while) to control program flow",
                "5. Functions: reusable blocks of code that can take parameters and return values",
                "6. Arrays: ordered collections of elements accessed by an index",
                "7. Objects: collections of key-value pairs used for storing and organizing data",
                "8. DOM manipulation: interacting with HTML and CSS using JavaScript",
                "9. Events: responding to user actions like clicks and key presses",
                "10. Asynchronous programming: using callbacks, promises, and async/await for handling asynchronous operations"
            ]
        }
    },
    {
        id: 4,
        front: {
            title: 'Problem Solving',
            img: 'https://i.imgur.com/Uxl0x1T.png',
            desc: 'Problem Solving Beginners with Animated Chapters'
        },
        back: {
            keyPoints: [
                "1. Number problems: prime numbers, Fibonacci sequence, factorial, greatest common divisor, least common multiple, etc.",
                "2. Pattern problems: triangle patterns, number patterns, star patterns, etc.",
                "3. Array problems: array traversal, sorting, searching, insertion, deletion, merging, rotation, etc.",
                "4. String problems: string manipulation, pattern matching, substring problems, palindrome, anagram, etc.",
                "5. Data structure problems: stack, queue, linked list, binary tree, graph, hash table, etc.",
                "6. Dynamic programming: solving problems by breaking them down into smaller subproblems",
                "7. Recursion: solving problems by calling a function within itself",
                "8. Backtracking: solving problems by trying out different solutions and undoing them if they fail",
                "9. Greedy algorithms: solving problems by making the locally optimal choice at each step",
                "10. Divide and conquer: solving problems by dividing them into smaller subproblems and solving them independently"
            ]
        }
    },
    {
        id: 5,
        front: {
            title: 'Python Challenges',
            img: 'https://i.imgur.com/YBr8sjf.png',
            desc: 'Python Programming -  50 Very Easy Challenges'
        },
        back: {
            keyPoints: [
                "1. Daily practice: offering daily problem solving challenges to help users develop their problem solving skills",
                "2. Variety of problems: presenting a range of problems to help users gain exposure to different types of problems",
                "3. Difficulty levels: providing problems at different difficulty levels to challenge users at their level of ability",
                "4. Multiple languages: allowing users to solve problems using any programming language they are comfortable with",
                "5. Learning resources: providing learning resources to help users learn new problem solving techniques and programming concepts",
                "6. Gamification: using gamification elements like leaderboards, badges, and rewards to encourage users to participate and improve their problem solving skills",
                "7. Community: building a community of problem solvers where users can collaborate, share knowledge, and learn from one another",
                "8. Feedback: providing feedback on users' solutions to help them improve their problem solving skills",
                "9. Certification: offering certifications to recognize users' problem solving achievements and showcase their skills to potential employers",
                "10. Career support: providing career support to help users apply their problem solving skills and find job opportunities"
            ]
        }
    },
    {
        id: 6,
        front: {
            title: 'Daily Challenges',
            img: 'https://i.imgur.com/NzHQQXo.png',
            desc: 'Task of completing daily problem solving Questions'
        },
        back: {
            keyPoints: [
                "1. Daily practice: offering daily problem solving challenges to help users develop their problem solving skills",
                "2. Variety of problems: presenting a range of problems to help users gain exposure to different types of problems",
                "3. Difficulty levels: providing problems at different difficulty levels to challenge users at their level of ability",
                "4. Multiple languages: allowing users to solve problems using any programming language they are comfortable with",
                "5. Learning resources: providing learning resources to help users learn new problem solving techniques and programming concepts",
                "6. Gamification: using gamification elements like leaderboards, badges, and rewards to encourage users to participate and improve their problem solving skills",
                "7. Community: building a community of problem solvers where users can collaborate, share knowledge, and learn from one another",
                "8. Feedback: providing feedback on users' solutions to help them improve their problem solving skills",
                "9. Certification: offering certifications to recognize users' problem solving achievements and showcase their skills to potential employers",
                "10. Career support: providing career support to help users apply their problem solving skills and find job opportunities"
            ]
        }
    },
    {
        id: 7,
        front: {
            title: 'Daily Challenges',
            img: 'https://i.imgur.com/nDIss0u.png',
            desc: 'Task of completing daily problem solving Questions'
        },
        back: {
            keyPoints: [
                "1. Daily practice: offering daily problem solving challenges to help users develop their problem solving skills",
                "2. Variety of problems: presenting a range of problems to help users gain exposure to different types of problems",
                "3. Difficulty levels: providing problems at different difficulty levels to challenge users at their level of ability",
                "4. Multiple languages: allowing users to solve problems using any programming language they are comfortable with",
                "5. Learning resources: providing learning resources to help users learn new problem solving techniques and programming concepts",
                "6. Gamification: using gamification elements like leaderboards, badges, and rewards to encourage users to participate and improve their problem solving skills",
                "7. Community: building a community of problem solvers where users can collaborate, share knowledge, and learn from one another",
                "8. Feedback: providing feedback on users' solutions to help them improve their problem solving skills",
                "9. Certification: offering certifications to recognize users' problem solving achievements and showcase their skills to potential employers",
                "10. Career support: providing career support to help users apply their problem solving skills and find job opportunities"
            ]
        }
    },
    {
        id: 8,
        front: {
            title: 'Daily Challenges',
            img: 'https://i.imgur.com/Ag8ur1q.png',
            desc: 'Task of completing daily problem solving Questions'
        },
        back: {
            keyPoints: [
                "1. Daily practice: offering daily problem solving challenges to help users develop their problem solving skills",
                "2. Variety of problems: presenting a range of problems to help users gain exposure to different types of problems",
                "3. Difficulty levels: providing problems at different difficulty levels to challenge users at their level of ability",
                "4. Multiple languages: allowing users to solve problems using any programming language they are comfortable with",
                "5. Learning resources: providing learning resources to help users learn new problem solving techniques and programming concepts",
                "6. Gamification: using gamification elements like leaderboards, badges, and rewards to encourage users to participate and improve their problem solving skills",
                "7. Community: building a community of problem solvers where users can collaborate, share knowledge, and learn from one another",
                "8. Feedback: providing feedback on users' solutions to help them improve their problem solving skills",
                "9. Certification: offering certifications to recognize users' problem solving achievements and showcase their skills to potential employers",
                "10. Career support: providing career support to help users apply their problem solving skills and find job opportunities"
            ]
        }
    },
    {
        id: 9,
        front: {
            title: 'Daily Challenges',
            img: 'https://i.imgur.com/x48FssS.png',
            desc: 'Task of completing daily problem solving Questions'
        },
        back: {
            keyPoints: [
                "1. Daily practice: offering daily problem solving challenges to help users develop their problem solving skills",
                "2. Variety of problems: presenting a range of problems to help users gain exposure to different types of problems",
                "3. Difficulty levels: providing problems at different difficulty levels to challenge users at their level of ability",
                "4. Multiple languages: allowing users to solve problems using any programming language they are comfortable with",
                "5. Learning resources: providing learning resources to help users learn new problem solving techniques and programming concepts",
                "6. Gamification: using gamification elements like leaderboards, badges, and rewards to encourage users to participate and improve their problem solving skills",
                "7. Community: building a community of problem solvers where users can collaborate, share knowledge, and learn from one another",
                "8. Feedback: providing feedback on users' solutions to help them improve their problem solving skills",
                "9. Certification: offering certifications to recognize users' problem solving achievements and showcase their skills to potential employers",
                "10. Career support: providing career support to help users apply their problem solving skills and find job opportunities"
            ]
        }
    },
    {
        id: 10,
        front: {
            title: 'Daily Challenges',
            img: 'https://i.imgur.com/DwXjERH.png',
            desc: 'Task of completing daily problem solving Questions'
        },
        back: {
            keyPoints: [
                "1. Daily practice: offering daily problem solving challenges to help users develop their problem solving skills",
                "2. Variety of problems: presenting a range of problems to help users gain exposure to different types of problems",
                "3. Difficulty levels: providing problems at different difficulty levels to challenge users at their level of ability",
                "4. Multiple languages: allowing users to solve problems using any programming language they are comfortable with",
                "5. Learning resources: providing learning resources to help users learn new problem solving techniques and programming concepts",
                "6. Gamification: using gamification elements like leaderboards, badges, and rewards to encourage users to participate and improve their problem solving skills",
                "7. Community: building a community of problem solvers where users can collaborate, share knowledge, and learn from one another",
                "8. Feedback: providing feedback on users' solutions to help them improve their problem solving skills",
                "9. Certification: offering certifications to recognize users' problem solving achievements and showcase their skills to potential employers",
                "10. Career support: providing career support to help users apply their problem solving skills and find job opportunities"
            ]
        }
    },
    {
        id: 10,
        front: {
            title: 'Daily Challenges',
            img: 'https://i.imgur.com/QLzV4hr.png',
            desc: 'Task of completing daily problem solving Questions'
        },
        back: {
            keyPoints: [
                "1. Daily practice: offering daily problem solving challenges to help users develop their problem solving skills",
                "2. Variety of problems: presenting a range of problems to help users gain exposure to different types of problems",
                "3. Difficulty levels: providing problems at different difficulty levels to challenge users at their level of ability",
                "4. Multiple languages: allowing users to solve problems using any programming language they are comfortable with",
                "5. Learning resources: providing learning resources to help users learn new problem solving techniques and programming concepts",
                "6. Gamification: using gamification elements like leaderboards, badges, and rewards to encourage users to participate and improve their problem solving skills",
                "7. Community: building a community of problem solvers where users can collaborate, share knowledge, and learn from one another",
                "8. Feedback: providing feedback on users' solutions to help them improve their problem solving skills",
                "9. Certification: offering certifications to recognize users' problem solving achievements and showcase their skills to potential employers",
                "10. Career support: providing career support to help users apply their problem solving skills and find job opportunities"
            ]
        }
    },
    {
        id: 11,
        front: {
            title: 'internship',
            img: 'https://i.imgur.com/VRAndqz.png',
            desc: 'Task of completing daily problem solving Questions'
        },
        back: {
            keyPoints: [
                "1. Exposure to new technologies: gaining exposure to new and emerging technologies in the industry",
                "2. Hands-on experience: gaining practical, hands-on experience working with various technologies",
                "3. Mentorship: receiving guidance and mentorship from experienced professionals in the field",
                "4. Collaborative work: working collaboratively with other interns and employees on projects",
                "5. Professional development: participating in training sessions and workshops to develop professional skills"
            ]
        }
    },
];
export default certificateData;