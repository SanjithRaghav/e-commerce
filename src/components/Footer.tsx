import './footer.css';
// import  from './google-play-badge.png'; // replace with your image path
// import appStoreBadge from './app-store-badge.png'; // replace with your image path
// import qrCode from './qr-code.png'; // replace with your image path

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Exclusive</h3>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <div className="subscribe">
          <input type="email" placeholder="Enter your email" />

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="white" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>


        </div>
      </div>
      <div className="footer-column">
        <h3>Support</h3>
        <p>111 Bijoy sarani, Delhi, DH 1515, India.</p>
        <p>ebay@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>
      <div className="footer-column">
        <h3>Account</h3>
        <p>My Account</p>
        <p>Login / Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>
      <div className="footer-column">
        <h3>Quick Link</h3>
        <p>Privacy Policy</p>
        <p>Terms Of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      <div className="footer-column">
        <h3>Download App</h3>
        <img src={""} alt="QR Code" className="qr-code" />
        <div className="app-badges">
          <img src={""} alt="Google Play" />
          <img src={""} alt="App Store" />
        </div>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
