const reactProjects = [
    {
        id: 1,
        front: {
            title: 'React Project 1',
            img: 'https://i.imgur.com/xnW17yN.png'
        },
        back: {
            keyPoints: [
                "DOM selection: Select the HTML elements for displaying the countdown timer.",
                "New Year's date: Calculate the date of the next New Year's.",
                "Time difference: Calculate the time difference between current time and New Year's.",
                "Display update: Continuously update the display with the calculated time until New Year's arrives.",
                "Timers: Use JavaScript's setInterval to run the countdown logic every second."
            ],
            viewUrl: 'https://ravisdraw.github.io/js-projects/01%20NewYear%20CountDown/index.html',
            sourceCode: 'https://gist.github.com/ravisdraw/38ec38671c7f138a9d28578029d4f271'
        }
    },
    {
        id: 2,
        front: {
            title: 'React Project 2',
            img: 'https://i.imgur.com/xnW17yN.png',
        },
        back: {
            keyPoints: [
                "Selects clock elements in HTML with class names '.h', '.m', '.s'",
                "Formats hour, minute, and second values.",
                "Updates clock element's innerHTML with formatted values.",
                "Displays AM/PM based on hour value.",
                "Runs the getTime function every second with setInterval."
            ],
            viewUrl: 'https://ravisdraw.github.io/js-projects/02%20Digital%20Clock/index.html',
            sourceCode: 'https://gist.github.com/ravisdraw/bc2662a09b04939a4f5192f868a30acc'
        }
    },
    {
        id: 3,
        front: {
            title: 'React Project 3',
            img: 'https://i.imgur.com/xnW17yN.png',
        },
        back: {
            keyPoints: [
                "Selects hour, minute, and second elements from the HTML document using querySelector.",
                "Gets the current time using JavaScript's built-in Date object.",
                "Calculates the degree of rotation for each hand based on the time.",
                "Sets the CSS variable for rotation for each hand using style.setProperty method.",
                "Uses setInterval to repeatedly call getTime every second to update the clock."
            ],
            viewUrl: 'https://ravisdraw.github.io/js-projects/03%20Analog%20Clock/index.html',
            sourceCode: 'https://gist.github.com/ravisdraw/ab9a8c790a741683a9e479dee242e2bd'
        }
    },
    {
        id: 4,
        front: {
            title: 'React Project 4',
            img: 'https://i.imgur.com/xnW17yN.png',
        },
        back: {
            keyPoints: [
                "Selects start, stop, reset buttons and time elements using querySelector.",
                "Initializes variables for hour, minute, second, and millisecond.",
                "UpdateValues function formats and displays time.",
                "Digits are displayed in HTML elements using innerText.",
                "Classes are added/removed to buttons to manage their appearance."
            ],
            viewUrl: 'https://ravisdraw.github.io/js-projects/04%20StopWatch/index.html',
            sourceCode: 'https://gist.github.com/ravisdraw/a754630f8109f544c979feac1f771390'
        }
    },
    {
        id: 5,
        front: {
            title: 'React Project 5',
            img: 'https://i.imgur.com/xnW17yN.png',
        },
        back: {
            keyPoints: [
                "DOMContentLoaded event listener set",
                "UpdateValues function updates bar_Val and coding based on bar input",
                "Bar mousemove and change events trigger UpdateValues",
                "UpdateValues called on page load",
                "Copy function selects txtarea and copies to clipboard"
            ],
            viewUrl: 'https://ravisdraw.github.io/js-projects/05%20CSS%20Generator/index.html',
            sourceCode: 'https://gist.github.com/ravisdraw/5c7ccb3024c716d702dcd87ace08ed54'
        }
    }
]

export default reactProjects;