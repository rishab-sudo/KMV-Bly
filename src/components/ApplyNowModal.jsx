import { useState } from "react";
import Swal from "sweetalert2";

export default function ApplyNowModal({ isOpen, onClose }) {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "", email: "", mobile: "", qualification: "", course: "", address: "",
  });

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!/^[6-9]\d{9}$/.test(form.mobile)) e.mobile = "Enter a valid 10-digit mobile number";
    if (!form.qualification) e.qualification = "Select your qualification";
    if (!form.course) e.course = "Select a course";
    if (form.address.trim().length < 10) e.address = "Enter your full address";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async () => {
    if (!validate()) {
      Swal.fire({ icon: "warning", title: "Oops!", text: "Please fill all fields correctly.", confirmButtonColor: "#1a73e8" });
      return;
    }

    Swal.fire({ title: "Submitting...", allowOutsideClick: false, didOpen: () => Swal.showLoading() });

    try {
      const res = await fetch("/send-application.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Application Submitted!",
          html: `Thank you <b>${form.name}</b>!<br/>We've received your application for <b>${form.course}</b>.<br/>We'll contact you at <b>${form.email}</b> soon.`,
          confirmButtonColor: "#1a73e8",
        }).then(() => {
          onClose();
          setForm({ name: "", email: "", mobile: "", qualification: "", course: "", address: "" });
          setErrors({});
        });
      } else {
        Swal.fire({ icon: "error", title: "Failed!", text: "Something went wrong. Please try again.", confirmButtonColor: "#e53e3e" });
      }
    } catch {
      Swal.fire({ icon: "error", title: "Error!", text: "Network error. Please try again.", confirmButtonColor: "#e53e3e" });
    }
  };

  if (!isOpen) return null;

  const inputStyle = (field) => ({
    width: "100%",
    padding: ".65rem .9rem",
    border: `1.5px solid ${errors[field] ? "#e53e3e" : "#d1d5db"}`,
    borderRadius: 8,
    fontSize: ".95rem",
    outline: "none",
    background: "#fafafa",
  });

  const labelStyle = {
    display: "block",
    fontSize: ".78rem",
    fontWeight: 600,
    color: "#374151",
    marginBottom: ".35rem",
    textTransform: "uppercase",
    letterSpacing: ".4px",
  };

  const errorMsg = (field) =>
    errors[field] ? (
      <p style={{ fontSize: ".75rem", color: "#e53e3e", marginTop: ".3rem" }}>{errors[field]}</p>
    ) : null;

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,.55)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 9999, padding: "1rem",
      }}
    >
      <div style={{
        background: "#fff", borderRadius: 16, width: "100%",
        maxWidth: 520, maxHeight: "90vh", overflowY: "auto",
      }}>
        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, #4B0A0A, #4B0A0A)",
          color: "#fff", padding: "1.25rem 1.5rem",
          borderRadius: "16px 16px 0 0",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 600 }}>📋 Apply Now</h2>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,.2)", border: "none", color: "#fff",
              width: 32, height: 32, borderRadius: "50%", cursor: "pointer", fontSize: "1.1rem",
            }}
          >✕</button>
        </div>

        {/* Body */}
        <div style={{ padding: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0 1rem" }}>
            {/* Name */}
            <div style={{ marginBottom: "1rem" }}>
              <label style={labelStyle}>Full Name</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Rahul Sharma" style={inputStyle("name")} />
              {errorMsg("name")}
            </div>

            {/* Email */}
            <div style={{ marginBottom: "1rem" }}>
              <label style={labelStyle}>Email Address</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" style={inputStyle("email")} />
              {errorMsg("email")}
            </div>

            {/* Mobile */}
            <div style={{ marginBottom: "1rem" }}>
              <label style={labelStyle}>Mobile Number</label>
              <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="10-digit number" maxLength={10} style={inputStyle("mobile")} />
              {errorMsg("mobile")}
            </div>

            {/* Qualification */}
            <div style={{ marginBottom: "1rem" }}>
              <label style={labelStyle}>Qualification</label>
              <select name="qualification" value={form.qualification} onChange={handleChange} style={inputStyle("qualification")}>
                <option value="">— Select —</option>
                {["10th Pass", "12th Pass", "Graduate", "Post Graduate", "Other"].map((q) => (
                  <option key={q}>{q}</option>
                ))}
              </select>
              {errorMsg("qualification")}
            </div>
          </div>

          {/* Course */}
          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Course</label>
            <select name="course" value={form.course} onChange={handleChange} style={inputStyle("course")}>
              <option value="">— Select Course —</option>
              <option value="BA">BA (Bachelor of Arts)</option>
              <option value="MA">MA (Master of Arts)</option>
            </select>
            {errorMsg("course")}
          </div>

          {/* Address */}
          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Address</label>
            <textarea
              name="address" value={form.address} onChange={handleChange}
              rows={3} placeholder="House no., Street, City, State, PIN"
              style={{ ...inputStyle("address"), resize: "vertical" }}
            />
            {errorMsg("address")}
          </div>

          <button
            onClick={handleSubmit}
            style={{
              width: "100%", padding: ".85rem", background: "#4B0A0A",
              color: "#fff", border: "none", borderRadius: 8,
              fontSize: "1rem", fontWeight: 600, cursor: "pointer",
            }}
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
}