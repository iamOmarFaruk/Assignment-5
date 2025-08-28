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
    
    // ========================================
    // CALL TASK
    // ========================================
    
    // Get the coin count element from navigation
    const coinCountElement = document.querySelector('.app-coin-count');
    
    // Get all call buttons on the page
    const callButtons = document.querySelectorAll('.card-call-button');
    
    // Get call history container and clear button
    const callHistoryContainer = document.querySelector('.space-y-2');
    const callHistoryClearButton = document.querySelector('.call-history-clear-button');
    
    // Function to get current time in format like "11:36:58 AM"
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { 
            hour12: true,
            hour: '2-digit',
            minute: '2-digit', 
            second: '2-digit'
        });
    }
    
    // Function to add call to history
    function addCallToHistory(cardTitle, phoneNumber) {
        const currentTime = getCurrentTime();
        
        // Create new call history item using template literals
        const newCallItem = `
            <div class="bg-[#FAFAFA] rounded-lg p-3 sm:p-4 hover:bg-gray-50 transition-colors">
                <div class="flex justify-between items-center">
                    <div class="flex-1">
                        <h4 class="font-semibold text-gray-800 text-xs sm:text-sm mb-1">${cardTitle}</h4>
                        <p class="text-xs sm:text-sm text-gray-600">${phoneNumber}</p>
                    </div>
                    <span class="text-[10px] sm:text-xs text-gray-500 ml-2">${currentTime}</span>
                </div>
            </div>
        `;
        
        // Add new item to the top of call history
        callHistoryContainer.insertAdjacentHTML('afterbegin', newCallItem);
    }
    
    // Loop through each call button and add click event
    callButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            
            // Get current coin count
            let currentCoinCount = parseInt(coinCountElement.textContent);
            
            // Check if user has enough coins (minimum 20 coins required)
            if (currentCoinCount < 20) {
                alert('Not enough coins! You need at least 20 coins to make a call.');
                return;
            }
            
            // Find the card that contains this button
            const card = button.closest('.single-card');
            
            // Get the card title and phone number from this card
            const cardTitle = card.querySelector('.card-title').textContent;
            const cardPhoneNumber = card.querySelector('.card-phone-number').textContent;
            
            // Deduct 20 coins
            currentCoinCount = currentCoinCount - 20;
            
            // Update coin count display
            coinCountElement.textContent = currentCoinCount;
            
            // Show calling alert
            alert('Calling ' + cardTitle + ' on ' + cardPhoneNumber);
            
            // Add this call to history
            addCallToHistory(cardTitle, cardPhoneNumber);
            
        });
    });
    
    // Clear call history when clear button is clicked
    callHistoryClearButton.addEventListener('click', function() {
        // Remove all call history items
        callHistoryContainer.innerHTML = '';
    });
    
});