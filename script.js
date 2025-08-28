// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // HEART COUNT TASK
    // ========================================
    
    // Get all heart buttons on the page
    const heartButtons = document.querySelectorAll('.card-heart-button');
    
    // Get the heart count element and image from navigation (they are not inside buttons)
    const heartCountElement = document.querySelector('.app-heart-count');
    const heartImage = document.querySelector('.app-heart-count').parentElement.querySelector('img');
    
    // Loop through each heart button and add click event
    heartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            
            // Check if elements exist before using them
            if (heartCountElement && heartImage) {
                
                // Get current count and convert to number
                let currentCount = parseInt(heartCountElement.textContent);
                
                // Increase count by 1
                currentCount = currentCount + 1;
                
                // Update the count on the page
                heartCountElement.textContent = currentCount;
                
                // Add zoom effect to heart image
                heartImage.style.transform = 'scale(1.2)';
                
                // Remove zoom effect after 200ms to create animation
                setTimeout(function() {
                    heartImage.style.transform = 'scale(1)';
                }, 200);
                
            } else {
                // Log error message for debugging
                console.log('Heart count element or image not found in navigation');
            }
            
        });
    });
    
    // ========================================
    // COPY COUNT TASK
    // ========================================
    
    // Get the copy count element from navigation
    const copyCountElement = document.querySelector('.app-copy-count');
    
    // Get all copy buttons on the page
    const copyButtons = document.querySelectorAll('.card-copy-button');
    
    // Loop through each copy button and add click event
    copyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            
            // Find the card that contains this button
            const card = button.closest('.single-card');
            
            // Get the card title and phone number from this card
            const cardTitle = card.querySelector('.card-title').textContent;
            const cardPhoneNumber = card.querySelector('.card-phone-number').textContent;
            
            // Copy phone number to clipboard
            navigator.clipboard.writeText(cardPhoneNumber).then(function() {
                
                // Show alert with card title and phone number
                alert(cardTitle + ' - ' + cardPhoneNumber + ' copied');
                
                // Get current copy count and convert to number
                let currentCopyCount = parseInt(copyCountElement.textContent);
                
                // Increase copy count by 1
                currentCopyCount = currentCopyCount + 1;
                
                // Update the copy count display with proper format
                if (currentCopyCount === 1) {
                    copyCountElement.textContent = currentCopyCount + ' Copy';
                } else {
                    copyCountElement.textContent = currentCopyCount + ' Copies';
                }
                
            }).catch(function() {
                // If clipboard fails, still show alert
                alert(cardTitle + ' - ' + cardPhoneNumber + ' copied');
                console.log('Clipboard not available, but alert shown');
            });
            
        });
    });
    
});