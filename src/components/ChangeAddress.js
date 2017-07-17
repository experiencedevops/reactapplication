import { PropTypes, Component } from 'react'
import {Link } from 'react-router-dom'
import { Form, Container , Button, Message, Grid, Image, Segment, Menu, Icon, Label} from 'semantic-ui-react'
import axios from 'axios'
import MyConstants from './MyConstants'
import { Footer } from './Footer'
import { SiteMenu } from './SiteMenu'
import { ChangeField } from './ChangeField'

export class ChangeAddress extends Component {

	constructor(props){
		super(props);  
		this.state = {
			user : "",
      line1 : "",
      line2 : "",
      county : "",
      country : "",
      postcode : "",
      dataLoaded : false
		}   

   
	}

  componentDidMount() {
		axios.get(MyConstants.baseurl+'/customerservice/customers/'+sessionStorage.getItem('myData'))
		  .then(response => {       
        this.setState({user:response.data,
                        line1 : response.data.addresses[0].line1,
                        line2 :  response.data.addresses[0].line2,
                        county :  response.data.addresses[0].county,
                        country :  response.data.addresses[0].country,
                        postcode :  response.data.addresses[0].postcode,
                        dataLoaded : true
                    })
      })
		  .catch(error => console.log(error));
			
    }


	render(){
      
      if(this.state.dataLoaded){
        	return (
						 <ChangeField id={this.state.user.id} 
                line1={this.state.line1} 
                line2={this.state.line2}
                county={this.state.county}
                country={this.state.country}
                  postcode={this.state.postcode}
                  />
					)
      }
    
			return (
                
         <div></div>
				)
		}	

}



