import React, { useState } from 'react';

const manualDonationDetails = {
  bankTransfer: {
    accountName: 'Your Nonprofit Name',
    accountNumber: '123456789',
    bankName: 'Your Bank Name',
    iban: 'PKR1234567890123456',
    branch: 'Your Branch Name',
    branchCode: '1234',
  },
  jazzCash: {
    number: '0301XXXXXXX', // JazzCash Phone Number
    accountHolder: 'Your Nonprofit Name',
  },
};

export default function Donations() {
  const [isManualDonation, setIsManualDonation] = useState(false);

  return (
    <section id="donations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Support Our Cause</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your donation helps us continue our mission of creating positive change in communities.
          </p>
        </div>

        {/* Option to Show Manual Donation Details */}
        <div className="text-center mb-12">
          <button
            onClick={() => setIsManualDonation(!isManualDonation)}
            className="w-full bg-rose-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-rose-700 transition-colors"
          >
            {isManualDonation ? 'Hide' : 'Show'} Manual Donation Details
          </button>
        </div>

        {isManualDonation && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Manual Donation Options</h3>

            {/* Bank Transfer Info */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-2">Bank Transfer</h4>
              <p className="text-gray-600">
                Please transfer your donation to the following account:
              </p>
              <div className="text-gray-700 mt-4">
                <p><strong>Account Name:</strong> {manualDonationDetails.bankTransfer.accountName}</p>
                <p><strong>Account Number:</strong> {manualDonationDetails.bankTransfer.accountNumber}</p>
                <p><strong>Bank Name:</strong> {manualDonationDetails.bankTransfer.bankName}</p>
                <p><strong>IBAN:</strong> {manualDonationDetails.bankTransfer.iban}</p>
                <p><strong>Branch:</strong> {manualDonationDetails.bankTransfer.branch}</p>
                <p><strong>Branch Code:</strong> {manualDonationDetails.bankTransfer.branchCode}</p>
              </div>
            </div>

            {/* JazzCash Info */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">JazzCash Donation</h4>
              <p className="text-gray-600">
                You can donate through JazzCash by transferring the amount to the following number:
              </p>
              <div className="text-gray-700 mt-4">
                <p><strong>JazzCash Number:</strong> {manualDonationDetails.jazzCash.number}</p>
                <p><strong>Account Holder:</strong> {manualDonationDetails.jazzCash.accountHolder}</p>
              </div>
            </div>
          </div>
        )}

        {/* Confirmation After Donation */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            After making your manual donation, please send us a screenshot or confirmation of the transaction via email or our WhatsApp number.
          </p>
        </div>
      </div>
    </section>
  );
}
