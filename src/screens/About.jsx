import AboutContent from '../components/aboutpage/AboutContent';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import './about.css';

const About = () => {
    return(
        <div className='about'>
            <Navbar />
            <AboutContent />
            <Footer />
        </div>
    )
}

export default About;