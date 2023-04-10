import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "./search-bar";

class Project2cool4school extends LitElement {
  static properties = {
      badgeTitle: { type: String },
      badgeIcon: { type: String},
      description: { type: String},
      website: { type: String },
      authorImage: { type: String },
      author: { type: String},
      time: { type: String},
      text1: { type: String },
      tex2: { type: String},
      text3: { type: String},
  }

  static styles = css`
    :host {
      display: flex;
      align-items: center;
    }

    .collapsible {
      background-color: #cfe6f4;
      border-radius: 0px 5px 0px 0px;
    }

    .image{
      max-height: 40px;
    }

    .badge{
      margin: auto;
      margin-bottom: 5px;
      border: 1px solid #3e98d3;
      border-left: 15px solid #3e98d3;
      border-radius: 5px;
      width: 1000px;
      text-align: left;
      font-family: "effra", sans-serif;
      font-size: 14px;



    .inlineRight {
      float: right;

    }

    details > summary {
      list-style: none;
    }
    details > summary::-webkit-details-marker {
      display: none;
    }


  `;

  constructor() {
    super();
    this.badgeTitle = "Amazon Cognito";
    this.badgeIcon = "https://badgesapp.psu.edu/uploads/badge/image/623/Cognito.png";
    this.description = "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools"
    this.website = "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html"
    this.authorImage = "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png"
    this.author = "Joshua Hantman"
    this.time = "4.0 hours"
    this.text1 = "--------------------------------------------------------------"
    this.text2 = "Badge Creator: "
    this.text3 ="Approximate time to complete: "
    
  }


  render() {
    return html`
        <div class="badge">
          <details>
            <summary class="collapsible"><img src=${this.badgeIcon} class="image" alt /> ${this.badgeTitle} <simple-icon class="inlineRight" accent-color="grey" icon="editor:expand-more">
            </simple-icon></summary>
            ${this.description}
            <div>
              <a href=${this.website}>${this.website}</a>
            </div>
            <div>
            ${this.text1}
            </div>
            <div>
            ${this.text2} <img src=${this.authorImage} class="author" alt /> ${this.author}
            </div>
            ${this.text3} ${this.time}
          </details>
        </div>
    `;
  }
}

customElements.define('project-2cool4school', Project2cool4school);