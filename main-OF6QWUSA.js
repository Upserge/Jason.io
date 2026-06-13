import{B as d,D as s,E as C,F as x,J as P,K as p,L as D,P as O,S as A,T as E,V as H,W as L,X as K,Y as j,Z as V,c as h,d as v,e as b,f,g as k,k as l,l as _,m as y,n as S,o as w,u as o,v as r,w as M,x as T,y as n,z as g}from"./chunk-GUC5CIVH.js";var F={production:!1,firebase:{apiKey:"AIzaSyDwr9dcbNUjQDBTde956775JKRg6TxWrnk",authDomain:"jason-io.firebaseapp.com",projectId:"jason-io",storageBucket:"jason-io.firebasestorage.app",messagingSenderId:"836118658636",appId:"1:836118658636:web:11dad0c73156ae8e177ee9",measurementId:"G-P1TBKGV5CW"}};var N=[{path:"",loadComponent:()=>import("./chunk-ORNN5RQP.js").then(t=>t.HomePage)},{path:"work/:slug",loadComponent:()=>import("./chunk-GPOUJWKC.js").then(t=>t.CaseStudyPage)},{path:"**",redirectTo:"",pathMatch:"full"}];var R={providers:[k(),P(),A(N,E({scrollPositionRestoration:"top"})),H(()=>L(F.firebase)),K(()=>j())]};var m=class{widget=null;show(){if(this.widget){this.widget.classList.add("visible");return}this.widget=document.createElement("div"),this.widget.className="keyboard-hints-widget",this.widget.innerHTML=`
      <div class="widget-header">
        <h3>Keyboard Shortcuts</h3>
        <button class="widget-close" aria-label="Close">\u2715</button>
      </div>
      <div class="widget-body">
        <div class="shortcut-group">
          <div class="shortcut-item">
            <kbd>J</kbd>
            <span>Summary</span>
          </div>
          <div class="shortcut-item">
            <kbd>K</kbd>
            <span>Technologies</span>
          </div>
          <div class="shortcut-item">
            <kbd>L</kbd>
            <span>Experience</span>
          </div>
          <div class="shortcut-item">
            <kbd>;</kbd>
            <span>Projects</span>
          </div>
          <div class="shortcut-item">
            <kbd>D</kbd>
            <span>Dark Mode</span>
          </div>
          <div class="shortcut-item">
            <kbd>S</kbd>
            <span>Leaderboard</span>
          </div>
          <div class="shortcut-item">
            <kbd>Esc</kbd>
            <span>Close</span>
          </div>
        </div>
      </div>
    `,document.body.appendChild(this.widget),this.widget.classList.add("visible"),this.widget.querySelector(".widget-close")?.addEventListener("click",()=>this.close())}close(){this.widget&&(this.widget.classList.remove("visible"),setTimeout(()=>{this.widget?.remove(),this.widget=null},300))}destroy(){this.close()}};function I(t,a){if(t&1){let i=T();o(0,"span",10),n("click",function(){v(i);let c=g();return b(c.showLeaderboard())}),s(1),r()}if(t&2){let i=g();l(),x("\u{1F3C6} ",i.score())}}var u=class t{resumeService=h(V);destroyRef=h(f);keyboardHintsModal=null;isDarkMode=p(()=>this.resumeService.isDarkMode());isNavHidden=p(()=>this.resumeService.isNavHidden());highlightedSection=this.resumeService.highlightedSection;score=p(()=>this.resumeService.score());constructor(){_(()=>{this.resumeService.initScrollListener(),this.resumeService.initCursorSpotlight(),this.resumeService.initMagneticButtons(),this.resumeService.initParticleField(),this.resumeService.initLeaderboard(),this.resumeService.initFocusMode(),this.initKeyboardShortcuts()}),document.startViewTransition&&this.enableViewTransitions(),this.destroyRef.onDestroy(()=>{this.resumeService.dispose(),this.keyboardHintsModal?.destroy()})}initKeyboardShortcuts(){this.resumeService.initKeyboardShortcuts({d:()=>this.toggleDarkMode(),j:()=>this.resumeService.scrollTo("summary"),k:()=>this.resumeService.scrollTo("technologies"),l:()=>this.resumeService.scrollTo("experience"),";":()=>this.resumeService.scrollTo("projects"),s:()=>this.showLeaderboard(),"?":()=>this.showKeyboardHints(),Escape:()=>{this.closeKeyboardHints(),this.closeLeaderboard()}})}enableViewTransitions(){let a=this.toggleDarkMode.bind(this);this.toggleDarkMode=()=>{let i=document;i.startViewTransition?i.startViewTransition(()=>{a()}):a()}}showKeyboardHints(){this.keyboardHintsModal||(this.keyboardHintsModal=new m),this.keyboardHintsModal.show()}closeKeyboardHints(){this.keyboardHintsModal?.close()}scrollTo(a){this.resumeService.scrollTo(a)}scrollToTop(){this.resumeService.scrollToTop()}toggleDarkMode(){this.resumeService.toggleDarkMode()}showLeaderboard(){this.resumeService.showLeaderboard()}closeLeaderboard(){this.resumeService.closeLeaderboard()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=y({type:t,selectors:[["app-root"]],decls:21,vars:12,consts:[[1,"top-nav"],[1,"container","nav-inner"],[1,"nav-links"],[3,"click"],["title","View leaderboard",1,"score-counter"],[1,"nav-actions"],["title","Keyboard shortcuts (?)","aria-label","Keyboard shortcuts",1,"link-btn",3,"click"],["title","Toggle dark mode",1,"link-btn",3,"click"],[1,"link-btn",3,"click"],[1,"app-page-host"],["title","View leaderboard",1,"score-counter",3,"click"]],template:function(i,e){i&1&&(o(0,"nav",0)(1,"div",1)(2,"div",2)(3,"a",3),n("click",function(){return e.scrollTo("summary")}),s(4,"Summary"),r(),o(5,"a",3),n("click",function(){return e.scrollTo("projects")}),s(6,"Projects"),r(),o(7,"a",3),n("click",function(){return e.scrollTo("experience")}),s(8,"Experience"),r(),o(9,"a",3),n("click",function(){return e.scrollTo("technologies")}),s(10,"Technologies"),r()(),S(11,I,2,1,"span",4),o(12,"div",5)(13,"button",6),n("click",function(){return e.showKeyboardHints()}),s(14,"\u2328\uFE0F"),r(),o(15,"button",7),n("click",function(){return e.toggleDarkMode()}),s(16),r(),o(17,"button",8),n("click",function(){return e.scrollToTop()}),s(18,"Top"),r()()()(),o(19,"main",9),M(20,"router-outlet"),r()),i&2&&(d("hidden",e.isNavHidden()),l(3),d("active",e.highlightedSection()==="summary"),l(2),d("active",e.highlightedSection()==="projects"),l(2),d("active",e.highlightedSection()==="experience"),l(2),d("active",e.highlightedSection()==="technologies"),l(2),w(e.score()>0?11:-1),l(5),C(e.isDarkMode()?"\u2600\uFE0F":"\u{1F319}"))},dependencies:[O],styles:[".top-nav[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;background:#0f283ccc;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);z-index:40;border-bottom:1px solid rgba(255,255,255,.06);transform:translateY(0);transition:transform .3s ease}.top-nav.hidden[_ngcontent-%COMP%]{transform:translateY(-100%)}.top-nav[_ngcontent-%COMP%]   .nav-inner[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:10px 0}.top-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--muted);margin-right:14px;cursor:pointer;font-weight:600;transition:color .2s ease,border-bottom .2s ease;padding-bottom:4px;border-bottom:2px solid transparent}.top-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--text)}.top-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:var(--accent);border-bottom-color:var(--accent)}.nav-actions[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.score-counter[_ngcontent-%COMP%]{color:gold;font-weight:700;font-size:13px;letter-spacing:.5px;padding:4px 12px;border:1px solid rgba(255,215,0,.25);border-radius:8px;background:#ffd70014;animation:_ngcontent-%COMP%_scorePop .4s cubic-bezier(.34,1.56,.64,1);cursor:pointer;transition:all .2s ease}.score-counter[_ngcontent-%COMP%]:hover{background:#ffd70024;border-color:#ffd70066;transform:scale(1.05)}@keyframes _ngcontent-%COMP%_scorePop{0%{transform:scale(.8);opacity:0}to{transform:scale(1);opacity:1}}.app-page-host[_ngcontent-%COMP%]{display:block;min-height:100vh}"]})};D(u,R).catch(t=>console.error(t));
