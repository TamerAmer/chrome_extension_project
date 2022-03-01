import React, { useState, useEffect } from 'react';
import "./HoverFunction.css";
// import Request from "../helpers/request";
import $ from 'jquery';

const HoverFunction = () => {

    const [hoverHref, setHoverHref] = useState("");
    const [hoverLink, setHoverLink] = useState([]);

    const trimHref = hoverHref.replace(/^https?\:\/\//i, "");

    const getUrl = () => {
      console.log(`http://localhost:8080/webpages?url=${trimHref}`)
      fetch(`http://localhost:8080/webpages?url=${trimHref}`)
      .then(res => res.json())
      .then(link => console.log(link[0]))
    }

    useEffect(() => {
      getUrl()
    }, [hoverHref])

    $(document).ready(function(){
        // $("a").hover(function(){
          // $(this).css("color","pink");
          // $(this).append($(this).attr("href"))
          $(function() {
            var moveLeft = 20;
            var moveDown = 10;
         
            $('a').hover(function(e) {
                // $("div#pop-up").append("<span id='txt_name'><br>" + $(this).attr("href") + "</span>")
                $('div#pop-up').show();
                setHoverHref($(this).attr("href"))
                console.log($(this).attr("href"))

            
              //.css('top', e.pageY + moveDown)
              //.css('left', e.pageX + moveLeft)
              //.appendTo('body');
            }, function() {
                // $("#txt_name").remove()
                $('div#pop-up').hide();
                // $('#txt_name').prepend()
            });
            $('a').mousemove(function(e) {
              $("div#pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
            });
          });
    })
    
    return(
        <>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js"></script>

       
            <div id="pop-up">
                <p>
                This div only appears when a link is hovered over. Otherwise it is hidden from view.
                <br/>
                Current Href:{hoverHref}
            
                </p>
            </div>
        
      </>
    )
}

export default HoverFunction