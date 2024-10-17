import React from 'react';
import { Heart, Feather, MessageCircle, Calendar } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-purple-50 text-gray-800 font-sans">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-purple-700">John Serenity</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-purple-600">About</a></li>
              <li><a href="#services" className="hover:text-purple-600">Services</a></li>
              <li><a href="#testimonials" className="hover:text-purple-600">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="bg-purple-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-4">Find Your Inner Peace</h2>
            <p className="text-xl mb-8">Guidance and support for women on their spiritual journey</p>
            <a href="#contact" className="bg-white text-purple-700 px-6 py-3 rounded-full font-bold hover:bg-purple-100 transition duration-300">Book a Consultation</a>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">About John Serenity</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="John Serenity" className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <p className="text-lg mb-6">John Serenity is a compassionate spiritual guide dedicated to helping women find balance, peace, and purpose in their lives. With over 20 years of experience in meditation, mindfulness, and holistic healing, John offers a unique perspective that combines ancient wisdom with modern understanding.</p>
                <p className="text-lg">His approach is gentle, non-judgmental, and tailored to each individual's needs, creating a safe space for women to explore their inner selves and overcome emotional challenges.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-purple-100 p-6 rounded-lg shadow-md">
                <Heart className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Emotional Healing</h3>
                <p>Find relief from stress, anxiety, and past traumas through guided meditation and energy work.</p>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg shadow-md">
                <Feather className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Life Coaching</h3>
                <p>Discover your life's purpose and create a roadmap to achieve your personal and spiritual goals.</p>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg shadow-md">
                <MessageCircle className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Spiritual Counseling</h3>
                <p>Explore your spiritual path and deepen your connection to the universe and your inner self.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic mb-4">"John's guidance has been transformative. I've found a sense of peace I never knew was possible."</p>
                <p className="font-bold">- Sarah M.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic mb-4">"The emotional support and practical advice I've received have helped me overcome my deepest fears."</p>
                <p className="font-bold">- Emily R.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Book a Consultation</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-md text-gray-800" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-md text-gray-800" />
                <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 rounded-md text-gray-800"></textarea>
                <button type="submit" className="w-full bg-white text-purple-700 px-6 py-3 rounded-md font-bold hover:bg-purple-100 transition duration-300">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 John Serenity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;