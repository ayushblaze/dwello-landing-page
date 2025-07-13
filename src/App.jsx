import logo from './assets/logo.svg';
import heroImage from './assets/hero-image.svg';
import homeImage from './assets/home-image.svg';
import reactLogo from './assets/react-logo.svg';
import googleLogo from './assets/google.png';
import weworkLogo from './assets/WeWork-logo.svg';
import airbnbLogo from './assets/airbnb.png';
import microsoftLogo from './assets/microsoft-logo.png';
import nikeLogo from './assets/nike.jpg';
import { Search, MapPinned, House, CircleDollarSign, MapPin, Users, BadgeCheck, Layers } from 'lucide-react';
import { useRef, useState } from 'react';

function App() {
  const testimonialRef = useRef(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonials = [
    {
      name: 'Aman Sharma',
      text: '“The team made my home buying journey seamless and enjoyable. Highly recommended!”',
      location: 'Bangalore, India',
    },
    {
      name: 'Priya Verma',
      text: '“Professional, transparent, and truly caring. I found my dream home thanks to them!”',
      location: 'Mumbai, India',
    },
    {
      name: 'Rahul Singh',
      text: '“Excellent service and great attention to detail. I felt supported at every step.”',
      location: 'Delhi, India',
    },
    {
      name: 'Sneha Patel',
      text: '“A wonderful experience from start to finish. I recommend them to all my friends.”',
      location: 'Ahmedabad, India',
    },
    // Add more testimonials if needed
  ];
  const visibleTestimonials = testimonials.slice(testimonialIndex, testimonialIndex + 3);
  const canScrollLeft = testimonialIndex > 0;
  const canScrollRight = testimonialIndex + 3 < testimonials.length;
  const handleScroll = (dir) => {
    setTestimonialIndex((prev) => {
      if (dir === -1 && prev > 0) return prev - 1;
      if (dir === 1 && prev + 3 < testimonials.length) return prev + 1;
      return prev;
    });
  };
  const scrollTestimonials = (dir) => {
    if (testimonialRef.current) {
      testimonialRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };
  return (
    <div className='bg-white min-h-screen font-sans'>
      {/* NAVBAR */}
      <nav className="py-4 px-6 bg-cream">
        <div className='flex items-center justify-between mx-auto max-w-7xl'>

          <div className='flex-shrink-0'>
            <img src={logo} alt="dwello logo" className='h-8 w-auto' />
          </div>

          <ul className='hidden md:flex gap-8 font-medium text-xl items-center mx-auto'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Testimonials</li>
          </ul>

          <div className='flex items-center gap-4'>
            <button className='hover:opacity-60'><Search /></button>
            <button className='text-white bg-black px-6 py-2 rounded-lg font-medium'>Sign up</button>
          </div>

        </div>
      </nav>

      {/* HERO SECTION */}
      <div className='w-full bg-cream pb-32'>
        <section className='px-6 md:px-10 py-12 md:py-0 flex flex-col-reverse md:flex-row items-center md:justify-center gap-10 md:gap-8 max-w-7xl mx-auto'>
          <div className='text-center md:text-left max-w-md md:max-w-lg'>
            <h1 className='text-5xl md:text-7xl font-extrabold text-[#2D1C13] leading-tight'>Find Your <br /> <span>Dream Home</span></h1>
            <p className='mt-4 font-medium text-[#2D1C13]/80 text-lg md:text-xl'>Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision</p>
            <button className='mt-8 bg-[#2D1C13] text-white px-8 py-2 rounded-lg font-medium text-base md:text-lg'>Sign up</button>
          </div>
          <div className='-mt-3 w-full max-w-md md:max-w-none flex-1'>
            <img src={heroImage} alt="hero-image" className='w-full h-auto' />
          </div>
        </section>
        {/* FILTER BAR */}
        <div className='relative -mt-16'>
          <div className='absolute left-1/2 -translate-x-1/2 -bottom-16 w-full max-w-3xl bg-[#E8D0C3] rounded-xl border-2 border-blue-500 px-4 md:px-6 py-6 md:py-9 shadow-lg flex flex-col md:flex-row flex-wrap items-stretch md:items-center justify-between gap-4 md:gap-6'>
            <div className='flex items-center gap-4 bg-[#F8EEE8] px-4 py-3 rounded-xl flex-1 min-w-[140px]'>
              <span className='font-semibold text-sm md:text-md'>Location</span>
              <MapPinned className='w-5 h-5 md:w-6 md:h-6' />
            </div>
            <div className='flex items-center gap-4 bg-[#F8EEE8] px-4 py-3 rounded-xl flex-1 min-w-[140px]'>
              <span className='font-semibold text-sm md:text-md'>Type</span>
              <House className='w-5 h-5 md:w-6 md:h-6' />
            </div>
            <div className='flex items-center gap-4 bg-[#F8EEE8] px-4 py-3 rounded-xl flex-1 min-w-[140px]'>
              <span className='font-semibold text-sm md:text-md'>Price</span>
              <CircleDollarSign className='w-5 h-5 md:w-6 md:h-6' />
            </div>
            <div className='flex items-center justify-center flex-1 min-w-[140px]'>
              <button className='w-full md:w-auto bg-[#2D1C13] text-white px-6 md:px-9 py-3 rounded-lg font-medium text-base md:text-lg'>Sign up</button>
            </div>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <section className='bg-white py-12 md:py-24 px-4 md:px-10 lg:px-40 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20'>
        <div className='md:mt-10 w-full max-w-xs md:max-w-md lg:max-w-lg flex-shrink-0 mb-8 md:mb-0'>
          <img src={homeImage} alt="home-image" className='w-full h-auto' />
        </div>

        <div className='w-full max-w-xl text-center md:text-left'>
          <h1 className='text-3xl md:text-5xl font-extrabold'>We Help You Find <br className='hidden md:block' /> Your Dream Home</h1>
          <p className='mt-5 md:mt-7 text-[#2D1C13]/80 text-base md:text-lg'>From cozy cottages to luxurious estates, our dedicated<br className='hidden md:block' /> team guides you through every step of the journey, <br className='hidden md:block' />ensuring your dream home becomes a reality</p>
          <div className='flex flex-row md:flex-row justify-between items-center mt-7 gap-6 md:gap-0'>
            <div>
              <h1 className='text-4xl md:text-6xl font-bold text-[#342117]'>8K+</h1>
              <p className='text-sm font-normal'>Houses Available</p>
            </div>
            <div>
              <h1 className='text-4xl md:text-6xl font-bold text-[#342117]'>6K+</h1>
              <p className='text-sm font-normal'>Houses Sold</p>
            </div>
            <div>
              <h1 className='text-4xl md:text-6xl font-bold text-[#342117]'>2K+</h1>
              <p className='text-sm font-normal'>Trusted Agents</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHITE BACKGROUND WRAPPER FOR WHY CHOOSE US & RESIDENCES */}
      <div className="bg-white w-full">
        {/* WHY CHOOSE US */}
        <section className='text-center bg-white mb-16'>
          <h1 className='text-4xl font-bold text-[#2D1C13]'>Why Choose Us</h1>
          <p className='mt-6 text-[#4c392f]/80 text-md font-bold'>Elevating Your Home Buying Experience with Expertise, Integrity,<br /> and Unmatched Personalized Service</p>
          <div className='mt-10 flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-6 px-4 md:px-10 lg:px-40'>
            <div className="bg-[#E8D0C3] p-6 rounded-2xl shadow-sm w-60 text-[#2D1C13]">
              <div className="bg-[#F8EEE8] p-4 rounded-lg inline-block mb-4">
                <MapPin />
              </div>
              <h3 className="text-lg font-semibold mb-2">Personalized Service</h3>
              <p className="text-sm text-[#2D1C13]/80">
                Our services adapt to your unique needs, making your journey stress-free
              </p>
            </div>
            <div className="bg-[#E8D0C3] p-6 rounded-2xl shadow-sm w-60 text-[#2D1C13]">
              <div className="bg-[#F8EEE8] p-4 rounded-lg inline-block mb-4">
                <Users />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Agents</h3>
              <p className="text-sm text-[#2D1C13]/80">
                Work with experienced professionals dedicated to your success
              </p>
            </div>
            <div className="bg-[#E8D0C3] p-6 rounded-2xl shadow-sm w-60 text-[#2D1C13]">
              <div className="bg-[#F8EEE8] p-4 rounded-lg inline-block mb-4">
                <BadgeCheck />
              </div>
              <h3 className="text-lg font-semibold mb-2">Transparent Process</h3>
              <p className="text-sm text-[#2D1C13]/80">
                Enjoy a clear, honest, and seamless home buying experience
              </p>
            </div>
            <div className="bg-[#E8D0C3] p-6 rounded-2xl shadow-sm w-60 text-[#2D1C13]">
              <div className="bg-[#F8EEE8] p-4 rounded-lg inline-block mb-4">
                <Layers />
              </div>
              <h3 className="text-lg font-semibold mb-2">Wide Selection</h3>
              <p className="text-sm text-[#2D1C13]/80">
                Choose from a diverse range of properties to fit every dream
              </p>
            </div>
          </div>
        </section>

        {/* OUR POPULAR RESIDENCES SECTION */}
        <section className="py-16 bg-white mb-16">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-[#2D1C13] mb-10">Our Popular Residences</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch residences-cards">
            {/* Card 1 */}
            <div className="bg-[#E8D0C3] rounded-3xl shadow-lg w-80 max-w-full flex flex-col overflow-hidden">
              <img src={homeImage} alt="San Francisco Home" className="w-full h-56 object-cover" />
              <div className="p-5 flex flex-col flex-1">
                <div className="font-bold text-lg flex items-center gap-2 mb-2"><MapPin className="inline w-5 h-5" /> San Francisco, California</div>
                <div className="flex gap-6 text-[#2D1C13]/80 mb-2">
                  <span className="flex items-center gap-1"><span role="img" aria-label="bed">🛏️</span> 4 Rooms</span>
                  <span className="flex items-center gap-1"><span role="img" aria-label="area">📐</span> 3,500 sq ft</span>
                </div>
                <div className="flex justify-between items-end mt-auto">
                  <button className="bg-[#2D1C13] text-white px-5 py-2 rounded-lg font-medium text-sm">Book Now</button>
                  <span className="font-bold text-2xl">₹2,50,00,000</span>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-[#E8D0C3] rounded-3xl shadow-lg w-80 max-w-full flex flex-col overflow-hidden">
              <img src={heroImage} alt="Beverly Hills Home" className="w-full h-56 object-cover" />
              <div className="p-5 flex flex-col flex-1">
                <div className="font-bold text-lg flex items-center gap-2 mb-2"><MapPin className="inline w-5 h-5" /> Beverly Hills, California</div>
                <div className="flex gap-6 text-[#2D1C13]/80 mb-2">
                  <span className="flex items-center gap-1"><span role="img" aria-label="bed">🛏️</span> 3 Rooms</span>
                  <span className="flex items-center gap-1"><span role="img" aria-label="area">📐</span> 1,500 sq ft</span>
                </div>
                <div className="flex justify-between items-end mt-auto">
                  <button className="bg-[#2D1C13] text-white px-5 py-2 rounded-lg font-medium text-sm">Book Now</button>
                  <span className="font-bold text-2xl">₹85,00,000</span>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-[#E8D0C3] rounded-3xl shadow-lg w-80 max-w-full flex flex-col overflow-hidden">
              <img src={homeImage} alt="Palo Alto Home" className="w-full h-56 object-cover" />
              <div className="p-5 flex flex-col flex-1">
                <div className="font-bold text-lg flex items-center gap-2 mb-2"><MapPin className="inline w-5 h-5" /> Palo Alto, California</div>
                <div className="flex gap-6 text-[#2D1C13]/80 mb-2">
                  <span className="flex items-center gap-1"><span role="img" aria-label="bed">🛏️</span> 6 Rooms</span>
                  <span className="flex items-center gap-1"><span role="img" aria-label="area">📐</span> 4,000 sq ft</span>
                </div>
                <div className="flex justify-between items-end mt-auto">
                  <button className="bg-[#2D1C13] text-white px-5 py-2 rounded-lg font-medium text-sm">Book Now</button>
                  <span className="font-bold text-2xl">₹3,70,00,000</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* COMPANIES MARQUEE SECTION */}
      <section className="bg-[#F8EEE8] py-8 mb-16">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#2D1C13] mb-6">Trusted by Top Companies</h2>
        <div className="overflow-hidden w-full">
          <div className="flex items-center gap-12 animate-marquee whitespace-nowrap" style={{animation: 'marquee 20s linear infinite'}}>
            <img src={reactLogo} alt="React" className="h-10 w-auto inline-block" />
            <img src={googleLogo} alt="Google" className="h-10 w-auto inline-block" />
            <img src={weworkLogo} alt="WeWork" className="h-10 w-auto inline-block" />
            <img src={airbnbLogo} alt="Airbnb" className="h-10 w-auto inline-block rounded" />
            <img src={microsoftLogo} alt="Microsoft" className="h-10 w-auto inline-block" />
            <img src={nikeLogo} alt="Nike" className="h-10 w-auto inline-block rounded" />
            {/* Repeat for smooth loop */}
            <img src={reactLogo} alt="React" className="h-10 w-auto inline-block" />
            <img src={googleLogo} alt="Google" className="h-10 w-auto inline-block" />
            <img src={weworkLogo} alt="WeWork" className="h-10 w-auto inline-block" />
            <img src={airbnbLogo} alt="Airbnb" className="h-10 w-auto inline-block rounded" />
            <img src={microsoftLogo} alt="Microsoft" className="h-10 w-auto inline-block" />
            <img src={nikeLogo} alt="Nike" className="h-10 w-auto inline-block rounded" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 bg-[#F8EEE8] mb-16">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#2D1C13] mb-10">What Our Clients Say</h2>
        <div className="relative max-w-6xl mx-auto flex flex-col items-center">
          {/* Desktop arrows */}
          <div className="hidden md:flex w-full justify-between items-center mb-4">
            <button type="button" onClick={() => handleScroll(-1)} disabled={!canScrollLeft} className={`bg-[#2D1C13] text-white rounded-full w-10 h-10 flex items-center justify-center z-10 transition-opacity ${canScrollLeft ? '' : 'opacity-30 cursor-not-allowed'}`} aria-label="Previous testimonial">&lt;</button>
            <button type="button" onClick={() => handleScroll(1)} disabled={!canScrollRight} className={`bg-[#2D1C13] text-white rounded-full w-10 h-10 flex items-center justify-center z-10 transition-opacity ${canScrollRight ? '' : 'opacity-30 cursor-not-allowed'}`} aria-label="Next testimonial">&gt;</button>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-8 w-full justify-center items-center testimonials-cards">
            {(window.innerWidth < 768 ? testimonials : visibleTestimonials).map((t, idx) => (
              <div key={t.name + idx} className="bg-white rounded-2xl shadow-md p-8 w-80 min-w-[280px] flex-shrink-0">
                <div className="font-bold text-lg mb-2 text-[#2D1C13]">{t.name}</div>
                <div className="text-[#2D1C13]/80 mb-4">{t.text}</div>
                <div className="text-xs text-[#2D1C13]/60">{t.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT US SECTION */}
      <section className="py-16 bg-white flex flex-col items-center justify-center px-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D1C13] text-center mb-4">Do You Have Any Questions?<br className="hidden md:block" />Get Help From Us</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8 mt-4 contact-help-options">
          <div className="flex items-center gap-2 text-[#2D1C13] font-medium"><span className="inline-block"><svg width="22" height="22" fill="none" stroke="#2D1C13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M8 11h8M8 7h8"/></svg></span>Chat live with our support team</div>
          <div className="flex items-center gap-2 text-[#2D1C13] font-medium"><span className="inline-block"><svg width="22" height="22" fill="none" stroke="#2D1C13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M8 11h8M8 7h8"/></svg></span>Browse our FAQ</div>
        </div>
        <form className="flex flex-col md:flex-row gap-4 w-full max-w-xl items-center justify-center contact-form">
          <div className="flex items-center bg-[#E8D0C3] rounded-lg px-4 py-3 flex-1 w-full shadow-sm">
            <svg width="20" height="20" fill="none" stroke="#2D1C13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="mr-2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6 12 13 2 6"/></svg>
            <input type="email" placeholder="Enter your email address..." className="bg-transparent outline-none w-full text-[#2D1C13] placeholder-[#2D1C13]/80 font-medium" />
          </div>
          <button type="submit" className="bg-[#2D1C13] text-white px-8 py-3 rounded-lg font-medium shadow-md">Submit</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2D1C13] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src="/logo.png" alt="dwello logo" className="h-10 w-auto mb-2 bg-white rounded p-1" />
            <span className="text-[#E8D0C3] text-sm">© {new Date().getFullYear()} Dwello. All rights reserved.</span>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-2 text-[#E8D0C3]">Company</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-[#E8D0C3]">Support</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Location</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-[#E8D0C3]">Legal</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
