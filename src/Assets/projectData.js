const projectTitles = {
    newyear: 'New Year Countdown',
    digiClock: 'Digital Clock'
}

export const projectDetails = [
    {
        id: 1,
        front: {
            title: projectTitles.newyear,
            img: 'https://i.imgur.com/BVkPScj.jpg'
        },
        back: {
            keyPoints: [
                "Using JavaScript to access and calculate the remaining time until New Year",
                "Updating the countdown display on the webpage in real-time",
                "Formatting the countdown display(e.g. Days, Hours, Minutes, Seconds)",
                "Synchronizing the countdown with the user's device's time.",
                "Designing the layout and styles of the countdown using CSS and HTML"
            ],
            viewUrl: 'https://ravisdraw.github.io/js-projects/01%20NewYear%20CountDown/index.html',
            sourceCode: projectTitles.newyear
        }
    },
    {
        id: 2,
        front: {
            title: projectTitles.digiClock,
            img: 'https://i.imgur.com/CvAn4EG.png',
        },
        back: {
            keyPoints: [
                "Displaying the current time using the JavaScript Date object to retrieve the current system time.",
                "Continuously updating the time display every second using the setInterval function to call a time-updating function.",
                "Utilizing Document Object Model (DOM) manipulation to dynamically update the time on the webpage.",
                "Implementing error handling and edge cases to ensure accurate and consistent time display.",
                "Ability to change clock background color and font.",
                "An option to pause and resume the clock."
            ],
            viewUrl: 'https://ravisdraw.github.io/js-projects/01%20NewYear%20CountDown/index.html',
            sourceCode: projectTitles.digiClock
        }
    }
]