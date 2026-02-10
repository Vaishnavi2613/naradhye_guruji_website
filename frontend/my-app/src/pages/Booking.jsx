import { useState } from "react";
import { createBooking, fetchClientByName } from "../services/api";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    address: "",
    dob: "",
    birthdayAbhishek: false,
  });

  const maroonPrimary = "#800000";
  const maroonGradient = "linear-gradient(135deg, #800000 0%, #4d0000 100%)";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const autofill = async () => {
    if (!form.name) return;
    try {
      const res = await fetchClientByName(form.name);
      if (res.data) setForm({ ...form, ...res.data });
    } catch (err) {
      console.error("Autofill failed", err);
    }
  };

  const submit = async () => {
    try {
      await createBooking(form);
      alert("Booking request sent successfully.");
    } catch (err) {
      alert("Error sending request. Please try again.");
    }
  };

  const fieldStyle = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "10px",
    border: "2px solid #eee",
    marginTop: "8px",
    fontSize: "15px",
    transition: "all 0.3s ease",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
  };

  const labelStyle = {
    fontWeight: "600",
    marginTop: "24px",
    display: "block",
    color: "#2c0000",
    fontSize: "14px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  return (
    <div style={{ 
      background: "linear-gradient(135deg, #fffaf0 0%, #fdf2f2 100%)", 
      minHeight: "100vh", 
      padding: "80px 20px", 
      position: "relative" 
    }}>
      
      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        backgroundColor: "white",
        padding: "50px 45px",
        borderRadius: "20px",
        boxShadow: "0 20px 60px rgba(128,0,0,0.1)",
        position: "relative",
      }}>
        
        {/* Decorative Top Icon */}
        <div style={{
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
          border: "6px solid white",
          boxShadow: "0 10px 20px rgba(128,0,0,0.2)",
        }}>
          <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
            <circle cx="25" cy="25" r="15" stroke="white" strokeWidth="2"/>
            <circle cx="25" cy="25" r="5" fill="white"/>
            <line x1="25" y1="5" x2="25" y2="45" stroke="white" strokeWidth="1.5"/>
            <line x1="5" y1="25" x2="45" y2="25" stroke="white" strokeWidth="1.5"/>
          </svg>
        </div>

        <h2 style={{ 
          textAlign: "center", 
          marginTop: "30px", 
          color: maroonPrimary, 
          fontSize: "32px",
          fontWeight: "800"
        }}>
          Book a Vedic Ceremony
        </h2>

        <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>
          Fill in the details below. Guruji will contact you for confirmation.
        </p>

        <label style={labelStyle}>Full Name *</label>
        <input
          name="name"
          placeholder="Your Name"
          style={fieldStyle}
          onChange={handleChange}
          onBlur={autofill}
          onFocus={(e) => e.target.style.borderColor = maroonPrimary}
        />

        <label style={labelStyle}>Email Address *</label>
        <input
          name="email"
          type="email"
          value={form.email}
          style={fieldStyle}
          onChange={handleChange}
          onFocus={(e) => e.target.style.borderColor = maroonPrimary}
        />

        <label style={labelStyle}>Mobile Number *</label>
        <input
          name="phone"
          value={form.phone}
          style={fieldStyle}
          onChange={handleChange}
          onFocus={(e) => e.target.style.borderColor = maroonPrimary}
        />

        <label style={labelStyle}>Select Service *</label>
        <select
          name="service"
          style={fieldStyle}
          onChange={handleChange}
        >
          <option value="">-- Choose a Service --</option>
          <option>Wedding Ceremony</option>
          <option>Engagement Puja</option>
          <option>Birthday Abhishek</option>
          <option>Other</option>
        </select>

        <label style={labelStyle}>Preferred Date *</label>
        <input type="date" name="date" style={fieldStyle} onChange={handleChange} />

        <label style={labelStyle}>Address *</label>
        <textarea name="address" rows="3" style={fieldStyle} onChange={handleChange} />

        <div style={{
          marginTop: "30px",
          padding: "15px",
          background: "rgba(128,0,0,0.04)",
          borderRadius: "10px",
          display: "flex",
          gap: "12px",
          alignItems: "center"
        }}>
          <input 
            type="checkbox" 
            name="birthdayAbhishek" 
            checked={form.birthdayAbhishek} 
            onChange={handleChange} 
            style={{ width: '20px', height: '20px', accentColor: maroonPrimary }}
          />
          <span style={{ fontSize: "14px", color: "#444" }}>Request special Birthday Abhishek every year</span>
        </div>

        <button
          onClick={submit}
          style={{
            width: "100%",
            marginTop: "40px",
            padding: "18px",
            background: maroonGradient,
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontWeight: "700",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0 10px 20px rgba(128,0,0,0.2)",
            transition: "transform 0.2s"
          }}
          onMouseEnter={(e) => e.target.style.transform = "scale(1.01)"}
          onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
        >
          SUBMIT BOOKING REQUEST
        </button>
      </div>
    </div>
  );
}