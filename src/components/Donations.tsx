import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CreditCard, Heart, Users, Target, DollarSign, Coffee } from 'lucide-react';

const stripePromise = loadStripe('your_publishable_key'); // Replace with actual Stripe key

interface DonationOption {
  id: string;
  amount: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const donationOptions: DonationOption[] = [
  {
    id: 'education',
    amount: 50,
    title: 'Support Education',
    description: 'Provide educational materials and support for one child for a month',
    icon: <Users className="h-6 w-6" />
  },
  {
    id: 'health',
    amount: 100,
    title: 'Healthcare Support',
    description: 'Fund medical supplies and healthcare services for rural communities',
    icon: <Heart className="h-6 w-6" />
  },
  {
    id: 'women',
    amount: 75,
    title: 'Women Empowerment',
    description: 'Support skill development and entrepreneurship training for women',
    icon: <Target className="h-6 w-6" />
  }
];

export default function Donations() {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDonation = async (amount: number) => {
    setIsProcessing(true);
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      // Here you would typically make an API call to your backend to create a payment intent
      // For demo purposes, we'll just show a success message
      console.log('Processing donation:', amount);
      
      // Simulated success
      alert('Thank you for your donation! This is a demo - no actual payment was processed.');
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section id="donations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Support Our Cause</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your donation helps us continue our mission of creating positive change in communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {donationOptions.map((option) => (
            <div
              key={option.id}
              className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all
                ${selectedOption === option.id ? 'ring-2 ring-rose-500' : 'hover:shadow-xl'}`}
              onClick={() => setSelectedOption(option.id)}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-rose-100 text-rose-600 rounded-full mb-4">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <div className="text-2xl font-bold text-rose-600">${option.amount}</div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Make a Donation</h3>
            
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Custom Amount
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => handleDonation(Number(customAmount) || 50)}
                disabled={isProcessing}
                className="w-full bg-rose-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-rose-700 transition-colors flex items-center justify-center"
              >
                <CreditCard className="mr-2 h-5 w-5" />
                {isProcessing ? 'Processing...' : 'Donate Now'}
              </button>

              <div className="text-center text-sm text-gray-500">
                <p>Secure payment powered by Stripe</p>
                <p className="mt-2">Your donation may be tax deductible</p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-rose-100 text-rose-600 rounded-full mx-auto mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h4 className="font-semibold">100% to Charity</h4>
              <p className="text-gray-600 text-sm">All donations go directly to our causes</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-rose-100 text-rose-600 rounded-full mx-auto mb-4">
                <CreditCard className="h-6 w-6" />
              </div>
              <h4 className="font-semibold">Secure Payment</h4>
              <p className="text-gray-600 text-sm">Your information is protected</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-rose-100 text-rose-600 rounded-full mx-auto mb-4">
                <Coffee className="h-6 w-6" />
              </div>
              <h4 className="font-semibold">Tax Deductible</h4>
              <p className="text-gray-600 text-sm">Get tax benefits for your donation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}