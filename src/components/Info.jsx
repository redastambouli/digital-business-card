import RedaImage from '/src/assets/reda-image.jpg'

export default function Info() {
    return (

        <div className="info-section">
            <img src={RedaImage} />
            <h2>Reda Stambouli</h2>
            <p>Web Developer</p>
            <p>redastambouli.website</p>
            <nav className="info-nav">
                <div className="email-box">
                    <img src="src\assets\email.png" />
                    <p>Email</p>
                </div>
                <div className="linkedln-box">
                    <img src="src\assets\linkedin.png" />
                    <p>Linkedln</p>
                </div>

            </nav>
        </div>
    )
}