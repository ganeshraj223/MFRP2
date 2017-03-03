import React from "react";
import {render} from "react-dom";
import home from "./../css/assets/home.png";
import values from "./../data/images.json";
import {Link} from "react-router";
import contentImage from "./../css/assets/contentImage.png"

export class Gallery extends React.Component {
	render() {
		return (
			<section className="galleryBG">
				<div className="uiGallery">
				    <div className="row gallery">
				    	
				        <div className="btn-group btn-breadcrumb">
				            <Link to={"/gallery"} className="btn forGallery btn-default " activeStyle = {{color : "red"}}><img src={home} alt="Home Button"/></Link>
				            <Link to={"/entertainment"} className="btn forGallery btn-default " activeStyle = {{color : "red"}}>Entertainment</Link>
				            <Link to={"/education"} className="btn forGallery btn-default " activeStyle = {{color : "red"}}>Education</Link>
				            <Link to={"/healthcare"} className="btn forGallery btn-default " activeStyle = {{color : "red"}}>Healthcare</Link> 
				            <Link to={"/banking"} activeStyle = {{color : "red"}} className="btn forGallery btn-default ">Banking & Financial</Link>
				            <Link to={"/retail"} activeStyle = {{color : "red"}} className="btn forGallery btn-default ">Retail</Link>
				            <form className="navbar-form navbar-left">
						      <div className="input-group">
						        <input type="text" className="form-control searchBar" placeholder="Search"/>
						        <div className="input-group-btn">
						          <button className="btn btn-default search" type="submit">
						            <i className="glyphicon glyphicon-search"></i>
						          </button>
						        </div>
						      </div>
						    </form> 
				        </div>
				      
					</div>

					  <div className="galleryDisplay">
					     	<div className="dropdown">
						     	<span className="sort">Sort By:&ensp;</span>
							    <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">RATING &ensp;
							    <span className="caret"></span></button>
							    <ul className="dropdown-menu">
							      <li><a href="#">1</a></li>
							      <li><a href="#">2</a></li>
							      <li><a href="#">3</a></li>
							      <li><a href="#">4</a></li>
							      <li><a href="#">5</a></li>
							    </ul>
						  </div>
				      </div>
				      <img src={contentImage} alt="Content Banner" style={{width: "100%"}}/>
				      <p className="bannerContents"><strong>Entertainment</strong> is a form of activity that holds the attention and interest of an audience,
				       or gives pleasure and delight. It can be an idea or a task, but is more likely to be one of 
				       the activities or events that have developed over thousands of years specifically for the purpose 
				       of keeping an audience's attention.</p>
				      
				       <p className="bannerContents"><strong>Education</strong> is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include storytelling, discussion, teaching, training, and directed research. Education frequently takes place under the guidance of educators, but learners may also educate themselves.</p>
					  
					   <p className="bannerContents"><strong>Health Care</strong> or healthcare is the maintenance or improvement of health via the diagnosis, treatment, and prevention of disease, illness, injury, and other physical and mental impairments in human beings. Health care is delivered by health professionals (providers or practitioners) in allied health professions, chiropractic, physicians, physician associates, dentistry, midwifery, nursing, medicine, optometry, pharmacy, psychology, and other health professions.</p>
					  
					   <p className="bannerContents"><strong>Bank</strong> is a financial institution that accepts deposits from the public and creates credit.Lending activities can be performed either directly or indirectly through capital markets. Due to their importance in the financial stability of a country, banks are highly regulated in most countries. Most nations have institutionalized a system known as fractional reserve banking under which banks hold liquid assets equal to only a portion of their current liabilities.</p>
						
						<p className="bannerContents"><strong>Retail</strong> markets and shops have a very ancient history, dating back to antiquity. Retailing involves the process of selling consumer goods or services to customers through multiple channels of distribution to earn a profit. Retailers satisfy demand is identified through a supply chain.</p>
				</div>
			</section>

			)
	}
}