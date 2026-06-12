import { imgBackground, imgBackground1 } from "./svg-p988v";

function Background1() {
  return (
    <div className="absolute h-[87px] left-0 right-0 top-0" style={{ backgroundImage: "linear-gradient(135deg, rgb(124, 58, 237) 0%, rgb(168, 85, 247) 100%)" }} data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[39px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[32px] text-center text-white top-[43.5px] tracking-[-0.5px] w-[211.774px]">
        <p className="leading-[normal]">User Scenario</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#e5e7eb] h-[49px] left-0 right-0 top-[87px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[#374151] text-[14px] text-center top-[24.5px] w-[585.064px]">
        <p>
          <span className="leading-[normal]">Based on</span>
          <span className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic">{` your journey map, create some scenarios that answer the following questions`}</span>
        </p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="absolute h-[20px] left-0 right-0 top-0" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col h-[16px] justify-center left-0 text-[#0ea5e9] text-[24px] top-[8px] w-[12.429px]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[20px] justify-center left-[24px] text-[#1f2937] text-[16px] top-[10px] w-[158.413px]">
        <p className="leading-[normal]">Who is the Persona?</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute h-[20px] left-0 right-0 top-[40px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col h-[16px] justify-center left-0 text-[#0ea5e9] text-[24px] top-[8px] w-[12.429px]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[20px] justify-center left-[24px] text-[#1f2937] text-[16px] top-[10px] w-[144.014px]">
        <p className="leading-[normal]">What is their goal?</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="absolute h-[20px] left-0 right-0 top-[80px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col h-[16px] justify-center left-0 text-[#0ea5e9] text-[24px] top-[8px] w-[12.429px]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[20px] justify-center left-[24px] text-[#1f2937] text-[16px] top-[10px] w-[181.038px]">
        <p className="leading-[normal]">What is the start point?</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="absolute h-[20px] left-0 right-0 top-[120px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col h-[16px] justify-center left-0 text-[#0ea5e9] text-[24px] top-[8px] w-[12.429px]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[20px] justify-center left-[24px] text-[#1f2937] text-[16px] top-[10px] w-[206.517px]">
        <p className="leading-[normal]">What is the trigger/action?</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="absolute h-[20px] left-0 right-0 top-[160px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col h-[16px] justify-center left-0 text-[#0ea5e9] text-[24px] top-[8px] w-[12.429px]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[20px] justify-center left-[24px] text-[#1f2937] text-[16px] top-[10px] w-[173.417px]">
        <p className="leading-[normal]">What is the end point?</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[180px] leading-[0] left-[28px] not-italic top-[32px] w-[258px]" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}

function Clipboard() {
  return (
    <div className="absolute bg-white border-3 border-[#0ea5e9] border-solid drop-shadow-[0px_4px_6px_rgba(0,0,0,0.08)] h-[250px] left-[40px] rounded-[12px] top-[196px] w-[320px]" data-name="Clipboard">
      <div className="-translate-x-1/2 absolute bg-[#9ca3af] h-[24px] left-1/2 rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.1)] top-[-20px] w-[80px]" data-name="Background+Shadow" />
      <List />
      <div className="-translate-x-1/2 absolute bg-[#d1d5db] h-[16px] left-1/2 rounded-tl-[4px] rounded-tr-[4px] top-[-16px] w-[60px]" data-name="Background" />
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] h-[21px] left-[329.67px] rounded-[4px] top-[138px] w-[559.3px]" data-name="Overlay">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[6px] not-italic text-[#4b5563] text-[14px] top-[10.5px] w-[548.674px]">
        <p className="leading-[23.8px]">ChatGPT Plus ($20/mo), Midjourney Standard ($30/mo), and Canva Pro ($15/mo)</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] h-[21px] left-[194.8px] rounded-[4px] top-[384.58px] w-[248.86px]" data-name="Overlay">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[6px] not-italic text-[#4b5563] text-[14px] top-[10.5px] w-[237.429px]">
        <p className="leading-[23.8px]">One post done in under 20 minutes</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] h-[21px] left-[311.25px] rounded-[4px] top-[464.38px] w-[286.98px]" data-name="Overlay">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[6px] not-italic text-[#4b5563] text-[14px] top-[10.5px] w-[276.571px]">
        <p className="leading-[23.8px]">What used to take 15 hours took 2 hours.</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute h-[45px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[153.27px_45px] right-0 top-0 w-[153.27px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(14, 165, 233) 0%, rgb(6, 182, 212) 100%)", maskImage: `url("${imgBackground}")` }} data-name="Background">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] justify-center leading-[0] left-[32px] not-italic text-[18px] text-white top-[22.5px] w-[90.022px]">
        <p className="leading-[normal]">Scenario 1</p>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute h-[45px] right-[-12px] top-[32px] w-[153.27px]" data-name="Mask Group">
      <Background3 />
    </div>
  );
}

function Scenario1Maya() {
  return (
    <div className="absolute bg-[#e0f2fe] drop-shadow-[0px_2px_4px_rgba(0,0,0,0.06)] h-[662.16px] left-0 right-0 rounded-[12px] top-0" data-name="Scenario 1: Maya">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-[32px] not-italic text-[#111827] text-[20px] top-[44px] w-[369.224px]">
        <p className="leading-[normal]">{`Maya's First Success with AmigoChat`}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Italic',sans-serif] font-normal h-[17px] italic justify-center leading-[0] left-[32px] text-[#6b7280] text-[14px] top-[72.5px] w-[297.346px]">
        <p className="leading-[normal]">Persona: Maya Chen (Beginner Solo Creator)</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[32px] not-italic text-[#374151] text-[16px] top-[115px] w-[138.028px]">
        <p className="leading-[normal]">{`Context & Trigger`}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[32px] not-italic text-[#4b5563] text-[14px] top-[148.5px] w-[297.986px]">
        <p className="leading-[23.8px]">{`Maya runs a small jewelry business, juggling `}</p>
      </div>
      <Overlay />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[888.97px] not-italic text-[#4b5563] text-[14px] top-[148.5px] w-[14.363px]">
        <p className="leading-[23.8px]">—</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[32px] not-italic text-[#4b5563] text-[14px] top-[172.3px] w-[524.624px]">
        <p className="leading-[23.8px]">totaling $65/month. She constantly loses context switching between platforms.</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[40.8px] justify-center leading-[0] left-[32px] not-italic text-[#4b5563] text-[14px] top-[219.99px] w-[872.81px]">
        <p className="mb-0">
          <span className="leading-[23.8px]">Trigger:</span>
          <span className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[23.8px] not-italic">{` It's Tuesday evening. Five posts are due `}</span>
          <span className="leading-[23.8px]">tomorrow</span>
          <span className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[23.8px] not-italic">{`. She's spent 2 hours creating just one post. She feels overwhelmed and`}</span>
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[23.8px]">{`behind. She remembers an ad: "All-in-One AI Chat" and searches desperately.`}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[32px] not-italic text-[#374151] text-[16px] top-[278.19px] w-[253.177px]">
        <p className="leading-[normal]">{`Discovery & The "Aha!" Moment`}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[64.59px] justify-center leading-[0] left-[32px] not-italic text-[#4b5563] text-[14px] top-[335.49px] w-[888.42px]">
        <p className="leading-[23.8px] mb-0">{`Maya finds AmigoChat and tests it with her moonstone necklace post. The AI generates a caption—it's actually good. Then it suggests`}</p>
        <p className="mb-0">
          <span className="leading-[23.8px]">{`creating an image, `}</span>
          <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[23.8px] not-italic">pre-filled with context from her previous message</span>
          <span className="leading-[23.8px]">{`. She didn't have to re-explain anything. 15 seconds later, a`}</span>
        </p>
        <p className="leading-[23.8px]">beautiful image appears. Then the AI offers to create a video. 20 seconds later, a polished 15-second video is ready.</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23.8px] justify-center leading-[0] left-[32px] not-italic text-[#4b5563] text-[14px] top-[395.48px] w-[163.126px]">
        <p className="leading-[23.8px]">{`She schedules the post. `}</p>
      </div>
      <Overlay1 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23.8px] justify-center leading-[0] left-[443.66px] not-italic text-[#4b5563] text-[14px] top-[395.48px] w-[129.63px]">
        <p className="leading-[23.8px]">{` (normally 3 hours).`}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[32px] not-italic text-[#374151] text-[16px] top-[441.38px] w-[172.472px]">
        <p className="leading-[normal]">{`Flow State & Outcome`}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[32px] not-italic text-[#4b5563] text-[14px] top-[474.88px] w-[279.559px]">
        <p className="leading-[23.8px]">{`By 10:30 PM, all five posts are scheduled. `}</p>
      </div>
      <Overlay2 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[598.23px] not-italic text-[#4b5563] text-[14px] top-[474.88px] w-[271.08px]">
        <p className="leading-[23.8px]">{` Cost: $16/month vs. $65/month—saving`}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[32px] not-italic text-[#4b5563] text-[14px] top-[498.67px] w-[77.9px]">
        <p className="leading-[23.8px]">$49/month.</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40.8px] justify-center leading-[0] left-[32px] not-italic text-[#4b5563] text-[14px] top-[546.37px] w-[866.9px]">
        <p className="mb-0">
          <span className="leading-[23.8px]">{`Over 3 months: `}</span>
          <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[23.8px] not-italic">40% engagement growth, 25% sales increase</span>
          <span className="leading-[23.8px]">{`, and her evenings back. But her business grows so much she can't`}</span>
        </p>
        <p className="leading-[23.8px]">keep up alone. The AI notices her struggle and suggests finding a freelancer. She hires Alex Rivera.</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[40.8px] justify-center leading-[0] left-[32px] not-italic text-[#4b5563] text-[14px] top-[605.96px] w-[857.531px]">
        <p className="mb-0">
          <span className="leading-[23.8px]">End point:</span>
          <span className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[23.8px] not-italic">{` A few months later, Maya is on vacation for the first time in 3 years, watching the shared project run smoothly from her`}</span>
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[23.8px]">phone. She feels truly free.</p>
      </div>
      <MaskGroup />
    </div>
  );
}

function Overlay3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] h-[21px] left-[315.94px] rounded-[4px] top-[138px] w-[389.56px]" data-name="Overlay">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[6px] not-italic text-[#4b5563] text-[14px] top-[10.5px] w-[378.348px]">
        <p className="leading-[23.8px]">ChatGPT Plus ($20/mo), Midjourney Standard ($30/mo)</p>
      </div>
    </div>
  );
}

function ParagraphOverlay() {
  return (
    <div className="[word-break:break-word] absolute bg-[rgba(255,255,255,0.6)] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[44.8px] leading-[0] left-[32px] not-italic rounded-[4px] text-[#4b5563] text-[14px] top-[301.18px] w-[864.45px]" data-name="Paragraph+Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col h-[17px] justify-center left-[791.58px] top-[10.5px] w-[74.091px]">
        <p className="leading-[23.8px]">10 minutes</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[17px] justify-center left-0 top-[34.3px] w-[149.311px]">
        <p className="leading-[23.8px]">(normally 45 minutes)</p>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] h-[21px] left-[211.58px] rounded-[4px] top-[591.76px] w-[173.41px]" data-name="Overlay">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[6px] not-italic text-[#4b5563] text-[14px] top-[10.5px] w-[161.735px]">
        <p className="leading-[23.8px]">25x ROI across 7 clients</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute h-[45px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[156.88px_45px] right-0 top-0 w-[156.88px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(168, 85, 247) 0%, rgb(192, 132, 252) 100%)", maskImage: `url("${imgBackground1}")` }} data-name="Background">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] justify-center leading-[0] left-[32px] not-italic text-[18px] text-white top-[22.5px] w-[93.224px]">
        <p className="leading-[normal]">Scenario 2</p>
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute h-[45px] right-[-12.01px] top-[32px] w-[156.88px]" data-name="Mask Group">
      <Background4 />
    </div>
  );
}

function Scenario2Alex() {
  return (
    <div className="absolute bg-[#ede9fe] drop-shadow-[0px_2px_4px_rgba(0,0,0,0.06)] h-[729.95px] left-0 right-0 rounded-[12px] top-[694.16px]" data-name="Scenario 2: Alex">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-[32px] not-italic text-[#111827] text-[20px] top-[44px] w-[438.891px]">
        <p className="leading-[normal]">{`Alex's Transformation from Chaos to Agency`}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Italic',sans-serif] font-normal h-[17px] italic justify-center leading-[0] left-[32px] text-[#6b7280] text-[14px] top-[72.5px] w-[414.882px]">
        <p className="leading-[normal]">Persona: Alex Rivera (Power User / Freelance Content Creator)</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[32px] not-italic text-[#374151] text-[16px] top-[115px] w-[138.028px]">
        <p className="leading-[normal]">{`Context & Trigger`}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[32px] not-italic text-[#4b5563] text-[14px] top-[148.5px] w-[284.251px]">
        <p className="leading-[23.8px]">{`Alex manages 4 clients with a chaotic mix: `}</p>
      </div>
      <Overlay3 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[705.5px] not-italic text-[#4b5563] text-[14px] top-[148.5px] w-[142.11px]">
        <p className="leading-[23.8px]">, Google Docs, Trello,</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[32px] not-italic text-[#4b5563] text-[14px] top-[172.29px] w-[812.668px]">
        <p className="leading-[23.8px]">{`spreadsheets. He's spending $50+/month on AI tools alone, plus constant context switching and manual expense tracking.`}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[40.8px] justify-center leading-[0] left-[32px] not-italic text-[#4b5563] text-[14px] top-[219.99px] w-[837.58px]">
        <p className="mb-0">
          <span className="leading-[23.8px]">Trigger:</span>
          <span className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[23.8px] not-italic">{` Maya Chen, a potential client, asks to collaborate in AmigoChat instead of email. A client bringing a solution instead of`}</span>
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[23.8px]">{`problems? He's intrigued. He signs up.`}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[32px] not-italic text-[#374151] text-[16px] top-[278.18px] w-[267.827px]">
        <p className="leading-[normal]">{`First Impression & Organic Growth`}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[32px] not-italic text-[#4b5563] text-[14px] top-[311.68px] w-[785.933px]">
        <p className="leading-[23.8px]">{`Alex creates a shared project for Maya. They collaborate in real-time—no email threads. He creates a complete post in `}</p>
      </div>
      <ParagraphOverlay />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[186.88px] not-italic text-[#4b5563] text-[14px] top-[335.48px] w-[196.743px]">
        <p className="leading-[23.8px]">. Maya approves immediately.</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40.79px] justify-center leading-[0] left-[32px] not-italic text-[#4b5563] text-[14px] top-[383.17px] w-[867.65px]">
        <p className="leading-[23.8px] mb-0">Maya refers 2 friends. Alex now has 3 clients in AmigoChat, 4 in his old system. At month-end, he compares: AmigoChat clients are</p>
        <p className="leading-[23.8px]">more profitable, have clearer cost tracking, zero miscommunication. He migrates all 4 legacy clients.</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[32px] not-italic text-[#374151] text-[16px] top-[441.37px] w-[235.353px]">
        <p className="leading-[normal]">{`Mastery & Crisis Management`}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[64.6px] justify-center leading-[0] left-[32px] not-italic text-[#4b5563] text-[14px] top-[498.67px] w-[889.15px]">
        <p className="leading-[23.8px] mb-0">Alex connects his own API key (BYOK) for cost control and creates prompt templates with variables. One Tuesday, his laptop dies at a</p>
        <p className="leading-[23.8px] mb-0">cafe with a deadline in 2 hours. He pulls out his phone, uses voice input to create a TikTok video, gets client approval, and schedules it</p>
        <p className="leading-[23.8px]">—all from mobile. Crisis averted.</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[32px] not-italic text-[#374151] text-[16px] top-[568.76px] w-[148.199px]">
        <p className="leading-[normal]">{`Scaling & Outcome`}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[32px] not-italic text-[#4b5563] text-[14px] top-[602.26px] w-[179.92px]">
        <p className="leading-[23.8px]">{`The AI's dashboard shows `}</p>
      </div>
      <Overlay4 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[384.98px] not-italic text-[#4b5563] text-[14px] top-[602.26px] w-[527.613px]">
        <p className="leading-[23.8px]">{`. Then it suggests: "For 40% of your tasks, you could use more efficient models`}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[32px] not-italic text-[#4b5563] text-[14px] top-[626.06px] w-[454.097px]">
        <p className="leading-[23.8px]">{`and save $100+/month." He sets up automatic model selection rules.`}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[40.79px] justify-center leading-[0] left-[32px] not-italic text-[#4b5563] text-[14px] top-[673.75px] w-[887.79px]">
        <p className="mb-0">
          <span className="leading-[23.8px]">End point:</span>
          <span className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[23.8px] not-italic">{` 6 months later, Alex hires a junior assistant and takes on 3 more clients, reaching 10 total. He's no longer a freelancer—he's`}</span>
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[23.8px]">the founder of a small creative agency.</p>
      </div>
      <MaskGroup1 />
    </div>
  );
}

function Scenarios() {
  return (
    <div className="absolute inset-[196px_40px_60px_400px]" data-name="Scenarios">
      <Scenario1Maya />
      <Scenario2Alex />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-white h-[1680.11px] left-[20px] right-[20px] rounded-[8px] top-[40px]" data-name="Background">
      <Background1 />
      <Background2 />
      <Clipboard />
      <Scenarios />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(245, 245, 245) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Frame">
      <Background />
    </div>
  );
}