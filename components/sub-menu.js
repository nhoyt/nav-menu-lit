import {LitElement, html, css} from 'lit';

export default class SubMenu extends LitElement {
  static properties = {
    panelId: {}
  };

  static styles = css`
    ul.sub-menu {
      display: none;
      position: absolute;
      top: 4rem;
      background-color: lightblue;
      width: 15rem;
      z-index: 10;
    }
    ul.sub-menu li {
      display: block;
      position: relative;
    }
  `;

  constructor () {
    super();
  }

  get subMenuContainer () {
    return this.shadowRoot.querySelector('ul');
  }

  toggle (value) {
    const style = this.subMenuContainer.style;
    style.display = value ? 'block' : 'none';
  }

  render () {
    return html`
      <ul class="sub-menu" id="${this.panelId}">
        <slot></slot>
      </ul>
    `;
  }
}

customElements.define('sub-menu', SubMenu);