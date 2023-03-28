import { LitElement, html, css } from "lit";
import "./project-2cool4school.js";

export class Badges extends LitElement{

    static get tag() {
        return 'project-list';
    }

    static get properties() {
        return {
            badges: { type: Array }
        }
    }

    constructor() {
        super();
        this.badges = [    {
            "badgeTitle": "Amazon Cognito",
            "badgeIcon": "https://badgesapp.psu.edu/uploads/badge/image/623/Cognito.png",
            "description": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
            "website": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html",
            "authorImage": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "author": "Joshua Hantman",
            "time": "4.0 hours"
        }];
        this.updateRoster();
    }

    updateRoster() {
        const address = new URL('../assets/badge-roster.json', import.meta.url).href;
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.badges = data;
        });
    }

    static get styles() {
        return css`
        :host {
            display: block;
            align-items: center;
        }
        .wrapper {
            width: 400px;
            display: flex;
        }
        .item {
            display: inline-flex
        }
        `;
    }

    render() {
        return html`
        <div class="wrapper">
            ${this.badges.map(badge => html`
            <div class="item">
                <project2-cool4school badgeTitle="${badge.badgeTitle}" badgeIcon="${badge.badgeIcon}" description="${badge.description}" website="${badge.website}" authorImage="${badge.authorImage}" author="${badge.author}" time="${badge.time}"></project2-cool4school>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(Badges.tag, Badges);


