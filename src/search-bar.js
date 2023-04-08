
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
    .searchInput: {
      type: String
    }
  `;

constructor() {
  super();
  this.searchInput = "placeholder";    
}
  searchInput(e) {
    this.input = this.shadowRoot.querySelector('input').value;
  }

  update(changedProperties) {
    super.update(changedProperties);
    if (changedProperties.has('searchInput')) {
      this.dispatchEvent(new CustomEvent('searchChange', {
        detail: {
          value: this.searchInput
        }
      }));
    }
  }

  render() {
    return html`
      <main>
        <div class="searchbar">
            <input 
              class="searchbox"
              type="text"
              id="search"
              placeholder="Search Here Dog"
              @input="${this.searchInput}"
            />
          
          
        </div>
        
      </main>
    `;
  }
}

customElements.define("search-bar", Searchbar);