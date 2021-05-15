import './index.css';
import $ from 'jquery';
import {Link} from 'react-router-dom';

$(function () {
  const liWidth = $('#notFound li').css('width');
  $('#notFound li').css('height', liWidth);
  $('#notFound li').css('lineHeight', liWidth);
  const totalHeight = $('#wordsearch').css('width');
  $('#wordsearch').css('height', totalHeight);
});
const causeRepaintsOn = $('h1, h2, h3, p');
$(window).resize(function () {
  causeRepaintsOn.css('z-index', 1);
});
$(window).on('resize', function () {
  const liWidth = $('#notFound .one').css('width');
  $('#notFound li').css('height', liWidth);
  $('#notFound li').css('lineHeight', liWidth);
  const totalHeight = $('#wordsearch').css('width');
  $('#wordsearch').css('height', totalHeight);
});

$(function () {
  /* 4 */
  $(this)
    .delay(1500)
    .queue(function () {
      $('.one').addClass('selected');
      $(this).dequeue();
    })
    /* 0 */
    .delay(500)
    .queue(function () {
      $('.two').addClass('selected');
      $(this).dequeue();
    })
    /* 4 */
    .delay(500)
    .queue(function () {
      $('.three').addClass('selected');
      $(this).dequeue();
    })
    /* P */
    .delay(500)
    .queue(function () {
      $('.four').addClass('selected');
      $(this).dequeue();
    })
    /* A */
    .delay(500)
    .queue(function () {
      $('.five').addClass('selected');
      $(this).dequeue();
    })
    /* G */
    .delay(500)
    .queue(function () {
      $('.six').addClass('selected');
      $(this).dequeue();
    })
    /* E */
    .delay(500)
    .queue(function () {
      $('.seven').addClass('selected');
      $(this).dequeue();
    })
    /* N */
    .delay(500)
    .queue(function () {
      $('.eight').addClass('selected');
      $(this).dequeue();
    })
    /* O */
    .delay(500)
    .queue(function () {
      $('.nine').addClass('selected');
      $(this).dequeue();
    })
    /* T */
    .delay(500)
    .queue(function () {
      $('.ten').addClass('selected');
      $(this).dequeue();
    })
    /* F */
    .delay(500)
    .queue(function () {
      $('.eleven').addClass('selected');
      $(this).dequeue();
    })
    /* O */
    .delay(500)
    .queue(function () {
      $('.twelve').addClass('selected');
      $(this).dequeue();
    })
    /* U */
    .delay(500)
    .queue(function () {
      $('.thirteen').addClass('selected');
      $(this).dequeue();
    })
    /* N */
    .delay(500)
    .queue(function () {
      $('.fourteen').addClass('selected');
      $(this).dequeue();
    })
    /* D */
    .delay(500)
    .queue(function () {
      $('.fifteen').addClass('selected');
      $(this).dequeue();
    });
});
const NotFound = (props) => {
  const language = props.language;
  return (
    <div id="wrap">
      <div id="wordsearch">
        <ul>
          <li>k</li>
          <li>v</li>
          <li>n</li>
          <li>z</li>
          <li>i</li>
          <li>x</li>
          <li>m</li>
          <li>e</li>
          <li>t</li>
          <li>a</li>
          <li>x</li>
          <li>l</li>
          <li class="one">4</li>
          <li class="two">0</li>
          <li class="three">4</li>
          <li>y</li>
          <li>y</li>
          <li>w</li>
          <li>v</li>
          <li>b</li>
          <li>o</li>
          <li>q</li>
          <li>d</li>
          <li>y</li>
          <li>p</li>
          <li>a</li>
          <li class="four">p</li>
          <li class="five">a</li>
          <li class="six">g</li>
          <li class="seven">e</li>
          <li>v</li>
          <li>j</li>
          <li>a</li>
          <li class="eight">n</li>
          <li class="nine">o</li>
          <li class="ten">t</li>
          <li>s</li>
          <li>c</li>
          <li>e</li>
          <li>w</li>
          <li>v</li>
          <li>x</li>
          <li>e</li>
          <li>p</li>
          <li>c</li>
          <li>f</li>
          <li>h</li>
          <li>q</li>
          <li>e</li>
          <li class="eleven">f</li>
          <li class="twelve">o</li>
          <li class="thirteen">u</li>
          <li class="fourteen">n</li>
          <li class="fifteen">d</li>
          <li>s</li>
          <li>w</li>
          <li>q</li>
          <li>v</li>
          <li>o</li>
          <li>s</li>
          <li>m</li>
          <li>v</li>
          <li>f</li>
          <li>u</li>
        </ul>
      </div>
      <div id="main-content">
        <h1>{language.not_found.header}</h1>
        <p>{language.not_found.paragraph_reason}</p>
        <p>{language.not_found.paragraph_todo}</p>
        <div id="search">
          <form>
            <input
              type="text"
              placeholder={language.not_found.search_placeholder}
            />
          </form>
        </div>
        <div id="navigation">
          <Link className="navigation" to="/">
            {language.header.home}
          </Link>
          <Link className="navigation" to="/aboutme">
            {language.header.about}
          </Link>
          <Link className="navigation" to="/contact">
            {language.footer.pages.contact}
          </Link>
          <Link className="navigation" to="/myprofile">
            {language.header.myprofile}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
