import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  // Branding Colors
  const maroonPrimary = "#800000"; 
  const maroonDeep = "#4d0000";
  const goldAccent = "#D4AF37";
  const bodyText = "#444444";

  const services = [
    { title: "Wedding Ceremony", price: "₹15,000", slug: "wedding" },
    { title: "Engagement Puja", price: "₹5,000", slug: "engagement" },
    { title: "Birthday Abhishek", price: "₹3,000", slug: "birthday-abhishek" },
    { title: "Yearly Abhishek", price: "₹7,000", slug: "yearly-abhishek" },
  ];

  return (
    <div style={{
      background: "linear-gradient(180deg, #fffaf0 0%, #ffffff 100%)",
      minHeight: "100vh",
      padding: "80px 20px",
      fontFamily: "'Inter', sans-serif", // Default clean font for body
    }}>
      
      {/* HERO SECTION */}
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        backgroundColor: "white",
        padding: "60px 40px",
        borderRadius: "16px",
        textAlign: "center",
        boxShadow: "0 15px 45px rgba(128,0,0,0.08)",
        border: "1px solid rgba(128,0,0,0.05)",
      }}>
        {/* Main Title - Using the Premium Serif Font */}
        <h1 style={{
          fontSize: "48px",
          color: maroonPrimary,
          margin: "0 0 20px 0",
          fontFamily: "'Playfair Display', serif", 
          fontWeight: "700",
          letterSpacing: "-0.5px"
        }}>
          Narayan Aradhye Guruji
        </h1>

        <p style={{
          fontSize: "18px",
          lineHeight: "1.7",
          color: bodyText,
          maxWidth: "700px",
          margin: "0 auto 35px",
          fontFamily: "'Inter', sans-serif",
        }}>
          Performing sacred Vedic rituals with purity, devotion, and authentic traditions 
          for weddings, engagements, birthdays, and yearly ceremonies.
        </p>

        <Link to="/booking" style={{ textDecoration: "none" }}>
          <button style={{
            background: maroonPrimary,
            color: "white",
            padding: "16px 45px",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "600",
            fontFamily: "'Inter', sans-serif",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(128,0,0,0.2)"
          }}
          onMouseEnter={(e) => e.target.style.background = maroonDeep}
          onMouseLeave={(e) => e.target.style.background = maroonPrimary}>
            Book a Ceremony
          </button>
        </Link>
      </div>

      {/* SERVICES GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "25px",
        maxWidth: "1100px",
        margin: "60px auto 0"
      }}>
        {services.map((service) => (
          <div
            key={service.slug}
            onClick={() => navigate(`/services/${service.slug}`)}
            style={{
              background: "white",
              padding: "40px 20px",
              borderRadius: "12px",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
              border: "1px solid #f0f0f0",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.borderColor = goldAccent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "#f0f0f0";
            }}
          >
            {/* Service Title - Matching the Hero Serif style */}
            <h3 style={{ 
              color: maroonPrimary, 
              fontSize: "20px", 
              marginBottom: "12px",
              fontFamily: "'Playfair Display', serif", // Added to match Hero
              fontWeight: "700" 
            }}>
              {service.title}
            </h3>

            <p style={{ 
              fontSize: "22px", 
              fontWeight: "700", 
              color: "#222", 
              margin: "10px 0",
              fontFamily: "'Inter', sans-serif" 
            }}>
              {service.price}
            </p>

            <span style={{ 
              fontSize: "12px", 
              color: "#999", 
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "1.2px",
              fontFamily: "'Inter', sans-serif"
            }}>
              Click to view details
            </span>
          </div>
        ))}
      </div>

      {/* FOOTER QUOTE */}
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <p style={{
          fontStyle: "italic",
          color: "#666",
          fontSize: "16px",
          fontFamily: "'Playfair Display', serif"
        }}>
          “Dharma, Shraddha, and Tradition — at the heart of every ritual.”
        </p>
      </div>
    </div>
  );
}