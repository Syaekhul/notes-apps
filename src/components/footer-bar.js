class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    fetch("/src/styles/footer-bar.css")
      .then((response) => response.text())
      .then((css) => {
        const styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(css);
        this.shadowRoot.adoptedStyleSheets = [styleSheet];
      });

    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
        <footer>
            <div class="footer-container">
                <p>by <strong>Syaekh</strong></p>
                <div class="social-icons">
                    <a href="https://github.com/Syaekhul" target="_blank">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="https://instagram.com/syaekh_m" target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>    
            `;
  }
}

customElements.define("footer-bar", FooterBar);
