import { Follow,Share } from 'react-twitter-widgets'
import FacebookProvider, { Like } from 'react-facebook';
import React,{Component} from 'react';
class SceTweet extends Component{
    render(){
        return(<div>
            <FacebookProvider appId="##############">
                <Like href="https://www.facebook.com/abc" colorScheme="dark" showFaces share 
            layout='button_count'  />
      </FacebookProvider>
   <br/>
  <Follow username='ABC' options={{showCount : false}}/>
  
  <Share
    url={'https://www.facebook.com/ABC'}
    options={{ text: '#reactjs is awesome', via: 'sce' }} />
 
  </div>
        );
    }
}
export default SceTweet;