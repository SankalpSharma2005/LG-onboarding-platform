const steps = [
  {
    title: "Onboarding Documents",
    icon: "📄",
    content: `
      <ul class="list-disc ml-6 space-y-1">
        <li>Receive your ID badge:
      <ul>
    <li>For the first 3 consecutive days, you will be issued a visitor’s card from the reception (Floor 16). 
  Please collect it each morning when you arrive and return it at the end of the day.</li>
  </ul>
  <li>Meanwhile submit your photograph to your assigned HR so they can process your Intern ID card.</li>
  <li>Submit all required onboarding documents, including your College NOC, ID proof, and any other specified documents by HR.</li>
  <li>Meet your mentor and onboarding buddy to familiarize yourself with the office environment and connect with fellow interns.</li>
  </ul>
    `
  },
  {
    title: "Office Layout",
    icon: "🏢",
    content: `
      <div class="max-h-56 overflow-y-auto rounded-lg border border-lg-grey/30 bg-white">
        <table class="min-w-full text-left text-lg-red">
          <thead>
            <tr class="bg-lg-grey-light/30 text-lg-red">
              <th class="px-4 py-2 border-b border-lg-grey/20">Floor</th>
              <th class="px-4 py-2 border-b border-lg-grey/20">Departments / Facilities</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="px-4 py-2 border-b border-lg-grey/20 font-bold">11</td><td class="px-4 py-2 border-b border-lg-grey/20">Eco Solution, Information Display, Corp. Marketing, Digital Marketing, OBS, Big Data, Hi-M.Solutek, GYM</td></tr>
            <tr><td class="px-4 py-2 border-b border-lg-grey/20 font-bold">12</td><td class="px-4 py-2 border-b border-lg-grey/20">LG Learning Center & HSAD</td></tr>
            <tr><td class="px-4 py-2 border-b border-lg-grey/20 font-bold">14</td><td class="px-4 py-2 border-b border-lg-grey/20">LG Cafe</td></tr>
            <tr><td class="px-4 py-2 border-b border-lg-grey/20 font-bold">15</td><td class="px-4 py-2 border-b border-lg-grey/20">LG Innovation Gallery</td></tr>
            <tr><td class="px-4 py-2 border-b border-lg-grey/20 font-bold">16</td><td class="px-4 py-2 border-b border-lg-grey/20">Reception, Customer Service, Audit, IT & consulting</td></tr>
            <tr><td class="px-4 py-2 border-b border-lg-grey/20 font-bold">17</td><td class="px-4 py-2 border-b border-lg-grey/20">Media Entertainment Solutions, Modern Trade, SCM, Pantos</td></tr>
            <tr><td class="px-4 py-2 border-b border-lg-grey/20 font-bold">18</td><td class="px-4 py-2 border-b border-lg-grey/20">CFO Office, Accounts & Finance, GP, General Affairs, Planning, Investor Relations, External Relations, Legal</td></tr>
            <tr><td class="px-4 py-2 border-b border-lg-grey/20 font-bold">19</td><td class="px-4 py-2 border-b border-lg-grey/20">Home Appliance Solutions</td></tr>
            <tr><td class="px-4 py-2 border-b border-lg-grey/20 font-bold">20</td><td class="px-4 py-2 border-b border-lg-grey/20">MD Office, Board Room, GTM, HR</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    title: "Amenities & Facilities",
    icon: "☕",
    content: `
      <ul class="list-disc ml-6 space-y-1">
        <li><b>LG Café (Floor 14):</b> LG provides lunch for all interns and employees. The café is open (8 AM – 7 PM) for breakfast and evening snacks.</li>
        <li><b>Transportation:</b> LG offers transportation facilities for your daily commute. Please contact your respective HR for details. Note: Vehicle parking is available only for employees.</li>
        <li><b>Learning Center (Floor 12):</b> Dedicated space for interns and HSAD office. Complimentary hot beverages are available on every floor.</li>
        <li><b>Gym (Floor 11): </b>Access is limited to LG employees only.</li>
        <li><b>Innovation Gallery (Floor 15):</b> A restricted area. Prior permission is required for entry.</li>
        <li><b>Reception (Floor 16):</b> Your first point of contact for any support or information you may need.</li>


      </ul>
    `
  },
  {
    title: "Company Policies",
    icon: "📚",
    content: `
      <ul class="list-disc ml-6 space-y-1">
        <li>Photography inside the premises is restricted and should not be uploaded on social media.</li>
        <li>Due to security policies, you will need to arrange your own internet connection during your internship.</li>
        <li>Maintain discipline and professionalism. While there is no strict dress code, you are expected to respect the office decorum.</li>
        <li>Familiarize yourself with workplace ethics and anti-harassment policy.</li>        
        <li>Maintain confidentiality and data security.</li>
      </ul>
    `
  },
  {
    title: "Exit Process & <br>Documentation",
    icon: "🚪",
    content: `
      <ul class="list-disc ml-6 space-y-1">
      <li>Submit your project report to both your mentor and HR.</li>
      <li>Complete the exit interview and collect your internship certificate.</li>
      <li>Return all company assets, including your ID card, laptop, and any other issued items.</li>
      </ul>
    `
  }
];

let currentStep = 0;

function renderStepper() {
  const nav = document.getElementById("stepper-nav");
  nav.innerHTML = '';
  steps.forEach((step, idx) => {
    const active = idx === currentStep;
    nav.innerHTML += `
      <button type="button"
        class="flex items-start gap-3 w-full focus:outline-none transition"
        onclick="currentStep=${idx};renderAll();">
        <span class="${active
        ? 'bg-lg-red text-white'
        : 'bg-lg-grey/10 text-lg-red'} flex items-center justify-center w-10 h-10 rounded-full text-xl mt-1 font-bold shadow">${step.icon}</span>
        <span class="${active
        ? 'text-lg-red font-bold'
        : 'text-lg-grey'} text-base transition">${step.title}</span>
      </button>
    `;
  });
}

function renderStepContent() {
  const step = steps[currentStep];
  const content = `
    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-2xl">${step.icon}</span>
        <span class="text-xl font-bold text-lg-red">${step.title}</span>
      </div>
      <div class="mb-4">${step.content}</div>
      <div class="flex gap-4 mt-6">
        <button ${currentStep === 0 ? "disabled" : ""} class="px-4 py-2 rounded-lg font-semibold border border-lg-red bg-lg-grey/10 text-lg-red hover:bg-lg-red hover:text-white disabled:opacity-50 transition" id="prev-step">Previous</button>
        <button ${currentStep === steps.length - 1 ? "disabled" : ""} class="px-4 py-2 rounded-lg font-semibold bg-lg-red text-white hover:bg-lg-grey hover:text-lg-red border border-lg-red disabled:opacity-50 transition" id="next-step">Next</button>
      </div>
    </div>
  `;
  document.getElementById('step-content').innerHTML = content;
  document.getElementById('prev-step').onclick = () => { if (currentStep > 0) { currentStep--; renderAll(); } };
  document.getElementById('next-step').onclick = () => { if (currentStep < steps.length - 1) { currentStep++; renderAll(); } };
}

function renderAll() {
  renderStepper();
  renderStepContent();
}

renderAll();