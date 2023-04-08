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
        this.badges = [];
        this.updateRoster();
    }

    updateRoster() {
        const address = new URL('../api/roster.js', import.meta.url).href;
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
                <project-2cool4school badgeTitle="${badge.badgeTitle}" badgeIcon="${badge.badgeIcon}" description="${badge.description}" website="${badge.website}" authorImage="${badge.authorImage}" author="${badge.author}" time="${badge.time}"></project-2cool4school>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(Badges.tag, Badges);


