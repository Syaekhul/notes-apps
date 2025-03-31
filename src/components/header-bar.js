class HeaderBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    fetch("/src/styles/header-bar.css")
      .then((response) => response.text())
      .then((css) => {
        const styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(css);
        this.shadowRoot.adoptedStyleSheets = [styleSheet];
      });

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
      <header>
        <nav>
          <slot>Notes-Apps</slot> 
        </nav>
        <div class="button-container">
          <button class="add-note-btn">
              <i class="fa-solid fa-plus"></i> 
          </button>
          <button id="dark-mode-toggle">
              <i class="fa-regular fa-moon"></i> 
          </button>
        </div>
      </header>
    `;
  }

  connectedCallback() {
    this.darkModeButton = this.shadowRoot.querySelector("#dark-mode-toggle");
    this.darkModeIcon = this.darkModeButton.querySelector("i");

    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      this.classList.add("dark-mode");
      this.darkModeIcon.classList.replace("fa-moon", "fa-sun");
    }

    this.darkModeButton.addEventListener("click", () => this.toggleDarkMode());

    this.addNoteButton = this.shadowRoot.querySelector(".add-note-btn");
    this.addNoteButton.addEventListener("click", () => this.openModal());
  }

  toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    this.classList.toggle("dark-mode");

    const noteList = document.querySelector("note-list");
    if (noteList) {
      noteList.classList.toggle("dark-mode");
    }

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      this.darkModeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
      localStorage.setItem("theme", "light");
      this.darkModeIcon.classList.replace("fa-sun", "fa-moon");
    }
  }

  openModal() {
    const modal = document.querySelector("add-note");
    if (modal) {
      modal.showModal();
    }
  }
}

customElements.define("header-bar", HeaderBar);
