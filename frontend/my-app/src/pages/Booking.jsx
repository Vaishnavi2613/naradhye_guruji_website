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

  const today = new Date().toISOString().split("T")[0];

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
    if (form.dob && form.dob > today) {
      alert("Date of Birth cannot be in the future.");
      return;
    }

    if (form.date < today) {
      alert("Preferred ceremony date cannot be in the past.");
      return;
    }

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
    <div
      style={{
        background: "linear-gradient(135deg, #fffaf0 0%, #fdf2f2 100%)",
        minHeight: "100vh",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "50px 45px",
          borderRadius: "20px",
          boxShadow: "0 20px 60px rgba(128,0,0,0.1)",
          position: "relative",
        }}
      >
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
            border: "6px solid white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "30px", height: "30px", border: "2px solid white", borderRadius: "50%" }} />
        </div>

        <h2
          style={{
            textAlign: "center",
            marginTop: "30px",
            color: maroonPrimary,
            fontSize: "32px",
            fontWeight: "800",
          }}
        >
          Book a Vedic Ceremony
        </h2>

        <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>
          Fill in the details below. Guruji will contact you for confirmation.
        </p>

        <label style={labelStyle}>Full Name *</label>
        <input name="name" style={fieldStyle} onChange={handleChange} onBlur={autofill} />

        <label style={labelStyle}>Email Address *</label>
        <input name="email" type="email" value={form.email} style={fieldStyle} onChange={handleChange} />

        <label style={labelStyle}>Mobile Number *</label>
        <input name="phone" value={form.phone} style={fieldStyle} onChange={handleChange} />

        <label style={labelStyle}>Select Service *</label>
        <select name="service" style={fieldStyle} onChange={handleChange}>
          <option value="">-- Choose a Service --</option>
          <option>Wedding Ceremony</option>
          <option>Engagement Puja</option>
          <option>Birthday Abhishek</option>
          <option>Other</option>
        </select>

        <label style={labelStyle}>Date of Birth</label>
        <input
          type="date"
          name="dob"
          max={today}
          value={form.dob}
          style={fieldStyle}
          onChange={handleChange}
        />

        <label style={labelStyle}>Preferred Date *</label>
        <input
          type="date"
          name="date"
          min={today}
          style={fieldStyle}
          onChange={handleChange}
        />

        <label style={labelStyle}>Address *</label>
        <textarea name="address" rows="3" style={fieldStyle} onChange={handleChange} />

        <div style={{ marginTop: "30px", display: "flex", gap: "12px", alignItems: "center" }}>
          <input
            type="checkbox"
            name="birthdayAbhishek"
            checked={form.birthdayAbhishek}
            onChange={handleChange}
            style={{ width: "20px", height: "20px", accentColor: maroonPrimary }}
          />
          <span>Request special Birthday Abhishek every year</span>
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
          }}
        >
          SUBMIT BOOKING REQUEST
        </button>
      </div>
    </div>
  );
}
