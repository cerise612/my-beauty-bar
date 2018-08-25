// modal
setTimeout(function(){
    $.colorbox({
      html:"<h4>Let's stay connected</h4><br>"+
      "<p>subscribe now for a </p><br>"+
      "<p><b>free gift</b></p><br>"+
      "<p>+</p><br>"+
      "<p>specials offers + style tips + updates on the latest hair trends.</p><br>"+
      "<form>"+
          "<div>"+
              "<label for="+"'name'"+">Name:</label>"+
              "<input type="+"'text'"+" id="+"'name'"+" name="+"'user_name'"+">"+
          "</div>"+
          "<div>"+
              "<label for="+"'mail'"+">E-mail:</label>"+
              "<input type="+"'email'"+" id="+"'mail'"+" name="+"'user_mail'"+">"+
          "</div>"+
          "<div class="+"'button'"+" id="+"'myBtn'"+">"+
              "<button type="+"'submit'"+">Subscribe</button>"+
          "</div>"+
      "</form>",
      className: "cta",
      width: 350,
      height: 150
    });
  }, 10000);
  $.colorbox({
    onComplete: function(){ $("#myInput").focus(); }
  });