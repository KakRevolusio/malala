const Serch = {
  async render() {
    return `
      <div class="wrapper">
      <!-- Sidebar -->
      <div class="sidebar">
          <!-- Isi Sidebar disini -->
          <div class="sidebar-logo text-center">
              <img src="../aset/navbar.png" style="height: 50px;" alt="Logo">
            </div>
            <div class="profile-icon d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
              </svg>
              <p class="ms-2 mb-0">Martinus Juan</p>
          </div>
            <div class="sidebar-text">
              <h5>Dashboard and Profile </h5>
              <div class="profile-icon d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                </svg>
              <p class="ms-2 mb-0"> Dhasboard</p>
          </div>
          <div class="profile-icon d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                <p class="ms-2 mb-0">Profile</p>
              </div>
              <p>Provinsi</p>
              <div class="form-check">
                  <input class="form-check-input province-checkbox" type="checkbox" id="provinsi1">
                  <label class="form-check-label" for="provinsi1">Nama Provinsi 1</label>
              </div>
      
              <!-- Tambahkan checkbox untuk provinsi lainnya sesuai kebutuhan -->
              <div class="form-check">
                  <input class="form-check-input province-checkbox" type="checkbox" id="provinsi2">
                  <label class="form-check-label" for="provinsi2">Nama Provinsi 2</label>
              </div>
      
              <div class="form-check">
                  <input class="form-check-input province-checkbox" type="checkbox" id="provinsi3">
                  <label class="form-check-label" for="provinsi3">Nama Provinsi 3</label>
              </div>
              <div class="form-check">
                  <input class="form-check-input province-checkbox" type="checkbox" id="provinsi1">
                  <label class="form-check-label" for="provinsi1">Nama Provinsi 1</label>
              </div>
      
              <!-- Tambahkan checkbox untuk provinsi lainnya sesuai kebutuhan -->
              <div class="form-check">
                  <input class="form-check-input province-checkbox" type="checkbox" id="provinsi2">
                  <label class="form-check-label" for="provinsi2">Nama Provinsi 2</label>
              </div>
      
              <div class="form-check">
                  <input class="form-check-input province-checkbox" type="checkbox" id="provinsi3">
                  <label class="form-check-label" for="provinsi3">Nama Provinsi 3</label>
              </div>
          </div>
          <hr style="background-color: #476776; height: 3px;">

          <div class="d-flex justify-content-center shadow p-3 mb-5 bg-white mx-auto" style="border-radius: 100px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);">
              <form class="d-flex w-100">
                  <input class="form-control border-0 me-2 rounded-start" type="search" placeholder="Find something....." aria-label="Search">
                  <svg xmlns="http://www.w3.org/2000/svg" height="35" fill="currentColor" class="bi bi-search text-secondary" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
              </form>
          </div>
          
      </div>

      <!-- Content -->
      <div class="content">
          <div class="welcome-container">
              <img src="../aset/bglanding.jpg" alt="Welcome Image" class="img-fluid">
              <div class="welcome-text">
                  <h1 class="mb-5">Start Your Journey  </h1>
                  <p>Your Journey, Our Expertise!</p>
              <div class="d-flex justify-content-center mt-5 shadow p-3 mb-5 bg-white  mx-auto" style=" border-radius: 100px;">
                  <form class="d-flex w-100">
                    <input class="form-control border-0 me-2 rounded-start" type="search" placeholder="Find something....." aria-label="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="35" fill="currentColor" class="bi bi-search text-secondary" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    
                  </form>
                </div>
          </div>
      </div>
          <h1 class="text-center mt-2"> Most Popular</h1>
          <div class="card ms-2 border-0">
              <div class="row">
                  <!-- Card 1 -->
                  <div class="col-md-4">
                      <div class="card">
                         <img src="../aset/data1.jpg" class="card-img-top" alt="Card Image 1">
                          <div class="card-body">
                              <h5 class="card-title">Candi Prambanan</h5>
                              <div class="profile-icon d-flex align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                    </svg>
                                  <p class="ms-2 mb-0"> Yogyakarta</p>
                              </div>
                              <div class="profile-icon d-flex align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                                      <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                                      <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                                      <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
                                    </svg>
                                  <p class="ms-2 mb-0"> IDR 4.000 - IDR 12.000</p>
                              </div>
                              <div class="profile-icon d-flex align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                    </svg>
                                  <p class="ms-2 mb-0"> 08:00 AM - 16:00 PM</p>
                              </div>
                              <div class="profile-icon d-flex align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                                      <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z"/>
                                      <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1"/>
                                    </svg>
                                  <p class="ms-2 mb-0">Every Day</p>
                              </div>
                              <a href="#" class="btn custom-btn position-absolute bottom-0 end-0 mb-3 me-3">Detail</a>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  </div>
  `;
  },
};

export default Serch;
