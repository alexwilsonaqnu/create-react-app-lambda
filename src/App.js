import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import FacebookLoginButton from './FacebookLoginButton';

<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '2410340132393995',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.11'
    });

    FB.AppEvents.logPageView();

  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>

class App extends Component {

  state = {
    username: null
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name
      });
    } else {
      alert('Facebook login error');
    }
  }

  render() {
    const { username } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Social Media Login</h1>
        </header>

        <div className="App-intro">
          { !username &&
            <div>
              <p>Click on one of any button below to login</p>
              <FacebookLoginButton onLogin={this.onFacebookLogin}>
                <button>Facebook</button>
              </FacebookLoginButton>
            </div>
          }
          {username &&
            <p>Welcome back, {username}</p>
          }
        </div>
      </div>
    );
  }
}

export default App
