// Grab the install button from index
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
});

// Once install is clicked...
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    // If the event prompt does not exist/is null
    if (!promptEvent) {
    return;
    }

    // Show prompt
    promptEvent.prompt();
    
    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
    
    // Readd hidden class to button
    butInstall.classList.toggle('hidden', true);
});

// App already installed
window.addEventListener('appinstalled', (event) => {
    // Make sure the deferred prompt variable is set so it can't be used anymore.
    window.deferredPrompt = null;
});
