import React, { Component } from 'react';
/*global FB*/

class Feedback extends Component {
    

    componentDidMount() {
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '115517331888071',
                cookie     : true,  // enable cookies to allow the server to access the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.5' // use version 2.1
            });
        };

        window.twttr = (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
              t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
          
            t._e = [];
            t.ready = function(f) {
              t._e.push(f);
            };
          
            return t;
          }(document, "script", "twitter-wjs"));
        
        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    render() {
        return (
            <div>
                
                <a className="twitter-share-button" href="https://twitter.com/share"
                data-text="Outage Center | Home - SCE"
                data-url="https://www.sce.com/wps/portal/home/outage-center"
                data-related="twitterapi,twitter">Tweet</a>
                <a href='https://twitter.com/sce?ref_src=twsrc%5Etfw' className='twitter-follow-button' 
                    data-show-count='false'/>
                    <div class="fb-share-button" data-href="https://www.sce.com/wps/portal/home/outage-center/" data-layout="button" data-size="small" data-mobile-iframe="false"></div>
                <div className="fb-like"  data-href="https://www.facebook.com/sce" data-layout='button_count'></div>
            </div>
        );
    }
}
export default Feedback;