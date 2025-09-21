// client/src/Pages/Admin/AdminLogin.jsx

import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login clicked!");
    navigate("/admin/dashboard"); // ✅ go to dashboard
  };

  return (
    <div className="font-display min-h-screen flex flex-col bg-[#152111]">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3 text-white">
              {/* Logo */}
              <svg
                className="h-8 w-8 text-[#4cdf20]"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236Z"
                  fill="currentColor"
                />
              </svg>
              <h1 className="text-xl font-bold">AgriAdmin</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="text-center text-3xl font-bold tracking-tight text-white">
              Welcome to AgriAdmin
            </h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              Secure login for District and State Admins
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email */}
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                className="block w-full rounded-lg border border-white/20 bg-[#152111] px-4 py-3 text-white placeholder-gray-400 focus:border-[#4cdf20] focus:ring-[#4cdf20]"
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="block w-full rounded-lg border border-white/20 bg-[#152111] px-4 py-3 text-white placeholder-gray-400 focus:border-[#4cdf20] focus:ring-[#4cdf20]"
              />
            </div>

            {/* Role */}
            <div>
              <select
                id="role"
                className="block w-full rounded-lg border border-white/20 bg-[#152111] px-4 py-3 text-white focus:border-[#4cdf20] focus:ring-[#4cdf20]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option>District Admin</option>
                <option>State Admin</option>
              </select>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-lg bg-[#3ac71d] px-4 py-3 text-sm font-semibold text-white hover:bg-[#34b31a] focus:outline-none focus:ring-2 focus:ring-[#4cdf20] focus:ring-offset-2"
              >
                Login
              </button>
            </div>

            {/* Forgot Password */}
            <div className="text-center">
              <a
                href="#"
                className="text-sm font-medium text-[#4cdf20] hover:text-[#6ef542]"
              >
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
