import React from 'react'
import '../../componentstyles/AboutComponentStyles/Abouthero.css'
import Aboutheader from './Aboutheader'
import { Cloudinary } from "@cloudinary/url-gen";

export default function Abouthero() {

    const cld = new Cloudinary({ cloud: { cloudName: 'doqbnfais' } });

    return (
        <div className='abt-hero-section'>
            <div className="about-overlay"></div>
            <div className="abt-hero-section-columns">

                <div className="abt-hero-section-column-one">

                    <div className="about-header-hero">
                        <Aboutheader />
                    </div>

                    <h2 className='abt-hero-section-header'>Ivan the Dev here</h2>

                    <p className='abt-hero-section-paragraph'>
                        So excited to see you here. A litle bit about myself... 
                        I am a full stack web and app developer. 
                        My name is Ivan and I help businesses and individuals grow online.
                        <br/>
                        <br/>
                        In the realm of ones and zeros, where dreams take form, 
                        There dwells a sage, a whisperer of digital storms. 
                        His name echoes through the binary winds, 
                        A symphony of keystrokes, where magic begins.
                        Ivan the Dev, clad in lines of code, 
                        His eyes alight with the glow of screens bestowed. 
                        He weaves HTML threads, stitches CSS seams, 
                        And dances with JavaScript under moonlit dreams.
                        His fingers, nimble as a hummingbird’s flight, 
                        Tap rhythms on keyboards, weaving day into night. 
                        From sunrise to sunset, he crafts pixel palaces, Where users find solace, 
                        their digital chalices.
                        Accountable he stands, a sentinel of bytes, Guarding databases, secrets, 
                        and encrypted rites. His algorithms dance, waltzing with APIs, 
                        As databases whisper secrets, hidden from prying eyes.
                        When bugs emerge like shadows in the dusk, 
                        Ivan dons his armor—a debugger’s trust. 
                        He hunts down glitches, like a hunter of old, 
                        Restoring balance to the matrix, stories retold.
                        In the quiet of late nights, when deadlines loom, 
                        He sips from the cup of coffee, his muse and boon. 
                        For every line of code, he signs his name, 
                        A pact with the digital gods, forever the same. 
                        Ivan the Dev, architect of virtual realms, 
                        Where databases hum and APIs overwhelm, 
                        He balances front-end grace with back-end might, 
                        A sorcerer of pixels, weaving day into night. 
                        So raise your screens, salute this noble sage, 
                        Whose pixels breathe life into the digital stage. 
                        For Ivan the Dev, accountable and true, 
                        Weaves the web’s tapestry—a masterpiece anew. 🌟
                    </p>
                </div>

                <div className="abt-hero-section-column-two">
                    <img className='abt-hero-section-ivanthedevbot' src="https://res.cloudinary.com/doqbnfais/image/upload/v1712724958/Ivan%20the%20Dev%20assets/images/ivan-the-dev-bot-svg_uwcha9.svg" alt="Ivan the Dev bot" />
                </div>
            </div>
        </div>
    )
}
