
import { LitElement, html, css } from "lit";


class Searchbar extends LitElement {
  static properties = {}
  
  static styles = css`
    .searchbar {
    }
    .searchbox {
      width: 1000px;
      height: 20px;
      border: 0;
    }
  `;


  render() {
    return html`
      <main>
        <div class="searchbar">
          <form>
            <input
              class="searchbox"
              type="text"
              placeholder="Search Here Dog"
            />
          </form>
        </div>
      </main>
    `;
  }
}

customElements.define("search-bar", Searchbar);