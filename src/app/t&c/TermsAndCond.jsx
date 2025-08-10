import React from "react";

export default function TermsAndCond() {
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
            Terms & Condition
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Welcome to Effortless Events. By booking our venue or services, you
            agree to comply with the following terms and conditions
          </p>
        </div>
      </div>

      {/* Terms Content Section */}
      <div className="bg-white py-8 sm:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <ol className="list-decimal list-inside space-y-4 sm:space-y-6 text-gray-800 text-sm sm:text-base">
            <li>
              <strong>Booking Confirmation -</strong> All bookings are confirmed
              only after receiving the specified advance payment. No verbal or
              tentative bookings will be honored without payment.
            </li>

            <li>
              <strong>Payment Policy -</strong> Full payment must be completed
              as per the agreed schedule. Failure to do so may result in
              cancellation without refund or delay in service delivery.
            </li>

            <li>
              <strong>Cancellation & Refund -</strong> Cancellations must be
              submitted in writing. The advance amount is non-refundable. Any
              additional refunds will be processed based on the notice period
              and our cancellation policy.
            </li>

            <li>
              <strong>Liability Disclaimer -</strong> Effortless Events is not
              liable for any personal injury, loss, or damage to property during
              the event. Clients are responsible for their guests and vendors.
            </li>

            <li>
              <strong>Force Majeure -</strong> We are not responsible for delays
              or cancellations caused by unforeseen circumstances like natural
              disasters, strikes, or government restrictions.
            </li>

            <li>
              <strong>Client Responsibilities and Damages -</strong> The client
              is financially liable for any damages to the venue caused by their
              guests and is responsible for ensuring all venue rules are
              followed. Repair costs will be charged to the client.
            </li>

            <li>
              <strong>Modifications to Booking -</strong> All booking
              modifications must be requested in writing. Any changes are
              subject to availability and may result in additional charges or a
              revised payment schedule.
            </li>

            <li>
              <strong>External Vendors -</strong> Third-party vendors hired by
              the client must adhere to all venue policies. We are not liable
              for the performance, conduct, or any damages caused by external
              vendors.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

