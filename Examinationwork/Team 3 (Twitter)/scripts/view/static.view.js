'use strict';

export const autorisation = `<div id="mainWrapper">
<menu id="leftBlock">
    <img src="assets/images/img_autorisation/LOGO.png" alt="" class="vectorKat" />
    <div>
        <h2 class="Sign">Sign up</h2>
        <h2 class="mainPage">MAIN PAGE</h2>
    </div>
</menu>
<menu id="raightBlock">
    <header class="mainHader">
        <img src="assets/images/img_autorisation/Home.png" alt="" class="imgHome" />
        <h3>Main</h3>
        <h3>></h3>
        <h3>authorization</h3>
        <h3>></h3>
    </header>
    <section id="mainSektion">
        <img src="assets/images/img_autorisation/LogoGroup.png" alt="" />
        <form action="" method="get" id="mainFormBlockRaight">
            <input type="text" placeholder="username" class="userName" />
            <input type="password" placeholder="password" class="password" />
            <input type="button" value="Sign In" class="signUp" />
            <a href="">If you don't have an account</a>
            <a href="">Sign</a>
        </form>
    </section>
</menu>
</div>
<footer id="footerEnd">
<ul>
    <h2>Nyatter</h2>
    <li>last update: 19.02.2022</li>
</ul>
<ul>
    <h2>Dmitry Masalski</h2>
    <li class="liraight">DimOn-1566@mail.ru</li>
</ul>
</footer> `;

export const registration = `<div id="registrationMainWrapper">
<menu id="registrationLeftBlock">
    <img src="../../assets/images/img_registration_page/LOGO.png" class="registration-cat" />
    <h2 class="registration-sign">Log in</h2>
    <h2 class="registration-main-page">main page</h2>
</menu>
<menu id="registrationRaightBlock">
    <header class="registration-mainHader">
        <img src="../../assets/images/img_registration_page/Vector (Home).png" class="registration-imgHome" />
        <h3>Main</h3>
        <h3>></h3>
        <h3>authorization</h3>
        <h3>></h3>
    </header>
    <section id="registrationMainSektion">
        <img src="../../assets/images/img_registration_page/LogoGroup.png" alt="" />
        <form method="get" id="registrationMainFormBlockRaight">
            <input type="text" value="username" class="registration-user-name" />
            <input type="password" value="password" class="registration-password" />
            <input type="password" value="confirm password" class="registration-password" />
            <input type="button" value="Sign In" class="registration-signUp" />
            <a href="">If you don't have an account</a>
            <a href="#">Sigт</a>
        </form>
    </section>
</menu>
</div>
<footer id="registrationFooterEnd">
<ul>
    <h2>Nyatter</h2>
    <li>last update: 19.02.2022</li>
</ul>
<ul>
    <h2>Dmitry Masalski</h2>
    <li class="registration-liraight">DimOn-1566@mail.ru</li>
</ul>
</footer>`;

export const errorPage = `<div id="errorMainWrapper">
<menu id="errorLeftBlock">
    <img src="../../assets/images/error_page/LOGO.png" class="error-cat" />
    <h2 class="error-sign">Welcome!</h2>
    <h3>Hi, Dmitry</h3>
    <a href="">Log out</a>
    <h2 class="error-main-page">main page</h2>
</menu>
<menu id="errorRaightBlock">
    <header class="error-main-header">
        <img src="../../assets/images/error_page/Vector (Home).png" class="error-img-home" />
        <h3>Main</h3>
        <h3>></h3>
        <h3>authorization</h3>
        <h3>></h3>
    </header>
    <section id="errorMainSektion">
        <!-- <img src="../../assets/images/error_page/Error view.png" alt="" width="130%" > -->
    </section>
</menu>
</div>
<footer id="errorFooterEnd">
<ul>
    <h2>Nyatter</h2>
    <li>last update: 19.02.2022</li>
</ul>
<ul>
    <h2>Dmitry Masalski</h2>
    <li class="error-liraight">DimOn-1566@mail.ru</li>
</ul>
</footer>`;

export const mainPage = `<div class="main-container">
<aside class="main-welcome">
    <div class="main-welcome-icon"></div>
    <h1>Welcome!</h1>
    <h2 id="helloUser"></h2>
    <a href="#" id="mainLogOut">Log out</a>
</aside>
<div class="main-content">
    <div class="main-navigation">
        <div class="main-navigation-icon"></div>
        <a href="#">Main</a>
        <div>></div>
    </div>
    <div class="main-new-twit">
        <h2>What's new?</h2>
        <div class="main-new-twit-text">
            <textarea id="mainNewTwit" cols="10" placeholder="Write here..."></textarea>
            <div id="mainNewTwitСounter">0/280</div>
        </div>
        <button>Post</button>
    </div>
    <div class="main-current-all-tweets" id="tweetsMainAllTweets"></div>
</div>
<aside class="filtration">
    <h2>Filtration</h2>
    <form class="filtration-form">
        <label class="filtration-form-autor">
            <div>Autor name</div>
            <input type="text" name="" id="" list="filtrationUserAutor" placeholder="ignore" />
        </label>
        <label class="filtration-form-date">
            <div>Data</div>
            <div>
                <input type="text" name="" id="" placeholder="ignore" />
                <input type="text" name="" id="" placeholder="ignore" />
            </div>
        </label>
        <label class="filtration-form-text-twit">
            <div>Twit text</div>
            <textarea class="filtration-form-text-twit-area" placeholder="ignore"></textarea>
        </label>
        <label class="filtration-form-hashtags">
            <div>hashtags</div>
            <input type="text"  class="filtration-form-hashtags-text" placeholder="ignore"/>
        </label>
        <input type="submit" value="Find" id="filtrationFormHashtags" />
    </form>
</aside>
</div>`;

export const tweetPage = `<div class="container-twit">
<aside class="welcome-twit">
    <div class="welcome-icon-twit"></div>
    <h1>Welcome!</h1>
    <h2 id="helloUser"></h2>
    <a href="#" id="twitLogOut">Log out</a>
    <div class="welcome-site-twit">MAIN PAGE</div>
</aside>
<main class="twit-main" id="twitMain">
    <div class="twit-main-navigation">
        <div class="twit-main-navigation-icon"></div>
        <a href="#">Main</a>
        <div class="twit-main-next">></div>
        <a href="#">Twit</a>
        <div class="twit-main-next">></div>
    </div>
    <div class="container-corrent-twit">

    </div>
    <div class="container-comments-twit">

    </div>
    <div class="container-comments-answer">
        <div class="comments-answer">
            <textarea id="commentsAnswerTwit" placeholder="Write your reply"></textarea>
            <div id="commentsAnswerСounter">0/280</div>
        </div>
        <button>Post</button>
    </div>
</main>
</div>`;
