import React,{useState} from 'react'
import './Main.css'

import img1 from './images/header.jpg'
import img2 from './images/part1.jpg'
import img3 from './images/part2.jpg'

const Main = () => {

    const [userData, setUserData] = useState({
        sender: "",
        email: "",
        phone: "",
      });
    
      let name, value;
      const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
    
        setUserData({ ...userData, [name]: value });
      };
    
      // connect with firebase
      const submitData = async (event) => {
        event.preventDefault();
        const { sender, email, phone,  } = userData;
    
        if (sender && email && phone ) {
          const res = fetch(
            "https://medkart-c8507-default-rtdb.firebaseio.com/senderData",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                sender,
                email,
                phone,
              }),
            }
          );
    
          if (res) {
            setUserData({
              sender: "",
              email: "",
              phone: "",
            });
            alert("Data Stored");
          } else {
            alert("plz fill the data");
          }
        } else {
          alert("plz fill the data");
        }
      };

  return (
      <>
      <section>
      <div className="main-container">
        <nav class="navbar navbar-expand-lg navbar-light med-navbar">
  <a class="navbar-brand m-3" href="#"><img src='data:image/png;base64,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' /></a>
</nav>
    </div>
      </section>
    

<section>
<div className="header">
<div className="row">
    <div className="col col-md-6 col-sm-12">
        <div className="header-txt">
        <h2>Why Choose 20% ?</h2>
        <h1>When You're getting 85%</h1>
        <a href='https://play.google.com/store/apps/details?id=com.vmobee.reactnative.medkart'><button className='btn'>Download App</button></a>
        </div>
    </div>
    <div className="col col-md-6 col-sm-12">
    <div className="header-img">
<img src={img1} />
</div>
    </div>
</div>
</div>
</section>

<section>
    <div className="second-img">
    <div className="row">
    <div className="col col-md-6 col-sm-12">
        <div className="trust">
            <img src={img3} />
        </div>
    </div>
    <div className="col col-md-6 col-sm-12">
    <div className="header-img">
<img src={img2} />
</div>
    </div>
</div>
    </div>
</section>

<section id="contact">
  <div class="contact-box">
    <div class="contact-links">
      <h2>CONTACT US</h2>
    </div>
    <div class="contact-form-wrapper">
      <form method='POST'>
        <div class="form-item">
          <input type="text" name="sender" value={userData.sender} required  onChange={postUserData}/>
          <label>Name:</label>
        </div>
        <div class="form-item">
          <input type="text" name="email" value={userData.email} onChange={postUserData} required/>
          <label>Email:</label>
        </div>
        <div class="form-item">
          <input type="tel" name="number" value={userData.number} onChange={postUserData} required/>
          <label>Contact No:</label>
        </div>
        <button class="submit-btn" onClick={submitData}>Send</button>  
      </form>
    </div>
  </div>
</section>
</>

  )
}

export default Main