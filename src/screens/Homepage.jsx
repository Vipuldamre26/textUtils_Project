import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import HomepageContent from '../components/homepage/HomepageContent';
import './homepage.css';

const Homepage = () => {
    return(
        <div className='homepage'>
            <Navbar />
            <HomepageContent />
            <Footer />
        </div>
    )
}

export default Homepage;