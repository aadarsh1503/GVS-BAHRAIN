import React, { useEffect, useState } from 'react';
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
    const [isThrottled, setIsThrottled] = useState(false);
    const [loading, setLoading] = useState(false); // New loading state

    useEffect(() => {
        const existingScript = document.getElementById('google-translate-script');
        if (!existingScript) {
            const googleTranslateScript = document.createElement('script');
            googleTranslateScript.id = 'google-translate-script';
            googleTranslateScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            document.body.appendChild(googleTranslateScript);
        }

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
        };
    }, []);

    const changeLanguage = (lang) => {
        if (isThrottled) return; // Ignore clicks if throttled

        const selectElem = document.querySelector('#google_translate_element select');
        if (selectElem) {
            selectElem.value = lang;
            selectElem.dispatchEvent(new Event('change', { bubbles: true }));
            console.log(`Language changed to: ${lang}`);
            
            setLoading(true); // Start loading

            // Wait for the text to change before reloading
            setTimeout(() => {
                window.location.reload(); // Reload the page
            }, 1000); // Adjust the timeout as necessary

            // Set throttling for 1 second (1000 ms)
            setIsThrottled(true);
            setTimeout(() => {
                setIsThrottled(false);
            }, 1000);
        } else {
            console.log('Google Translate has not been initialized yet.');
        }
    };

    useEffect(() => {
        // Remove loading state when the page loads
        const handleLoad = () => {
            setLoading(false);
        };

        window.addEventListener('load', handleLoad);
        
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <div>
            {loading && (
                <div className="loading-overlay">
                    <div className="loading-spinner"></div>
                </div>
            )}
            <div className="flex items-center justify-between">
                <div className="font-bold text-lg"></div>
                <div id="google_translate_element" className="hidden"></div>
                <div className="language-switcher flex gap-2">
                    <img
                        src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
                        alt="Switch to English"
                        onClick={() => changeLanguage('en')}
                        className="cursor-pointer w-12 h-auto "
                    />
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAgVBMVEUAAAAAnkn////OESfRFisICAgFoUzp6en//f/8//8AoEjj+ePNEicAkkTPESXSAChuXjjIABTdnqF4ECEAoEQAkUnj+OjVBywApk7PDiJwXjYAnkV1VjgAj0fJEybOABHTnZXZ/erP5tPYnaLz///n5ObKABrUkpbr7urZ2dkABwAzOBq1AAACFUlEQVR4nO3bWVICQRAAUaTZxQGEAcYNFff7H1AHPYBEVsBH5TvARHRGdUz9dKcXqMw28+0gk05vWkqpyjRENZtPBhd5/OULYj6cb5stX1y/ynzmO4L5EPMh5kPMh5gPic3n3oc4feY7hvkQ8yHmQ8yHmA9x70OcPsR8iPkQ8yHmQ8yHmA9x70OcPsR8iPkQ8yHmQ8yHuLggTh9iPsR8iPkQ8yHmQ8yHuPchTh9iPsR8iPkQ8yHmQ8yHxO99k3Mf6WQm0flmTXMzuF1NErhdHYTmK01zV9dXKdR1fV/Xofkeqt3j03p9mcD64Dk2X7O77o5G4zSGsb+OZrEfv/wETKDbeg2evsW+O/79cgrB01ct2st77kOdTmy+0ubLxHyI+RDzIeZDzIeYDzEfYj7EfIj5EPMh5kPMh5gPic3n3oc4feY7hvkQ8yHmQ8yHmA9x70OcPsR8iPkQ8yHmQ8yHmA9x70OcPsR8iPkQ8yHmQ8yHuLggTh9iPsR8iPkQ8yHmQ8yHuPchTh9iPsR8iPkQ8yHmQ8yHxO99k3Mf6WQm0flmTXMzuF1NErhdHYTmK01zV9dXKdR1fV/Xofkeqt3j03p9mcD64Dk2X7O77o5G4zSGsb+OZrEfv/wETKDbeg2evsW+O/79cgrB01ct2st77kOdTmy+0ubLxHyI+RDzIeZDzIeYDzEfYj7EfIj5EPMh5kPMh5gPic3n3oc4feY7hvkQ8yHmQ8yHmA9x70OcPsR8iPkQ8yHmQ8yHmA9x70OcPsR8iPkQ8yHmQ8yHuLggTh9iPsR8iPkQ8yHmQ8yHuPchTh9iPsR8iPkQ8yHmQ8yHxO99k3Mf6WQm0flmTXMzuF1NErhdHYTmK01zV9dXKdR1fV/Xofkeqt3j03p9mcD64Dk2X7O77o5G4zSGsb+OZrEfv/wETKDbeg2evsW+O/79cgrB01ct2st77kOdTmy+0ubLxHyI+RDzIeZDzIeYDzEfYj7EfIj5EPMh5kPMh5gPMR9iPsR8iPkQ8yHmQ8yHmA8xH2I+xHyI+RDzIeZDzIeYDzEfYj7EfIj5EPMh5kPMh5gPMR9iPsR8iPkQ8yHmQ8yHmA+Jfs/79v4xTOQzePp6y04u5gP6wZd3Yz7z/Zv5EPMh5kPMh5gPMR9iPsR8iPkQ8yHmQ8yHmA8xH2I+xHyI+RDzIeZDYvP5otJ8x2jzxdVLeXnj8pWk+aoyjZDx8kYqm+VXP5NvxwWX/oPQ8mYAAAAASUVORK5CYII="
                        alt="Switch to Arabic"
                        onClick={() => changeLanguage('ar')}
                        className="cursor-pointer w-12  h-auto "
                    />
                </div>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
