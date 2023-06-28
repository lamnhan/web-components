@Component('app-header')
export class HeaderComponent extends TiniComponent {
  static styles = [
    unistylus``,
    css`
      :host {
        margin: 0;
      }

      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: var(--color-primary);
        color: var(--color-light);

        .left {

          a {
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            text-decoration: none;
  
            img {
              width: 2rem;
              height: 2rem;
            }

            h1 {
              color: var(--color-light);
              font-size: 1.25rem;
              margin: 0 0 0 .5rem;
            }
          }
        }

        .right {

          a {
            color: var(--color-light);
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    `,
  ];

  protected render() {
    return html`
      <header>
        <div class="left">
          <a href="/">
            <img src="/assets/logo.svg" alt="Raksul Sample" />
            <h1>Raksul Sample</h1>
          </a>
        </div>
        <div class="right">
          <a href="https://github.com/lamnhan/raksul-sample/tree/remastered" target="_blank">Source code</a>
        </div>
      </header>
    `;
  }
}
