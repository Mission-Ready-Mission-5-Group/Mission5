// import fb from '../assets/fb.png';
// import ig from '../assets/ig.png';
// import linkedin from '../assets/linkedin.png';
// import twitter from '../assets/twitter.png';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white">
      <nav>
        <header className="footer-title">
          <img
            src="https://metronz.co.nz/wp-content/uploads/2023/09/logo-600x6000-1.svg"
            width={120}
            className="bg-white"
          />
        </header>
        <a className="link link-hover">09 391 4642</a>
        <a className="link link-hover">info@metronz.co.nz</a>
        <a className="link link-hover">
          Level 33, ANZ Center, 23-29 Albert Street, Auckland CBD 1010
        </a>
        <a className="link link-hover">Follow Us</a>
      </nav>
      <nav>
        <header className="footer-title">Quick Links</header>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Tenants</a>
        <a className="link link-hover">News</a>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Dispute Resolution</a>
        <a className="link link-hover">Contact Us</a>
      </nav>
      <form>
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text text-white">
              Enter your email address
            </span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
