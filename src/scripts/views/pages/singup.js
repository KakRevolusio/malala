const SingUp = {
  async render() {
    return `
    
<div class="signup-container">
<div class="left-section">
  <!-- Logo or any content for the left section -->
  <img src="/images/bg login.png" alt="Logo" style="max-width: 100%;">
</div>
<div class="right-section">
  <div class="signup-form">
      <img src="/images/navbar.png" class="mx-auto d-block" style="height: 50px;" alt="Navbar Image">
    <h2>Sign Up</h2>
    <p>Already Sign Up? <a href="">sing in</a></p>
    <!-- Your sign-up form content goes here -->
    <div class="line-container">
      <div class="line"></div>
      <div class="text-container">
        <div class="text">OR</div>
      </div>
    </div>
    <form>
      <div class="mb-3">
        <div class="row">
          <div class="col">
            <label for="firstName" class="form-label">First Name</label>
            <input type="text" class="form-control" id="firstName" name="firstName" required>
          </div>
          <div class="col">
            <label for="lastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="lastName" name="lastName" required>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <input type="text" class="form-control" id="address" name="address" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" name="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <div class="input-group">
          <input type="password" class="form-control" id="password" name="password" required>
          <button class="btn btn-outline-secondary" type="button" id="togglePassword">Show</button>
        </div>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="agreeCheck" required>
        <label class="form-check-label" for="agreeCheck">I agree to the terms and conditions</label>
      </div>
      <button type="submit" class="btn btn-primary">Sign Up</button>
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

export default SingUp;
