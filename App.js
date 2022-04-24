import { Switch, Route, Redirect } from 'react-router-dom';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';


// Tailwind CSS Style Sheet
import './src/assets/styles/tailwind.css';
import landing from './src/pages/landing';
import DefaultFooter from './src/components/DefaultFooter';

import SupplyBorrow from './src/pages/SupplyBorrow';
import GiftPool from './src/pages/giftpool';
import chirp from './src/pages/chirp';

<><link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous" />
    
<meta charset="utf-8"></meta>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>

  <title>Chirp Chirp</title>
  <meta content="" name="description"></meta>
  <meta content="" name="keywords"></meta>
<link href="assets/img/favicon.png" rel="icon"></link>
<link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"></link>

<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,700,700i&display=swap" rel="stylesheet"></link>
<link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet"></link>
<link href="assets/vendor/aos/aos.css" rel="stylesheet"></link>
<link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"></link>
<link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"></link>
<link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"></link>
<link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"></link>
<link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"></link>
<link href="assets/css/style.css" rel="stylesheet"></link>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
</>

function App() {
    return (
        <Switch>
            <div>
          
            <Route exact path="/" component={landing} />
            <Route exact path="/giftpool" component={GiftPool} />
            <Route exact path="/mode/:selected" component={SupplyBorrow} />
            <Route exact path="/chirps" component={chirp} />
            {/* <Redirect from="*" to="/" /> */}
            {/* <DefaultFooter /> */}
            </div>
        </Switch>
    );
}

export default App;
