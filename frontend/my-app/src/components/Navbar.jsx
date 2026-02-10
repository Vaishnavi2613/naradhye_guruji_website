import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const maroonPrimary = "#800000";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav style={{
      backgroundColor: maroonPrimary,
      padding: "15px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    }}>
      {/* Brand Name - Unified Serif Font */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 style={{
          color: "white",
          margin: 0,
          fontSize: "24px",
          fontFamily: "'Playfair Display', serif",
          fontWeight: "700",
          letterSpacing: "0.5px"
        }}>
          Narayan Aradhye Guruji
        </h1>
      </Link>

      {/* Navigation Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: "500",
              fontFamily: "'Inter', sans-serif",
              opacity: location.pathname === link.path ? 1 : 0.8,
              borderBottom: location.pathname === link.path ? "2px solid #D4AF37" : "2px solid transparent",
              paddingBottom: "4px",
              transition: "all 0.3s ease"
            }}
          >
            {link.name}
          </Link>
        ))}

        {/* CTA Button */}
        <Link to="/booking">
          <button style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            color: "white",
            border: "1px solid rgba(255,255,255,0.4)",
            padding: "8px 22px",
            borderRadius: "4px",
            cursor: "pointer",
            fontFamily: "'Inter', sans-serif",
            fontWeight: "600",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "white";
            e.target.style.color = maroonPrimary;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
            e.target.style.color = "white";
          }}>
            Book Now
          </button>
        </Link>
      </div>
    </nav>
  );
}