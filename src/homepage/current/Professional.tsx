import React from "react";

export default function CurrentProfessional(){
  return (
    <React.Fragment>

      <div className="py-4">
        <h2 className='h2'>Approach</h2>

        <div className="grid gap-2">
          <p className="">Solve problems in a customer-centric manner while ensuring operational excellence of the technical implementation.</p>
          <p className="">Build resilience in teams to avoid dependence on individuals. Encourage collaborative learning and build productive habits.</p>
        </div>
      </div>

      <div className="grid gap-2 pb-4">
        <h3 className="h3 font-bold text-lg">On the Beach<span className="ml-2 text-sm">2023</span></h3>

        <ul className="grid gap-2 border-s border-grey-200 relative list-none ml-4">
          <li className="mt-2 mb-2 ms-4 -start-1.5"><div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-300" />Launched a <a href="https://medium.com/mobilepeople/backend-for-frontend-pattern-why-you-need-to-know-it-46f94ce420b0" className="link">Backend for Frontend</a> to support the apps</li>
          <li className="mb-2 ms-4 -start-1.5"><div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-300" />Switched teams to work in the mobile app space</li>
          <li className="mb-2 ms-4 -start-1.5"><div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-300" />In role promotion</li>
          <li className="mb-2 ms-4 -start-1.5"><div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-300" />Lead <a href="https://sunshine.co.uk" className="link">sunshine.co.uk</a>'s booking funnel migration</li>
          <li className="mb-2 ms-4 -start-1.5"><div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-300" />Joined the Booking Path Team</li>
        </ul>
      </div>

      <h3 className="h3 font-bold text-lg">NHS Digital <span className="ml-2 text-sm">2021 - 2023</span></h3>
      <p>Joined on a graduate scheme working in the Pathways team. Maintained several .NET applications and supported our AWS migration.</p>
    </React.Fragment>
  )
}
