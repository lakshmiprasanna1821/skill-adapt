import { useState } from "react";
import { useNavigate } from "react-router-dom";
import C from "../constants/colors";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    employeeId: "",
    designation: "",
    userType: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.employeeId.trim()) {
      newErrors.employeeId = "Employee ID is required";
    }
    if (!formData.designation.trim()) {
      newErrors.designation = "Designation is required";
    }
    if (!formData.userType) {
      newErrors.userType = "Please select who you are";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Update stats based on registration
    const currentStats = JSON.parse(localStorage.getItem("stats") || '{"totalUsers": 0, "recruiters": 0, "learners": 0}');
    currentStats.totalUsers += 1;
    if (formData.userType === "recruiter") {
      currentStats.recruiters += 1;
    } else if (formData.userType === "learner") {
      currentStats.learners += 1;
    }
    localStorage.setItem("stats", JSON.stringify(currentStats));

    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/");
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: C.surface,
      padding: "2rem",
    }}>
      <div style={{
        background: C.white,
        borderRadius: 16,
        padding: "3rem",
        boxShadow: "0 20px 48px rgba(26,18,8,0.1)",
        border: `1px solid ${C.border}`,
        maxWidth: 400,
        width: "100%",
      }}>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "2rem",
          color: C.ink,
          textAlign: "center",
          marginBottom: "2rem",
        }}>
          Register
        </h2>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <label style={{
              display: "block",
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: C.ink,
              marginBottom: "0.5rem",
            }}>
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: `1px solid ${errors.name ? "#e74c3c" : C.border}`,
                borderRadius: 8,
                fontSize: "1rem",
                fontFamily: "'Syne', sans-serif",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              placeholder="Enter your name"
            />
            {errors.name && (
              <div style={{
                color: "#e74c3c",
                fontSize: "0.8rem",
                marginTop: "0.25rem",
                fontFamily: "'Syne', sans-serif",
              }}>
                {errors.name}
              </div>
            )}
          </div>

          <div>
            <label style={{
              display: "block",
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: C.ink,
              marginBottom: "0.5rem",
            }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: `1px solid ${errors.email ? "#e74c3c" : C.border}`,
                borderRadius: 8,
                fontSize: "1rem",
                fontFamily: "'Syne', sans-serif",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              placeholder="Enter your email"
            />
            {errors.email && (
              <div style={{
                color: "#e74c3c",
                fontSize: "0.8rem",
                marginTop: "0.25rem",
                fontFamily: "'Syne', sans-serif",
              }}>
                {errors.email}
              </div>
            )}
          </div>

          <div>
            <label style={{
              display: "block",
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: C.ink,
              marginBottom: "0.5rem",
            }}>
              Employee ID
            </label>
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: `1px solid ${errors.employeeId ? "#e74c3c" : C.border}`,
                borderRadius: 8,
                fontSize: "1rem",
                fontFamily: "'Syne', sans-serif",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              placeholder="Enter your employee ID"
            />
            {errors.employeeId && (
              <div style={{
                color: "#e74c3c",
                fontSize: "0.8rem",
                marginTop: "0.25rem",
                fontFamily: "'Syne', sans-serif",
              }}>
                {errors.employeeId}
              </div>
            )}
          </div>

          <div>
            <label style={{
              display: "block",
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: C.ink,
              marginBottom: "0.5rem",
            }}>
              Designation
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: `1px solid ${errors.designation ? "#e74c3c" : C.border}`,
                borderRadius: 8,
                fontSize: "1rem",
                fontFamily: "'Syne', sans-serif",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              placeholder="Enter your designation"
            />
            {errors.designation && (
              <div style={{
                color: "#e74c3c",
                fontSize: "0.8rem",
                marginTop: "0.25rem",
                fontFamily: "'Syne', sans-serif",
              }}>
                {errors.designation}
              </div>
            )}
          </div>

          <div>
            <label style={{
              display: "block",
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: C.ink,
              marginBottom: "0.5rem",
            }}>
              Who are you?
            </label>
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: `1px solid ${errors.userType ? "#e74c3c" : C.border}`,
                borderRadius: 8,
                fontSize: "1rem",
                fontFamily: "'Syne', sans-serif",
                outline: "none",
                transition: "border-color 0.2s",
                background: C.white,
                cursor: "pointer",
              }}
            >
              <option value="">Select an option</option>
              <option value="recruiter">I'm a recruiter</option>
              <option value="learner">I'm a learner</option>
            </select>
            {errors.userType && (
              <div style={{
                color: "#e74c3c",
                fontSize: "0.8rem",
                marginTop: "0.25rem",
                fontFamily: "'Syne', sans-serif",
              }}>
                {errors.userType}
              </div>
            )}
          </div>

          <button
            type="submit"
            style={{
              background: C.amber,
              color: C.ink,
              border: "none",
              borderRadius: 8,
              padding: "0.75rem",
              fontSize: "1rem",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
              marginTop: "1rem",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(245,130,31,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}