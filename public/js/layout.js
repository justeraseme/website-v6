document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();


  // Add any custom JavaScript code here...
  // ^^ FINE I WILL ADD IT HERE PLEASE LOAD THIS CODE
  //NOTE - this is for the tooltip
const tooltip = document.getElementById("tooltip");
const images = document.querySelectorAll("[data-tooltip]");

images.forEach((image) => {
  image.addEventListener("mouseenter", () => {
    tooltip.textContent = image.getAttribute("data-tooltip");
    tooltip.classList.add("visible");
  });

  // print to console on page load
  window.addEventListener("load", function () {
    console.warn(
      'Load this script as async (<script src="file.js" async>) to load it from an external file. This restriction is not required if you are loading the script in-line!'
    );
  });

  image.addEventListener("mouseleave", () => {
    tooltip.classList.remove("visible");
  });

  //NOTE - you can remove this part if you do not want it to move with the cursor but then you'll have to do some styling to get it right
  image.addEventListener("mousemove", (e) => {
    tooltip.style.left = e.clientX + 15 + "px";
    tooltip.style.top = e.clientY + 15 + "px";
  });
});
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
  
      <!-- =============================================== -->
      <!-- HEADER -->
      <!-- =============================================== -->

      <header>

        <div class="header-content">
	        <div class="header-title">TANTO AURA</div>
	        
	        <!-- NAVIGATION -->
	        <nav>
	          <ul>
	            <li><a href="/">Home</a></li>
              <li><a href="./music.html" data-tooltip="I work on music! Download a few before you go!">Music</a></li>
	            <li><a href="./posts" data-tooltip="Like twitter, but less toxic.">Posts</a></li>
              <li><a href="./wiki/index.html" data-tooltip="Ever wanna learn?">Wikis</a></li>
              <li><a href="./archive" data-tooltip="Old versions... Very scary!">Archives</a></li>
              <li>
	                <strong>External Links</strong>
	                <ul>
	                  <li><a href="https://github.com/justeraseme/website-v6">Source code</a></li>
	                </ul>
	          </li>
	          </ul>
	        </nav>
        	
        </div>
      </header>

	  
        
      <!-- =============================================== -->
      <!-- LEFT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="left-sidebar">

      <div class="sidebar-section">
          <div class="sidebar-title">Changelog</div>
          <p>12/14/25</p>
          <blockquote>
            <p>* Overhauls to the content warning page</p>
            <p>* Pretty CSS Adjustments</p>
            <p>* New button!</p>
          </blockquote>
        </div>
	  
        <!--
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <ul>
            <li>List</li>
            <li>List</li>
            <li><a href="/">List</a></li>
            <li>List</li>
          </ul>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <marquee>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          </marquee>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <img class="full-width-image" src="https://picsum.photos/id/106/1000/400">
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <div class="site-button">
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
        	<textarea><a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a></textarea>
          </div>
        </div>
        -->
      </aside>
	
	  
      <!-- =============================================== -->
      <!-- RIGHT SIDEBAR -->
      <!-- =============================================== -->

      
      <aside class="right-sidebar">

      <div class="sidebar-section">
          <div class="sidebar-title">Take my button!</div>
          <div class="site-button">
          	<a href="https://tantoaura.neocities.org/" target="_blank"><img src="./img/button/button2.png" alt="TA - TANTO AURA!"></a>
        	<textarea><a href="https://tantoaura.neocities.org/" target="_blank"><img src="https://tantoaura.neocities.org/img/button/button2.png" alt="TA - TANTO AURA!"></a></textarea>
          </div>
        </div>

      <div class="sidebar-section">
          <div class="sidebar-title">Buttons</div>
          <marquee>
          <a href="https://neocities.org" target="_blank"><img src="./img/button/neocities.gif" alt="neocities. you're here!"></a>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
            <a href="https://nomnomnami.com/" target="_blank"><img src="./img/nami.gif" alt="nomnomnami"></a>
            <a href="https://peachleaf.neocities.org.com/" target="_blank"><img src="../img/button/peachleaf.gif"></a>
          </marquee>
        </div>

        <div class="sidebar-section">
          <div class="sidebar-title">Webrings</div>
          <p>:(</p>
        </div>
	  
        <!--
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
          </blockquote>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <ul>
            <li>List</li>
            <li>List</li>
            <li><a href="/">List</a></li>
            <li>List</li>
          </ul>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <marquee>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          </marquee>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <img class="full-width-image" src="https://picsum.photos/id/106/1000/400">
        </div>
        -->
      </aside>
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `


      <!-- =============================================== -->
      <!-- FOOTER -->
      <!-- =============================================== -->

      <footer>
            <div>TANTO AURA! website (c) 2025 Tanto Aura, licensed under BSD-3-Clause. Layout by <a href="https://petrapixel.neocities.org/coding/layout-generator.html">petrapixel</a>.
      </footer>`;
}

/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

	/* Homepage */
    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      /* Other pages */
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        /* Subnavigation: */
		
        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
          	el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}
