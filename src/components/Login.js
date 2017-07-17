import { PropTypes, Component } from 'react'
import {Link, Redirect } from 'react-router-dom'
import { Form, Container , Button, Message, Grid, Image} from 'semantic-ui-react'
import axios from 'axios'
import MyConstants from './MyConstants'
import { Footer } from './Footer'
import { SiteMenu } from './SiteMenu'


export class Login extends Component {


	constructor(props){
		super(props);

        this.state = {
			loginSucceeded : false
		}
        
		this.submit = this.submit.bind(this)
        
	}


	submit=(e)=> {
		e.preventDefault()

		const login = { email:  this._email.value,
						 pwd :  this._pwd.value
						}
					
		axios.post(MyConstants.baseurl+'/userservice', login)
			 .then(response => {
                    //console.log(response.data);
                    sessionStorage.setItem('myData', response.data.id);
                    this.setState({
                        loginSucceeded : true
                    })
             
            }).
            catch((error) => {
                console.log("Wrong Credentials")
                console.log(error) 
            });
	}

	render(){

            if(this.state.loginSucceeded){
        	return (
						<Redirect to="/home"/>
					)
            }

			return (
                <div>
                    <SiteMenu />
                    <Container textAlign='left'>
                    <Grid>
                        <Grid.Column width={10}>
                            <Image src='/assets/images/ins.jpg' />
                        </Grid.Column>
                        <Grid.Column width={6}>
                                <Container textAlign='left'>			
                                <Message
                                info
                                attached
                                header='Login'
                                content='Login to experience the awesome!'
                                />
                                <Form onSubmit={this.submit} className='attached fluid segment'>
                                <div>
                                    <label>Email Id</label>
                                    <input type='text' required defaultValue={this.props.email} ref={(input) => { this._email = input; }} />
                                </div>
                                <div>
                                    <label>Password</label>
                                    <input type='password' required defaultValue={this.props.pwd} ref={(input) => {  this._pwd = input; }} />
                                </div>
                                                
                                <Button color='blue'>Submit</Button>
                                </Form>
                                <Message attached='bottom' info>
                                Not yet registered ? <Link to="/register">Sign Up</Link>
                                </Message>
                    
                                </Container>
                        </Grid.Column>
        
                    </Grid>
					 </Container>
                    <Footer />
                </div>

				)
		}	

}

Login.defaultProps = {
		email: "",
		pwd: ""
}

Login.propTypes = {
	email: PropTypes.string.isRequired,
	pwd: PropTypes.string.isRequired
}

