/*
My code to build the resume.
 */
var bio = {
    "name": "Michael Christensen",
    "role": "Data Analyst/Web Developer",
    "contacts": {
        "mobile": "508-246-1227",
        "email": "christensenmichael0@gmail.com",
        "github": "https://github.com/christensenmichael0",
        "location": "New Bedford, Massachusetts"
    },
    "welcomeMessage": "Welcome to my online resume!",
    "skills": ["Complex Data Analysis", "Scientific Programming", "Data Visualization", "Web Development"],
    "biopic": "images/linkedin.jpg"
};

//encapsulate the display function within the bio object
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);


    var formattedHTMLbiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedHTMLbiopic);

    var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedHTMLwelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (var skill = 0; skill < bio.skills.length; skill++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }

};


var education = {
    "schools": [{
        "name": "University of New Hampshire",
        "location": "Durham, New Hampshire",
        "dates": "2011",
        "majors": ["Earth Science: Physical Oceanography"],
        "degree": "MSc",
        "url": "http://www.unh.edu/"
    }, {
        "name": "University of Massachusetts at Amherst",
        "location": "Amherst, Massachusetts",
        "dates": "2009",
        "majors": ["Geology"],
        "degree": "BSc",
        "url": "http://www.umass.edu/"
    }],
    "onlineCourses": [{
        "title": "Data Analyst Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com"
    }]

};

//encapsulate the display function within the education object
education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace('#', education.schools[i].url);
        //$(".education-entry:last").append(formattedSchoolName);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);

        $(".education-entry:last").append(formattedSchoolNameDegree, formattedSchoolLocation, formattedSchoolDates);

        if (education.schools[i].majors.length > 0) {
            for (var j = 0; j < education.schools[i].majors.length; j++) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
                $(".education-entry:last").append(formattedSchoolMajor);
            }
        }
    }

    // Loop through the online courses
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
    }

    for (var k = 0; k < education.onlineCourses.length; k++) {
        $("#education").append(HTMLonlineSchoolStart);
        var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
        var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
        var formattedOnlineTitleSchool = formattedHTMLonlineTitle + formattedHTMLonlineSchool;
        var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
        var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url);

        $(".education-entry:last").append(formattedOnlineTitleSchool, formattedHTMLonlineDates, formattedHTMLonlineURL);
    }
};


var work = {
    "jobs": [{
        "employer": "Horizon Marine Inc.",
        "title": "RouteWatch Program Manager",
        "location": "Richmond, Texas",
        "dates": "January 2015 - Present",
        "description": [
            "Oversee all aspects of Horizon’s routing and asset tracking services (250-500K annual revenues) from project setup to shutdown",
            "Provide cogent and actionable optimal vessel routing strategies that mitigate risk and reduce transit time/fuel costs during asset relocation projects",
            "Distilling complex scientific ideas and methodologies to a broad, non-technical audience",
            "Develop and implement a graphical user interface to simplify, standardize, and reduce the generation time of optimal routing reports from 4-6 hours to 1 hour",
            "Parallelize optimal routing algorithm to speed up the route selection process by 80X",
            "Visualize environmental data to contextualize forecasted conditions and facilitate decision-making",
            "Commitment to writing robust, scalable, reusable, and well-documented code in Matlab and Python",
            "Attend industry conferences and manage/develop client relationships"
        ]
    }, {
        "employer": "Horizon Marine Inc.",
        "title": "Data Analyst/Physical Oceanographer",
        "location": "Marion, Massachusetts",
        "dates": "September 2011 - January 2015",
        "description": [
            "Responsibilities included ocean current forecasting, report writing, and participating in conference calls to advise offshore oil and gas industry clients in the Gulf of Mexico and offshore South America",
            "Extracted, cleaned, and performed rigorous statistical analysis on historical metocean data using Matlab during comprehensive, pre-drilling site studies",
            "Wrote scripts and developed software tools to solve complex operational challenges and speedup workflow"
        ]
    }, {
        "employer": "Science Systems and Applications Inc.",
        "title": "Engineering Technician",
        "location": "Lanham, Maryland",
        "dates": "June 2011 - July 2011",
        "description": [
            "Participated on NASA ICESCAPE 2011 Arctic Research Cruise",
            "Collected and filtered seawater for biogeochemical sample processing",
            "Multi-week field experience working in the Arctic"
        ]
    }]
};

//encapsulate the display function within the work object
work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);

        $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation);

        if (work.jobs[i].description.length > 0) {
            $(".work-entry:last").append(HTMLworkDescription);
            for (var j = 0; j < work.jobs[i].description.length; j++) {
                var formattedBullet = HTMLworkDescriptionBullets.replace("%data%", work.jobs[i].description[j]);
                $(".list-entry:last").append(formattedBullet);
            }
        }
    }
};


var projects = {
    "projects": [{
        "title": "Investigate A Dataset",
        "dates": "February 2016",
        "description": "Investigated the Titanic dataset using NumPy and Pandas. Went through the entire data analysis process, starting by posing a question and finished by sharing findings. Used vectorized operations in NumPy and Pandas to speed up data analysis code.",
        "images": ["images/titanic-sinking-400small.jpg"]
    }, {
        "title": "Wrangle OpenStreetMap Data",
        "dates": "March 2016",
        "description": "Utilized data munging techniques to clean OpenStreetMap data for Syracuse, New York. This entailed assessing the quality of the data for validity, accuracy, completeness, consistency and uniformity.",
        "images": ["images/osm-400small.jpg"]
    }, {
        "title": "Explore And Summarize Data",
        "dates": "April 2016",
        "description": "Used R and apply exploratory data analysis techniques to explore the red wine dataset for distributions, outliers, and anomalies. Determined the relationships in one variable to multiple variables. Created polished graphics using ggplot2 package.",
        "images": ["images/redwine-400small.jpg"]
    }, {
        "title": "Identify Fraud From Enron Email",
        "dates": "May 2016",
        "description": "Utilized Python's scikit-learn library to deploy supervised Machine Learning Algorithms on the Enron financial and email dataset to identify persons of interest. Implemented feature scaling and text mining techniques. Made use of recursive feature selection and model parameter tuning using exhaustive grid search. Ultimately applied cross-validation operations on testing data to validate model performance metrics.",
        "images": ["images/Enron-400small.jpg"]
    }, {
        "title": "Data Visualization With d3.js ",
        "dates": "June 2016",
        "description": "Visualized the incidence of impaired driving death rate by US state using D3.js. Chose optimal visual elements to encode data and increase its effectiveness. Incorporated interactive elements to engage the audience.",
        "images": ["images/drunk-driving-400small.jpg"]
    }, {
        "title": "Build An Optimal Routing Animation",
        "dates": "November 2016",
        "description": "Utilized various Python packages including NumPy and MatplotLib Basemap to develop a high-quality optimal routing animation to serve as a marketing tool for Horizon Marine's vessel routing service (RouteWatch®).",
        "images": ["images/rig_tow-400small.jpg"]
    }]
};

//encapsulate the display function within the projects object
projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

        if (projects.projects[i].images.length > 0) {
            for (var image = 0; image < projects.projects[i].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};


//additional function for course quizzes
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}


// Display the various resume components
bio.display();
education.display();
work.display();
projects.display();

// add a map
$("#mapDiv").append(googleMap);

// internationalize button
$("#main").append(internationalizeButton);