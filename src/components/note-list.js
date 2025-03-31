import { getAllNotes } from "../data/note-storage.js"; // Ambil data dari Local Storage

class NoteList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    fetch("/src/styles/note-list.css")
      .then((response) => response.text())
      .then((css) => {
        const styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(css);
        this.shadowRoot.adoptedStyleSheets = [styleSheet];
      });
  }

  connectedCallback() {
    this.render();

    document.addEventListener("noteAdded", () => {
      this.render();
    });

    document.addEventListener("notesUpdated", () => {
      this.render();
    });
  }

  render() {
    const notesData = getAllNotes();
    console.log("Rendering Notes:", notesData);

    this.shadowRoot.innerHTML = `
      <div class="container">
      <h1>Notes List</h1>
      <ul>
        ${notesData
          .map(
            (note) => `
            <li class="note-item">
              <h2>${note.title}</h2>
              <p>${note.body}</p>
              <small>Created at: ${new Date(
                note.createdAt
              ).toLocaleString()}</small>
            </li>`
          )
          .join("")}
      </ul>
      </div>
    `;
  }
}

customElements.define("note-list", NoteList);
