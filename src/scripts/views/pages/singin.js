const SingIn = {
  async render() {
    return `
    
<div class="signup-container">
<div class="left-section">
  <!-- Logo or any content for the left section -->
  <img src="/images/bg login.png" alt="Logo" style="max-width: 100%;">
</div>
<div class="right-section">
  <div class="col-md-7">
      <div class="text-center">
        <!-- Logo perusahaan -->
        <img src="/images/navbar.png" class="img-fluid mb-3" alt="Logo">
        <h4>Welcome</h4>
      </div>
      <form>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" id="username" name="username" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <div class="input-group">
            <input type="password" class="form-control" id="password" name="password" required>
            <button class="btn btn-outline-secondary" type="button" id="togglePassword">Show</button>
          </div>
        </div>
        <div class="mb-3">
          <div class="form-text">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-primary">Sign In</button>
        </div>
      </form>
    </div>
  
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script>
  document.getElementById('togglePassword').addEventListener('click', function () {
    var passwordInput = document.getElementById('password');
    var type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Show' : 'Hide';
  });
</script>
  `;
  },
};

export default SingIn;
