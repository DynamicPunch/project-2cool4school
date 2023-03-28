export default async function handler(request, res) {

    const roster = [
        {
            "badgeTitle": "Amazon Cognito",
            "badgeIcon": "https://badgesapp.psu.edu/uploads/badge/image/623/Cognito.png",
            "description": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
            "website": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html",
            "authorImage": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "author": "Joshua Hantman",
            "time": "4.0 hours"
        },
        {
            "badgeTitle": "TEST",
            "badgeIcon": "https://badgesapp.psu.edu/uploads/badge/image/623/Cognito.png",
            "description": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
            "website": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html",
            "authorImage": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "author": "Joshua Hantman",
            "time": "4.0 hours"
        },
        {
            "badgeTitle": "TEST",
            "badgeIcon": "https://badgesapp.psu.edu/uploads/badge/image/623/Cognito.png",
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
