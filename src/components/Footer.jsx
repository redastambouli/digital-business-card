import facebookImage from '/src/assets/Facebook Icon.svg'
import gitHubImage from '/src/assets/GitHub Icon.svg'
import instagramImage from '/src/assets/Instagram Icon.svg'
import twitterImage from '/src/assets/Twitter Icon.svg'

export default function Footer() {
    return (

        <div className="footer-section">
            <a href="https://www.facebook.com/reda.stambouli.13" target="_blank"><img src={facebookImage} /></a>
            <a href="https://github.com/redastambouli" target="_blank"><img src={gitHubImage} /></a>
            <a href="https://www.instagram.com/redastambouli/" target="_blank"><img src={instagramImage} /></a>
            <a href="https://twitter.com/redastambouli_/" target="_blank"><img src={twitterImage} /></a>


        </div>
    )
}

/*<img src="src\assets\Facebook Icon.svg" />*/