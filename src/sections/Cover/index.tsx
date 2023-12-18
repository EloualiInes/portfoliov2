import RevealingText from "../../components/RevealingText";
import {ReactComponent as GithubIcon} from "../../assets/svg/GithubIcon.svg";
import {ReactComponent as LinkedinIcon} from "../../assets/svg/LinkedinIcon.svg"
import "./styles.css"

export default function Cover() {
    const handleClick = (scrollToId: string) => {
        const element = document.getElementById(scrollToId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="cover">
            <div className="container-presentation">
                <RevealingText text='Inès El Ouali'/>
                <h2>Développeuse web et mobile</h2>
                <div className="button-container">
                    <button className="button" onClick={() => handleClick("#portfolio")}>
                        Voir mes réalisations
                        <i className="arrow-down"></i>
                    </button>
                </div>
            </div>
            <div className="container-buttons">
                <a href="mylink">
                    <GithubIcon className="github-icon"/>
                </a>
                <a href="mylink">
                    <LinkedinIcon className="github-icon"/>
                </a>

            </div>
        </section>
    )
}