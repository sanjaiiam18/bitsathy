"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollDownButton from "@/components/ScrollDownButton";

export default function GymnasiumPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeZone, setActiveZone] = useState(0);

  // BMI Calculator States
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const [recommendation, setRecommendation] = useState("");

  // Timing tab state
  const [activeTimingTab, setActiveTimingTab] = useState("boys");

  // Gym Zones Data
  const zones = [
    {
      title: "Cardio Arena",
      desc: "Equipped with state-of-the-art motor-driven treadmills, cross-trainers, stationary rowing cycles, and step mills. Perfect for developing cardiovascular capacity and stamina.",
      equipment: ["15+ Smart Treadmills", "10 Cross Trainers", "5 Indoor Rowers", "Heart Rate Monitors"],
      color: "from-brand-blue to-cyan-500",
      accent: "text-brand-blue"
    },
    {
      title: "Strength Power Cage",
      desc: "For serious hypertrophy and strength conditioning. Features multiple multi-station power cages, Olympic benches, squat platforms, and free weights up to 50kg.",
      equipment: ["4 Squat Racks", "Olympic Barbell sets", "Dumbbells (2.5kg - 50kg)", "Cable Crossover Stations"],
      color: "from-brand-orange to-red-500",
      accent: "text-brand-orange"
    },
    {
      title: "Group Aerobics & Yoga Studio",
      desc: "A spacious wooden-floored studio for core training, flexibility workouts, group yoga classes, and aerobics guided by resident coaches.",
      equipment: ["Premium Yoga Mats", "Gymnastic Swiss Balls", "Resistance Bands", "Surround Sound Audio"],
      color: "from-brand-purple to-pink-500",
      accent: "text-brand-purple"
    },
    {
      title: "CrossFit & Functional Arena",
      desc: "High-intensity functional conditioning floor equipped with battle ropes, kettlebells, medicine balls, plyometric boxes, and suspension trainers.",
      equipment: ["Battle Ropes", "3 Plyo Boxes", "Kettlebells (4kg - 32kg)", "Suspension TRX Rigs"],
      color: "from-emerald-500 to-teal-500",
      accent: "text-emerald-600"
    }
  ];

  // BMI calculation logic
  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) return;
    
    const heightInMeters = parseFloat(height) / 100;
    const bmiVal = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(1);
    setBmiResult(bmiVal);

    let cat = "";
    let rec = "";
    if (bmiVal < 18.5) {
      cat = "Underweight";
      rec = "Focus on a calorie-surplus diet combined with progressive hypertrophy strength training at our Strength Zone. Restrict high-intensity cardio to 1 session per week.";
    } else if (bmiVal >= 18.5 && bmiVal < 24.9) {
      cat = "Normal Weight";
      rec = "Excellent! Maintain your fitness with a balanced 4-day split: 2 days of strength training, 1 day of high-intensity CrossFit, and 1 session of cardiovascular cardio.";
    } else if (bmiVal >= 25 && bmiVal < 29.9) {
      cat = "Overweight";
      rec = "Incorporate 3 sessions of high-intensity interval training (HIIT) in our Cardio/CrossFit zones, coupled with compound strength exercises to preserve lean muscle.";
    } else {
      cat = "Obese";
      rec = "Start with low-impact cardio work (incline treadmill walking, stationary rowing) for 30 mins daily. Integrate basic bodyweight mobility drills at our Yoga studio.";
    }
    setBmiCategory(cat);
    setRecommendation(rec);
  };

  const clearCalculator = () => {
    setWeight("");
    setHeight("");
    setBmiResult(null);
    setBmiCategory("");
    setRecommendation("");
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-orange selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Decorative Blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none -z-10" />

      {/* Hero Showcase Section with Video Player */}
      <section className="relative h-[100vh] bg-white border-b border-slate-200 overflow-hidden flex items-center justify-center">
        {/* Background Video element */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c02af00ba84ebb84d7e54100c7e73b22&profile_id=139&oauth2_token_id=57447761"
          autoPlay={isPlaying}
          muted
          loop
          playsInline
        />
        
        {/* Light overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/70 to-white/95 z-10 backdrop-blur-[1px]" />
 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center text-slate-900 flex flex-col items-center reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              Live Tour & Showcase
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black mb-6 tracking-tight max-w-4xl leading-tight text-slate-900">
            State-of-the-Art <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue">Gymnasium Hub</span>
          </h1>
          
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg mb-8 font-medium leading-relaxed">
            Take a visual tour inside the BIT Sathy main gymnasium. Featuring over 5,000 sq ft of indoor functional workouts, 
            premium international equipment, and expert trainers.
          </p>

          {/* Interactive Video Controller */}
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-8 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange/95 text-white font-bold transition-all shadow-lg shadow-brand-orange/20 flex items-center gap-2 text-sm uppercase tracking-wider scale-105 hover:scale-110 active:scale-100"
            >
              {isPlaying ? (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                  </svg>
                  Pause Loop
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Play Promo Video
                </>
              )}
            </button>
          </div>

          <ScrollDownButton className="mt-8" />
        </div>
      </section>

      {/* Gym Stats Grid */}
      <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-20 reveal-scale">
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-100 text-center">
          <div className="flex flex-col justify-center p-2">
            <span className="text-4xl font-extrabold text-brand-blue">5,000+</span>
            <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mt-2">Sq. Ft. Area</span>
          </div>
          <div className="flex flex-col justify-center p-2 pt-6 sm:pt-2">
            <span className="text-4xl font-extrabold text-brand-orange">60+</span>
            <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mt-2">Workout Stations</span>
          </div>
          <div className="flex flex-col justify-center p-2 pt-6 lg:pt-2">
            <span className="text-4xl font-extrabold text-brand-purple">4</span>
            <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mt-2">Certified Trainers</span>
          </div>
          <div className="flex flex-col justify-center p-2 pt-6 lg:pt-2">
            <span className="text-4xl font-extrabold text-emerald-600">24/7</span>
            <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mt-2">Air Conditioned</span>
          </div>
        </div>
      </section>

      {/* Interactive Gym Zones Showcase */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Interactive Selector */}
          <div className="lg:col-span-5 space-y-6 reveal-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-2">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                Explore The Facility
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Interactive Training <span className="text-brand-purple">Zones</span>
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
              Click on the workout zones below to inspect the equipment and amenities setup in each section of the gymnasium.
            </p>

            <div className="flex flex-col gap-3">
              {zones.map((zone, index) => (
                <button
                  key={index}
                  onClick={() => setActiveZone(index)}
                  className={`p-5 rounded-2xl text-left border transition-all duration-300 flex items-center justify-between group ${
                    activeZone === index
                      ? "bg-white border-brand-blue shadow-lg scale-[1.02]"
                      : "bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <div>
                    <h4 className={`font-extrabold text-base transition-colors ${
                      activeZone === index ? "text-brand-blue" : "text-slate-800"
                    }`}>
                      {zone.title}
                    </h4>
                  </div>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    activeZone === index ? "bg-brand-blue text-white" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                  }`}>
                    &rarr;
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Focal Card */}
          <div className="lg:col-span-7 reveal-right">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl relative overflow-hidden transition-all duration-500">
              {/* Colored Glow Accent at top */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${zones[activeZone].color}`} />

              <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-100 shadow-inner mb-6">
                <img
                  src="/gym_showcase.png"
                  alt="BIT Sathy Gymnasium Interior"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider`}>
                  BIT Main Gym Floor
                </div>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                {zones[activeZone].title}
              </h3>
              
              <p className="text-slate-655 text-sm sm:text-base leading-relaxed font-semibold mb-6">
                {zones[activeZone].desc}
              </p>

              <div className="border-t border-slate-100 pt-6">
                <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase tracking-wider mb-4">
                  Equipment Config:
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {zones[activeZone].equipment.map((eq, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-slate-600 font-medium text-xs sm:text-sm">
                      <svg className={`w-4 h-4 shrink-0 ${zones[activeZone].accent}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{eq}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Student Fitness Tools (BMI & Routine Suggester) */}
      <section className="py-20 bg-slate-100/60 border-y border-slate-200/60 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/5 border border-brand-orange/10 mb-4">
              <span className="text-xs font-bold tracking-widest text-brand-orange uppercase">
                Student Health Desk
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Get Your Custom <span className="text-brand-blue">Gym Workout Recommendation</span>
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-semibold">
              Enter your metrics below to calculate your Body Mass Index (BMI) and generate a tailored training routing 
              using our specialized campus machinery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Input Form Card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md flex flex-col justify-between">
              <form onSubmit={calculateBMI} className="space-y-6">
                <h4 className="font-extrabold text-slate-900 text-lg mb-2">Calculate BMI</h4>
                
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Weight (Kilograms)
                  </label>
                  <input
                    type="number"
                    min="30"
                    max="200"
                    required
                    placeholder="e.g. 70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue text-sm font-semibold text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Height (Centimeters)
                  </label>
                  <input
                    type="number"
                    min="100"
                    max="250"
                    required
                    placeholder="e.g. 175"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue text-sm font-semibold text-slate-800"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-6 rounded-xl bg-brand-blue text-white font-bold text-sm shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    Generate Routine
                  </button>
                  {bmiResult && (
                    <button
                      type="button"
                      onClick={clearCalculator}
                      className="px-4 py-3 rounded-xl border border-slate-200 text-slate-500 font-bold text-sm hover:bg-slate-50"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </form>

              <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-400 font-medium">
                Note: This calculator operates on the metric standard BMI scale. Consult resident gym trainers for detailed dietary plans.
              </div>
            </div>

            {/* Results Display Box */}
            <div className="lg:col-span-7 flex">
              {bmiResult ? (
                <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md flex-1 flex flex-col justify-between animate-fadeIn">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-6">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block mb-1">Your Calculated BMI</span>
                        <span className="text-5xl font-black text-brand-blue">{bmiResult}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block mb-1">Weight Classification</span>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          bmiCategory === "Normal Weight"
                            ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                            : "bg-amber-50 text-amber-600 border border-amber-100"
                        }`}>
                          {bmiCategory}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h5 className="font-extrabold text-slate-900 text-sm sm:text-base">Custom Gymnasium Routine:</h5>
                      <p className="text-slate-655 text-sm sm:text-base leading-relaxed font-semibold">
                        {recommendation}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4 bg-slate-50 -mx-8 -mb-8 p-8 rounded-b-3xl">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 text-brand-orange">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                      Show this screen to our trainers at the <strong>Strength Desk</strong> or <strong>Cardio Desk</strong> to configure your daily tracking log cards.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-8 rounded-3xl bg-slate-100 border border-slate-200 border-dashed flex-1 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 mb-4 shadow-sm">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-extrabold text-slate-800 text-lg mb-2">Calculator Idle</h4>
                  <p className="text-slate-500 text-sm max-w-sm font-semibold leading-relaxed">
                    Please input your weight and height metrics on the left panel to output your custom gymnasium training recommendation.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gym Timings & Booking Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Timings */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-extrabold text-xl text-slate-900 mb-6 tracking-tight">Gymnasium Slots & Timings</h3>
            
            <div className="flex border-b border-slate-150 mb-6">
              {["boys", "girls", "faculty"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTimingTab(tab)}
                  className={`px-5 py-3 text-sm font-bold capitalize transition-all border-b-2 -mb-[2px] ${
                    activeTimingTab === tab
                      ? "border-brand-blue text-brand-blue font-black"
                      : "border-transparent text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTimingTab === "boys" && (
              <div className="space-y-4 font-semibold text-slate-655 text-sm">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <span>Morning Workout Slot</span>
                  <span className="text-brand-blue font-black">06:00 AM - 08:30 AM</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <span>Evening Workout Slot</span>
                  <span className="text-brand-blue font-black">04:30 PM - 07:30 PM</span>
                </div>
              </div>
            )}

            {activeTimingTab === "girls" && (
              <div className="space-y-4 font-semibold text-slate-655 text-sm">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <span>Morning Workout Slot</span>
                  <span className="text-brand-purple font-black">06:30 AM - 08:30 AM</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <span>Evening Workout Slot</span>
                  <span className="text-brand-purple font-black">04:00 PM - 06:30 PM</span>
                </div>
              </div>
            )}

            {activeTimingTab === "faculty" && (
              <div className="space-y-4 font-semibold text-slate-655 text-sm">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <span>Morning Workout Slot</span>
                  <span className="text-brand-orange font-black">06:00 AM - 08:00 AM</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <span>Evening Workout Slot</span>
                  <span className="text-brand-orange font-black">05:00 PM - 07:00 PM</span>
                </div>
              </div>
            )}
          </div>

          {/* Guidelines */}
          <div className="lg:col-span-5 bg-gradient-to-tr from-brand-blue/5 to-slate-100 p-8 rounded-3xl border border-slate-200">
            <h3 className="font-extrabold text-xl text-slate-900 mb-6 tracking-tight">Gym Rules & Etiquette</h3>
            <ul className="space-y-4 text-slate-600 font-semibold text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Sports Attire Required</strong>: T-shirt, tracks, and clean indoor athletic shoes must be worn. Jeans/sandals strictly banned.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Sanitation</strong>: Wipe down machines after use using the sanitize sprays available at each station. Bring a personal sweat towel.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Re-rack Weights</strong>: Return dumbbells, barbells, and plates to their racks after completing your sets.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
