
//////foooter
const SocialNetwork = function() {
    return (
        <div class="socialNetwork">
            <ul>
                <a href="https://es-la.facebook.com/" target="_blank"> <li class="fa fa-facebook "></li> </a>
                <a href="https://web.pinterest.org/" target="_blank">  <li class="fa fa-pinterest "></li></a>
                <a href="https://www.instagram.com/?hl=es-la" target="_blank"> <li class="fa fa-instagram "></li></a>
                <a href="https://twitter.com/?lang=es" target="_blank"><li class="fa fa-twitter "></li> </a>
            </ul>
        </div>
    );
}

const Menu = function() {
    return (
        <div class="container-menu">
            <ul class="menu">
                <a href="https://es-la.facebook.com/" target="_blank"> <li>HOME</li> </a>
                <a href="https://web.pinterest.org/" target="_blank">  <li>MENU</li></a>
                <a href="https://twitter.com/?lang=es" target="_blank"><li>STORY</li> </a>
                <a href="https://www.instagram.com/?hl=es-la" target="_blank"> <li>DETOX</li></a>
                <a href="https://twitter.com/?lang=es" target="_blank"><li>LOCATIONS</li> </a>
                
            </ul>
        </div>
    );
}

const SubMenu = function() {
    return (
        <div class="container-submenu">
            <ul class="submenu">
                <a href="" target="_blank"> <li>CONTACT</li></a>
                <li>|</li>
                <a href="" target="_blank"> <li>BLOG</li></a>
                <li>|</li>
                <a href="" target="_blank"> <li>CATERING</li></a>
                <li>|</li>
                <a href="" target="_blank"> <li>DELIVERY</li></a>  
            </ul>
        </div>
    );
}

const Cw = function() {
    return (
        <div class="container-footer-final">
            <h3 class="h3">HEALTY FAST-CASUAL FOOD, CRAFTED WITH ♥ IN MINNEAPOLIS</h3>
            <h4 class="h4"> © AGRA CULTURE KITCHEN & PRESS | ALL RIGHTS RESERVED</h4>
        </div>
    );
}

const App = function() {
    return (
        <div>
            <SocialNetwork />
            <Menu/>
            <SubMenu/>
            <Cw />
        </div>
    );
}

ReactDOM.render( <App />, document.querySelector("#root") );


