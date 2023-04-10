export default async function handler(request, res) {

    const roster = [
        {
            "badgeTitle": "Amazon Cognito",
            "badgeIcon": "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/553dbabbd287c26ca83aef42.jpg?itok=ruAqqobg",
            "description": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
            "website": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html",
            "authorImage": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "author": "Joshua Hantman",
            "time": "4.0 hours"
        },
        {
            "badgeTitle": "Amazon I AM",
            "badgeIcon": "https://i0.wp.com/sra.io/wp-content/uploads/2020/01/AWS-IAM-Exploitation.png?fit=1102%2C620&ssl=1",
            "description": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
            "website": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html",
            "authorImage": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "author": "Joshua Hantman",
            "time": "4.0 hours"
        },
        {
            "badgeTitle": "Signing up for AWS Web Services",
            "badgeIcon": "https://i.pcmag.com/imagery/reviews/0179dSC1AqaTy8DbcTJMDYE-7..v1569472044.jpg",
            "description": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
            "website": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html",
            "authorImage": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "author": "Joshua Hantman",
            "time": "4.0 hours"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(roster);
}
