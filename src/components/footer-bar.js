class FooterBar extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
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
