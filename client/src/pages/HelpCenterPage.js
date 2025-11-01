import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, HelpCircle, MessageCircle, Mail, Phone, ChevronDown, ChevronUp } from 'lucide-react';

const HelpCenterPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      question: 'How do I enroll in a course?',
      answer: 'Browse our course catalog, select a course you\'re interested in, and click the "Enroll Now" button. You\'ll need to create an account or sign in first.'
    },
    {
      question: 'Can I get a refund?',
      answer: 'Yes! We offer a 30-day money-back guarantee. If you\'re not satisfied with a course, contact our support team within 30 days of purchase for a full refund.'
    },
    {
      question: 'How long do I have access to a course?',
      answer: 'Once enrolled, you have lifetime access to the course materials, including all future updates and additions.'
    },
    {
      question: 'Do I get a certificate after completing a course?',
      answer: 'Yes! Upon successful completion of all course requirements, you\'ll receive an industry-recognized certificate that you can share on LinkedIn and other platforms.'
    },
    {
      question: 'Can I download course videos?',
      answer: 'Course videos can be streamed online but are not available for download due to copyright protection. However, you can access them anytime with an internet connection.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and PayPal.'
    },
    {
      question: 'Are there any prerequisites for courses?',
      answer: 'Each course lists its prerequisites on the course page. Some advanced courses may require foundational knowledge, which will be clearly stated.'
    },
    {
      question: 'How do I track my progress?',
      answer: 'Your progress is automatically tracked as you complete modules. You can view your progress on the "My Courses" page.'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">How can we help you?</h1>
          <p className="text-xl text-blue-100 mb-8">
            Search our knowledge base or contact our support team
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for help..."
                className="block w-full pl-12 pr-4 py-4 text-gray-900 border-0 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Chat with our support team</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">Start Chat</button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">nexthubtechnologiesp@gmail.com</p>
            <a href="mailto:nexthubtechnologiesp@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium">
              Send Email
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Phone Support</h3>
            <p className="text-gray-600 mb-4">+91 6302834343</p>
            <a href="tel:+916302834343" className="text-blue-600 hover:text-blue-700 font-medium">
              Call Us
            </a>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-8">
                No matching questions found. Try a different search term or contact support.
              </p>
            )}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Still need help?</h3>
          <p className="text-gray-700 mb-6">
            Our support team is available 24/7 to assist you with any questions or concerns.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg">
            Contact Support
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HelpCenterPage;
