import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulasi delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (login(email, password)) {
      navigate("/dashboard");
    } else {
      setError("Email atau password salah!");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center justify-center">
            🧺 Laundry App
          </h2>
          <p className="text-center text-sm text-base-content/60 mb-4">
            Masuk ke dashboard
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Alert Error */}
            {error && (
              <div className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="admin@mail.com"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Lupa password?
                </a>
              </label>
            </div>

            {/* Button */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Memproses...
                  </>
                ) : (
                  "Masuk"
                )}
              </button>
            </div>
          </form>

          <div className="divider text-sm">ATAU</div>

          <button className="btn btn-outline btn-sm">
            Daftar Akun Baru
          </button>
        </div>
      </div>
    </div>
  );
}
