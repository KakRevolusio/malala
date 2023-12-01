const LandingPg = {
  async render() {
    return `
    <div class="landing">
<nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
<div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link fw-bold text-white mx-5" href="#">About Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fw-bold text-white mx-3" href="#">Contact us</a>
            </li>
        </ul>
    </div>
</div>
</nav>
<div class="logo">
<img src="images/logo.png" alt="Logo" height="65">
</div>
<div class="container1  text-center text-white">
<h1 class="judul">Welcome </h1>
<p class="isi">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Nam vitae elit metus. </p>
<div class="mt-5">
    <a href="/#/singup" class="btn btn-outline-light btn-lg mx-5">Sign Up</a>
    <a href="/#/singin" class="btn btn-outline-light btn-lg mx-5">Sign In</a>
</div>
</div> 

<footer class="footer text-center py-5 bg-transparent fixed-bottom">
<div class="container">
    <p class="text-white">© 2023 Your Website. All rights reserved.</p>
</div>
</footer>
</div>
`;
  },
};

export default LandingPg;
