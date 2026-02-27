*{margin:0;padding:0;box-sizing:border-box;}

body{
font-family:'Inter',sans-serif;
background:#000;
color:#fff;
overflow-x:hidden;
scroll-behavior:smooth;
}

/* NAV */

.nav{
position:fixed;
top:0;
width:100%;
background:rgba(0,0,0,.5);
backdrop-filter:blur(10px);
z-index:1000;
}

.nav-inner{
display:flex;
justify-content:space-between;
padding:16px 28px;
}

.logo{
font-family:'Playfair Display',serif;
color:#d4b06a;
text-decoration:none;
font-size:24px;
}

/* HERO (FROZEN) */

.hero{
height:100vh;
background:url("YOUR-ORIGINAL-HERO-IMAGE-URL") center/cover fixed no-repeat;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
}

.hero-overlay{
position:absolute;
width:100%;
height:100%;
background:rgba(0,0,0,.45);
}

.hero-title{
font-family:'Playfair Display',serif;
font-size:64px;
color:#d4b06a;
}

/* SECTIONS */

.section{
min-height:100vh;
display:flex;
align-items:center;
justify-content:center;
padding:120px 20px;
}

/* CARD */

.panel-card{
background:rgba(0,0,0,.65);
backdrop-filter:blur(8px);
padding:40px;
border:1px solid rgba(212,176,106,.35);
max-width:600px;
width:90%;
transition:transform .35s ease;
}

.panel-card:hover{
transform:translateY(-8px);
}

/* ARROWS */

.scroll-up,.scroll-down{
position:fixed;
left:50%;
transform:translateX(-50%);
width:50px;
height:50px;
border-radius:50%;
background:rgba(0,0,0,.75);
color:#d4b06a;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
z-index:2000;
}

.scroll-up{top:80px;}
.scroll-down{bottom:30px;}

/* WHATSAPP */

.whatsapp{
position:fixed;
bottom:25px;
right:25px;
background:#d4b06a;
color:#000;
padding:12px 18px;
text-decoration:none;
}
