import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  static styles = css`
    header {
      display: flex;
      box-sizing: border-box;
      height: 60px;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: var(--color-primary);
      color: var(--color-light);
    }

    [part=brand] a {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      color: var(--color-light);
      text-decoration: none;
    }

    [part=brand] a img {
      width: 2rem;
      height: auto;
    }

    [part=brand] a h1 {
      margin: 0 0 0 0.5rem;
      font-size: 1.25rem;
    }

    [part=menu] a {
      color: var(--color-light);
      text-decoration: none;

    }

    [part=menu] a:hover {
      text-decoration: underline;
    }
  `;

  protected render() {
    return html`
      <header>
        <div part="brand">
          <a href="/">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI5NnB4IiBoZWlnaHQ9Ijk2cHgiPjxsaW5lYXJHcmFkaWVudCBpZD0iSmh5Q3p+cEdQUDV4N1IxQUttRllNYSIgeDE9IjI0IiB4Mj0iMjQiIHkxPSIzODQuODE1IiB5Mj0iMzc3LjIyMiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDM5MCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwZDYxYTkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxNjUyOGMiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjSmh5Q3p+cEdQUDV4N1IxQUttRllNYSkiIGQ9Ik0zNiw1SDEyYy0xLjEwNSwwLTIsMC44OTUtMiwydjZoMjhWN0MzOCw1Ljg5NSwzNy4xMDUsNSwzNiw1eiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iSmh5Q3p+cEdQUDV4N1IxQUttRllNYiIgeDE9IjI0IiB4Mj0iMjQiIHkxPSIzODAuOTM0IiB5Mj0iMzczLjg2NSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDM5MCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxOTlhZTAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwNzgyZDgiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjSmh5Q3p+cEdQUDV4N1IxQUttRllNYikiIGQ9Ik0zNyw5SDExYy0xLjEwNSwwLTIsMC44OTUtMiwydjVoMzB2LTVDMzksOS44OTUsMzguMTA1LDksMzcsOXoiLz48bGluZWFyR3JhZGllbnQgaWQ9IkpoeUN6fnBHUFA1eDdSMUFLbUZZTWMiIHgxPSIyMC41NTgiIHgyPSIyNi44NzgiIHkxPSIzNzYuNzMyIiB5Mj0iMzUwLjgyMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDM5MCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzMmJkZWYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxZWEyZTQiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjSmh5Q3p+cEdQUDV4N1IxQUttRllNYykiIGQ9Ik0zOCwxM0gxMGMtMS4xMDUsMC0yLDAuODk1LTIsMnYyNWgzMlYxNUM0MCwxMy44OTUsMzkuMTA1LDEzLDM4LDEzeiIvPjxwYXRoIGZpbGw9IiM0MzZkY2QiIGQ9Ik0zMy40MTQsMjguNDE0bC00Ljg3Mi00Ljg3MmMtMC42NzMtMC42NzMtMS43NTktMC42ODctMi40NDktMC4wMzNsLTUuNDI2LDUuMTQxVjMxSDM0di0xLjE3MglDMzQsMjkuMjk4LDMzLjc4OSwyOC43ODksMzMuNDE0LDI4LjQxNHoiLz48Y2lyY2xlIGN4PSIzMiIgY3k9IjIwIiByPSIyIiBmaWxsPSIjZmZmIi8+PGxpbmVhckdyYWRpZW50IGlkPSJKaHlDen5wR1BQNXg3UjFBS21GWU1kIiB4MT0iMjIuNzc4IiB4Mj0iMjIuNzc4IiB5MT0iMzY3Ljk2OCIgeTI9IjM1Ny44MjciIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAzOTApIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMTI0Nzg3Ii8+PHN0b3Agb2Zmc2V0PSIuOTIzIiBzdG9wLWNvbG9yPSIjMTczYjc1Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMTczYTczIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI0poeUN6fnBHUFA1eDdSMUFLbUZZTWQpIiBkPSJNMzEuNTU2LDMybC05LjI0OC05LjI0OGMtMC45MTMtMC45MTMtMi4zODctMC45MzMtMy4zMjUtMC4wNDVsLTQuMzU4LDQuMTI4CUMxNC4yMjYsMjcuMjEzLDE0LDI3LjczOCwxNCwyOC4yODdWMzJIMzEuNTU2eiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iSmh5Q3p+cEdQUDV4N1IxQUttRllNZSIgeDE9IjI0IiB4Mj0iMjQiIHkxPSIzMS4wNzEiIHkyPSI0Mi42OTMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmQ4NjkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZWM1MmIiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjSmh5Q3p+cEdQUDV4N1IxQUttRllNZSkiIGQ9Ik00MSwzMUg3Yy0wLjU1MiwwLTEsMC40NDgtMSwxdjhjMCwxLjY1NywxLjM0MywzLDMsM2gzMGMxLjY1NywwLDMtMS4zNDMsMy0zdi04CUM0MiwzMS40NDgsNDEuNTUyLDMxLDQxLDMxeiIvPjwvc3ZnPg==" alt="Photos Management" />
            <h1>Photos</h1>
          </a>
        </div>
        <div part="menu">
          <a href="https://github.com/lamnhan/web-components/tree/photos" target="_blank">Source code</a>
        </div>
      </header>
    `;
  }
}
