import About from './data/about'
import Events from './data/events'
import Videos from './data/videos'

const AboutDataLoader = () => {
    return About; 
};
const HomeDataLoader = () => {
    return "<h1> Welcome Home </h1>"
};
const EventDataLoader = () => {return Events};
const VideoDataLoader = () => {return Videos};


export {
    AboutDataLoader,
    HomeDataLoader,
    EventDataLoader,
    VideoDataLoader
}; 