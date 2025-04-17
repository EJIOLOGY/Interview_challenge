const Footer = () => {
  return (
    <footer
      className="footer py-8"
      style={{
        background: "linear-gradient(180deg, #1a1a1a 0%, #121212 100%)",
        borderTop: "1px solid #333",
        color: "#e0e0e0",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Flex container for layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Footer text */}
          <div className="text-center md:text-left">
            <p className="text-sm font-medium">
              © {new Date().getFullYear()} <strong>Ghost-Protocol</strong>
              .&nbsp; All rights reserved.
            </p>
          </div>
          {/* Footer links */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Navigation links */}
            <div className="flex gap-4">
              <a
                href="/about"
                className="text-sm font-medium hover:text-white transition-colors duration-200"
              >
                About
              </a>
              <a
                href="/privacy"
                className="text-sm font-medium hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/contact"
                className="text-sm font-medium hover:text-white transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
            {/* Social media icons */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <img
                  src="/Facebook_icon.svg"
                  alt="Facebook"
                  className="h-6 w-6"
                />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <img src="/X_icon.svg" alt="Twitter" className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <img
                  src="/Instagram_logo_2016.svg"
                  alt="Instagram"
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
