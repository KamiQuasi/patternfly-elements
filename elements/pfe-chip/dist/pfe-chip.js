import PFElement from '../../pfelement/dist/pfelement.js';
import '../../pfe-badge/dist/pfe-badge.js';
import '../../pfe-icon/dist/pfe-icon.js';

/*!
 * PatternFly Elements: PfeChip 1.0.0-prerelease.39
 * @license
 * Copyright 2020 Red Hat, Inc.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
*/

class PfeChip extends PFElement {
  static get version() {
    return "1.0.0-prerelease.39";
  }

  get html() {
    return `<style>.pfe-chip__button,.pfe-chip__close{background-color:transparent;border:none;margin:0;padding:0;text-align:left}.pfe-chip__button::after,.pfe-chip__close::after,:host::before{content:"";position:absolute;top:0;right:0;bottom:0;left:0}:host{--pfe-chip--PaddingTop:0;--pfe-chip--PaddingRight:0;--pfe-chip--PaddingBottom:0;--pfe-chip--PaddingLeft:var(--pfe-theme--spacer--sm, 0.5rem);--pfe-chip--BackgroundColor:var(--pfe-theme--color--surface--lightest, #fff);--pfe-chip--BorderColor:var(--pfe-theme--color--surface--border--darkest, #464646);--pfe-chip--BorderWidth:var(--pfe-theme--ui--border-width, 1px);--pfe-chip--BorderRadius:var(--pfe-theme--ui--border-radius, 2px);--pfe-chip--BackgroundColor--overflow:var(--pfe-theme--color--surface--lighter, #ececec);--pfe-chip--PaddingLeft--overflow:0;--pfe-chip--BorderWidth--overflow:0;--pfe-chip--PaddingTop--readonly:var(--pfe-theme--form-spacer, 0.375rem);--pfe-chip--PaddingRight--readonly:var(--pfe-theme--spacer--sm, 0.5rem);--pfe-chip--PaddingBottom--readonly:var(--pfe-theme--form-spacer, 0.375rem);--pfe-chip__text--FontSize:var(--pfe-theme--font-size--xs, 12px);--pfe-chip__text--LineHeight:var(--pfe-theme--line-height, 1.5);--pfe-chip__text--Color:var(--pfe-theme--text, #333);--pfe-chip__text--MaxWidth:7.5rem;--pfe-chip__button--PaddingTop:var(--pfe-theme--form-spacer, 0.375rem);--pfe-chip__button--PaddingRight:var(--pfe-theme--spacer--sm, 0.5rem);--pfe-chip__button--PaddingBottom:var(--pfe-theme--form-spacer, 0.375rem);--pfe-chip__button--PaddingLeft:var(--pfe-theme--spacer--sm, 0.5rem);--pfe-chip__button--size:var(--pfe-theme--font-size--xs, 12px);--pfe-chip__button--BackgroundColor:#797979;--pfe-chip__button--BackgroundColor--hover:var(--pfe-theme--color--ui-complement--hover, #131313);--pfe-chip__button--BackgroundColor--focus:var(--pfe-theme--color--ui-complement--hover, #131313);--pfe-chip__button--BackgroundColor--active:var(--pfe-theme--color--ui-complement--hover, #131313);--pfe-chip__button--BackgroundColor--disabled:var(--pfe-theme--color--ui-disabled, #d2d2d2);--pfe-chip__button--BorderWidth:0;--pfe-chip__button--BorderColor:var(--pfe-theme--color--surface--border--darkest, #464646);--pfe-chip__button--BorderRadius:var(--pfe-theme--ui--border-radius, 2px);--pfe-chip__button--BorderWidth--overflow--hover:var(--pfe-theme--ui--border-width, 1px);--pfe-chip__button--BorderWidth--overflow--active:var(--pfe-theme--ui--border-width, 1px);--pfe-chip__button--BorderWidth--overflow--focus:var(--pfe-theme--ui--border-width, 1px);--pfe-chip__badge--MarginLeft:var(--pfe-theme--spacer--xs, 0.25rem);display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;color:#333;color:var(--pfe-theme--text,#333);padding:var(--pfe-chip--PaddingTop) var(--pfe-chip--PaddingRight) var(--pfe-chip--PaddingBottom) var(--pfe-chip--PaddingLeft);list-style:none;background-color:var(--pfe-chip--BackgroundColor);border-radius:var(--pfe-chip--BorderRadius)}:host::before{border:var(--pfe-chip--BorderWidth) solid var(--pfe-chip--BorderColor);border-radius:var(--pfe-chip--BorderRadius)}:host([hidden]){display:none}:host([on=dark]),:host([on=saturated]){--pfe-chip--BorderWidth:0}.pfe-chip__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:var(--pfe-chip__text--MaxWidth);font-size:var(--pfe-chip__text--FontSize);line-height:var(--pfe-chip__text--LineHeight);color:var(--pfe-chip__text--Color)}.pfe-chip__badge{margin-left:var(--pfe-chip__badge--MarginLeft)}.pfe-chip__button,.pfe-chip__close{position:relative;display:inline-block;text-align:center;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:var(--pfe-chip__button--PaddingTop) var(--pfe-chip__button--PaddingRight) var(--pfe-chip__button--PaddingBottom) var(--pfe-chip__button--PaddingLeft)}.pfe-chip__button::after,.pfe-chip__close::after{border:var(--pfe-chip__button--BorderWidth) solid var(--pfe-chip__button--BorderColor);border:var(--pfe-chip__button--BorderWidth) var(--pfe-theme--ui--border-style,solid) var(--pfe-chip__button--BorderColor);border-radius:var(--pfe-chip__button--BorderRadius)}.pfe-chip__button svg,.pfe-chip__close svg{display:inline-block;height:calc(var(--pfe-chip__button--size) * 1.5);width:var(--pfe-chip__button--size);line-height:1;vertical-align:-.125em;fill:var(--pfe-chip__button--BackgroundColor)}.pfe-chip__button:hover,.pfe-chip__close:hover{cursor:pointer}.pfe-chip__button:hover,.pfe-chip__close:hover{--pfe-chip__button--BorderWidth:var(--pfe-chip__button--BorderWidth--hover);--pfe-chip__button--BackgroundColor:var(--pfe-chip__button--BackgroundColor--hover)}:host([on=dark]) .pfe-chip__button:hover::after,:host([on=dark]) .pfe-chip__close:hover::after{margin:1px}.pfe-chip__button:active,.pfe-chip__close:active{--pfe-chip__button--BorderWidth:var(--pfe-chip__button--BorderWidth--active);--pfe-chip__button--BackgroundColor:var(--pfe-chip__button--BackgroundColor--active)}:host([on=dark]) .pfe-chip__button:active::after,:host([on=dark]) .pfe-chip__close:active::after{margin:1px}.pfe-chip__button:focus,.pfe-chip__close:focus{--pfe-chip__button--BorderWidth:var(--pfe-chip__button--BorderWidth--focus);--pfe-chip__button--BackgroundColor:var(--pfe-chip__button--BackgroundColor--focus)}:host([on=dark]) .pfe-chip__button:focus::after,:host([on=dark]) .pfe-chip__close:focus::after{margin:1px}:host([pfe-read-only]){--pfe-chip--PaddingTop:var(--pfe-chip--PaddingTop--readonly);--pfe-chip--PaddingRight:var(--pfe-chip--PaddingRight--readonly);--pfe-chip--PaddingBottom:var(--pfe-chip--PaddingBottom--readonly)}:host([pfe-overflow]){--pfe-chip--PaddingLeft:var(--pfe-chip--PaddingLeft--overflow);--pfe-chip--BackgroundColor:var(--pfe-chip--BackgroundColor--overflow);--pfe-chip--BorderWidth:var(--pfe-chip--BorderWidth--overflow);--pfe-chip__button--BorderWidth--hover:var(--pfe-chip__button--BorderWidth--overflow--hover);--pfe-chip__button--BorderWidth--active:var(--pfe-chip__button--BorderWidth--overflow--active);--pfe-chip__button--BorderWidth--focus:var(--pfe-chip__button--BorderWidth--overflow--focus)}
/*# sourceMappingURL=pfe-chip.min.css.map */
</style><slot hidden aria-hidden="true"></slot>

${this.props["overflow"].value ? `<button class="pfe-chip__button" type="button" aria-labelledby="chip">` : ""}
    <span class="pfe-chip__text" id="chip" aria-hidden="true"></span>
    ${this.has_slot("pfe-chip--badge") ? `<pfe-badge class="pfe-chip__badge"><slot name="pfe-chip--badge"></slot></pfe-badge>` : ""}
${this.props["overflow"].value ? `</button>` : ""}

${this.printCloseButton ? `<button class="pfe-chip__close" type="button" aria-labelledby="remove_chip chip" aria-label="Remove" id="remove_chip">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"/></svg>
</button>` : ""}`;
  }

