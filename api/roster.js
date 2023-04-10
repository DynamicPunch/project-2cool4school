export default async function handler(request, res) {

    const roster = [
        {
            "badgeTitle": "Amazon Cognito",
            "badgeIcon": "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/553dbabbd287c26ca83aef42.jpg?itok=ruAqqobg",
            "description": "This is the EdTechJoker's Badge.  He is a cool cube",
            "website": "https://haxtheweb.org/",
            "authorImage": "https://cdn.discordapp.com/attachments/898236833853481032/1063255634092503150/3dgifmaker81142.gif",
            "author": "BTOPro",
            "time": "An Eternity"
        },
        {
            "badgeTitle": "Amazon I AM",
            "badgeIcon": "https://i0.wp.com/sra.io/wp-content/uploads/2020/01/AWS-IAM-Exploitation.png?fit=1102%2C620&ssl=1",
            "description": "This is Bryce's Badge.  He is shocked he created a badge.",
            "website": "https://www.gettysburgtimes.com/news/education/article_0b5ca402-0142-53ca-a587-65c9a2579882.html",
            "authorImage": "https://cdn.discordapp.com/attachments/1062806966021402684/1063160172773654659/IMG_9420.png",
            "author": "Bryce Schneider",
            "time": "443435 hours"
        },
        {
            "badgeTitle": "Signing up for AWS Web Services",
            "badgeIcon": "https://i.pcmag.com/imagery/reviews/0179dSC1AqaTy8DbcTJMDYE-7..v1569472044.jpg",
            "description": "DREW DOUGHTY THE DEFENSIVE BEAST's badge",
            "website": "https://www.youtube.com/watch?v=n1Ug4D2vKOo",
            "authorImage": "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3995.png&w=350&h=254",
            "author": "Drew Doughty",
            "time": "8 hours"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(roster);
}
