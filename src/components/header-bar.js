class HeaderBar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
        <nav>
          <slot>Notes-Apps</slot> 
        </nav>
        <div class="button-container">
          <button class="add-note-btn">
            <i class="fa-solid fa-plus"></i> 
          </button>
          <button class="note-archive">
            <i class="fa-solid fa-box-archive"></i>
          </button>
          <button id="dark-mode-toggle">
            <i class="fa-regular fa-moon"></i> 
          </button>
        </div>
      </header>
    `;
  }

  connectedCallback() {
    this.darkModeButton = this.querySelector("#dark-mode-toggle");
    this.darkModeIcon = this.darkModeButton.querySelector("i");

    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      this.classList.add("dark-mode");
      this.darkModeIcon.classList.replace("fa-moon", "fa-sun");
    }

    this.darkModeButton.addEventListener("click", () => this.toggleDarkMode());

    this.addNoteButton = this.querySelector(".add-note-btn");
    this.addNoteButton.addEventListener("click", () => this.openModal());

    this.archivedButton = this.querySelector(".note-archive");
    this.archivedButton.addEventListener("click", () => this.openArchive());
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

  openArchive() {
    const noteList = document.querySelector("note-list");
    if (!noteList) return;

    if (noteList.dataset.page === "active") {
      noteList.dataset.page = "archived";
    } else {
      noteList.dataset.page = "active";
    }

    noteList.render();
  }
}

customElements.define("header-bar", HeaderBar);