  static get properties() {
    return {"read-only":{"title":"Read only","type":"boolean","default":false,"prefixed":true},"overflow":{"title":"Overflow","type":"number","prefixed":true},"badge":{"title":"Badge","type":"number","prefixed":true}};
  }

  static get slots() {
    return {"default":{"title":"Default slot","type":"array","namedSlot":false,"items":{"oneOf":[{"$ref":"raw"}]}},"badge":{"title":"Badge","type":"array","namedSlot":true,"items":{"title":"Badge item","oneOf":[{"$ref":"raw"}]}}};
  }
  static get tag() {
    return "pfe-chip";
  }

  get schemaUrl() {
    return "pfe-chip.json";
  }

  get templateUrl() {
    return "pfe-chip.html";
  }

  get styleUrl() {
    return "pfe-chip.scss";
  }

  get printCloseButton() {
    return !this.props["read-only"].value && !this.props["overflow"].value;
  }

  hide() {
    this.setAttribute("hidden", "");
  }

  show() {
    this.removeAttribute("hidden");
  }

  delete() {
    this.parentNode.removeChild(this);
  }

  static get events() {
    return {
      close: `${this.tag}:close`,
      load: `${this.tag}:load`
    };
  }

  static get observedAttributes() {
    return ["pfe-read-only", "pfe-overflow"];
  }

