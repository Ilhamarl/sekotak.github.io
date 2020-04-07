
$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {
  
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  
    });
  });
  
  // SCROLL to ID
  $("a[href^='#']").click(function (e) {
    e.preventDefault();
  
    var position = $($(this).attr("href")).offset().top;
  
    $("body, html").animate({
      scrollTop: position
    } /* speed */);
  });



function tampilkanSemuaMenu() {
    $.getJSON('data-menu.json', function (data) {
        let menu = data.menu;

        $.each(menu, function (i, data) {
            $('#daftar-menu').append(`
    
    <div class="column">
        <div class="card-shadow">
          
          <div class="">
            <figure class="image is-3by1">
              <img src="` + data.gambar +`" alt="Ayam" style="object-fit: cover; border-radius: 4px 4px 0 0;">
            </figure>
          </div>
          
          <div class="card-content">

          <div class="media">
            <div class="media-left">
              <div class="media-content">
                <p class="title is-size-5 is-capitalized">
                ` + data.nama +`
                </p>
                </div>
              </div>
            </div>
            
            <div class="content">
            ` + data.deskripsi +`
            </div>
          </div>
            
            <footer class="card-footer">
             <p class="card-footer-item">
            Rp `+ data.harga +`
             </p>
              <p class="card-footer-item">
                <a href="https://api.whatsapp.com/send?phone=6285291338935&text=Hallo%2C%0ASaya%20mau%20pesan%20Catering%20%2F%20Snack%20nya%20!&source=&data=" 
                target="_newblank" class="button is-primary is-fullwidth">Order</a>
              </p>
            </footer>

          </div>
        </div>

            `);
        });
    });
}

tampilkanSemuaMenu();