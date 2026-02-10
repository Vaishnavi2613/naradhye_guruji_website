import { container, heading } from "../styles/theme";

export default function About() {
  // Theme Constants
  const maroonPrimary = "#800000";
  const maroonGradient = "linear-gradient(135deg, #800000 0%, #a52a2a 50%, #4d0000 100%)";
  const softMaroonBg = "rgba(128, 0, 0, 0.08)";

  return (
    <div
      style={{
        ...container,
        minHeight: "calc(100vh - 200px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 40px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#fffaf0", // Subtle cream background for warmth
      }}
    >
      {/* Decorative background elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          background: `radial-gradient(circle, ${softMaroonBg} 0%, transparent 70%)`,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "8%",
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Content container */}
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(254,245,245,0.95) 100%)",
          padding: "60px 50px",
          borderRadius: "24px",
          boxShadow: "0 20px 60px rgba(128,0,0,0.1), 0 0 1px rgba(0,0,0,0.05)",
          position: "relative",
          zIndex: 1,
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(128, 0, 0, 0.1)",
        }}
      >
        {/* Decorative accent (The central circle) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80px",
            height: "80px",
            background: maroonGradient,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 25px rgba(128,0,0,0.3)",
            border: "4px solid white",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "3px solid rgba(255,255,255,0.6)",
              borderRadius: "50%",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "6px",
                height: "6px",
                background: "white",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>

        <h2
          style={{
            ...heading,
            fontSize: "42px",
            textAlign: "center",
            marginBottom: "40px",
            marginTop: "30px",
            background: maroonGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.5px",
            fontWeight: "700",
            position: "relative",
          }}
        >
          About Guruji
        </h2>

        {/* Decorative line */}
        <div
          style={{
            width: "60px",
            height: "4px",
            background: `linear-gradient(90deg, transparent, ${maroonPrimary}, transparent)`,
            margin: "0 auto 40px",
            borderRadius: "2px",
          }}
        />

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#2c0000", // Darker text for readability
            textAlign: "center",
            margin: "0 0 30px 0",
            fontWeight: "400",
            letterSpacing: "0.2px",
            padding: "0 20px",
          }}
        >
          Narayan Aradhye Guruji has been performing
          Vedic rituals with devotion, accuracy and purity
          for many years.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.9",
            color: "#4a4a4a",
            textAlign: "center",
            margin: "0 0 25px 0",
            fontWeight: "400",
            letterSpacing: "0.2px",
            padding: "0 20px",
          }}
        >
          With over 40 years of dedicated practice and unwavering commitment, 
          Guruji brings deep spiritual wisdom and authentic Vedic knowledge to 
          every ceremony and ritual. His expertise spans across traditional 
          Hindu ceremonies, poojas, and sacred observances.
        </p>

        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.8",
            color: "#666",
            textAlign: "center",
            margin: 0,
            fontWeight: "400",
            letterSpacing: "0.2px",
            padding: "0 20px",
          }}
        >
          Each ritual is conducted with meticulous attention to detail, 
          honoring the ancient traditions while ensuring spiritual authenticity. 
          Guruji's devotion to preserving and practicing Vedic customs has 
          touched countless lives, bringing peace, prosperity, and divine 
          blessings to families and communities.
        </p>

        {/* Decorative bottom elements */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: "40px",
          }}
        >
          {[0.7, 0.5, 0.3].map((op, i) => (
            <div
              key={i}
              style={{
                width: "8px",
                height: "8px",
                background: maroonPrimary,
                borderRadius: "50%",
                opacity: op,
              }}
            />
          ))}
        </div>
      </div>

      {/* Additional info cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "24px",
          maxWidth: "800px",
          width: "100%",
          marginTop: "40px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {[
          { 
            icon: "lotus",
            title: "40+ Years Experience", 
            text: "Four decades of dedicated practice" 
          },
          { 
            icon: "mandala",
            title: "Devoted Practice", 
            text: "Deep spiritual commitment and authenticity" 
          },
          { 
            icon: "star",
            title: "Skilled Expertise", 
            text: "Meticulous accuracy in every ritual" 
          },
        ].map((item, index) => {
          const iconStyles = {
            lotus: (
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 8 C12 8, 8 12, 8 20 C8 12, 12 8, 20 8 M20 8 C28 8, 32 12, 32 20 C32 12, 28 8, 20 8 M8 20 C8 28, 12 32, 20 32 C12 32, 8 28, 8 20 M32 20 C32 28, 28 32, 20 32 C28 32, 32 28, 32 20" stroke={maroonPrimary} strokeWidth="2" fill="rgba(128,0,0,0.05)"/>
                <circle cx="20" cy="20" r="3" fill={maroonPrimary}/>
              </svg>
            ),
            mandala: (
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="12" stroke={maroonPrimary} strokeWidth="2" fill="none"/>
                <circle cx="20" cy="20" r="6" stroke={maroonPrimary} strokeWidth="2" fill="rgba(128,0,0,0.05)"/>
                <circle cx="20" cy="20" r="2" fill={maroonPrimary}/>
                <line x1="20" y1="8" x2="20" y2="32" stroke={maroonPrimary} strokeWidth="1.5"/>
                <line x1="8" y1="20" x2="32" y2="20" stroke={maroonPrimary} strokeWidth="1.5"/>
              </svg>
            ),
            star: (
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 5 L23 15 L33 15 L25 22 L28 32 L20 25 L12 32 L15 22 L7 15 L17 15 Z" fill="rgba(128,0,0,0.1)" stroke={maroonPrimary} strokeWidth="2"/>
              </svg>
            ),
          };

          return (
            <div
              key={index}
              style={{
                background: "white",
                padding: "30px 24px",
                borderRadius: "16px",
                textAlign: "center",
                boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                border: "1px solid rgba(128,0,0,0.1)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 35px rgba(128,0,0,0.15)";
                e.currentTarget.style.borderColor = "rgba(128,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.05)";
                e.currentTarget.style.borderColor = "rgba(128,0,0,0.1)";
              }}
            >
              <div style={{ marginBottom: "16px", display: "flex", justifyContent: "center" }}>
                {iconStyles[item.icon]}
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: maroonPrimary,
                  margin: "0 0 8px 0",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  margin: 0,
                  lineHeight: "1.5",
                }}
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}