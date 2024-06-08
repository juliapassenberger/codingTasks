// Define the data for the carousels in the netflix app

class sliderRow {
    constructor(title, slides) {
        this.title = title;
        this.slides = slides;
    }
}

let row1 = new sliderRow("My List",
    ['nick-page-g8YUe5_t25w-unsplash.jpg'
        , 'henry-be-DpI-_wydgJM-unsplash.jpg'
        , 'vital-sinkevich-k2iRpPpbKFY-unsplash.jpg'
        , 'barthelemy-de-mazenod-uogMShrLlhU-unsplash.jpg'
        , 'florencia-viadana-G6S5IXQTC_A-unsplash.jpg'
        , 'markus-spiske-lUgO0ozZ480-unsplash.jpg'
        , 'matt-popovich-4ZzIzTcYsRY-unsplash.jpg'
        , 'skycraft-studios-lcf_hDdTI04-unsplash.jpg'
        , 'dzha-DQIeG8TZ0lQ-unsplash.jpg'
        , 'memories-on-35mm-rCVcMJqOuuM-unsplash.jpg'
        , 'cory-woodward-VbcepqDY3pY-unsplash.jpg'
    ]);

let row2 = new sliderRow("New on Netflix",
    ['aysenur-ljwY3E6pa3s-unsplash.jpg'
        , 'barthelemy-de-mazenod-1Y5WpVfaAPQ-unsplash.jpg'
        , 'danny-lines-PRS12FbCj6Y-unsplash.jpg'
        , 'diana-kereselidze-uNd7uSxZKOI-unsplash.jpg'
        , 'olenka-varzar-RxMKXNnW5QI-unsplash.jpg'
        , 'geraltyichen-BFack8QnOO8-unsplash.jpg'
        , 'jalen-banks-KqFZ7NHaY2c-unsplash.jpg'
        , 'jakob-owens-GpwEyFkAXYo-unsplash.jpg'
        , 'florencia-viadana-G6S5IXQTC_A-unsplash.jpg'
        , 'javardh-QjhHp7fbBvw-unsplash.jpg'
        , 'scott-evans-Ho0ls_tUWIM-unsplash.jpg'
    ]);


let row3 = new sliderRow("Today's Top Picks for You",
    ['cosmoh-love-DvdRTuW3SeQ-unsplash.jpg'
        , 'barthelemy-de-mazenod-uogMShrLlhU-unsplash.jpg'
        , 'cory-woodward-VbcepqDY3pY-unsplash.jpg'
        , 'markus-spiske-lUgO0ozZ480-unsplash.jpg'
        , 'javardh-QjhHp7fbBvw-unsplash.jpg'
        , 'henry-be-DpI-_wydgJM-unsplash.jpg'
        , 'matt-popovich-0FZrPECK5cg-unsplash.jpg'
        , 'vital-sinkevich-k2iRpPpbKFY-unsplash.jpg'
        , 'nick-page-g8YUe5_t25w-unsplash.jpg'
        , 'barthelemy-de-mazenod-1Y5WpVfaAPQ-unsplash.jpg'
        , 'markus-spiske-OCVFCZWHzkc-unsplash.jpg'
    ]);

let row4 = new sliderRow("BAFTA Award Winners & Nominees",
    ['memories-on-35mm-rCVcMJqOuuM-unsplash.jpg'
        , 'cosmoh-love-DvdRTuW3SeQ-unsplash.jpg'
        , 'geraltyichen-BFack8QnOO8-unsplash.jpg'
        , 'matt-popovich-4ZzIzTcYsRY-unsplash.jpg'
        , 'scott-evans-Ho0ls_tUWIM-unsplash.jpg'
        , 'ly-han-7IED2wFw4M0-unsplash.jpg'
        , 'dzha-DQIeG8TZ0lQ-unsplash.jpg'
        , 'florencia-viadana-G6S5IXQTC_A-unsplash.jpg'
        , 'jalen-banks-KqFZ7NHaY2c-unsplash.jpg'
        , 'danny-lines-PRS12FbCj6Y-unsplash.jpg'
    ]);


let row5 = new sliderRow("Binge-worthy TV Programmes",
    ['olenka-varzar-RxMKXNnW5QI-unsplash.jpg'
        , 'barthelemy-de-mazenod-1Y5WpVfaAPQ-unsplash.jpg'
        , 'aysenur-ljwY3E6pa3s-unsplash.jpg'
        , 'ricky-turner-paCF_o4FGwg-unsplash.jpg'
        , 'javardh-QjhHp7fbBvw-unsplash.jpg'
        , 'vital-sinkevich-k2iRpPpbKFY-unsplash.jpg'
        , 'diana-kereselidze-uNd7uSxZKOI-unsplash.jpg'
        , 'matt-popovich-0FZrPECK5cg-unsplash.jpg'
        , 'henry-be-DpI-_wydgJM-unsplash.jpg'
        , 'barthelemy-de-mazenod-uogMShrLlhU-unsplash.jpg'
        , 'cosmoh-love-DvdRTuW3SeQ-unsplash.jpg'
    ]);

let row6 = new sliderRow("Watch It Again",
    ['armin-h3RoWx7Vd20-unsplash.jpg'
        , 'nick-page-g8YUe5_t25w-unsplash.jpg'
        , 'jalen-banks-KqFZ7NHaY2c-unsplash.jpg'
        , 'skycraft-studios-lcf_hDdTI04-unsplash.jpg'
        , 'markus-spiske-OCVFCZWHzkc-unsplash.jpg'
        , 'mick-haupt-dCDY0MZ5S3E-unsplash.jpg'
        , 'geraltyichen-BFack8QnOO8-unsplash.jpg'
        , 'markus-spiske-lUgO0ozZ480-unsplash.jpg'
        , 'ly-han-7IED2wFw4M0-unsplash.jpg'
        , 'jakob-owens-GpwEyFkAXYo-unsplash.jpg'
        , 'dzha-DQIeG8TZ0lQ-unsplash.jpg'
    ]);

let allSliderRows = [row1, row2, row3, row4, row5, row6];

export default allSliderRows;