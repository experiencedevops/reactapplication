import { PropTypes, Component } from 'react'
import {Link, Redirect } from 'react-router-dom'
import { Form, Container , Button, Message, Grid, Image, Segment, Menu, Icon, Label} from 'semantic-ui-react'
import axios from 'axios'
import MyConstants from './MyConstants'
import { Footer } from './Footer'
import { SiteMenu } from './SiteMenu'


export class ChangeField extends Component {

	constructor(props){
		super(props);  
		this.state = {
			user : "",
      formSubmitted : false
		}   

    this.submit = this.submit.bind(this)
	}

  componentDidMount() {
		axios.get(MyConstants.baseurl+'/customerservice/customers/'+sessionStorage.getItem('myData'))
		  .then(response => {       
        this.setState({user:response.data
                    })
      })
		  .catch(error => console.log(error));
			
    }


submit=(e)=> {
		e.preventDefault()

		const changeaddress =   {
                        line1 : this._line1.value,
                        line2 : this._line2.value,
                        county : this._county.value,
                        country : this._country.value,
                        postcode : this._postcode.value
                      }
                  
		axios.post(MyConstants.baseurl+'/addressservice/addresses/'+this._id.value, changeaddress)
			 .then(response =>{
					console.log(response.data)
					this.setState({
						formSubmitted : true
					}) 
				});
	}


	render(){

		console.log(this.props.line1)
      
      if(this.state.formSubmitted){
        	return (
						<Redirect to="/home"/>
					)
      }
    
			return (
                <div>
                    <SiteMenu />
                    <Container textAlign='left'>
                    <Segment.Group horizontal>
                          <Segment color='teal' inverted>
                                <Label size='large' basic>
                                  Welcome&nbsp; &nbsp;
                                  {this.state.user.fName}  {this.state.user.lName} 
                                </Label>
                          </Segment>
                          <Segment textAlign='right'>
                                <Menu compact>
                                  <Menu.Item as='a'>
                                    <Icon name='mail' /> Messages
                                  </Menu.Item>
                                  <Menu.Item as='a'>
                                    <Icon name='edit' /> <Link to="/changeaddress">Edit My Profile  </Link>
                                  </Menu.Item>
                                  <Menu.Item as='a'>
                                    <Icon name='log out' /> <Link to="/">Logout  </Link>
                                  </Menu.Item>
                                </Menu>
                                
                          </Segment>
                   </Segment.Group>

                   	<Message 
          info
					attached
					header='Edit Profile'
					content='Fill edit the below form to change your address'
					/>
					<Form onSubmit={this.submit} className='attached fluid segment'>
					<div>
						<input type='hidden' defaultValue={this.props.id} ref={(input) => {  this._id = input; }} />
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


ChangeField.defaultProps = {
   	id : "",
    line1 : "",
    line2 : "",
    county :"",
    country : "",
    postcode :""
}

ChangeField.propTypes = {
    line1 : PropTypes.string.isRequired,
    line2 : PropTypes.string.isRequired,
    county :PropTypes.string.isRequired,
    country : PropTypes.string.isRequired,
    postcode : PropTypes.string.isRequired
}


