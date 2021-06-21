import React from "react";

const Footer = ({ fecha }) => {
  return (
    <div className="navbar fixed-bottom justify-content-center">
      <footer className="text-lg-start bg-light text-muted">
        <p>Footer &copy; {fecha}</p>
      </footer>
    </div>
  );
};
export default Footer;
