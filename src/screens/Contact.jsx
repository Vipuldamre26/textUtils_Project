
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import ContactContent from '../components/contactpage/ContactContent';
import './contact.css';

const Contact = () => {
    return(
        <div className='contact'>
            <Navbar />
            <ContactContent />
            <Footer />
        </div>
    )
}

export default Contact;