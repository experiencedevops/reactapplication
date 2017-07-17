import { PropTypes, Component } from 'react'
import {Link } from 'react-router-dom'
import { Form, Container , Button, Message, Grid, Image, Segment, Menu, Icon, Label, Card} from 'semantic-ui-react'
import axios from 'axios'
import MyConstants from './MyConstants'
import { Footer } from './Footer'
import { SiteMenu } from './SiteMenu'


export class Home extends Component {

	constructor(props){
		super(props);  
		this.state = {
			user : ""
		}   
	}

  componentDidMount() {
		axios.get(MyConstants.baseurl+'/customerservice/customers/'+sessionStorage.getItem('myData'))
		  .then(response => {
        var temp = response.data
        //console.log(temp.addresses[0].country)
        this.setState({user:response.data})
      })
		  .catch(error => console.log(error));
			
    }



	render(){

      const src = '/assets/images/image.png'

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
                                    <Icon name='edit' /> <Link to="/changeaddress">Edit Profile  </Link>
                                  </Menu.Item>
                                  <Menu.Item as='a'>
                                    <Icon name='log out' /> <Link to="/">Logout  </Link>
                                  </Menu.Item>
                                </Menu>
                                
                          </Segment>
                   </Segment.Group>

                    <Card.Group itemsPerRow={6}>
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                    </Card.Group>

					          </Container>
                    <Footer />
                </div>

				)
		}	

}



