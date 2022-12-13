import '../public/assets/bootstrap/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/baguettebox.js/dist/baguetteBox.min.js';
import '../node_modules/swiper/swiper.min.css';
import '../public/assets/css/Features-Small-Icons-icons.css';
import '../public/assets/css/Montserrat.css';
import '../public/assets/css/Kaushan Script.css';
import '../public/assets/css/Simple-Slider-Simple-Slider.css';
import '../public/assets/css/Pricing-Yearly--Monthly-badges.css';
import '../public/assets/css/untitled.css';
import '../public/assets/js/agency.js';
import '../public/assets/js/Simple-Slider';
import '../public/assets/js/Lightbox-Gallery';

//React imports
import React from 'react';
import ReactDOM from 'react-dom';
import BasicModal from './MuiModal';


class App extends React.Component {
    render() {
        return (
            <div>
                <BasicModal></BasicModal>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));


// class App extends Component {
//     render() {
//         const [modalShow,setModalShow] = React.useState(false);
//         return (
//             <div>
//                 <MyVerticallyCenteredModal
//                     show={modalShow}
//                     onHide={() => setModalShow(false)}
//                 />
//                 <Button variant="primary" onClick={() => setModalShow(true)}>
//                     Launch vertically centered modal
//                 </Button>
//                 <Button variant="primary" onClick= {
//                     () => setModalShow(true) }
//                 >Launch vertically centered modal
//                 </Button>
//                 <MyVerticallyCenteredModal
//                     show={modalShow}
//                     onHide={() => setModalShow(false)}
//                 />
//
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<App />, document.getElementById('root'));

