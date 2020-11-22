// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 7;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow  (I don't think we need to follow the point, showing an overall and just line progressing is enough)
var followPoint = false;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 14;
var followBearing = 29;
var followPitch = 0;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    style: 'mapbox://styles/cxa3740/ckhpz4vka0jle19nqs0zqid0s',
    accessToken: 'pk.eyJ1IjoiY3hhMzc0MCIsImEiOiJja2hteW9jZW8weDRyMnJudXlza2MwdHh6In0.oVv8dLZ4PfT2zvvmkQ2EAA',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'slide-0',
            description: 'Step 1',
            //replace step with description from doc 
            location: {
            },
            onChapterEnter: [],
            //start
            onChapterExit: []
        },
        {
            id: 'slide-1',
            description: 'Step 2',
            location: {
                // location information is from the drive route
            },
            onChapterEnter: [],
            //Route reaches Penn marker on map
            onChapterExit: []
            //8 mins (Apprx~1.8 miles in)
        },
        {
            id: 'slide-2',
            description: 'Step 3',
            location: {},
            onChapterEnter: [],
            //when route reaches Darmouth marker 
            onChapterExit: []
            //when route reaches 10 mins (Apprx~2.25 miles in)
        },
        {
            id: 'slide-3',
            description: 'Step 4',
            location: {},
            onChapterEnter: [],
            //Route reaches Cornell marker
            onChapterExit: []
            //sRoute reaches 20 mins (Apprx~4.50 miles in)
        },
        {
            id: 'slide-4',
            description: 'Step 5',
            location: {},
            onChapterEnter: [],
            //Route reaches Baker 
            onChapterExit: []
        },
 
    ]
};
