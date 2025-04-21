import NotesApi from "../data/remote/note-api";
import Swal from "sweetalert2";

class NoteList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();

    document.addEventListener("noteAdded", () => this.render());
    document.addEventListener("notesUpdated", () => this.render());
  }

  async render() {
    this.innerHTML = `
      <div class="container">
        <h1>Notes List</h1>
        <div class="loading">
          <div class="spinner"></div>
          <p>Loading notes...</p>
        </div>
      </div>
    `;

    try {
      const pageType = this.dataset.page === "archived" ? "archived" : "active";
      const notesData =
        pageType === "archived"
          ? await NotesApi.getArchivedNotes()
          : await NotesApi.getNotes();
      console.log(
        `Data dari ${
          pageType === "archived" ? "getArchivedNotes" : "getNotes"
        }:`,
        notesData,
      );

      if (!notesData.length) {
        this.innerHTML = `
          <div class="container">
            <h1>Notes List</h1>
            <p>No notes available.</p>
          </div>
        `;
        return;
      }

      this.innerHTML = `
      <div class="container">
        <h1>${pageType === "archived" ? "Archived Notes" : "Notes List"}</h1>
        <ul>
          ${notesData
            .map(
              (note) => `
              <li class="note-item" data-id="${note.id}">
                <h2>${note.title}</h2>
                <p>${note.body}</p>
                <small>Created at: ${new Date(
                  note.createdAt,
                ).toLocaleString()}</small>
                <div class="button-container">
                <button class="archive-btn">
                <i class="fa-regular ${
                  pageType === "archived" ? "fa-circle-up" : "fa-circle-down"
                }"></i>
                  ${pageType === "archived" ? "Unarchive" : "Archive"}
                </button>
                <button class="delete-btn"><i class="fa-regular fa-trash-can"></i>
                  Delete
                </button>
                </div>
              </li>
            `,
            )
            .join("")}
        </ul>
      </div>
      `;

      this.querySelectorAll(".archive-btn").forEach((button) => {
        button.addEventListener("click", async (e) => {
          const noteItem = e.target.closest(".note-item");
          const noteId = noteItem.dataset.id;

          const loading = Swal.fire({
            title:
              pageType === "archived"
                ? "Membatalkan Arsip..."
                : "Mengarsipkan...",
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading(),
          });

          try {
            if (pageType === "archived") {
              await NotesApi.unarchiveNote(noteId);
            } else {
              await NotesApi.archiveNote(noteId);
            }
            Swal.close();
            document.dispatchEvent(new Event("notesUpdated"));
          } catch (error) {
            Swal.close();
            Swal.fire(
              "Gagal!",
              "Terjadi kesalahan, silahkan coba lagi.",
              "error",
            );
          }
        });
      });

      this.querySelectorAll(".delete-btn").forEach((button) => {
        button.addEventListener("click", async (e) => {
          const noteItem = e.target.closest(".note-item");
          const noteId = noteItem.dataset.id;

          const result = await Swal.fire({
            title: "Apakah kamu yakin?",
            text: "Catatan yang dihapus tidak bisa dikembalikan!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Ya, hapus!",
            cancelButtonText: "Batal",
          });

          if (result.isConfirmed) {
            const loading = Swal.fire({
              title: "Menghapus...",
              allowOutsideClick: false,
              didOpen: () => Swal.showLoading(),
            });

            try {
              await NotesApi.deleteNote(noteId);
              Swal.close();
              Swal.fire({
                icon: "success",
                title: "Dihapus!",
                text: "Catatan berhasil dihapus.",
                timer: 1500,
                showConfirmButton: false,
              });
              document.dispatchEvent(new Event("notesUpdated"));
            } catch (error) {
              Swal.close();
              Swal.fire(
                "Gagal!",
                "Terjadi kesalahan, silahkan coba lagi.",
                "error",
              );
            }
          }
        });
      });
    } catch (error) {
      this.innerHTML = `
        <div class="container">
          <h1>Notes List</h1>
         <p>Failed to load notes. Please try again later.</p>
        </div>
      `;
      console.error("Error fetching notes:", error);
    }
  }
}

customElements.define("note-list", NoteList);
