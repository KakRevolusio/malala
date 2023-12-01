const Dhasboard = {
  async render() {
    return `
    
      <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div class="container-fluid">
          <img src="../aset/navbar.png" alt="" style="height: 70px;">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class=" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <a class="nav-link active" aria-current="page" href="/#/serch">Explore</a>
            <a class="nav-link" href="#">Whislist </a>
            <a class="nav-link" href="/#/"> About Us</a>
            <a class="nav-link disabled " aria-disabled="true"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg></a>
          </div>
        </div>
      </div>
    </nav>

    
<div class="mt-2">
<div class="position-relative">
  <img src="/images/data1.jpg" class="img-fluid" alt="Deskripsi Gambar">
  <div class="position-absolute top-0 start-0 text-white mt-5 p-3"><h1>"Explore the Beauty of Indonesia, One Tourist <BR></BR> Destination at a Click."</h1></div>
</div>
</div>
    
<!-- Kotak Pencarian -->
<div class="d-flex justify-content-center mt-3 shadow p-3 mb-5 bg-white  mx-auto" style="width: 50%; border-radius: 100px;">
<form class="d-flex w-100">
  <input class="form-control border-0 me-2 rounded-start" type="search" placeholder="Find something....." aria-label="Search">
  <svg xmlns="http://www.w3.org/2000/svg" height="35" fill="currentColor" class="bi bi-search text-secondary" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
  
</form>
</div>


<div class="container mt-5">
<div class="row">
  <!-- Card 1 -->
  <div class="col-md-4 mb-4">
    <div class="card position-relative">
        <img src="/images/data1.jpg" class="card-img-top" alt="Gambar 1">
        <button class="btn btn-primary position-absolute top-0 end-0 m-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
          </svg>
      </button>
        <div class="card-body">
            <h5 class="card-title">Judul 1</h5>
            <p class="card-text">Deskripsi </p>
            <!-- Rating Bintang 1-5 -->
            <div class="rating">
                <span class="star" data-rating="1">&#9733;</span>
                <span class="star" data-rating="2">&#9733;</span>
                <span class="star" data-rating="3">&#9733;</span>
                <span class="star" data-rating="4">&#9733;</span>
                <span class="star" data-rating="5">&#9733;</span>
            </div>
        </div>
    </div>
</div>

</div>
</div>

<div class=" mt-5 " style="background-color: #EAF2F6;">
<div class="row">
  <div class="col-12">
    <h1 class="text-center">Judul Halaman</h1>
  </div>
</div>

  <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
          <!-- Set 1 -->
          <div class="carousel-item active">
              <div class="row">
                  <div class="col-md-4">
                      <img src="../aset/data1.jpg" class="d-block w-100" alt="Gambar 1">
                      <div class="carousel-caption d-none d-md-block">
                          <h5>Judul Gambar 1</h5>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <img src="../aset/data1.jpg" class="d-block w-100" alt="Gambar 2">
                      <div class="carousel-caption d-none d-md-block">
                          <h5>Judul Gambar 2</h5>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <img src="../aset/data1.jpg" class="d-block w-100" alt="Gambar 3">
                      <div class="carousel-caption d-none d-md-block">
                          <h5>Judul Gambar 3</h5>
                      </div>
                  </div>
              </div>
          </div>
          
          <!-- Set 2 -->
          <div class="carousel-item">
              <div class="row">
                  <div class="col-md-4">
                      <img src="../aset/data1.jpg" class="d-block w-100" alt="Gambar 4">
                      <div class="carousel-caption d-none d-md-block">
                          <h5>Judul Gambar 4</h5>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <img src="../aset/data1.jpg" class="d-block w-100" alt="Gambar 5">
                      <div class="carousel-caption d-none d-md-block">
                          <h5>Judul Gambar 5</h5>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <img src="../aset/data1.jpg" class="d-block w-100" alt="Gambar 6">
                      <div class="carousel-caption d-none d-md-block">
                          <h5>Judul Gambar 6</h5>
                      </div>
                  </div>
              </div>
          </div>
          
          <!-- Tambahkan set card lainnya sesuai kebutuhan -->
      </div>
      <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
      </a>
  </div>
</div>


<footer class="footer mt-5">
  <div class="container">
      <div class="row">
          <div class="col-md-3">
              <p>Get connected with us on social networks:</p>
          </div>
          <div class="col-md-6 text-center">
              <img src="../aset/logo.png" alt="Company Logo" class="footer-logo ">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet elementum ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi libero elit, iaculis ut est volutpat, vehicula blandit justo.</p>
          </div>
          <div class="col-md-3 text-end">
              <div class="social-icons">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                    <span style="margin-right: 15px;"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
                    </svg>
                    <span style="margin-right: 15px;"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                  <div class="col-md-12 text-center mt-3">
                     <h5>Contact</h5>
                     <div class=" d-flex align-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                        </svg>
                      <p class="ms-2 mb-0"> Paris, Yogyakarta</p>
                  </div>

                  <div class=" d-flex align-items-center mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                      <p class="ms-2 mb-0"> malalaapp@gmail.com</p>
                  </div>

                  <div class=" d-flex align-items-center mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                      <p class="ms-2 mb-0"> +6271 8798 8788</p>
                  </div>
                  </div>
              </div>
          </div>
      </div>
  
      <div class="row">
          <div class="col-md-12 company-name">
              <p>2023 Copyright Malala company</p>
          </div>
      </div>
  </div>
</footer>
  `;
  },
};

export default Dhasboard;
