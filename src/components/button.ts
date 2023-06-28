import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('app-button')
export class AppButton extends LitElement {
  static styles = css`

    /* main */

    button {
      display: block;
      position: relative;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      text-decoration: none;
      line-height: 1;
      padding: .75rem 1.5rem;
      background: var(--color-medium);
      color: var(--color-dark);
      font-size: 1rem;
    }

    button:hover, button:focus {
      opacity: .8;
    }

    /* palette */

    .primary {
      background: var(--color-primary);
      color: var(--color-light);
    }

    .dark {
      background: var(--color-dark);
      color: var(--color-light);
    }

    .light {
      background: var(--color-light);
      color: var(--color-dark);
    }

    /* size */

    .sm {
      font-size: .75rem;
      padding: .5rem 1rem;
    }

    .lg {
      font-size: 1.25rem;
      padding: 1rem 2rem;
    }

    .xl {
      font-size: 1.5rem;
      padding: 1.5rem 3rem;
    }
  `;

  @property() palette: 'primary' | 'medium' | 'dark' | 'light' = 'medium';
  @property() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  protected render() {
    return html`<button class=${classMap({ [this.palette]: true, [this.size]: true })}><slot /></button>`;
  }
}
