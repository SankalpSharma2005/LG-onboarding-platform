const steps = [
    {
        title: "Onboarding Documents",
        icon: "📄",
        content: `
      <ul class="list-disc ml-6 space-y-1">
        <li>Receive your ID badge
        <li>Employees need to fill the LG new joinee kit.</li>
        <li>For the first 3 consecutive days, you will be issued a visitor’s card from the reception (Floor 16). 
        Please collect it each morning when you arrive and return it at the end of the day.</li>
        <li>Meanwhile, submit your photograph to your assigned HR for ID card.</li>
        </li>            
        <li>Submit required onboarding documents (LG Offer letter, ID Proof, etc.)</li>
      </ul>
    `
    },
    {
        title: "Office Layout",
        icon: "🏢",
        content: `
      <div class="max-h-56 overflow-y-auto rounded-lg border js-lg-border border-lg-grey/30 bg-light-bg">
        <table class="min-w-full text-left text-lg-red">
          <thead>
            <tr class="bg-lg-grey-light/30 text-lg-red">
              <th class="px-4 py-2 border-b js-lg-border border-lg-grey/20">Floor</th>
              <th class="px-4 py-2 border-b js-lg-border border-lg-grey/20">Departments / Facilities</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="px-4 py-2 border-b js-lg-border border-lg-grey/20 font-bold">11</td><td class="px-4 py-2 border-b js-lg-border border-lg-grey/20">Eco Solution, Information Display, Corp. Marketing, Digital Marketing, OBS, Big Data, Hi-M.Solutek, GYM</td></tr>
            <tr><td class="px-4 py-2 border-b js-lg-border border-lg-grey/20 font-bold">12</td><td class="px-4 py-2 border-b js-lg-border border-lg-grey/20">LG Learning Center & HSAD</td></tr>
            <tr><td class="px-4 py-2 border-b js-lg-border border-lg-grey/20 font-bold">14</td><td class="px-4 py-2 border-b js-lg-border border-lg-grey/20">LG Cafe</td></tr>
            <tr><td class="px-4 py-2 border-b js-lg-border border-lg-grey/20 font-bold">15</td><td class="px-4 py-2 border-b js-lg-border border-lg-grey/20">LG Innovation Gallery</td></tr>
            <tr><td class="px-4 py-2 border-b js-lg-border border-lg-grey/20 font-bold">16</td><td class="px-4 py-2 border-b js-lg-border border-lg-grey/20">Reception, Customer Service, Audit, IT & consulting</td></tr>
            <tr><td class="px-4 py-2 border-b js-lg-border border-lg-grey/20 font-bold">17</td><td class="px-4 py-2 border-b js-lg-border border-lg-grey/20">Media Entertainment Solutions, Modern Trade, SCM, Pantos</td></tr>
            <tr><td class="px-4 py-2 border-b js-lg-border border-lg-grey/20 font-bold">18</td><td class="px-4 py-2 border-b js-lg-border border-lg-grey/20">CFO Office, Accounts & Finance, GP, General Affairs, Planning, Investor Relations, External Relations, Legal</td></tr>
            <tr><td class="px-4 py-2 border-b js-lg-border border-lg-grey/20 font-bold">19</td><td class="px-4 py-2 border-b js-lg-border border-lg-grey/20">Home Appliance Solutions</td></tr>
            <tr><td class="px-4 py-2 border-b js-lg-border border-lg-grey/20 font-bold">20</td><td class="px-4 py-2 border-b js-lg-border border-lg-grey/20">MD Office, Board Room, GTM, HR</td></tr>
          </tbody>
        </table>
      </div>
    `
    },
    {
        title: "System Access & <br> GSOD Portal",
        icon: "💻",
        content: `
      <ul class="list-disc ml-6 space-y-1">
        <li>For any information, direct to LG notice board available on LG EP Portal.</li>
        <li>Search GSOD (Global Segregation of  Duties) on the LG EP Portal.</li>
        <li>Special permissions for system access can be taken from the GSOD portal.</li>
        <li>Permissions are granted after applying on the portal.</li>
        <li>Exceptional requests are granted only after the approval by the security team.</li>
        <li>Granted rights are revoked if not used for 1.5 months or 45 days.</li>
      </ul>
    `
    },
    {
        title: "Security Access",
        icon: "🔑",
        content: `
      <ul class="list-disc ml-6 space-y-1">
        <li>Every employee must wear ID cards for door access control.</li>
        <li>Access to USB Ports or any other external devices is not given.</li>
        <li>Users are not granted permission to upload URLs or share documents on any external platforms, including personal email accounts.</li>
        <li>To get access for these permissions, log in to the Security Portal through EP Portal(sso.lge.com).</li>
        <li>The Security Portal has options to get access which includes USB, Mobile EP, printouts and more.</li>
        <li>You enter your request and the access is granted within a few hours after approval.</li>
        <li>Any non-compliance leads to accumulation of demerit points which can further lead to disciplinary actions.</li>
      </ul>
    `
    },
    {
         title: "Amenities & Facilities",
    icon: "☕",
    content: `
      <ul class="list-disc ml-6 space-y-1">
        <li><b>LG Café (Floor 14):</b> LG provides lunch for all interns and employees. The café is open (8 AM – 7 PM) for breakfast and evening snacks.</li>
        <li><b>Transportation:</b> LG offers transportation facilities for your daily commute. Please contact your respective HR for details.</li>
        <li><b>Parking:</b> The parking area is reserved exclusively for employees below the managerial level.Vehicle Parking is available including charging ports for EVs.</li>
        <li><b>Wi-Fi:</b> Wi-Fi for only guests is provided through approval access.</li>
        <li><b>Visitor Entry:</b> Visitors are alowed only through vist reservation system on the Security Portal.</li>
        <li><b>Gym (Floor 11):</b> Access is limited to LG employees only.</li>
        <li><b>Innovation Gallery (Floor 15):</b> A restricted area. Prior permission is required for entry.</li>
        <li><b>Reception (Floor 16): </b> Your first point of contact for any support or information you may need.</li>
      </ul>
    `
    },
    {
        title: "Company Policies",
        icon: "📚",
        content: `
      <ul class="list-disc ml-6 space-y-1">
        <li>Photography inside the premises is restricted and should not be uploaded on social media.</li>
        <li>Internet connection is provided by the company which only works in the LG laptop.</li>
        <li>Maintain discipline and professionalism. While there is no strict dress code, you are expected to respect the office decorum.</li>
        <li>Familiarize yourself with workplace ethics and anti-harassment policy.</li>
        <li>Maintain confidentiality and data security.</li>
      </ul>
    `
    },
    {
        title: "Exit Process & <br> Documentation",
        icon: "🚪",
        content: `
      <ul class="list-disc ml-6 space-y-1">
        <li>Submit resignation in HR.</li>
        <li>Submit all the assets issued by LG.</li>
        <li>The HR then deactivates their ID from the system access.</li>
        <li>Complete resignee NDA document and submit the ID card .</li>
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
