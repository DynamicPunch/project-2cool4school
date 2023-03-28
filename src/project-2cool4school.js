import { LitElement, html, css } from 'lit';


class Project2cool4school extends LitElement {
  static properties = {
      badgeTitle: { type: String },
      badgeIcon: { type: String},
      description: { type: String},
      website: { type: String },
      authorImage: { type: String },
      author: { type: String},
      time: { type: String},
  }

  static styles = css`
    :host {
      display: flex;
      align-items: center;
    }
    .badge{
      border: 1px solid #3e98d3;
      border-left: 15px solid #3e98d3;
      border-radius: 5px;
      width: 1000px;
      text-align: left;
      margin: auto;
      margin-bottom: 5px;
      font-family: "effra", sans-serif;
    }
    .image{
      max-height: 40px;
    }
    .collapse-card {
      background-color: #cfe6f4;
      border-radius: 0px 5px 0px 0px;
    }

    .author{
      border-radius: 50%;
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
  }

  render() {
    return html`
    <main>
        <div class="badge">
          <details>
            <summary class="collapse-card"><img src=${this.badgeIcon} class="image" alt /> ${this.badgeTitle}</summary>
            ${this.description}
            <div>
              <a href=${this.website}>${this.website}</a>
            </div>
            <div>
            <p>--------------------------------------------------------------</p>
            </div>
            <div>
            <p>Badge Creator: </p> <img src=${this.authorImage} class="author" alt /> ${this.author}
            </div>
            <p>Approximate time to complete: </p> ${this.time}
          </details>
        </div>
        </main>
    `;
  }
}



customElements.define('project-2cool4school', Project2cool4school);