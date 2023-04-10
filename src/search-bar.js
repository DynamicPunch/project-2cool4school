
import { LitElement, html, css } from "lit";
import "./search-bar";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";


class Searchbar extends LitElement {
  static properties = {
    searchText: {
      type: String,
      reflect: true
    },
    value: {
      type: String
    }
  }
  
  static styles = css`
    .searchbar {
      width: 1000px;
      height: 20px;
      border: 0;
    }
    .searchInput: {
      type: String
    }
    simple-icon {
      display: inline-block;
      --simple-icon-height: 25px;
      --simple-icon-width: 25px;
    }
  `;

constructor() {
  super();
  this.value = "";    
}
searchInput(e) {
  this.value = e.target.value;
  this.dispatchEvent(new CustomEvent('value-changed', {
    detail: {
      value: this.value,
    }
  }));
}
update(changedProperties) {
  super.update(changedProperties);
  if (changedProperties.has('searchInput')) {
    this.dispatchEvent(new CustomEvent('searchChange', {
      query: {
        value: this.searchInput
      }
    }));
  }
}

  render() {
    return html`
      <main>
      <simple-icon icon="icons:search"></simple-icon>
        <div class="searchbar">
            <input 
              class="searchInput"
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