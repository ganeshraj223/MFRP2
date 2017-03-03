import React from "react";
import {render} from "react-dom";
import {Header} from "./Header";
import upload from "./../css/assets/upload.png";
import save from "./../css/assets/save.png";
import rite from "./../css/assets/rite.jpg";
import wrong from "./../css/assets/wrong.jpg";
import $ from "jquery";
import { findDOMNode } from "react-dom";

export class Upload extends React.Component {
	state = {
		name : "",
		upload :"",
		id : "",
		image : "",
		disable: false,
		errors : {}
	}
	handleChange = (e) => {
		if(!!this.state.errors[e.target.name]) {
			let errors = Object.assign({} , this.state.errors);
		delete errors[e.target.name];
		this.setState({
			[e.target.name] : e.target.value ,
			errors
		});
	} else {
		this.setState({[e.target.name] : e.target.value});
	}
		
	}
	handleUpload = (e) => {
 	const el = findDOMNode(this.refs.change);
 	$(el).on('click', '.btn-file :file', function() {
		var input = $(this),
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [label]);
		});

		$('.btn-file :file').on('fileselect', function(event, label) {
		    
		    var input = $(this).parents('.input-group').find(':text'),
		        log = label;
		    
		    if( input.length ) {
		        input.val(log);
		    } else {
		        if( log )
		        	console.log(log);
		    }
	    
		});
		function readURL(input) {
		    if (input.files && input.files[0]) {
		        var reader = new FileReader();
		        
		        reader.onload = function (e) {
		            $('#img-upload').attr('src', e.target.result);
		        }
		        
		        reader.readAsDataURL(input.files[0]);
		    }
		}

		$("#imgInp").change(function(){
		    readURL(this);
		}); 
		}	
	handleClick = (e) => {
		e.preventDefault();
		var u1,u2,u3;
		// Validation

		let errors ={};
		if(this.state.name === "") {
			$('#name').css('border-color','#cb4d4d')
		 errors.name="Enter User / Uploader's Information";
		} 
		if(this.state.name === "Banking" || this.state.name === "Entertainment"|| this.state.name === "Retail"|| this.state.name === "Education"|| this.state.name === "Healthcare") {
			errors.name=<img src={rite} />;
			$('#name').css('border-color','#92c140')
			u1=true;
			
		} else {
			errors.name="Enter User / Uploader's Information";
			
		}
		if(this.state.id === "") {
			$('#identity').css('border-color','#cb4d4d')
			errors.id=<img src={wrong} />;
			
		} else {
			$('#identity').css('border-color','#92c140')
			errors.id=<img src={rite} />;
			u2=true;
			
		}
		if(this.state.image === "") {
			$('#image').css('border-color','#cb4d4d')
			errors.image=<img src={wrong} />;
			
		} else {
				$('#image').css('border-color','#92c140')
			 errors.image=<img src={rite} />;
			 u3=true;
		}
		if(u1&&u2&&u3)
		{	
			this.state.disable=true;
			errors.upload= <span className="btn btn-default btn-file">
					<img src={save} alt="upload button icon"/>&ensp;UPLOAD A FILE<input type="file" id="imgInp"/>
                </span>;
		}


		this.setState({errors});

	}
	render() {
		return(
			
			<main>
				<section>
					<div className="uploadBox">
						<div className="uploadTab">
							<img src={upload} alt="upload icon"/>
							<span>Upload an image from your desktop</span>
						</div>
						<form className="imageUploadForm">
							<table>
								<tbody>
									<tr>
										<td><label htmlFor="name">Name:</label></td>
										<td><input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} className="form-control formName"/></td>
										<td className="validationMessage">{this.state.errors.name}</td>
									</tr>
									<tr>
										<td><label htmlFor="identity">ID:</label></td>
										<td><input type="number" id="identity" name="id" value={this.state.id} onChange={this.handleChange}  className="form-control formName"/></td>
										<td className="validationMessage">{this.state.errors.id}</td>
									</tr>
									<tr>
										<td><label htmlFor="image">Image:</label></td>
										<td><input type="text" id="image" name="image" value={this.state.image} onChange={this.handleChange}  className="form-control formName"/></td>
										<td className="validationMessage">{this.state.errors.image}</td>
									</tr>
								</tbody>
							</table>
							<button disabled={this.state.disable} className="btn btn-default uploadFile" onClick={this.handleClick}>VALIDATE & UPLOAD</button>
						</form>
						<div className="upload" onClick={this.handleUpload} ref="change">
							{this.state.errors.upload}
						</div>
						<img id='img-upload' style={{width:"200px"}}/>
					</div>
				</section>
			</main>
			);
	}
}