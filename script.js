        document.getElementById('admissionForm').addEventListener('submit', function(event) {
            event.preventDefault(); 

            console.log('Admission Form Submitted.');
            
            
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();

            
            this.reset();
        });

        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                if (this.getAttribute('href') !== '#') {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });