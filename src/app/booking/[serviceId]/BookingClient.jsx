"use client";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { useSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";

export default function BookingClient({ serviceId }) {
  const { data: session, status } = useSession();
  /* ------------------ State ------------------ */
  const [serviceCenters, setServiceCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ------------------ Duration ------------------ */
  const [durationType, setDurationType] = useState("hour");
  const [durationValue, setDurationValue] = useState(1);

  // service details
  const [serviceName, setServiceName] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(
          `https://care-house-server.vercel.app/services/${serviceId}`
        );
        const data = await res.json();

        setServiceName(data.serviceName);
        setImage(data.image);
      } catch (err) {
        console.error("Failed to load service", err);
      }
    };

    if (serviceId) fetchService();
  }, [serviceId]);

  /* ------------------ Location ------------------ */
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");

  /* ------------------ Pricing ------------------ */
  const PRICE_PER_HOUR = 300;
  const PRICE_PER_DAY = 2000;

  const totalCost =
    durationType === "day"
      ? durationValue * PRICE_PER_DAY
      : durationValue * PRICE_PER_HOUR;

  /* ------------------ Fetch service centers ------------------ */
  useEffect(() => {
    const loadCenters = async () => {
      try {
        const res = await fetch("/serviceCenters.json");
        if (!res.ok) throw new Error("Failed to load service centers");
        const data = await res.json();
        setServiceCenters(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCenters();
  }, []);

  /* ------------------ Derived data ------------------ */
  const regions = useMemo(
    () => [...new Set(serviceCenters.map((s) => s.region))],
    [serviceCenters]
  );

  const districts = useMemo(
    () =>
      serviceCenters.filter((s) => s.region === region).map((s) => s.district),
    [serviceCenters, region]
  );

  const cities = useMemo(
    () =>
      serviceCenters
        .filter((s) => s.region === region && s.district === district)
        .map((s) => s.city),
    [serviceCenters, region, district]
  );

  const areas = useMemo(() => {
    const found = serviceCenters.find(
      (s) => s.region === region && s.district === district && s.city === city
    );
    return found?.covered_area || [];
  }, [serviceCenters, region, district, city]);

  /* ------------------ Confirm Booking ------------------ */
  const handleConfirmBooking = async () => {
    if (!region || !district || !city || !area)
      return alert("Complete location");

    if (!session?.user?.email) {
      return alert("You must be logged in to book");
    }

    const bookingData = {
      serviceId,
      serviceName,
      image,
      durationType,
      durationValue,
      totalCost,
      date: new Date(),
      user: {
        name: session.user.name,
        email: session.user.email,
        phone: session.user.phone || "Not provided",
      },
      location: { region, district, city, area },
    };

    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    });

    if (res.ok) {
      alert("Booking successful! Invoice sent to your email 📧");
      setRegion("");
      setDistrict("");
      setCity("");
      setArea("");
      setDurationType("hour");
      setDurationValue(1);
    } else {
      alert("Error saving booking");
    }
  };

  /* ------------------ UI States ------------------ */
  if (loading) {
    return (
      <div className="section-padding text-center">
        <h2 className="text-xl font-semibold">Loading service areas...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section-padding text-center text-red-500">{error}</div>
    );
  }

  /* ------------------ UI ------------------ */
  return (
    <div>
      <Navbar />
      <section className="section-padding max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center">
          Book Your Care Service
        </h1>

        {/* Step 1 */}
        <div className="glass-card p-6 space-y-4">
          <h2 className="text-xl font-semibold">1. Select Duration</h2>
          <div className="flex gap-4">
            <select
              className="select"
              value={durationType}
              onChange={(e) => setDurationType(e.target.value)}
            >
              <option value="hour">Hourly</option>
              <option value="day">Daily</option>
            </select>

            <input
              type="number"
              min={1}
              className="input"
              value={durationValue}
              onChange={(e) => setDurationValue(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="glass-card p-6 space-y-4">
          <h2 className="text-xl font-semibold">2. Select Location</h2>

          <select
            className="select w-full"
            value={region}
            onChange={(e) => {
              setRegion(e.target.value);
              setDistrict("");
              setCity("");
              setArea("");
            }}
          >
            <option value="">Select Region</option>
            {regions.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>

          <select
            className="select w-full"
            disabled={!region}
            value={district}
            onChange={(e) => {
              setDistrict(e.target.value);
              setCity("");
              setArea("");
            }}
          >
            <option value="">Select District</option>
            {districts.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>

          <select
            className="select w-full"
            disabled={!district}
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              setArea("");
            }}
          >
            <option value="">Select City</option>
            {cities.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <select
            className="select w-full"
            disabled={!city}
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="">Select Area</option>
            {areas.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </div>

        {/* Step 3 */}
        <div className="glass-card p-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold">3. Total Cost</h2>
          <p className="text-2xl font-bold text-emerald-600">৳{totalCost}</p>
        </div>

        {/* Step 4 */}
        <button
          disabled={!serviceName}
          onClick={handleConfirmBooking}
          className="w-full py-4 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700"
        >
          Confirm Booking
        </button>
      </section>
      <Footer />
    </div>
  );
}
