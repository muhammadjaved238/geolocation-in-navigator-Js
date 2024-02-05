if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        // Now you can use lat and long for further processing
        console.log("Latitude:", lat);
        console.log("Longitude:", long);
    });
} else {
    // Handle the case when geolocation is not supported
    console.log("Geolocation is not supported by your browser");
}