  // Declare the type of this component
  static get PfeType() {
    return PFElement.PfeTypes.Content;
  }

  constructor() {
    super(PfeChip, { type: PfeChip.PfeType });

    this._text = this.shadowRoot.querySelector(`.${this.tag}__text`);
    this._badge = this.shadowRoot.querySelector(`pfe-badge`);
    this._close = this.shadowRoot.querySelector(`.${this.tag}__close`);
    this._add = this.shadowRoot.querySelector(`.${this.tag}__button`);

    this._init = this._init.bind(this);
    this._clickHandler = this._clickHandler.bind(this);
    this._keyupHandler = this._keyupHandler.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    this.badge = this.querySelector(`[slot="${this.tag}--badge"]`);

    // Add a slotchange listener to the lightDOM trigger
    if (this.badge) {
      this.badge.addEventListener("slotchange", this._init);
    }

    // @TODO load icon using pfe-icon instead of hardcoding SVG
    // Promise.all([
    //   customElements.whenDefined(PfeIcon.tag)
    // ]).then(() => {
    //   // Set up font-awesome icon set
    //   if(!PfeIcon._iconSets["fas"]) {
    //     PfeIcon.addIconSet(
    //       "fas",
    //       "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid",
    //       (iconName, setName, path) => {
    //         const name = iconName.replace("fas-", "");
    //         return `${path}/${name}.svg`;
    //       }
    //     );
    //   }
    // });

    this._init();
  }

  // Process the attribute change
  attributeChangedCallback(attr, oldValue, newValue) {
    super.attributeChangedCallback(attr, oldValue, newValue);
  }

  _init() {
    // Capture the text content and move it to the Shadow DOM
    if (this.firstChild && this.firstChild.textContent.trim()) {
      this._text.textContent = this.firstChild.textContent.trim();
    } else if (
      this.firstElementChild &&
      this.firstElementChild.textContent.trim()
    ) {
      this._text.textContent = this.firstElementChild.textContent.trim();
    }

    // If the badge element exists, check that it's value is numeric
    let badgeContent = "";
    if (this.badge) {
      badgeContent = this.badge.textContent;
    } else if (this.props.badge) {
      badgeContent = this.props.badge.value;
    }

    if (badgeContent) {
      if (isNaN(badgeContent)) {
        console.warn(`${this.tag}: The badge content must be numeric.`);
      } else {
        this._badge.setAttribute("number", this.badge.textContent);
      }
    }

    // If this is not a read-only chip, attach event listeners
    if (this._close) {
      this._close.addEventListener("click", this._clickHandler);
      this._close.addEventListener("keyup", this._keyupHandler);
    }

    // If this is not a read-only chip, attach event listeners
    if (this._add) {
      this._add.addEventListener("click", this._clickHandler);
      this._add.addEventListener("keyup", this._keyupHandler);
    }
  }

  disconnectedCallback() {
    if (this.badge) {
      this.badge.removeEventListener("slotchange", this._init);
    }

    if (this._close) {
      this._close.removeEventListener("click", this._clickHandler);
      this._close.removeEventListener("keyup", this._keyupHandler);
    }

    if (this._add) {
      this._add.removeEventListener("click", this._clickHandler);
      this._add.removeEventListener("keyup", this._keyupHandler);
    }
  }

  _clickHandler(event) {
    if (!this.props.overflow) {
      this.emitEvent(PfeChip.events.close);
    } else {
      this.emitEvent(PfeChip.events.load);
    }
  }

  _keyupHandler(event) {
    let key = event.key || event.keyCode;
    switch (key) {
      case "Enter":
      case 13:
        if (!this.props.overflow) {
          this.emitEvent(PfeChip.events.close);
        } else {
          this.emitEvent(PfeChip.events.load);
        }
    }
  }
}

PFElement.create(PfeChip);

export default PfeChip;
//# sourceMappingURL=pfe-chip.js.map
