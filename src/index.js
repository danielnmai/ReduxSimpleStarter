// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
//
// import App from './components/app';
// import reducers from './reducers';
//
// const createStoreWithMiddleware = applyMiddleware()(createStore);
//
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDxA9yCsd_QbTC_ZP02KNm5mtdq8B0QRiE';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos: [] };
    YTSearch({key: API_KEY, term: 'surfboards'},  (videos) => {
      this.setState({ videos });
      console.log(videos);
    })
  }
  render(){
    return (
    <div>
      <SearchBar />
      <VideoList videos = {this.state.videos}/>
    </div>
  );
  }

}
ReactDOM.render(<App />, document.getElementById('root'));
