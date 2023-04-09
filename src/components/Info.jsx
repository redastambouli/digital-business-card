import RedaImage from '/src/assets/reda-image.jpg'
import emailImage from '/src/assets/email.png'
import linkImage from '/src/assets/linkedin.png'

export default function Info() {
    return (

        <div className="info-section">
            <img src={RedaImage} />
            <h2>Reda Stambouli</h2>
            <p>Web Developer</p>
            <p>redastambouli.website</p>
            <nav className="info-nav">
                <div className="email-box">
                    <img src={emailImage} />
                    <p>Email</p>
                </div>
                <div className="linkedln-box">
                    <img src={linkImage} />
                    <p>Linkedln</p>
                </div>

            </nav>
        </div>
    )
}