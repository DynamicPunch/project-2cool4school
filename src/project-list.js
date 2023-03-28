import { LitElement, html, css } from "lit";
import "./project-2cool4school.js";

export class List extends LitElement{

    static get tag() {
        return 'project-list';
    }

    static get properties() {
        return {
            badges: { type: Array }
        }
    }

    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            display: flex;
        }
        .item {
            display: inline-flex
        }
        `;
    }


    constructor() {
        super();
        this.badges = [];
        this.updateRoster();
    }

    updateRoster() {
        const address = new URL('../assets/card-roster.json', import.meta.url).href;
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
customElements.define(List.tag, List);


