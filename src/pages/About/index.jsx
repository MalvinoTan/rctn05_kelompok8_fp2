import { ProgressBar } from "react-bootstrap";
import styles from "./style.module.css";
import Header from "../../components/Header";
import AboutSection from "../../components/AboutSection";
import SectionHeader from "../../components/SectionHeader";

const About = () => {
    const aboutData = {
        malvino: {
            id: "RCTN-KS05-006",
            name: "Malvino Austin Tanura",
            progress: [
                "Pengembangan aplikasi website",
                "Melakukan deployment"
            ]
        },
        taofik: {
            id: "RCTN-KS05-025",
            name: "Taofik Arianto",
            progress: [
                "Pembuatan desain figma",
                "Pembuatan panduan dan cara penggunaan aplikasi"
            ]
        }
    }

    const percentage = 90;

    return (
        <>
            <Header />
            <div className={styles.container}>
                <SectionHeader title="About" />
                <h3>Final Project Kelompok 08 - E- Commerce "BukaAjaDulu"</h3>
                <h3><small>Progress Percentage</small></h3>
                <ProgressBar variant="success" now={percentage} label={`${percentage}%`} animated={45} style={{ width: "70%", margin: "0 auto" }} className="my-4" />
                <AboutSection data={aboutData.malvino} />
                <AboutSection data={aboutData.taofik} />
            </div>
        </>
    );
};

export default About;