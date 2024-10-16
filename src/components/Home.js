import React from 'react';
import './home.css'; // Custom styles can go here
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  const socialMediaPlatforms = [
    { name: 'Instagram', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' },
    { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
    { name: 'X', logo: 'https://www.freepnglogos.com/uploads/twitter-x-logo-png/twitter-x-logo-png-9.png' },
    { name: 'YouTube', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png' },
    { name: 'Telegram', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg' },
    { name: 'LinkedIn', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' },
    { name: 'WhatsApp', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' },
    { name: 'Reviews', logo: 'https://yt3.ggpht.com/a/AATXAJw9FoO3ngpePKVUkxVPYL0B_lvT95vcpeLG=s900-c-k-c0xffffffff-no-rj-mo' },
    { name: 'Others', logo: 'https://icon-library.com/images/others-icon/others-icon-11.jpg' },
  ];
  return (
    <div className="home-container" style={{ backgroundColor: '#1e1e2e', color: '#fff' }}>
      {/* Top Indicators */}
      <div className="top-indicators d-flex justify-content-around py-3">
        <div className="indicator-box text-center">
          <p>Wallet</p>
          <h5>₹45035.00</h5>
        </div>
        <div className="indicator-box text-center">
          <p>Earnings</p>
          <h5>₹98765.40</h5>
        </div>
        <div className="indicator-box text-center">
          <p>Referrals</p>
          <h5>29</h5>
        </div>
      </div>

 {/* Welcome Banner with Auto-Sliding Carousel */}
<div className="welcome-banner text-center my-3">
  <div className="card mx-auto" style={{ backgroundColor: '#2e2e3e', maxWidth: '95%' }}>
    <div className="card-body p-0">
      <div id="welcomeCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://visme.co/blog/wp-content/uploads/2020/08/Header-57.jpg" className="d-block w-100" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img src="https://wallpaperaccess.com/full/99815.png" className="d-block w-100" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src="https://visme.co/blog/wp-content/uploads/2020/08/Header-57.jpg" className="d-block w-100" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img src="https://wallpaperaccess.com/full/99815.png" className="d-block w-100" alt="Fourth slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#welcomeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#welcomeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>


      {/* Social Media Tasks */}
      <div className="social-tasks my-3">
        <h5 className="text-center mb-3">Social Media Task</h5>
        <div className="container">
          <div className="row">
            {socialMediaPlatforms.map((platform, index) => (
              <div className="col-4 mb-3" key={index}>
                <div className="task-box text-center p-2" style={{ backgroundColor: '#2e2e3e', borderRadius: '8px' }}>
                  <img src={platform.logo} alt={`${platform.name} logo`} style={{ width: '40px', height: '40px' }} />
                  <h6>{platform.name}</h6>
                  <span className="badge task-count-badge">+{Math.floor(Math.random() * 400)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Refer and Earn Section with Auto-Sliding Carousel */}
<div className="refer-earn my-3">
  <div className="card mx-auto" style={{ backgroundColor: '#2e2e3e', maxWidth: '95%' }}>
    <div className="card-body p-0">
      <div id="referCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://referlink.xyz/image_preview.png" className="d-block w-100" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img src="https://referlink.xyz/image_preview.png" className="d-block w-100" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src="https://referlink.xyz/image_preview.png" className="d-block w-100" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img src="https://referlink.xyz/image_preview.png" className="d-block w-100" alt="Fourth slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#referCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#referCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>
      {/* Share Your Refer Link */}
      <div className="share-link my-3">
        <h5 className="text-center mb-3">Share Your Refer Link</h5>
        <div className="d-flex justify-content-around">
          {[
            { name: 'Copy Link', icon: 'fas fa-link' },
            { name: 'WhatsApp', icon: 'fab fa-whatsapp' },
            { name: 'Facebook', icon: 'fab fa-facebook' },
            { name: 'Telegram', icon: 'fab fa-telegram' },
          ].map((linkOption, index) => (
            <div key={index} className="text-center">
              <i className={`${linkOption.icon}`} style={{ fontSize: '24px', color: '#fff' }}></i>
              <p>{linkOption.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Options */}
      <div className="additional-options my-3 d-flex justify-content-around">
        <div className="option-box text-center">
          <h6>Premium Membership</h6>
        </div>
        <div className="option-box text-center">
          <h6>My Leads</h6>
        </div>
      </div>

      {/* Connect With Us */}
      <div className="connect-us text-center my-3">
        <h5>Connect With Us</h5>
        <div className="d-flex justify-content-around mt-3">
          {[
            { name: 'WhatsApp', icon: 'fab fa-whatsapp' },
            { name: 'Telegram', icon: 'fab fa-telegram' },
            { name: 'YouTube', icon: 'fab fa-youtube' },
            { name: 'X', icon: 'fab fa-x-twitter' },
            { name: 'Instagram', icon: 'fab fa-instagram' },
            { name: 'Facebook', icon: 'fab fa-facebook' },
          ].map((social, index) => (
            <a key={index} href={`#${social.name.toLowerCase()}`} className="text-decoration-none">
              <i className={`${social.icon}`} style={{ fontSize: '24px', color: '#fff' }}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
