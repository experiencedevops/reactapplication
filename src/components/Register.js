import { PropTypes, Component } from 'react'
import {Link, Redirect } from 'react-router-dom'
import { Form, Container , Button, Message } from 'semantic-ui-react'
import axios from 'axios'
import MyConstants from './MyConstants'
import { Footer } from './Footer'
import { SiteMenu } from './SiteMenu'



	export class Register extends Component {

	constructor(props){
		super(props);

    	this.state = {
			formSubmitted : false,
      		loginRedirect : false
		}    

		this.submit = this.submit.bind(this)
    	this.login = this.login.bind(this)
	}


	submit=(e)=> {
		e.preventDefault()

		const register = { fName:  this._fname.value,
						        lName :  this._lname.value,
                    pwd : "pwd",
                    email : this._email.value,
                    addresses : [
                      {
                        line1 : this._line1.value,
                        line2 : this._line2.value,
                        county : this._county.value,
                        country : this._country.value,
                        postcode : this._postcode.value
                      }
                    ]
						}

     //console.log(register)  

         
						
		axios.post(MyConstants.baseurl+'/customerservice/register', register)
			 .then(response =>{
					console.log(response.data)
					this.setState({
						formSubmitted : true
					}) 
				});
	}

  login=(e)=> {
		e.preventDefault()
    	this.setState({
			loginRedirect : true
		})     
	
	}

	render(){

      if(this.state.loginRedirect){
        	return (
						<Redirect to="/"/>
					)
      }

      else if (this.state.formSubmitted) {
					return (
             <div>
                    <SiteMenu />
                    <Container textAlign='left'>
                        <Message
                        success
                        icon = "check square"
                        header='Your user registration was successful'
                        content='You may now log input with the username you have chosen'
                      />
                      <Button color='green' onClick={this.login}>Click here to Log in</Button>
                    </Container>
                     <Footer />
            </div>
					)
			} 

			return (
        <div>
                    <SiteMenu />
					<Container textAlign='left'>			
					<Message 
          info
					attached
					header='Sign Up'
					content='Fill out the form below to experience the awesome'
					/>
					<Form onSubmit={this.submit} className='attached fluid segment'>
					<div>
						<label>First Name</label>
						<input type='text'  defaultValue={this.props.fname} ref={(input) => { this._fname = input; }} />
					</div>
					<div>
						<label>Last Name</label>
						<input type='text'  defaultValue={this.props.lname} ref={(input) => {  this._lname = input; }} />
					</div>
          <div>
						<label>Email Id</label>
						<input type='text'  defaultValue={this.props.email} ref={(input) => { this._email = input; }} />
					</div>
					<div>
						<label>Address : Line 1</label>
						<input type='text'  defaultValue={this.props.line1} ref={(input) => {  this._line1 = input; }} />
					</div>
          <div>
						<label>Address : Line 2</label>
						<input type='text'  defaultValue={this.props.line2} ref={(input) => { this._line2 = input; }} />
					</div>
					<div>
						<label>Address : City</label>
						<input type='text'  defaultValue={this.props.county} ref={(input) => {  this._county = input; }} />
					</div>
          <div>
						<label>Address : Country</label>
						<input type='text'  defaultValue={this.props.country} ref={(input) => { this._country = input; }} />
					</div>
					<div>
						<label>Address : Pincode</label>
						<input type='text'  defaultValue={this.props.postcode} ref={(input) => {  this._postcode = input; }} />
					</div>
									
					<Button color='blue'>Submit</Button>
					</Form>
					<Message attached='bottom' info>
					For queries please connect the site admin <a href='mailto:experiencedigitial@gmail.com'>John Doe</a>.
					</Message>
		
					</Container>
           <Footer />
            </div>
				)
      


		}	

}

Register.defaultProps = {
    fname : "",
    lname : "",
    email : "",
    line1 : "",
    line2 : "",
    county :"",
    country : "",
    postcode :""
}

Register.propTypes = {
    fname : PropTypes.string.isRequired,
    lname : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired,
    line1 : PropTypes.string.isRequired,
    line2 : PropTypes.string.isRequired,
    county :PropTypes.string.isRequired,
    country : PropTypes.string.isRequired,
    postcode : PropTypes.string.isRequired
}

