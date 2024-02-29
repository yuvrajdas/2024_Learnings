import '../css/PageNotFound.css'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
    return (<>
        <section className='container-fluid pnf-container'>

            <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="page_not_found" />
            <div className='page_404_desc'>
                <h3>Look like you're lost</h3>
                <p>the page you are looking for not avaible!</p>
                <Link to="/" className="link_404">Go to Home</Link>
            </div>
        </section>
    </>)
}

export default PageNotFound

