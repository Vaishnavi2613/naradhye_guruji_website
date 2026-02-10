import { container, heading } from "../styles/theme";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    { 
      title: "Wedding Ceremony", 
      price: "₹15,000",
      slug: "wedding",
      description: "Complete Vedic wedding ritual with sacred mantras and blessings for a prosperous married life.",
      buttonText: "Book Now"
    },
    { 
      title: "Engagement Puja", 
      price: "₹5,000",
      slug: "engagement",
      description: "Traditional engagement ceremony seeking divine blessings for harmony and success.",
      buttonText: "Book Now"
    },
    { 
      title: "Birthday Abhishek", 
      price: "₹3,000",
      slug: "birthday-abhishek",
      description: "Special abhishek for health, longevity and prosperity on your special day.",
      buttonText: "Book Now"
    },
    { 
      title: "Yearly Shraddha / Abhishek", 
      price: "₹7,000",
      slug: "yearly-abhishek",
      description: "Annual puja for peace, prosperity and protection of the family.",
      buttonText: "Book Now"
    },
    { 
      title: "Puja at Temple", 
      price: "Contact Us",
      slug: "temple-puja",
      description: "Arrange authentic pujas directly at holy temples with traditional rituals.",
      buttonText: "Book Now"
    },
    { 
      title: "Prasad Booking", 
      price: "Varies",
      slug: "prasad-booking",
      description: "Receive blessed prasad delivered fresh to you from sacred temples.",
      buttonText: "Book Now"
    },
  ];

  const icons = {
    wedding: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" fill="#8B3A3A"/>
        <path d="M20 25 L40 25 L40 38 L20 38 Z" stroke="white" strokeWidth="2.5" fill="none"/>
        <circle cx="25" cy="30" r="2" fill="white"/>
        <circle cx="30" cy="30" r="2" fill="white"/>
        <circle cx="35" cy="30" r="2" fill="white"/>
        <path d="M30 38 L30 42" stroke="white" strokeWidth="2.5"/>
        <circle cx="30" cy="20" r="1.5" fill="white"/>
      </svg>
    ),
    engagement: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" fill="#8B3A3A"/>
        <circle cx="30" cy="30" r="10" stroke="white" strokeWidth="2.5" fill="none"/>
        <circle cx="30" cy="30" r="3" fill="white"/>
        <path d="M30 15 L30 20" stroke="white" strokeWidth="2"/>
        <path d="M30 40 L30 45" stroke="white" strokeWidth="2"/>
        <path d="M15 30 L20 30" stroke="white" strokeWidth="2"/>
        <path d="M40 30 L45 30" stroke="white" strokeWidth="2"/>
      </svg>
    ),
    birthday: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" fill="#8B3A3A"/>
        <rect x="20" y="28" width="20" height="12" stroke="white" strokeWidth="2.5" fill="none"/>
        <path d="M30 20 L30 28" stroke="white" strokeWidth="2.5"/>
        <path d="M28 18 Q30 15 32 18" stroke="white" strokeWidth="2" fill="none"/>
        <line x1="18" y1="40" x2="42" y2="40" stroke="white" strokeWidth="2.5"/>
      </svg>
    ),
    yearly: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" fill="#8B3A3A"/>
        <circle cx="30" cy="30" r="12" stroke="white" strokeWidth="2.5" fill="none"/>
        <path d="M30 20 L30 30 L37 30" stroke="white" strokeWidth="2.5"/>
      </svg>
    ),
    temple: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" fill="#8B3A3A"/>
        <path d="M30 15 L35 22 L40 22 L40 40 L20 40 L20 22 L25 22 Z" stroke="white" strokeWidth="2.5" fill="none"/>
        <rect x="27" y="32" width="6" height="8" fill="white"/>
        <path d="M30 15 L30 18" stroke="white" strokeWidth="2"/>
        <circle cx="30" cy="13" r="1.5" fill="white"/>
      </svg>
    ),
    prasad: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" fill="#8B3A3A"/>
        <path d="M22 28 C22 24 26 22 30 22 C34 22 38 24 38 28" stroke="white" strokeWidth="2.5" fill="none"/>
        <ellipse cx="30" cy="32" rx="8" ry="6" stroke="white" strokeWidth="2.5" fill="none"/>
        <path d="M25 25 L25 28" stroke="white" strokeWidth="2"/>
        <path d="M30 23 L30 26" stroke="white" strokeWidth="2"/>
        <path d="M35 25 L35 28" stroke="white" strokeWidth="2"/>
      </svg>
    ),
  };

  return (
    <div
      style={{
        ...container,
        background: "linear-gradient(180deg, #f5ebe0 0%, #faf7f2 100%)",
        minHeight: "100vh",
        padding: "80px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "8%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(139,58,58,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(139,58,58,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              ...heading,
              fontSize: "42px",
              background: "linear-gradient(135deg, #8B3A3A 0%, #6B2C2C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: "700",
              letterSpacing: "-0.5px",
              marginBottom: "16px",
            }}
          >
            Our Services
          </h2>

          {/* Decorative line */}
          <div
            style={{
              width: "60px",
              height: "4px",
              background: "linear-gradient(90deg, transparent, #8B3A3A, transparent)",
              margin: "0 auto 20px",
              borderRadius: "2px",
            }}
          />

          <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
            Traditional Vedic ceremonies performed with devotion and authenticity
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {services.map((service, index) => {
            const iconKey = service.slug.includes('wedding') ? 'wedding' 
              : service.slug.includes('engagement') ? 'engagement'
              : service.slug.includes('birthday') ? 'birthday'
              : service.slug.includes('yearly') ? 'yearly'
              : service.slug.includes('temple') ? 'temple'
              : 'prasad';

            return (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "40px 35px",
                  borderRadius: "16px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "1px solid rgba(139,58,58,0.1)",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(139,58,58,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
                }}
              >
                {/* Icon and Title Row */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        color: "#8B3A3A",
                        marginBottom: "16px",
                        lineHeight: "1.3",
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <div style={{ marginLeft: "20px", flexShrink: 0 }}>
                    {icons[iconKey]}
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "15px",
                    color: "#555",
                    lineHeight: "1.7",
                    marginBottom: "24px",
                    flex: 1,
                  }}
                >
                  {service.description}
                </p>

                {/* Book Now Button */}
                <button
                  onClick={() => navigate(`/services/${service.slug}`)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 28px",
                    background: "transparent",
                    color: "#8B3A3A",
                    border: "2px solid #8B3A3A",
                    borderRadius: "30px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#8B3A3A";
                    e.target.style.color = "white";
                    e.target.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#8B3A3A";
                    e.target.style.transform = "translateX(0)";
                  }}
                >
                  {service.buttonText}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" fill="currentColor"/>
                    <path d="M8 6 L12 10 L8 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div
          style={{
            marginTop: "80px",
            padding: "30px 40px",
            background: "linear-gradient(135deg, rgba(139,58,58,0.05), rgba(139,58,58,0.08))",
            borderRadius: "16px",
            maxWidth: "800px",
            margin: "80px auto 0",
            border: "1px solid rgba(139,58,58,0.15)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontStyle: "italic",
              color: "#555",
              fontSize: "17px",
              lineHeight: "1.8",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            All rituals are performed with complete Vedic authenticity and devotion
          </p>
        </div>
      </div>
    </div>
  );
}