import { LitElement, html, css } from "lit";
import "./project-2cool4school.js";
import "./search-bar.js"

export class Badges extends LitElement{

    static get tag() {
        return 'project-list';
    }

    static get properties() {
        return {
            badges: { type: Array },
            prompt: { type: String, reflect: true },
        }
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
    constructor() {
        super();
        this.badges = [];
        this.updateRoster();
        this.filterSearch(this.badges, this.prompt);
        this.prompt = "Amazon";
        
    }

    updateRoster() {
        const address = "../assets/badge-roster.json";
    fetch(address)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then((data) => {
        this.badges = data;
      });
  }
    //     const address = new URL('../assets/badge-roster.json', import.meta.url).href;
    //     fetch(address).then((response) => {
    //         if (response.ok) {
    //             return response.json()
    //         }
    //         return [];
    //     })
    //     .then((data) => {
    //         this.badges = data;
    //     });
    // }
    // searchThis(items, searchForThis){
    //     return items.filter((thing) => 
    //     {
    //       for (var item in thing)
    //       {
    //         if (thing[item].toString().toLowerCase().includes(searchForThis.toLowerCase()))
    //         {
    //           return true;
    //         }
    //       }
    //       return false;
    //     });
    // }
    filterSearch(items, prompt) {
        return items.filter((thing) => {
          for (var item in thing) {
            if (
              thing[item].toString().toLowerCase().includes(prompt.toLowerCase())
            ) {
              return true;
            }
          }
          return false;
        });
      }

    async _handleSearchEvent(e) {
        this.prompt = e.detail.value;
    }


    render() {
        return html`
        <search-bar @value-changed="${this._handleSearchEvent}"></search-bar>
        <div class="wrapper">
            
        ${this.filterSearch(this.badges, this.prompt).map(badge => html`
            <div class="item">
            <project-2cool4school 
                badgeTitle="${badge.badgeTitle}" 
                badgeIcon="${badge.badgeIcon}" 
                description="${badge.description}" 
                website="${badge.website}" 
                authorImage="${badge.authorImage}" 
                author="${badge.author}" 
                time="${badge.time}"
            ></project-2cool4school>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(Badges.tag, Badges);


