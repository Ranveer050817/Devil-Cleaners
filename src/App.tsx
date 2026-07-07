/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    package: '',
    notes: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Mobile Number is required';
    if (!formData.address.trim()) newErrors.address = 'Complete Address is required';
    if (!formData.date) newErrors.date = 'Preferred Service Date is required';
    if (!formData.package) newErrors.package = 'Please select a package';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    const message = `🧹 New Cleaning Service Booking

👤 Name: ${formData.name}
📞 Mobile Number: ${formData.phone}
📍 Address: ${formData.address}
📅 Preferred Service Date: ${formData.date}
🏠 Selected Package: ${formData.package}

📝 Additional Notes: ${formData.notes || 'None'}

Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917208901545?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100 font-sans selection:bg-red-500/30">

      {/* HERO SECTION */}  
      <section className="bg-gradient-to-br from-red-950/40 via-neutral-950 to-neutral-950 text-white py-20 px-6 border-b border-white/10 relative overflow-hidden">  
        <div className="absolute right-[-10%] top-0 h-full w-[60%] bg-neutral-800 rounded-l-[100px] opacity-30 blur-2xl pointer-events-none"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">  
          <div>  
            {/* LOGO */}  
            <img  
              src="/devillogo.jpg"  
              alt="Devil Cleanerz & Enterprises Logo"  
              className="w-56 mb-6 filter drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]"  
            />  
            
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-6 uppercase">  
              Dirt Has A <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">New Enemy.</span>  
            </h1>  
            
            <p className="text-xl mb-6 text-gray-400 leading-relaxed">  
              Premium Deep Cleaning, Sofa, Bathroom & Complete Home Care for modern spaces across Mumbai. Elite service, ruthless on stains.
            </p>  

            <div className="flex flex-wrap gap-4">  
              <a  
                href="https://wa.me/917208901545?text=Hello%20Devil%20Cleanerz%2C%20I%20want%20to%20book%20a%20cleaning%20service"  
                target="_blank"  
                rel="noopener noreferrer"  
                className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-[0_8px_30px_rgb(22,163,74,0.3)] transition-all flex items-center gap-2 italic"  
              >  
                Chat on WhatsApp  
              </a>  

              <a  
                href="tel:+917208901545"  
                className="border border-white/20 hover:border-red-500 px-8 py-4 rounded-2xl font-bold text-lg transition-all text-center flex items-center justify-center"  
              >  
                Call Now  
              </a>  
            </div>  
          </div>  

          <div className="relative">  
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-600 rounded-[40px] blur-xl opacity-20 animate-pulse"></div>
            <img  
              src="/hero.jpg.jpg"  
              alt="Devil Cleanerz Deep Cleaning Service"  
              className="relative rounded-[40px] shadow-2xl border border-white/5 object-cover w-full h-[450px]"  
            />  
            <div className="absolute -top-4 -right-4 bg-red-600 text-white font-black px-4 py-2 rounded-xl text-sm rotate-6 shadow-xl z-20">
              #1 IN MUMBAI
            </div>
          </div>  
        </div>  
      </section>  

      {/* PRICING BANNER */}  
      <section className="bg-gradient-to-r from-red-600 to-red-800 py-6 px-4 text-center shadow-[0_4px_20px_rgba(220,38,38,0.4)]">  
        <div className="max-w-6xl mx-auto">  
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">  
            🔥 Premium Flat Cleaning Packages 🔥  
          </h2>  
          <p className="text-red-100 text-lg md:text-xl mt-3 font-medium tracking-wide">  
            Affordable Rates & Flawless Execution For Every Mumbai Home  
          </p>  
        </div>  
      </section>  

      {/* STRATEGIC FLAT PACKAGES */}  
      <section className="py-20 px-6 bg-neutral-900 border-t border-white/10">  
        <div className="max-w-6xl mx-auto text-center">  
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-red-500">  
            Signature Packages  
          </h2>  
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">  
            Fully inclusive deep cleaning solutions tailored precisely to your apartment configuration.  
          </p>  

          <div className="grid md:grid-cols-3 gap-8 text-left">  
            {[  
              { title: "1 BHK Deep Clean", price: "₹3,499", image: "/1bhk.jpg", tag: "Essentials" },  
              { title: "2 BHK Deep Clean", price: "₹4,499", image: "/4499.jpg", tag: "Premium" },  
              { title: "3 BHK Deep Clean", price: "₹5,799", image: "/5799.jpg", tag: "Elite" },  
            ].map((service, index) => (  
              <div  
                key={index}  
                className={`bg-neutral-950 rounded-[32px] overflow-hidden shadow-xl flex flex-col transition-all group ${index === 1 ? 'border-2 border-red-600/50 shadow-[0_0_40px_rgba(220,38,38,0.15)] md:scale-105 relative z-10' : 'border border-white/5 hover:border-red-500/50'}`}  
              >  
                {index === 1 && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-red-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase">Most Popular</div>
                )}
                <div className="overflow-hidden h-64 w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent z-10"></div>
                  <img loading="lazy"  
                    src={service.image}  
                    alt={service.title}  
                    className="h-full w-full object-cover group-hover:scale-110 transition duration-700"  
                  />  
                </div>  
                <div className="p-8 pt-0 text-left flex-1 flex flex-col relative z-20 -mt-8">  
                  <div className="flex justify-between items-end mb-2">
                    <span className="bg-red-500/10 text-red-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">{service.tag}</span>
                    <span className="text-3xl font-black text-white">{service.price}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">  
                    {service.title}  
                  </h3>  
                  <p className="text-gray-500 text-sm flex-1 italic mb-4">
                    {index === 0 ? "Living room, bedroom, kitchen, bathroom & dry balcony deep sanitation." : 
                     index === 1 ? "Elite comprehensive cleaning including wall-spotting and floor scrubbing." : 
                     "Ultra-deep multi-room care. Zero corner left untouched. Best for large families."}
                  </p>
                  <a  
                    href={`https://wa.me/917208901545?text=Hello%20Devil%20Cleanerz%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(service.title)}`}
                    target="_blank"  
                    rel="noopener noreferrer"
                    className={`w-full block text-center text-white font-bold py-3 rounded-xl transition-all ${index === 1 ? 'bg-red-600 hover:bg-red-700 font-black shadow-lg' : 'bg-neutral-800 group-hover:bg-red-600'}`}
                  >
                    BOOK NOW
                  </a>
                </div>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>  

      {/* BOOKING / ENQUIRY SECTION */}
      <section className="py-20 px-6 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[50%] h-full bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-neutral-900/80 p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl backdrop-blur-xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
                Book <span className="text-red-500">Service</span>
              </h2>
              <p className="text-gray-400">Fill in the details below to instantly book via WhatsApp.</p>
            </div>
            
            <form onSubmit={handleBooking} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Full Name *</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full bg-neutral-950 border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-red-500'} rounded-xl px-4 py-3 text-white focus:outline-none transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-bold">{errors.name}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Mobile Number *</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={`w-full bg-neutral-950 border ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-red-500'} rounded-xl px-4 py-3 text-white focus:outline-none transition-colors`}
                    placeholder="+91 9876543210"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-bold">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Complete Address *</label>
                <input 
                  type="text" 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className={`w-full bg-neutral-950 border ${errors.address ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-red-500'} rounded-xl px-4 py-3 text-white focus:outline-none transition-colors`}
                  placeholder="Flat No, Building Name, Street, Landmark"
                />
                {errors.address && <p className="text-red-500 text-xs mt-1 font-bold">{errors.address}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Preferred Service Date *</label>
                  <input 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className={`w-full bg-neutral-950 border ${errors.date ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-red-500'} rounded-xl px-4 py-3 text-white focus:outline-none transition-colors`}
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-1 font-bold">{errors.date}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Select Package *</label>
                  <select 
                    value={formData.package}
                    onChange={(e) => setFormData({...formData, package: e.target.value})}
                    className={`w-full bg-neutral-950 border ${errors.package ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-red-500'} rounded-xl px-4 py-3 text-white focus:outline-none transition-colors appearance-none`}
                  >
                    <option value="" disabled>Choose a package</option>
                    <option value="1 BHK Deep Clean – ₹3,499">1 BHK Deep Clean – ₹3,499</option>
                    <option value="2 BHK Deep Clean – ₹4,499">2 BHK Deep Clean – ₹4,499</option>
                    <option value="3 BHK Deep Clean – ₹5,799">3 BHK Deep Clean – ₹5,799</option>
                  </select>
                  {errors.package && <p className="text-red-500 text-xs mt-1 font-bold">{errors.package}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Additional Notes (Optional)</label>
                <textarea 
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full bg-neutral-950 border border-white/10 focus:border-red-500 rounded-xl px-4 py-3 text-white focus:outline-none transition-colors h-24 resize-none"
                  placeholder="Any specific stains, preferred timings, or other instructions?"
                ></textarea>
              </div>

              <div className="pt-4 text-center">
                <button 
                  type="submit" 
                  className="bg-red-600 hover:bg-red-700 text-white font-black px-10 py-4 rounded-xl text-lg shadow-[0_8px_30px_rgb(220,38,38,0.3)] transition-all w-full md:w-auto uppercase tracking-wide"
                >
                  Book Cleaning Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}  
      <section className="py-20 px-6 bg-neutral-950 border-t border-white/5">  
        <div className="max-w-6xl mx-auto">  
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase tracking-tighter">  
            Why Choose <span className="text-red-500">Devil Cleanerz?</span>  
          </h2>  

          <div className="grid md:grid-cols-4 gap-8 text-center">  
            {[  
              "Heavy-Duty Industrial Equipment",  
              "Transparent & Honest Pricing",  
              "Dead-on-Time Execution",  
              "Unmatched Premium Quality",  
            ].map((item, index) => (  
              <div  
                key={index}  
                className="bg-neutral-800/50 p-6 rounded-[40px] border border-white/5 backdrop-blur-sm shadow-2xl flex flex-col justify-center items-center hover:-translate-y-2 transition-transform duration-300"  
              >  
                <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center mb-4 text-red-500 text-xl font-black">
                  0{index + 1}
                </div>
                <h3 className="font-bold text-lg uppercase tracking-tight text-gray-200">  
                  {item}  
                </h3>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>  

      {/* DETAILED SERVICE OVERVIEW TRANSFORMATION */}  
      <section className="py-20 px-6 bg-neutral-900 border-t border-white/10">  
        <div className="max-w-6xl mx-auto text-center">  
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-red-500">  
            Package Inclusions  
          </h2>  
          <p className="text-gray-400 mb-12">  
            Every single package includes precision cleaning across Living Rooms, Bedrooms, Kitchens, Bathrooms, and Balconies.  
          </p>  

          <div className="grid md:grid-cols-2 gap-8">  
            <img loading="lazy"  
              src="/1bhk.jpg"  
              alt="Devil Cleanerz 1 BHK Deep Cleaning Breakdown"  
              className="rounded-[40px] shadow-2xl w-full border border-white/5 object-cover h-[400px]"  
            />  
            <img loading="lazy"  
              src="/4499.jpg"  
              alt="Devil Cleanerz 2 BHK Deep Cleaning Breakdown"  
              className="rounded-[40px] shadow-2xl w-full border border-white/5 object-cover h-[400px]"  
            />  
          </div>  
        </div>  
      </section>  

      {/* TESTIMONIALS */}  
      <section className="py-20 px-6 bg-neutral-950 border-t border-white/5">  
        <div className="max-w-7xl mx-auto">  
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 uppercase tracking-tighter">  
            Demolishing Dirt, <span className="text-red-500">Winning Hearts</span>  
          </h2>  
          <p className="text-gray-400 text-center mb-14">  
            Trusted by households and corporate spaces all across Mumbai ✨  
          </p>  

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">  
            {[  
              { review: "Very professional and swift service. The bathroom deep clean was absolutely top-notch. Completely flawless results!", name: "Rahul Sharma", place: "Powai" },  
              { review: "Booked sofa sanitization and deep care. Extremely impressed. Team arrived exactly on time and worked cleanly.", name: "Sneha Patil", place: "Thane" },  
              { review: "Amazing work by Devil Cleanerz. The kitchen grease and stubborn scaling are completely gone. Highly satisfied.", name: "Imran Khan", place: "Kurla" },  
              { review: "Affordable rates given the phenomenal quality of the work. Our flat looks brand new.", name: "Priya Mehta", place: "Andheri" },  
              { review: "Hardworking team that knows their craft. Handled our sofa cleaning thoroughly and got out old deep set stains.", name: "Akash Verma", place: "Ghatkopar" },  
              { review: "Unmatched standard of clean. Beyond happy with how meticulous they were with every corner.", name: "Neha Joshi", place: "Navi Mumbai" },  
            ].map((item, index) => (  
              <div  
                key={index}  
                className="bg-neutral-900/50 p-8 rounded-[32px] shadow-lg border border-white/5 flex flex-col justify-between hover:border-red-500/30 transition-all"  
              >  
                <div>
                  <div className="text-red-500 text-xl mb-4 tracking-widest">  
                    ★★★★★  
                  </div>  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">  
                    "{item.review}"  
                  </p>  
                </div>
                <div className="font-bold text-white text-sm tracking-wider uppercase border-t border-white/10 pt-4">  
                  — {item.name}, <span className="text-red-500">{item.place}</span>  
                </div>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>  

      {/* CTA SECTION */}  
      <section className="py-20 px-6 bg-gradient-to-br from-red-950/40 via-neutral-950 to-neutral-950 text-white text-center border-t border-white/10 relative overflow-hidden">  
        <div className="max-w-4xl mx-auto relative z-10">  
          <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter">  
            Ready For A Spotless Home?  
          </h2>  
          <p className="text-xl mb-8 text-gray-400">  
            Book an appointment with Devil Cleanerz & Enterprises right now. Clear schedule, superior results.
          </p>  

          <div className="flex flex-wrap justify-center gap-4">  
            <a  
              href="https://wa.me/917208901545?text=Hello%20Devil%20Cleanerz%2C%20I%20want%20to%20book%20a%20cleaning%20service"  
              target="_blank"  
              rel="noopener noreferrer"  
              className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-[0_8px_30px_rgb(22,163,74,0.3)] transition-all italic"  
            >  
              WhatsApp Us  
            </a>  

            <a  
              href="tel:+917208901545"  
              className="border border-white/20 hover:border-red-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all"  
            >  
              Call +91 7208901545  
            </a>  

            <a  
              href="https://www.instagram.com/devil_cleanerz?igsh=MXhjemYxa3Fld2lnMg=="  
              target="_blank"  
              rel="noopener noreferrer"  
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 px-8 py-4 rounded-2xl font-bold shadow-xl text-white transition-all"  
            >  
              Follow @devil_cleanerz  
            </a>  
          </div>  
        </div>  
      </section>  

      {/* FLOATING ACTION BUTTONS */}  
      <a  
        href="https://wa.me/917208901545?text=Hello%20Devil%20Cleanerz%2C%20I%20want%20to%20book%20a%20cleaning%20service"  
        target="_blank"  
        rel="noopener noreferrer"  
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-5 py-4 rounded-full shadow-2xl z-50 font-bold tracking-wide transition-transform hover:scale-105"  
      >  
        WhatsApp Chat  
      </a>  

      <a  
        href="https://www.instagram.com/devil_cleanerz?igsh=MXhjemYxa3Fld2lnMg=="  
        target="_blank"  
        rel="noopener noreferrer"  
        className="fixed bottom-24 right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl z-50 font-bold transition-transform hover:scale-105"  
        title="Follow us on Instagram"
      >
        📸 Insta
      </a>  

      {/* FOOTER */}  
      <footer className="bg-black text-gray-500 py-12 px-6 text-center border-t border-white/10 relative z-10">  
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">  
          <img loading="lazy"  
            src="/devillogo.jpg"  
            alt="Devil Cleanerz & Enterprises Logo"  
            className="w-32 mb-4 filter brightness-90"  
          />  

          <h3 className="text-2xl text-white font-black uppercase tracking-wider mb-2">  
            Devil Cleanerz & Enterprises  
          </h3>  
          <p className="text-gray-400 font-medium">Relentless On Dirt. Flawless Living.</p>  

          <div className="mt-6 space-y-1 text-sm">  
            <p className="text-gray-300">📞 +91 7208901545</p>  
            <p className="text-gray-300">
              📸 Instagram:{" "}
              <a 
                href="https://www.instagram.com/devil_cleanerz?igsh=MXhjemYxa3Fld2lnMg==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-red-400 hover:underline"
              >
                @devil_cleanerz
              </a>
            </p>  
            <p className="text-gray-400">📍 Mumbai, Maharashtra, India</p>  
          </div>  
          
          <p className="mt-8 text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} Devil Cleanerz & Enterprises. All rights reserved.
          </p>
        </div>  
      </footer>  

    </div>
  );
}
