import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { MdOutlineLocationSearching } from "react-icons/md";

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',


};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const Mapapi = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAREzzlAnYU1IRQS7_FLQYRdjmhuS0jIs8', // Replace with your API key
  });

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });

        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to retrieve your location. Please check your settings.');
        },
        {
          enableHighAccuracy: true, // Use GPS for more accuracy
          timeout: 5000,          // Increase timeout to give more time to fetch
          maximumAge: 0,           // Prevent cached location usage
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;


  const markers = [
    {
      realname: 'Essensuals By TONI & GUY THENI',
      name: 'location-1',
      location: {
        lat: 10.017335311411706,
        lng: 77.47959243555468
      },
    }, {
      realname: 'URBAN TRENDS mens & hairspa',
      name: 'location-2',
      location: {
        lat: 10.00613379341723,
        lng: 77.48117050791784
      },
    },
    {
      realname: 'Pink Beauty Paradis & men In Blue Family Saloon',
      name: 'location-3',
      location: {
        lat: 10.017335311411706,
        lng: 77.47959243555468
      },
    },
    {
      realname: 'Naturals Salon',
      name: 'location-4',
      location: {
        lat: 10.017888633817076,
        lng: 77.47968408061864
      },
    },

  ];

  return (
    isLoaded && (
      <>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={currentLocation || { lat: 10.014642810159994, lng: 77.48411491169875 }} 
          options={options}
        >
          {currentLocation && (
            <Marker position={currentLocation} title="Your Current Location"
            icon={{
              url: 'https://www.svgrepo.com/show/315096/current-location.svg',
              scaledSize: new window.google.maps.Size(30, 30),
            }}
            />

            

          )}
          
          
        </GoogleMap>

        <button
          onClick={handleGetLocation}
          className="absolute bottom-6 right-14 bg-white p-2 rounded-full shadow shadow-violet-500"
        >
          <MdOutlineLocationSearching size={30} title='Find Your Current Location' />
        </button>
      </>
    )
    );
};

export default Mapapi;



