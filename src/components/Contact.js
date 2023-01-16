import React from "react"

const Contact = () => {
  return (
    <section className="jvd-section contact">
      <div className="jvd-container">
        <h2 className="jvd-section__title jvd-section__title--contact">Contact</h2>

        <div className="contact__info">
          <p>For inquiries, please call or email us.</p>

          <div className="contact__info-btn">
            <a href="tel:1234567890" className="contact__info-btn-link">
              <i className="ico ico--phone"></i>
              <span>123-456-7890</span>
            </a>
            <a href="mailto:j.villanuevadesign@gmail.com"  className="contact__info-btn-link">
              <i className="ico ico--email"></i>
              <span>j.villanuevadesign@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact