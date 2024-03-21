
$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting via the browser.


        let isValid = true; // Flag for validation state.
        const password = $('#password').val().trim();
        const confirmPassword = $('#confirmPassword').val().trim();


        // Define array of inputs to validate.
        const inputs = ['#name', '#email', '#password', '#confirmPassword'];


        // Loop through inputs for validation.
        inputs.forEach(function(input) {
            const $input = $(input);
            if ($input.val().trim() === "") {
                $input.css('borderColor', 'red'); // Change border to red if empty.
                alert(`Isian kolom ${$input.attr('name')} tidak boleh kosong`); // Alert for empty input.
                isValid = false; // Update validation flag.
                return false; // Break out of the loop.
            } else {
                $input.css('borderColor', ''); // Reset border if input is filled.
            }
        });


        // Validate password length
        if (password.length < 6) {
            $('#password').css('borderColor', 'red');
            alert('Kata Sandi harus memiliki minimal 6 karakter.');
            isValid = false;
        }


        // Validate password and confirm password
        if (password !== confirmPassword) {
            $('#confirmPassword').css('borderColor', 'red');
            alert('Kata Sandi dan Konfirmasi Kata Sandi harus sama.');
            isValid = false;
        }


        if (isValid) {
            alert("Pendaftaran berhasil!");
            // Uncomment the next line to actually submit the form.
            // this.submit(); // Submit form if all inputs are valid.
        }
    });
});
