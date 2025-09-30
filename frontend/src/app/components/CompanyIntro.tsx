import React from 'react'

const CompanyIntro = () => {
  return (
     <>
     <div className='flex justify-between gap-10 items-center p-10'>

<div className='space-y-5'>

     <div className='font-bold text-blue-500 text-2xl'>Company Indroduction <span>s</span> </div>
     <div className='text-3xl font-bold'>Our Loans will Fill Your Dreams Come True</div>
     <div className='text-blue-700 text-justify'>There are many variations of passages of lorem ipsum available the majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum is simply free text available in the local markets in reprehenderit.Nam aliquam sem et tortor consequat mattis pellentesque semper tailored for specific uses and specific market segment</div>
     <div className='flex gap-10'>
          <div className="flex items-center gap-4 bg-white p-4 rounded shadow-sm">
            <div className="w-14 h-14 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
              🏆
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Award Winning</h3>
              <p className="text-sm text-gray-600">Finance categories winning more than 10 awards</p>
            </div>
          </div>

          {/* Award 2 */}
          <div className="flex items-center gap-4 bg-white p-4 rounded shadow-sm">
            <div className="w-14 h-14 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
              🏅
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Trusted Service</h3>
              <p className="text-sm text-gray-600">Providing trustworthy financial solutions for years</p>
            </div>
          </div>
     </div>
</div>
<div className='w-500 rounded '><img className='rounded shadow' src="https://www.shutterstock.com/image-photo/male-mature-caucasian-ceo-businessman-600nw-2142010187.jpg" alt="" /></div>
     </div>
     </>
  )
}

export default CompanyIntro