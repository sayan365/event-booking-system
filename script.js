
      // Initialize Flatpickr
    flatpickr("#eventDate", {
        dateFormat: "F j, Y",
        minDate: "today",
        allowInput: true
    });
    

      // Toggle Mobile Menu
    function toggleMobileMenu() {
        const mobileNav = document.getElementById('mobileNav');
        mobileNav.classList.toggle('hidden');
    }

    // function handleBooking() {
    //     const date = document.getElementById("eventDate");

    //     if (!date.value.trim()) {
    //         alert("Please select a date.");
    //         date.focus();
    //         return;
    //     }
    // }
    function goBack() {
        document.getElementById("successMessage").classList.add("hidden");
        document.getElementById("bookingForm").classList.remove("hidden");
    }

    function saveFormData() {
        const type = document.getElementById("eventType").value;
        const location = document.getElementById("location").value;
        const date = document.getElementById("eventDate").value;
    
        localStorage.setItem("eventType", type);
        localStorage.setItem("eventLocation", location);
        localStorage.setItem("eventDate", date);
    
        window.location.href = "book.html"; // Redirect to full form
    }

    function openModal(title, details) {
        document.getElementById("eventModal").classList.remove("hidden");
        document.getElementById("modalEventTitle").innerText = title;
        document.getElementById("modalEventDetails").innerText = details;
        document.getElementById("bookingForm").classList.remove("hidden");
        document.getElementById("successMessage").classList.add("hidden");
    }
    
    function closeModal() {
        document.getElementById("eventModal").classList.add("hidden");
    }
    
    function handletBooking(e) {
        e.preventDefault();
        document.getElementById("tbookingForm").classList.add("hidden");
        document.getElementById("tsuccessMessage").classList.remove("hidden");
    }
      


    function sendMessage(event) {
        event.preventDefault(); // Prevent actual form submission
        alert("✅ Message sent successfully! We'll get back to you soon.");
        // Optionally reset the form
        event.target.reset();
        return false;
    }
      
