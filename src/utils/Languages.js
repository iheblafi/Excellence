import React , { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const lngs = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
];

export default function Languages() {
  const { language, changeLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);



const toggleDropdown = () => setDropdownOpen((prev) => !prev);
 // Handle language change
 const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setDropdownOpen(false); // Close dropdown after selecting a language
  };

  return (


    <div style={{ position: "relative", display: "inline-block" }}>
    {/* Button to open dropdown */}
    <a
      onClick={toggleDropdown}
      aria-label="Change Language"
      style={{
        backgroundColor: "transparent",
        color: "white",
        cursor: "pointer",
        fontSize: "1.5rem",
      }}
      title={`Switch to ${language === "en" ? "Français" : "English"}`}
    >
      <i className="fa fa-globe" aria-hidden="true"></i>
    </a>

    {/* Dropdown menu */}
    {dropdownOpen && (
      <div
      style={{
        position: "absolute",
        top: "110%", // Adjusted to ensure dropdown doesn't overlap the button
        left: "10%", // Align dropdown horizontally to the button center
        transform: "translateX(-60%)", // Center dropdown relative to button
        background: "#fff",
        color: "#000",
        border: "1px solid #ddd",
        borderRadius: "5px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        marginTop: "5px",
        zIndex: 1000, // Ensure dropdown appears above other elements
        minWidth: "130px", // Set consistent width
        textAlign: "left",
      }}
      >
        <div
          onClick={() => handleLanguageChange("fr")}
          style={{
            padding: "10px",
            cursor: "pointer",
            background: language === "fr" ? "#f0f0f0" : "transparent",
          }}
        >
         Français
        </div>
        <div
          onClick={() => handleLanguageChange("en")}
          style={{
            padding: "10px",
            cursor: "pointer",
            background: language === "en" ? "#f0f0f0" : "transparent",
          }}
        >
         English
        </div>
      </div>
    )}
  </div>
  );
}
