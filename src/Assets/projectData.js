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
                "1.Using JavaScript to access and calculate the remaining time until New Year",
                "2.Updating the countdown display on the webpage in real-time",
                "3.Formatting the countdown display(e.g. Days, Hours, Minutes, Seconds)",
                "4.Synchronizing the countdown with the user's device's time.",
                "5.Designing the layout and styles of the countdown using CSS and HTML"
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
                "1.Displaying the current time using the JavaScript Date object to retrieve the current system time.",
                "2.Continuously updating the time display every second using the setInterval function to call a time-updating function.",
                "3.Utilizing Document Object Model (DOM) manipulation to dynamically update the time on the webpage.",
                "4.Implementing error handling and edge cases to ensure accurate and consistent time display.",
                "5.Ability to change clock background color and font.",
                "6.An option to pause and resume the clock."
            ],
            viewUrl: 'https://ravisdraw.github.io/js-projects/01%20NewYear%20CountDown/index.html',
            sourceCode: projectTitles.digiClock
        }
    }
]