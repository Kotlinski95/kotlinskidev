import './index.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { useEffect } from 'react'

const NotFound = (props) => {
  const language = props.language;
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
  useEffect(() => {
    $(function () {
      /* 4 */
      $(this)
        .delay(1500)
        .queue(function () {
          $('#notFound .one').addClass('selected');
          $(this).dequeue();
        })
        /* 0 */
        .delay(500)
        .queue(function () {
          $('#notFound .two').addClass('selected');
          $(this).dequeue();
        })
        /* 4 */
        .delay(500)
        .queue(function () {
          $('#notFound .three').addClass('selected');
          $(this).dequeue();
        })
        /* P */
        .delay(500)
        .queue(function () {
          $('#notFound .four').addClass('selected');
          $(this).dequeue();
        })
        /* A */
        .delay(500)
        .queue(function () {
          $('#notFound .five').addClass('selected');
          $(this).dequeue();
        })
        /* G */
        .delay(500)
        .queue(function () {
          $('#notFound .six').addClass('selected');
          $(this).dequeue();
        })
        /* E */
        .delay(500)
        .queue(function () {
          $('#notFound .seven').addClass('selected');
          $(this).dequeue();
        })
        /* N */
        .delay(500)
        .queue(function () {
          $('#notFound .eight').addClass('selected');
          $(this).dequeue();
        })
        /* O */
        .delay(500)
        .queue(function () {
          $('#notFound .nine').addClass('selected');
          $(this).dequeue();
        })
        /* T */
        .delay(500)
        .queue(function () {
          $('#notFound .ten').addClass('selected');
          $(this).dequeue();
        })
        /* F */
        .delay(500)
        .queue(function () {
          $('#notFound .eleven').addClass('selected');
          $(this).dequeue();
        })
        /* O */
        .delay(500)
        .queue(function () {
          $('#notFound .twelve').addClass('selected');
          $(this).dequeue();
        })
        /* U */
        .delay(500)
        .queue(function () {
          $('#notFound .thirteen').addClass('selected');
          $(this).dequeue();
        })
        /* N */
        .delay(500)
        .queue(function () {
          $('#notFound .fourteen').addClass('selected');
          $(this).dequeue();
        })
        /* D */
        .delay(500)
        .queue(function () {
          $('#notFound .fifteen').addClass('selected');
          $(this).dequeue();
        });
    });
    return function cleanup() {
      $(this).delay(8500)
        .clearQueue()
        .stop();
    };
  });



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
          <li className="one cursor_hover">4</li>
          <li className="two cursor_hover">0</li>
          <li className="three cursor_hover">4</li>
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
          <li className="four cursor_hover">p</li>
          <li className="five cursor_hover">a</li>
          <li className="six cursor_hover">g</li>
          <li className="seven cursor_hover">e</li>
          <li>v</li>
          <li>j</li>
          <li>a</li>
          <li className="eight cursor_hover">n</li>
          <li className="nine cursor_hover">o</li>
          <li className="ten cursor_hover">t</li>
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
          <li className="eleven cursor_hover">f</li>
          <li className="twelve cursor_hover">o</li>
          <li className="thirteen cursor_hover">u</li>
          <li className="fourteen cursor_hover">n</li>
          <li className="fifteen cursor_hover">d</li>
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
        <h3>{language.not_found.paragraph_reason}</h3>
        <h3>{language.not_found.paragraph_todo}</h3>
        <div id="search">
          <form>
            <input
              className="cursor_hover"
              type="text"
              placeholder={language.not_found.search_placeholder}
            />
          </form>
        </div>
        <div id="navigation">
          <Link className="navigation cursor_hover" to="/">
            {language.header.home}
          </Link>
          <Link className="navigation cursor_hover" to="/aboutme">
            {language.header.about}
          </Link>
          <Link className="navigation cursor_hover" to="/contact">
            {language.footer.pages.contact}
          </Link>
          <Link className="navigation cursor_hover" to="/myprofile">
            {language.header.myprofile}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
