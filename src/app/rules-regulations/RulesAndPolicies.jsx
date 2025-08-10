import React from "react";

export default function RulesAndPolicies() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh] pt-20 sm:pt-24 md:pt-28 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src="/home-page.png"
          alt="Event Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
            Rules & Policies
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Welcome to Effortless Events. By booking our venue or services, you
            agree to comply with the following terms and conditions
          </p>
        </div>
      </div>

      {/* Rules Content Section */}
      <div className="bg-white py-8 sm:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <ol className="list-decimal list-inside space-y-4 sm:space-y-6 text-gray-800 text-sm sm:text-base">
            <li>
              <strong>Booking & Payments -</strong> All bookings are confirmed
              only after receiving the advance payment. The remaining balance must be cleared before the event.
              Delays in payment may result in cancellation without refund.
            </li>

            <li>
              <strong>Cancellations & Refunds -</strong> Cancellations must be
              submitted in writing. The advance amount is non-refundable. Refunds, if any, depend on the notice
              period and terms agreed upon during booking.
            </li>

            <li>
              <strong>Event Changes -</strong> Any changes to event details (like date, venue, or guest count)
              must be requested at least 30 days prior. Rescheduling is subject to availability
              and may incur additional charges.
            </li>

            <li>
              <strong>Use of Venue & Conduct -</strong> Clients are responsible for maintaining decorum and
              preventing damage at the venue. Any property damage or rule violations will be
              charged to the client.
            </li>

            <li>
              <strong>Force Majeure -</strong> Effortless Events is not liable for cancellations or delays caused
              by events beyond our control such as natural disasters, strikes, or government
              restrictions.
            </li>

            <li>
              <strong>Liability -</strong> Effortless Events is not liable for any personal injury, or the loss, theft,
              or damage of personal belongings of the client or their guests during the event.
              Clients are advised to secure their own event insurance.
            </li>

            <li>
              <strong>External Vendors -</strong> All external vendors (caterers, decorators, DJs, etc.) hired
              by the client must be pre-approved by our management at least 15 days before
              the event. These vendors must adhere to all venue policies and provide
              necessary documentation if requested.
            </li>

            <li>
              <strong>Venue Access & Timings -</strong> Access to the venue for setup and post-event
              cleanup is strictly limited to the hours specified in the booking agreement.
              Exceeding the agreed-upon time will result in overtime charges.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
