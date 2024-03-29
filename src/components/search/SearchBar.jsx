import React, { Component } from 'react';   
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import  './searchbar.css'
import axios from 'axios'

class SearchBar extends Component {

  


          constructor(props) {
            super(props);

            this.state = {
              searchQuery: "",
              isLoading: true,
              isJokesDone:false,
              isJokesStarted:false,
              data: [],
              jokes: {},
              error:[],
              fault: false
            }
       
          }

          getJokes(){
            this.setState({isJokesStarted: true})
            const options = {
              method: 'GET',
              url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
              headers: {
                accept: 'application/json',
                'X-RapidAPI-Key': '2f404d05cbmsh84e5f6c522cab1fp1271dcjsnca9e771aced4',
                'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
              }
            };
            
            axios.request(options)
              .then( (response) => {
                  this.setState({jokes: response.data})
            }).catch( (error) => {
                  console.error(error);
            });

            let intervalID = setInterval(() => {
              const options = {
                method: 'GET',
                url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
                headers: {
                  accept: 'application/json',
                  'X-RapidAPI-Key': '2f404d05cbmsh84e5f6c522cab1fp1271dcjsnca9e771aced4',
                  'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
                }
              };
              
              axios.request(options)
                .then( (response) => {
                    this.setState({jokes: response.data})
              }).catch( (error) => {
                    this.setState({jokes: "error"});
              });
              if (this.state.data.length!==0 || this.state.error.length!==0) {
                this.setState({isJokesDone: true})
                clearInterval(intervalID); // Stop the interval if the condition holds true
              }
            }, 10000);
            

          }

          handleInputChanged(event) {
            this.setState({
              searchQuery: event.target.value
            });
          }

          handleButtonClicked() {
           
          }
          if (isLoading) {
            return <div> Loading ... </div>
          }
          
          


          activateLasers()  {

            var port = 3223
            this.setState({data:[]})
            this.setState({error:[]})
            this.setState({isJokesDone:false})
            this.setState({fault: false})
            this.getJokes()
            var searchQuery = this.state.searchQuery;  
            let url = "https://facebookscraper.cloudns.ph:" + port +"/api/post"
            axios.post(url, {
              id: searchQuery
            })
            .then( (response) => {
              this.setState({data: response.data})
              this.setState({isLoading: false})
              this.setState({isJokesStarted:false})
            })
            .catch((error)=> {
              this.setState({fault: true})
              this.setState({error:[{error:"An error occured"}]})
              this.setState({data:[]})
              this.setState({isLoading: false})
              this.setState({isJokesStarted:false})
            });
          
          }

          renderAlert =() =>{
            if(this.state.fault === true){
              return<Alert severity="error">Something went wrong. Please try again!</Alert>
            }
          }

          renderJokes=() => {
            if(this.state.isJokesDone=== false ){              
              return<h2>{this.state.jokes.value}</h2>
            } else return <p></p>
          }
          renderText=() =>{
              if (this.state.isJokesStarted===true) {
                return <h2>Hacking facebook to reterive data <span role="img">😉</span>. But in the mean time here are some chuck Noris Jokes for your entertaiment <br></br></h2>
              } else {
                return <h2></h2>
              }
          }

          renderAfterText=()=>{
            setTimeout( this.renderText(), 10000);
          }

          


    render() {
        return (
          <div>
          <div className="searchBar">
              <div className='alertBar'>
                {this.renderAlert()}
              </div>
                <div className = "textfield">
                  <TextField
                   type="text" 
                   value={this.state.searchQuery} 
                   onChange={this.handleInputChanged.bind(this)}
                   fullWidth label="facebook username" 
                   id="fullWidth" 
                  />
                </div>
                <div className='empty'>
                  <Button className='button' variant='outlined' onClick={this.activateLasers.bind(this)} disabled={this.state.isJokesStarted ? true : false}>Search</Button>
                </div>
                {this.state.data.map(post => (
                              <div>
                              <div className='postCard'>
                                <Card sx={{ minWidth: 275 }}>
                                  <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                     <a href={post.postId}>Post Link</a>
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                     {post.postContent}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                      Number Of Likes: {post.numberOfLikes}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                      Number Of Share: {post.numberOfShare}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                      Time of Post: {post.timeOfPost}
                                    </Typography>
                                    <Typography variant="body2">
                                      Date of scrape: { post.date}
                                    </Typography>
                                  </CardContent>
                                </Card>
                              </div>
                          
                              </div>
                      ))

                }

          </div>
          <div>
            <div className="mainTexts">
              {this.renderText()}
            </div>
            <div className='jokes'>
              {this.renderJokes()}
            </div>
          </div>
          </div>
        );
    }
}
 
export default SearchBar;