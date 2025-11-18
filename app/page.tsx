"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "./sharednavbar/components/Navbar";
import Footer from "./sharednavbar/Footer";


const images = [
  "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
];

interface Instructor {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
}

interface Testimonial {
  id: number;
  name: string;
  image: string;
  message: string;
  rating: number;
}

const courses = [
  {
    id: 1,
    title: "JavaScript Mastery",
    description: "Learn JS from scratch and advanced topics.",
    image: "/images/js-course.jpg",
  },
  {
    id: 2,
    title: "Python Programming",
    description: "Complete Python course for beginners and experts.",
    image: "/images/python-course.jpg",
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    description: "Ace interviews with DSA concepts and problems.",
    image: "/images/dsa-course.jpg",
  },
];

const faqs = [
  { q: "How do I enroll in a course?", a: "Just click on 'View Course' and follow the enrollment steps." },
  { q: "Are courses suitable for beginners?", a: "Yes, all courses are designed for both beginners and experts." },
  { q: "Can I track my progress?", a: "Absolutely! Our dashboard tracks your learning and scores." },
];

export default function Home() {
  const [loadingInstructors, setLoadingInstructors] = useState(true);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // Fetch instructors
  useEffect(() => {
    fetch("http://127.0.0.1:8000/codes/instructors-ui/")
      .then((res) => res.json())
      .then((data) => setInstructors(data.instructors || []))
      .catch((err) => console.error("Error fetching instructors:", err))
      .finally(() => setLoadingInstructors(false));
  }, []);

  // Fetch testimonials
  useEffect(() => {
    fetch("http://127.0.0.1:8000/codes/testimonials-ui/")
      .then((res) => res.json())
      .then((data) => setTestimonials(data.testimonials || []))
      .catch((err) => console.error("API Error:", err))
      .finally(() => setLoadingTestimonials(false));
  }, []);

  // Automatic image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const scroll = (direction: "left" | "right", ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const cardWidth = ref.current.firstChild
        ? (ref.current.firstChild as HTMLElement).clientWidth + 24
        : 300;
      ref.current.scrollBy({ left: direction === "right" ? cardWidth : -cardWidth, behavior: "smooth" });
    }
  };

  if (loadingInstructors || loadingTestimonials) return <p className="text-center mt-10">Loading...</p>;

  return (
     <div className="min-h-screen bg-gray-50 font-sans">

      {/* Navbar */}
      <Navbar />
     


   <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
        </h2>

        <div className="w-full mx-auto relative rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={images[currentIndex]}
            alt={`Study Image ${currentIndex + 1}`}
            width={1600}
            height={900}
             className="object-cover w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px]"
          />  <div className="absolute inset-0 bg-green bg-opacity-25 flex items-center justify-center">
            <h3 className="text-blue-500 text-2xl md:text-3xl font-semibold">
  Master Online Learning
</h3>
       
      </div> 

          {/* Previous Button */}
           <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-70 text-gray-800 px-3 py-1 rounded-full shadow-md hover:bg-opacity-90 transition"
          >
            &#8592; 
          </button>

          {/* Next Button */}
           <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-70 text-gray-800 px-3 py-1 rounded-full shadow-md hover:bg-opacity-90 transition"
          >
             &#8594;
          </button>
        </div>
      </div> 
     </section>   


 

 










      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fadeIn">
            Learn, Practice & Crack Interviews
          </h1>
          <p className="text-lg md:text-2xl mb-10 text-gray-100 animate-fadeIn delay-200">
            Join thousands of learners to master skills and ace your dream job interviews.
          </p>
          <a
            href="#courses"
            className="inline-block px-8 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300 animate-bounce"
          >
            Explore Courses
          </a>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-5">{course.description}</p>
                <a
                  href="#"
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  View Course
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


<section className="py-20 bg-shadow relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our Instructors
        </h2>

       <div className="flex justify-end mb-4 gap-4">
          <button
            onClick={() => scroll("left", scrollRef)}
            className="px-5 py-3 bg-blue-500 text-white text-lg font-bold rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
          >
            {"<"}
          </button>
          <button
            onClick={() => scroll("right", scrollRef)}
            className="px-5 py-3 bg-green-500 text-white text-lg font-bold rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
          >
            {">"}
          </button>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden scrollbar-hide snap-x snap-mandatory py-4"
        >


  {instructors.map((inst) => (
    <div
      key={inst.id}
      className="
        instructor-card
        flex-shrink-0 
        w-[calc(100%/1-1rem)]   /* 1 card on mobile */
        sm:w-[calc(100%/2-0.5rem)] /* 2 cards on small screens */
        md:w-[calc(100%/3-0.75rem)] /* 3 cards on medium screens */
        lg:w-[calc(100%/4-1rem)]   /* 4 cards on large screens */
        bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition snap-start
        min-h-[24rem] /* increase height of card */
      "
    >
      <img
        src={inst.image}
        alt={inst.name}
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-1">{inst.name.replace("_", " ")}</h3>
      <p className="text-gray-500 mb-2">{inst.role}</p>
      <p className="text-gray-600 text-sm">{inst.email}</p>
      <p className="text-gray-600 text-sm">{inst.phone}</p>
    </div>
  ))}
</div>

       
      </div>
    </section>





   

   <section className="py-20 bg-gray-50 relative">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      What Our Students Say
    </h2>

    {/* Scroll buttons */}
    <div className="flex justify-end mb-4 gap-4">
      <button
        onClick={() => scroll("left", testimonialsRef)}
        className="px-5 py-3 bg-blue-500 text-white text-lg font-bold rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
      >
        {"<"}
      </button>
      <button
        onClick={() => scroll("right", testimonialsRef)}
        className="px-5 py-3 bg-green-500 text-white text-lg font-bold rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        {">"}
      </button>
    </div>

    <div
      ref={testimonialsRef}
      className="flex gap-4 overflow-x-hidden scrollbar-hide snap-x snap-mandatory py-4"
    >
      {testimonials.map((t) => (
        <div
          key={t.id}
          className="
            flex-shrink-0 
            w-[calc(100%/1-1rem)]   /* 1 card on mobile */
            sm:w-[calc(100%/2-0.5rem)] /* 2 cards on small screens */
            md:w-[calc(100%/3-0.75rem)] /* 3 cards on medium screens */
            lg:w-[calc(100%/4-1rem)]   /* 4 cards on large screens */
            bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition snap-start
            min-h-[24rem] /* match instructors height */
          "
        >
          <img
            src={t.image}
            alt={t.name}
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4 shadow"
          />
          <h3 className="text-xl font-semibold mb-1">{t.name}</h3>
          {/* Rating */}
          <p className="text-yellow-500 text-lg mb-2">
            {"★".repeat(t.rating)}
            {"☆".repeat(5 - t.rating)}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">{t.message}</p>
        </div>
      ))}
    </div>
  </div>
</section>



       



 


      {/* Achievements / Stats */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { num: "10k+", label: "Students Enrolled" },
              { num: "50+", label: "Courses" },
              { num: "95%", label: "Interview Success Rate" },
              { num: "200+", label: "Expert Instructors" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-indigo-500 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.num}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>














      {/* Features / Cards Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Study Smarter, Anywhere
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Online Interviews", desc: "Prepare with topic-wise questions, mock tests, and expert tips.", img: "/images/interview.png" },
              { title: "Relationship Management", desc: "Manage learning connections and network effectively.", img: "/images/relationship.png" },
              { title: "Recorded Content", desc: "Access all courses anytime with recorded videos and lessons.", img: "/images/recorded-content.png" },
            ].map((card, idx) => (
              <div key={idx} className="bg-white text-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition p-8 flex flex-col items-center">
                <div className="relative w-32 h-32 mb-5">
                  <Image src={card.img} alt={card.title} fill className="object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-700 text-center">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="p-6 rounded-2xl border border-gray-200 hover:shadow-md transition">
                <summary className="font-semibold cursor-pointer text-lg">{faq.q}</summary>
                <p className="mt-2 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

<section className="py-20 bg-indigo-50">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      Why Learn With Us
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      
      {/* Card 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center">
        <div className="w-20 h-20 mb-4">
          <Image src="/images/teacher.png" alt="Best Teachers" width={80} height={80} className="object-contain" />
        </div>
        <h3 className="text-xl font-bold mb-2">India's Best Teachers</h3>
        <p className="text-gray-600 text-center">
          Learn from top educators teaching the latest curriculum.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center">
        <div className="w-20 h-20 mb-4">
          <Image src="/images/curriculum.png" alt="Industry Oriented" width={80} height={80} className="object-contain" />
        </div>
        <h3 className="text-xl font-bold mb-2">Industry-Oriented Curriculum</h3>
        <p className="text-gray-600 text-center">
          Curriculum designed by experts to match real-world industry requirements.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center">
        <div className="w-20 h-20 mb-4">
          <Image src="/images/skilling.png" alt="Skilling Classes" width={80} height={80} className="object-contain" />
        </div>
        <h3 className="text-xl font-bold mb-2">Skilling Classes</h3>
        <p className="text-gray-600 text-center">
          Led by a dedicated team of in-house professors for hands-on learning.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center">
        <div className="w-20 h-20 mb-4">
          <Image src="/images/masterclass.png" alt="Master Classes" width={80} height={80} className="object-contain" />
        </div>
        <h3 className="text-xl font-bold mb-2">Master Classes & Guest Lectures</h3>
        <p className="text-gray-600 text-center">
          Learn from industry experts with the latest insights and trends.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      Career Turning Point Stories
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
        <div className="relative h-64 w-full">
          <Image src="/images/course1.jpg" alt="Career Turning Point" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 cursor-pointer">
            <Image src="/images/play-button.png" alt="Play Video" width={64} height={64} />
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">They didn’t change their routine - just their route</h3>
          <p className="text-gray-600">That simple shift became their Career Ka Turning Point!</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
        <div className="relative h-64 w-full">
          <Image src="/images/course2.jpg" alt="Advice from Nani" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 cursor-pointer">
            <Image src="/images/play-button.png" alt="Play Video" width={64} height={64} />
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Many moments of doubt</h3>
          <p className="text-gray-600">One priceless advice from Nani changed everything.</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
        <div className="relative h-64 w-full">
          <Image src="/images/course3.jpg" alt="Lead Your League" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 cursor-pointer">
            <Image src="/images/play-button.png" alt="Play Video" width={64} height={64} />
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Don't run. Just lead</h3>
          <p className="text-gray-600">Lead your league and set your own pace!</p>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Footer */}
      <Footer />

    </div>

  );
}
