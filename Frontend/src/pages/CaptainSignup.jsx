import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignup = () => {

  const [step, setStep] = useState(1);

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };


  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center p-5 md:p-10"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1638745392689-515e499a3711?q=80&w=1170&auto=format&fit=crop')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>

      <div className="relative z-10 w-full md:max-w-100 mx-auto bg-white p-8 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-transparent md:border-gray-100 transition-all">
        <div>
          <h1 className="text-2xl mb-6 font-bold flex items-center gap-2 md:text-[26px]">
            Uber{" "}
            <span className="text-[10px] bg-black text-white px-2 py-0.5 rounded uppercase tracking-tighter">
              Captain
            </span>
          </h1>

          <form onSubmit={step === 1 ? handleNext : null}>
            {step === 1 ? (
              <>
                <h3 className="text-lg font-bold mb-1 text-gray-900 md:text-xl">
                  Get Started
                </h3>
                <p className="text-gray-400 text-[13px] mb-6 leading-tight">
                  Register to start earning with Uber.
                </p>

                <h3 className="text-sm font-semibold mb-2 text-gray-800">
                  What's your name?
                </h3>
                <div className="flex gap-3 mb-5">
                  <input
                    required
                    className="bg-[#f2f2f2] w-1/2 rounded-lg px-4 py-2.5 border-none text-base placeholder:text-gray-400 outline-none focus:bg-[#ebebeb] transition-all"
                    type="text"
                    placeholder="First name"
                  />
                  <input
                    required
                    className="bg-[#f2f2f2] w-1/2 rounded-lg px-4 py-2.5 border-none text-base placeholder:text-gray-400 outline-none focus:bg-[#ebebeb] transition-all"
                    type="text"
                    placeholder="Last name"
                  />
                </div>

                <h3 className="text-sm font-semibold mb-2 text-gray-800">
                  Registered Email
                </h3>
                <input
                  required
                  className="bg-[#f2f2f2] mb-5 rounded-lg px-4 py-2.5 border-none w-full text-base placeholder:text-gray-400 outline-none focus:bg-[#ebebeb] transition-all"
                  type="email"
                  placeholder="email@example.com"
                />

                <h3 className="text-sm font-semibold mb-2 text-gray-800">
                  Create a Password
                </h3>
                <input
                  required
                  className="bg-[#f2f2f2] mb-6 rounded-lg px-4 py-2.5 border-none w-full text-base placeholder:text-gray-400 outline-none focus:bg-[#ebebeb] transition-all"
                  type="password"
                  placeholder="At least 6 characters"
                />

                <button className="bg-black text-white font-semibold mb-4 rounded-lg px-4 py-3 w-full text-base hover:bg-zinc-800 transition-colors">
                  Continue <span>&rarr;</span>
                </button>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <button
                    onClick={() => setStep(1)}
                    type="button"
                    className="text-blue-600 text-xs font-semibold hover:underline"
                  >
                    ← Back
                  </button>
                  <h3 className="text-lg font-bold text-gray-900 md:text-xl">
                    Vehicle Details
                  </h3>
                </div>

                <div className="flex gap-3 mb-4">
                  <div className="w-1/2">
                    <h3 className="text-sm font-semibold mb-2 text-gray-800">
                      Color
                    </h3>
                    <input
                      required
                      className="bg-[#f2f2f2] w-full rounded-lg px-4 py-2.5 border-none text-base outline-none focus:bg-[#ebebeb] transition-all"
                      type="text"
                      placeholder="e.g. Black"
                    />
                  </div>
                  <div className="w-1/2">
                    <h3 className="text-sm font-semibold mb-2 text-gray-800">
                      Plate
                    </h3>
                    <input
                      required
                      className="bg-[#f2f2f2] w-full rounded-lg px-4 py-2.5 border-none text-base outline-none focus:bg-[#ebebeb] transition-all"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex gap-3 mb-8">
                  <div className="w-1/2">
                    <h3 className="text-sm font-semibold mb-2 text-gray-800">
                      Capacity
                    </h3>
                    <input
                      required
                      className="bg-[#f2f2f2] w-full rounded-lg px-4 py-2.5 border-none text-base outline-none focus:bg-[#ebebeb] transition-all"
                      type="number"
                      placeholder="4"
                    />
                  </div>
                  <div className="w-1/2">
                    <h3 className="text-sm font-semibold mb-2 text-gray-800">
                      Type
                    </h3>
                    <select
                      required
                      className="bg-[#f2f2f2] w-full rounded-lg px-4 py-2.75 border-none text-base outline-none focus:bg-[#ebebeb] transition-all"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="car">Car</option>
                      <option value="auto">Auto</option>
                      <option value="motorcycle">Moto</option>
                    </select>
                  </div>
                </div>

                <button
                  className="bg-[#10b461] text-white font-semibold mb-4 rounded-lg px-4 py-3 w-full text-base hover:bg-[#0e9e55] transition-colors"
                >
                  Create Account
                </button>
              </>
            )}

            <p className="text-center text-[13px] text-gray-500">
              Already driving with us?{" "}
              <Link
                to="/captain-login"
                className="text-blue-600 font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>

        <div className="mt-8">
          <p className="text-[11px] text-gray-400 leading-tight text-center">
            By proceeding, you agree to Uber's Terms and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CaptainSignup