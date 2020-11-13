import React from 'react';

function Footer() {
    return (
        <footer class="py-2 px-5 bg-dark sticky-bottom">
            <div className="row">
                <small className="copyright"> Masiel Bautista &copy; 2020 </small>
                <ul className="social-network social-circle ml-auto">
                    <li><a href="https://www.linkedin.com/in/jarrod-bataille-9154461aa/" target="_blank" rel="noopener noreferrer" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="mailto:jtbataille@gmail.com" className="icoMail" title="Mail"><i className="fa fa-envelope"></i></a></li>
                    <li><a href="https://twitter.com/jtbataille" target="_blank" rel="noopener noreferrer" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://github.com/jtbataille" target="_blank" rel="noopener noreferrer" className="icoGitHub" title="GitHub"><i className="fa fa-github"></i></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;