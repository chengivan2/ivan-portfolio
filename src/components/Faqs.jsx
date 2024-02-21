import React from 'react'
import '../componentstyles/Faqs.css'

export default function Faqs() {
    return (
        <div className="faqs-section">
            <div className="faqs-section-header">
                <h2>FAQs</h2>
            </div>

            <div className="faqs-section-paragraph-hook">

                <p>
                    I am a web & app developer, and a software engineer.
                    If you need help with any of the following tools, technologies, and/or niches,
                    <span class="call-text"><a href="tel:"> give me a call</a></span>,
                    <span class="quote-text"><a href="#"> ask for a quote</a></span> or
                    <span class="email-text"><a href="mailto:"> shoot me a email</a></span>.
                </p>

            </div>

        </div>
    )
}
