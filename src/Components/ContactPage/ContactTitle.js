import React from "react";

const ContactTitle = () => {
  return (
    <>
      <div id="contact__contact-container" style={{filter: "url(#static-noise-contact)"}} >
        <div id="contact__contact-text" className="large-text highlight-blue-background">Contact</div>
      </div>
      <svg width='0' height='0'>
        <defs>
          <filter id='static-noise-contact'>
            <feTurbulence type="fractalNoise" baseFrequency='3' result='noisy' numOctaves="10"/>
            <feComposite operator='in' in='noisy' in2="SourceGraphic" result='monoNoise' />
            <feBlend in='SourceGraphic' in2='monoNoise' mode='multiply' />
          </filter>
        </defs>
      </svg>
    </>
  )
};

export default ContactTitle;