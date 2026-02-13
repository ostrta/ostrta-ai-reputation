// OSTRTA Landing Page - Draft
// Will move this into Next.js app once setup completes

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Is ChatGPT telling your brand story correctly?
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            For Japanese companies expanding globally: Monitor and fix how AI search engines represent your brand—automatically.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg transition duration-200">
            Join the Beta (Free) →
          </button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Search has moved from Google to AI
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            ChatGPT, Perplexity, Claude, Gemini—business professionals worldwide are using AI search engines to research your company.
          </p>
          <p className="text-lg font-semibold text-center text-gray-900 mb-12">
            But is the AI telling your brand story accurately?
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-3">Lack of English content</h3>
              <p className="text-gray-700">
                AI learns from what's online. If you don't have enough English content, competitors dominate the conversation.
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-3">Misinformation spreading</h3>
              <p className="text-gray-700">
                Old news, inaccurate reviews, negative mentions—AI repeats them as "facts."
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-3">Invisible opportunity loss</h3>
              <p className="text-gray-700">
                When potential customers ask AI about your industry, you don't show up. No mention = no deal.
              </p>
            </div>
          </div>
          
          <p className="text-center text-lg font-semibold text-gray-900 mt-12">
            The problem: Most companies don't even know this is happening.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
            OSTRTA protects your brand in the AI era
          </h2>
          <p className="text-xl text-center text-gray-700 mb-16">
            Five automated steps to improve your AI reputation
          </p>
          
          <div className="grid md:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-3">1. Monitor</div>
              <p className="text-gray-700">
                We check ChatGPT, Perplexity, Claude, and Gemini daily to see how your brand is being represented.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-3">2. Detect</div>
              <p className="text-gray-700">
                Our AI flags negative mentions, inaccurate information, and missing strengths.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-3">3. Generate</div>
              <p className="text-gray-700">
                We automatically create high-quality English content to fix the issues. Our AI learns your brand voice.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-3">4. Distribute</div>
              <p className="text-gray-700">
                After your approval, we publish to WordPress, Medium, LinkedIn, and Twitter.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-3">5. Measure</div>
              <p className="text-gray-700">
                Weekly reports show your improvement: "AI mentions increased 40%."
              </p>
            </div>
          </div>
          
          <p className="text-center text-xl font-semibold text-gray-900 mt-12">
            All you do: Approve content once a month. We handle the rest.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Choose your plan
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Monitor Plan */}
            <div className="border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Monitor</h3>
              <div className="text-4xl font-bold text-gray-900 mb-1">$49<span className="text-lg text-gray-600">/mo</span></div>
              <div className="text-sm text-gray-600 mb-6">or ¥5,000/month</div>
              <p className="text-gray-700 mb-6 italic">"I need to understand the problem first"</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Monitor 4 AI search engines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Track 10 keywords daily</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Weekly reports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Alert notifications</span>
                </li>
              </ul>
              <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded-lg transition duration-200">
                Get Started
              </button>
            </div>

            {/* Monitor + Fix Plan (Popular) */}
            <div className="border-4 border-blue-600 rounded-lg p-8 relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Monitor + Fix</h3>
              <div className="text-4xl font-bold text-gray-900 mb-1">$299<span className="text-lg text-gray-600">/mo</span></div>
              <div className="text-sm text-gray-600 mb-6">or ¥30,000/month</div>
              <p className="text-gray-700 mb-6 italic">"I want to fix the problem automatically"</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Everything in Monitor +</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">4 auto-generated articles/month</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Brand voice learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Auto-publish to WordPress, Medium, LinkedIn</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Improvement tracking</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200">
                Get Started
              </button>
            </div>

            {/* Full Service Plan */}
            <div className="border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Full Service</h3>
              <div className="text-4xl font-bold text-gray-900 mb-1">$999<span className="text-lg text-gray-600">/mo</span></div>
              <div className="text-sm text-gray-600 mb-6">or ¥100,000/month</div>
              <p className="text-gray-700 mb-6 italic">"We're serious about global expansion"</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Everything in Monitor + Fix +</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">12 articles/month (3/week)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Multi-brand support (up to 3)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Monthly strategy consultation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Priority Slack support</span>
                </li>
              </ul>
              <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded-lg transition duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            What beta customers are saying
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 italic">
                "When people searched for our company on ChatGPT, they only saw 3-year-old negative news. Within 2 weeks of using OSTRTA, our latest product information started showing up."
              </p>
              <p className="font-semibold text-gray-900">— CEO, Manufacturing Company</p>
              <p className="text-sm text-gray-600">40% international revenue</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 italic">
                "Writing 4 English blog posts per month was impossible for our team. With OSTRTA, we just approve them. And the AI learns our voice—it doesn't sound robotic."
              </p>
              <p className="font-semibold text-gray-900">— Marketing Director, SaaS Company</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 italic">
                "Our Perplexity mentions tripled in 2 months. Having numbers makes it easy to report progress to our CEO."
              </p>
              <p className="font-semibold text-gray-900">— PR Manager, IT Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Check your AI reputation today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Beta program limited to first 20 companies. Try it free for the first month.
          </p>
          
          <div className="bg-white rounded-lg p-8 shadow-xl max-w-md mx-auto">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Plan Interest</option>
                <option>Monitor ($49/mo)</option>
                <option>Monitor + Fix ($299/mo)</option>
                <option>Full Service ($999/mo)</option>
              </select>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg shadow-lg transition duration-200"
              >
                Join the Beta (Free) →
              </button>
            </form>
            
            <div className="mt-6 text-sm text-gray-600 space-y-1">
              <p>✓ No credit card required</p>
              <p>✓ Cancel anytime</p>
              <p>✓ Japanese support available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-4">
            <strong>OSTRTA is SEO for the AI era.</strong>
          </p>
          <p className="text-gray-400 mb-6">
            Monitor and improve how ChatGPT, Perplexity, Claude, and Gemini represent your brand—building trust in global markets.
          </p>
          <p className="text-gray-400">
            Contact: <a href="mailto:hello@ostrta.com" className="text-blue-400 hover:text-blue-300">hello@ostrta.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
