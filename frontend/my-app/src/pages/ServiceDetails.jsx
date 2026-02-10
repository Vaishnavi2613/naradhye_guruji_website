import { useParams, useNavigate } from "react-router-dom";

const servicesData = {
  wedding: {
    title: "Wedding Ceremony",
    price: "₹15,000",
    description:
      "A complete Vedic wedding ritual performed with sacred mantras, homa, mangalya dharanam, and blessings for a prosperous married life.",
    includes: [
      "Ganapati Puja",
      "Homa & Vedic Mantras",
      "Mangalya Dharanam",
      "Full Ritual Guidance",
    ],
  },
  engagement: {
    title: "Engagement Puja",
    price: "₹5,000",
    description:
      "Traditional engagement puja seeking blessings for harmony and a successful marital journey.",
    includes: ["Ganapati Puja", "Nandi Shraddha", "Vedic Sankalp"],
  },
  "birthday-abhishek": {
    title: "Birthday Abhishek",
    price: "₹3,000",
    description:
      "Special Abhishek performed on birthdays for health, longevity, and divine blessings.",
    includes: ["Abhishek", "Mantra Chanting", "Prasad"],
  },
  "yearly-abhishek": {
    title: "Yearly Abhishek",
    price: "₹7,000",
    description:
      "Annual Abhishek and puja for peace, prosperity, and protection of the family.",
    includes: ["Abhishek", "Homa", "Special Sankalp"],
  },
};

function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesData[slug];

  // Theme Palette
  const maroonPrimary = "#800000";
  const maroonDeep = "#4d0000";
  const goldAccent = "#D4AF37";
  const maroonGradient = "linear-gradient(135deg, #800000 0%, #4d0000 100%)";

  if (!service) {
    return (
      <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "32px", color: maroonPrimary, marginBottom: "20px", fontFamily: "'Playfair Display', serif" }}>
            Service not found
          </h2>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "12px 28px",
              background: maroonGradient,
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const icons = {
    wedding: (
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
        <path d="M35 20 L40 30 L50 30 L43 37 L46 48 L35 42 L24 48 L27 37 L20 30 L30 30 Z" fill="rgba(128,0,0,0.1)" stroke={maroonPrimary} strokeWidth="2.5"/>
        <circle cx="35" cy="35" r="25" stroke={goldAccent} strokeWidth="2" fill="none"/>
      </svg>
    ),
    engagement: (
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
        <circle cx="35" cy="35" r="22" stroke={maroonPrimary} strokeWidth="2.5" fill="rgba(128,0,0,0.05)"/>
        <circle cx="35" cy="35" r="12" stroke={goldAccent} strokeWidth="2" fill="none"/>
        <circle cx="35" cy="35" r="5" fill={maroonPrimary}/>
      </svg>
    ),
    "birthday-abhishek": (
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
        <path d="M20 48 L20 33 L50 33 L50 48 Z" fill="rgba(128,0,0,0.08)" stroke={maroonPrimary} strokeWidth="2.5"/>
        <path d="M35 27 L35 17" stroke={goldAccent} strokeWidth="2.5"/>
        <circle cx="35" cy="13" r="3" fill={maroonPrimary}/>
        <line x1="15" y1="48" x2="55" y2="48" stroke={maroonPrimary} strokeWidth="4"/>
      </svg>
    ),
    "yearly-abhishek": (
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
        <circle cx="35" cy="35" r="22" stroke={maroonPrimary} strokeWidth="2.5" fill="none"/>
        <path d="M35 20 L35 35 L46 35" stroke={goldAccent} strokeWidth="3" fill="none"/>
        <circle cx="35" cy="35" r="3" fill={maroonPrimary}/>
      </svg>
    ),
  };

  return (
    <div style={{
        background: "linear-gradient(180deg, #fffaf0 0%, #ffffff 100%)",
        minHeight: "100vh",
        padding: "80px 20px",
        position: "relative",
        overflow: "hidden",
      }}>
      
      {/* Background Orbs */}
      <div style={{ position: "absolute", top: "10%", right: "5%", width: "350px", height: "350px", background: "radial-gradient(circle, rgba(128,0,0,0.04) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "60px 50px",
          borderRadius: "16px",
          boxShadow: "0 20px 60px rgba(128,0,0,0.08)",
          position: "relative",
          zIndex: 1,
          border: "1px solid rgba(128,0,0,0.05)",
        }}>
        
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "8px 18px",
            background: "transparent",
            color: maroonPrimary,
            border: `1px solid ${maroonPrimary}`,
            borderRadius: "4px",
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "30px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(128,0,0,0.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
          }}
        >
          ← Back to Services
        </button>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
          {icons[slug]}
        </div>

        <h1 style={{
            color: maroonPrimary,
            fontSize: "42px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "16px",
            fontFamily: "'Playfair Display', serif",
          }}>
          {service.title}
        </h1>

        <div style={{ width: "60px", height: "3px", background: goldAccent, margin: "0 auto 30px" }} />

        {/* Price Tag */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{
              display: "inline-block",
              padding: "15px 40px",
              background: "rgba(128,0,0,0.03)",
              borderRadius: "8px",
              border: "1px solid rgba(128,0,0,0.1)",
            }}>
            <div style={{ fontSize: "12px", color: "#666", marginBottom: "4px", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase" }}>
              Dakshina / Service Fee
            </div>
            <h3 style={{ fontSize: "32px", fontWeight: "700", color: "#222", margin: 0 }}>
              {service.price}
            </h3>
          </div>
        </div>

        <p style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#444",
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto 50px",
          }}>
          {service.description}
        </p>

        {/* What's Included Section */}
        <div style={{
            background: "rgba(128,0,0,0.02)",
            padding: "40px",
            borderRadius: "12px",
            border: "1px solid rgba(128,0,0,0.05)",
            marginBottom: "40px",
          }}>
          <h4 style={{ fontSize: "22px", fontWeight: "600", color: maroonPrimary, marginBottom: "25px", textAlign: "center", fontFamily: "'Playfair Display', serif" }}>
            Ceremony Rituals Include
          </h4>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {service.includes.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 15px",
                  background: "white",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                }}
              >
                <div style={{ width: "20px", height: "20px", background: goldAccent, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7L5.5 10.5L12 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ fontSize: "15px", color: "#333", fontWeight: "500" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Book Button */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => navigate("/booking", { state: { service: service.title } })}
            style={{
              padding: "18px 60px",
              background: maroonGradient,
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "17px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(128,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = maroonDeep;
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = maroonPrimary;
              e.target.style.transform = "translateY(0)";
            }}
          >
            Proceed to Booking
          </button>
        </div>

        <p style={{ marginTop: "40px", textAlign: "center", fontSize: "14px", color: "#888", fontStyle: "italic" }}>
          All ceremonies are conducted with strict adherence to Vedic Granthas.
        </p>
      </div>
    </div>
  );
}

export default ServiceDetails;