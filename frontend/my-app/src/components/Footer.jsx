import { colors } from "../styles/theme";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Home", href: "/" },
  ];

  const socialLinks = [
    { 
      name: "Email", 
      icon: "✉️", 
      href: "mailto:contact@example.com",
      color: "#ea4335" 
    },
    { 
      name: "Phone", 
      icon: "📞", 
      href: "tel:+1234567890",
      color: "#34a853" 
    },
  ];

  return (
    <footer
      style={{
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primary}dd 100%)`,
        color: "white",
        padding: "80px 20px 40px",
        marginTop: "80px",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 -10px 40px rgba(0,0,0,0.1)",
      }}
    >
      {/* Decorative background pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(255,255,255,0.08) 0%, transparent 40%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* Animated dots decoration */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "10%",
          width: "6px",
          height: "6px",
          background: "rgba(255,255,255,0.3)",
          borderRadius: "50%",
          boxShadow: `
            20px 30px 0 rgba(255,255,255,0.2),
            -15px 50px 0 rgba(255,255,255,0.25),
            40px 80px 0 rgba(255,255,255,0.15)
          `,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Main content area */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "50px",
            marginBottom: "50px",
          }}
        >
          {/* Brand section */}
          <div style={{ textAlign: "left" }}>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "20px",
                background: "linear-gradient(120deg, #ffffff 0%, #f5f5f5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.5px",
                lineHeight: "1.2",
              }}
            >
              Narayan Aradhye Guruji
            </h3>
            <p
              style={{
                opacity: 0.92,
                lineHeight: "1.7",
                fontSize: "16px",
                marginBottom: "28px",
                color: "rgba(255,255,255,0.95)",
              }}
            >
              Inspiring wisdom and guidance for a meaningful life journey.
            </p>
            
            {/* CTA Button */}
            <button
              style={{
                background: "rgba(255,255,255,0.18)",
                border: "2px solid rgba(255,255,255,0.35)",
                color: "white",
                padding: "14px 28px",
                borderRadius: "50px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                letterSpacing: "0.3px",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255,255,255,0.28)";
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
                e.target.style.borderColor = "rgba(255,255,255,0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255,255,255,0.18)";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                e.target.style.borderColor = "rgba(255,255,255,0.35)";
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              ↑ Back to Top
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "19px",
                fontWeight: "600",
                marginBottom: "24px",
                opacity: 0.97,
                letterSpacing: "0.3px",
              }}
            >
              Quick Links
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    textDecoration: "none",
                    fontSize: "15px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    marginLeft: "-12px",
                    display: "inline-block",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "white";
                    e.target.style.background = "rgba(255,255,255,0.12)";
                    e.target.style.paddingLeft = "20px";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "rgba(255,255,255,0.85)";
                    e.target.style.background = "transparent";
                    e.target.style.paddingLeft = "12px";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4
              style={{
                fontSize: "19px",
                fontWeight: "600",
                marginBottom: "24px",
                opacity: 0.97,
                letterSpacing: "0.3px",
              }}
            >
              Connect With Us
            </h4>
            <div
              style={{
                display: "flex",
                gap: "14px",
                marginBottom: "28px",
                flexWrap: "wrap",
              }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  title={social.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "52px",
                    height: "52px",
                    background: "rgba(255,255,255,0.12)",
                    borderRadius: "50%",
                    textDecoration: "none",
                    fontSize: "22px",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    border: "2px solid rgba(255,255,255,0.25)",
                    backdropFilter: "blur(5px)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = social.color;
                    e.target.style.borderColor = social.color;
                    e.target.style.transform = "translateY(-5px) scale(1.12)";
                    e.target.style.boxShadow = `0 12px 30px ${social.color}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.12)";
                    e.target.style.borderColor = "rgba(255,255,255,0.25)";
                    e.target.style.transform = "translateY(0) scale(1)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* Newsletter signup */}
            <div style={{ marginTop: "28px" }}>
              <p style={{ fontSize: "14px", opacity: 0.92, marginBottom: "14px", lineHeight: "1.5" }}>
                Stay updated with our latest insights
              </p>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = e.target.elements.email.value;
                  if (email) {
                    alert(`Thank you for subscribing with ${email}!`);
                    e.target.reset();
                  }
                }}
                style={{ display: "flex", gap: "10px" }}
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    padding: "12px 18px",
                    borderRadius: "28px",
                    border: "2px solid rgba(255,255,255,0.25)",
                    background: "rgba(255,255,255,0.12)",
                    color: "white",
                    fontSize: "14px",
                    outline: "none",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.4)";
                    e.target.style.background = "rgba(255,255,255,0.18)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.25)";
                    e.target.style.background = "rgba(255,255,255,0.12)";
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "12px 24px",
                    borderRadius: "28px",
                    border: "none",
                    background: "rgba(255,255,255,0.95)",
                    color: colors.primary,
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    letterSpacing: "0.3px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "white";
                    e.target.style.transform = "scale(1.06)";
                    e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.95)";
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.22)",
            paddingTop: "35px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <p
            style={{
              margin: 0,
              opacity: 0.85,
              fontSize: "14px",
              letterSpacing: "0.2px",
            }}
          >
            © {currentYear} Narayan Aradhye Guruji. All rights reserved.
          </p>
          
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <span style={{ 
              opacity: 0.7, 
              fontSize: "13px",
              background: "rgba(255,255,255,0.1)",
              padding: "6px 14px",
              borderRadius: "20px",
              backdropFilter: "blur(5px)",
            }}>
              Made with ❤️
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}