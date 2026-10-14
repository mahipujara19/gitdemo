function getUserLocation() {
  // 1. Check if the browser supports the Geolocation API
  if (!navigator.geolocation) {
    console.error("Geolocation is not supported by your browser.");
    return;
  }

  // 2. Options configuration (Optional)
  const options = {
    enableHighAccuracy: true, // Request best possible results (uses GPS if available)
    timeout: 5000,            // Time to wait before throwing an error (5 seconds)
    maximumAge: 0             // Do not use a cached position
  };

  // 3. Request the current position
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
}

// Handles successful location retrieval
function successCallback(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const accuracy = position.coords.accuracy; // Accuracy radius in meters

  console.log(`Latitude: ${latitude}`);
  console.log(`Longitude: ${longitude}`);
  console.log(`Accurate within: ${accuracy} meters`);
}

// Handles location errors (denied permission, timeout, offline, etc.)
function errorCallback(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.error("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.error("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.error("The request to get user location timed out.");
      break;
    default:
      console.error("An unknown error occurred:", error.message);
      break;
  }
}

// Execute the function
getUserLocation();
