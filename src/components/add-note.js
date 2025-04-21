import NotesApi from "../data/remote/note-api";
import Swal from "sweetalert2";

class AddNote extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div class="modal-overlay" style="display: none;">
        <div class="add-note-container">
          <h1>Add Notes</h1>
          <div class="form-container">
            <form id="noteForm">
              <div class="form-group">
                <label for="note-title">Title:</label>
                <input type="text" id="note-title" name="title" placeholder="Title Note" required>
                <small class="error-message" id="title-error"></small>
              </div>
              <div class="form-group">
                <label for="note-body">Isi:</label>
                <textarea id="note-body" name="body" placeholder="Isi Note" required></textarea>
                <small class="error-message" id="body-error"></small>
              </div>
              <button type="submit" disabled><i class="fa-regular fa-file-lines"></i> Add Note</button>
              <button type="button" class="close-modal">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    `;

    this.modalOverlay = this.querySelector(".modal-overlay");
    this.noteForm = this.querySelector("#noteForm");
    this.titleInput = this.querySelector("#note-title");
    this.bodyInput = this.querySelector("#note-body");
    this.submitButton = this.querySelector("button[type='submit']");
    this.closeButton = this.querySelector(".close-modal");
    this.titleError = this.querySelector("#title-error");
    this.bodyError = this.querySelector("#body-error");

    this.noteForm.addEventListener("submit", this.addNote.bind(this));
    this.titleInput.addEventListener("input", this.validateForm.bind(this));
    this.bodyInput.addEventListener("input", this.validateForm.bind(this));
    this.closeButton.addEventListener("click", this.hideModal.bind(this));
  }

  showModal() {
    this.modalOverlay.style.display = "flex";
    document.body.classList.add("modal-open");
  }

  hideModal() {
    this.modalOverlay.style.display = "none";
    document.body.classList.remove("modal-open");
  }

  validateForm() {
    const title = this.titleInput.value.trim();
    const body = this.bodyInput.value.trim();
    let isValid = true;

    if (title.length < 6) {
      this.titleError.textContent = "Judul harus lebih dari 6 huruf!";
      isValid = false;
    } else {
      this.titleError.textContent = "";
    }

    const wordCount = body.split(/\s+/).filter((word) => word !== "").length;
    if (wordCount < 5) {
      this.bodyError.textContent = "Isi catatan harus minimal 5 kata!";
      isValid = false;
    } else {
      this.bodyError.textContent = "";
    }

    this.submitButton.disabled = !isValid;
  }

  async addNote(event) {
    event.preventDefault();

    const title = this.titleInput.value.trim();
    const body = this.bodyInput.value.trim();

    const loading = Swal.fire({
      title: "Menambahkan...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const newNote = await NotesApi.createNote(title, body);
      Swal.close();

      if (newNote) {
        document.dispatchEvent(new Event("noteAdded"));
        this.noteForm.reset();
        this.submitButton.disabled = true;
        this.hideModal();

        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Catatan berhasil ditambahkan.",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Gagal menambahkan catatan. Silahkan coba lagi.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Terjadi kesalahan saat menambahkan catatan.",
      });
    }
  }
}

customElements.define("add-note", AddNote);
