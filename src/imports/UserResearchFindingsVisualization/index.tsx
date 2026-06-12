import svgPaths from "./svg-n34yre2n5q";

function Container() {
  return <div className="absolute bg-[#e8f5e9] left-[1680px] opacity-70 rounded-[33554400px] size-[840px] top-[-240px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[#fff8e1] left-[-80px] opacity-70 rounded-[33554400px] size-[640px] top-[870px]" data-name="Container" />;
}

function Container2() {
  return <div className="absolute bg-[#e3f2fd] left-[240px] opacity-50 rounded-[33554400px] size-[520px] top-[120px]" data-name="Container" />;
}

function Container3() {
  return <div className="absolute bg-[#fff3f0] left-[1600px] opacity-50 rounded-[33554400px] size-[400px] top-[870px]" data-name="Container" />;
}

function SlideOverview() {
  return (
    <div className="absolute h-[1350px] left-0 overflow-clip top-0 w-[2400px]" data-name="SlideOverview">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Icon">
          <path d={svgPaths.pfea6e00} id="Vector" stroke="var(--stroke-0, #6B9E6A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M25 3.75V8.75" id="Vector_2" stroke="var(--stroke-0, #6B9E6A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M27.5 6.25H22.5" id="Vector_3" stroke="var(--stroke-0, #6B9E6A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M5 21.25V23.75" id="Vector_4" stroke="var(--stroke-0, #6B9E6A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M6.25 22.5H3.75" id="Vector_5" stroke="var(--stroke-0, #6B9E6A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[39px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Medium',sans-serif] font-medium leading-[39px] left-[242px] text-[#8b8578] text-[26px] text-center top-0 whitespace-nowrap">User Research Report — February 2026</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_6px_rgba(0,0,0,0.06)] flex gap-[16px] h-[71px] items-center left-[303.3px] px-[32px] rounded-[33554400px] top-0 w-[593.391px]" data-name="Container">
      <Icon />
      <Text />
    </div>
  );
}

function Heading() {
  return (
    <div className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold h-[220.781px] leading-[110.4px] left-[164.69px] text-[96px] text-center top-[135px] tracking-[-2.88px] w-[870.609px] whitespace-nowrap" data-name="Heading 1">
      <p className="-translate-x-1/2 absolute left-[435.27px] text-[#1a1a1a] top-[-1px]">AI Content Creation</p>
      <p className="-translate-x-1/2 absolute left-[436.5px] text-[#6b9e6a] top-[109.39px]">Workflow Research</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[115.594px] left-0 top-[395.78px] w-[1200px]" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[57.8px] left-[600.36px] text-[#7a7a72] text-[34px] text-center top-0 w-[1174px]">How do content creators currently solve content creation challenges with AI tools, and what frustrations do they experience?</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[72px] relative shrink-0 w-[75.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[72px] left-[39px] text-[#6b9e6a] text-[72px] text-center top-[-1px] tracking-[-1.44px] whitespace-nowrap">12</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[36.391px] relative shrink-0 w-[156.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36.4px] left-[78.5px] text-[#7a7a72] text-[26px] text-center top-[-1px] whitespace-nowrap">First Respondents</p>
      </div>
    </div>
  );
}

function StatCard() {
  return (
    <div className="absolute bg-[#e8f5e9] content-stretch drop-shadow-[0px_4px_8px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] h-[220.391px] items-center justify-center left-0 rounded-[32px] top-0 w-[341.328px]" data-name="StatCard">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[72px] relative shrink-0 w-[126px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[72px] left-[62px] text-[#5ba4cf] text-[72px] text-center top-[-1px] tracking-[-1.44px] whitespace-nowrap">Feb</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[36.391px] relative shrink-0 w-[64.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36.4px] left-[32.5px] text-[#7a7a72] text-[26px] text-center top-[-1px] whitespace-nowrap">2026</p>
      </div>
    </div>
  );
}

function StatCard1() {
  return (
    <div className="absolute bg-[#e3f2fd] content-stretch drop-shadow-[0px_4px_8px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] h-[220.391px] items-center justify-center left-[389.33px] rounded-[32px] top-0 w-[341.328px]" data-name="StatCard">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[72px] relative shrink-0 w-[219.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[72px] left-[111px] text-[#c9930e] text-[72px] text-center top-[-1px] tracking-[-1.44px] whitespace-nowrap">Online</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[36.391px] relative shrink-0 w-[179.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36.4px] left-[90px] text-[#7a7a72] text-[26px] text-center top-[-1px] whitespace-nowrap">Survey Method</p>
      </div>
    </div>
  );
}

function StatCard2() {
  return (
    <div className="absolute bg-[#fff8e1] content-stretch drop-shadow-[0px_4px_8px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] h-[220.391px] items-center justify-center left-[778.66px] rounded-[32px] top-0 w-[341.344px]" data-name="StatCard">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[220.391px] left-[40px] top-[607.38px] w-[1120px]" data-name="Container">
      <StatCard />
      <StatCard1 />
      <StatCard2 />
    </div>
  );
}

function SlideOverview1() {
  return (
    <div className="absolute h-[827.766px] left-[600px] top-[261.11px] w-[1200px]" data-name="SlideOverview">
      <Container4 />
      <Heading />
      <Paragraph />
      <Container5 />
    </div>
  );
}

function SectionWrapper() {
  return (
    <div className="bg-[#fafaf8] h-[1350px] relative shrink-0 w-full" data-name="SectionWrapper">
      <SlideOverview />
      <SlideOverview1 />
    </div>
  );
}

function SectionNumber() {
  return (
    <div className="absolute bg-[#f0ede6] h-[49px] left-[128px] rounded-[33554400px] top-[112px] w-[2144px]" data-name="SectionNumber">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[33px] left-[24px] text-[#8b8578] text-[22px] top-[8px] tracking-[2.64px] whitespace-nowrap">01 AUDIENCE</p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="absolute h-[80px] left-[128px] top-[193px] w-[2144px]" data-name="SectionTitle">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[80px] left-0 text-[#1a1a1a] text-[64px] top-0 tracking-[-1.28px] whitespace-nowrap">Who Are Our Users?</p>
    </div>
  );
}

function SectionSubtitle() {
  return (
    <div className="absolute h-[48px] left-[128px] top-[289px] w-[1400px]" data-name="SectionSubtitle">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#7a7a72] text-[30px] top-0 whitespace-nowrap">Understanding the demographics and habits of our 12 respondents</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[39px] left-0 text-[#8b8578] text-[26px] top-0 tracking-[2.08px] uppercase whitespace-nowrap">Professional Roles</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[9.09%_4.55%_5.08%_9.09%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 380 377.661">
        <g id="Group">
          <path d={svgPaths.p20b5e700} fill="var(--fill-0, #8BB88A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[75.48%_31.66%_4.55%_47.76%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90.5435 87.8952">
        <g id="Group">
          <path d={svgPaths.p373dee80} fill="var(--fill-0, #5BA4CF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[67.43%_13.39%_8.54%_62.78%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.89 105.733">
        <g id="Group">
          <path d={svgPaths.p12425440} fill="var(--fill-0, #F2C94C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[53.58%_4.6%_23.38%_72.92%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.8904 101.368">
        <g id="Group">
          <path d={svgPaths.p393c1580} fill="var(--fill-0, #E87461)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[9.09%_4.55%_4.55%_9.09%]" data-name="Group">
      <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
    </div>
  );
}

function Surface() {
  return (
    <div className="absolute left-0 overflow-clip size-[440px] top-0" data-name="Surface">
      <Group />
    </div>
  );
}

function PieChart() {
  return (
    <div className="absolute left-[110.66px] size-[440px] top-0" data-name="PieChart">
      <Surface />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[440px] relative shrink-0 w-full" data-name="Container">
      <PieChart />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-[#8bb88a] left-0 rounded-[8px] size-[20px] top-[9.5px]" data-name="Container" />;
}

function Text7() {
  return (
    <div className="absolute h-[39px] left-[36px] top-0 w-[256.375px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[39px] left-0 text-[#4a4a45] text-[26px] top-0 whitespace-nowrap">{`Students & Educators`}</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[39px] left-[608.25px] top-0 w-[53.078px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[39px] left-0 text-[#1a1a1a] text-[26px] top-0 whitespace-nowrap">75%</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[39px] relative shrink-0 w-[661.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container10 />
        <Text7 />
        <Text8 />
      </div>
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-[#5ba4cf] left-0 rounded-[8px] size-[20px] top-[9.5px]" data-name="Container" />;
}

function Text9() {
  return (
    <div className="absolute h-[39px] left-[36px] top-0 w-[244.828px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[39px] left-0 text-[#4a4a45] text-[26px] top-0 whitespace-nowrap">{`Marketing & Content`}</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[39px] left-[622.5px] top-0 w-[38.828px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[39px] left-0 text-[#1a1a1a] text-[26px] top-0 whitespace-nowrap">8%</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[39px] relative shrink-0 w-[661.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container12 />
        <Text9 />
        <Text10 />
      </div>
    </div>
  );
}

function Container14() {
  return <div className="absolute bg-[#f2c94c] left-0 rounded-[8px] size-[20px] top-[9.5px]" data-name="Container" />;
}

function Text11() {
  return (
    <div className="absolute h-[39px] left-[36px] top-0 w-[119.297px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[39px] left-0 text-[#4a4a45] text-[26px] top-0 whitespace-nowrap">Designers</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[39px] left-[622.5px] top-0 w-[38.828px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[39px] left-0 text-[#1a1a1a] text-[26px] top-0 whitespace-nowrap">8%</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[39px] relative shrink-0 w-[661.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container14 />
        <Text11 />
        <Text12 />
      </div>
    </div>
  );
}

function Container16() {
  return <div className="absolute bg-[#e87461] left-0 rounded-[8px] size-[20px] top-[9.5px]" data-name="Container" />;
}

function Text13() {
  return (
    <div className="absolute h-[39px] left-[36px] top-0 w-[67.609px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[39px] left-0 text-[#4a4a45] text-[26px] top-0 whitespace-nowrap">Other</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[39px] left-[622.56px] top-0 w-[38.766px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[39px] left-0 text-[#1a1a1a] text-[26px] top-0 whitespace-nowrap">9%</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[661.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container16 />
        <Text13 />
        <Text14 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[204px] items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container11 />
      <Container13 />
      <Container15 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[837px] items-start left-0 top-0 w-[661.328px]" data-name="Container">
      <Heading1 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[39px] left-0 text-[#8b8578] text-[26px] top-0 tracking-[2.08px] uppercase whitespace-nowrap">AI Tool Usage</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[151.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[108px] left-0 text-[#6b9e6a] text-[72px] top-[-1px] tracking-[-1.44px] whitespace-nowrap">58%</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[78px] relative shrink-0 w-[186.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[39px] left-[94px] text-[#7a7a72] text-[26px] text-center top-0 w-[188px]">Regular (multiple/week)</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#e8f5e9] drop-shadow-[0px_2px_4px_rgba(0,0,0,0.03)] h-[274px] relative rounded-[32px] shrink-0 w-[661.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center py-[40px] relative size-full">
        <Text15 />
        <Text16 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[149.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[108px] left-0 text-[#8b8578] text-[72px] top-[-1px] tracking-[-1.44px] whitespace-nowrap">42%</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[78px] relative shrink-0 w-[233.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[39px] left-[117px] text-[#7a7a72] text-[26px] text-center top-0 w-[234px]">Occasional (once/week or less)</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#f5f5f0] drop-shadow-[0px_2px_4px_rgba(0,0,0,0.03)] flex-[1_0_0] min-h-px relative rounded-[32px] w-[661.328px]" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center py-[40px] relative size-full">
          <Text17 />
          <Text18 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[580px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[837px] items-start left-[741.33px] top-0 w-[661.328px]" data-name="Container">
      <Heading2 />
      <Container18 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[39px] left-0 text-[#8b8578] text-[26px] top-0 tracking-[2.08px] uppercase whitespace-nowrap">Content Creation Frequency</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[0_6.04%_10.71%_27.19%]" data-name="Group">
      <div className="absolute inset-[0_-0.23%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 500">
          <g id="Group">
            <path d="M1 0V500" id="Vector" stroke="var(--stroke-0, #EEEEE8)" strokeDasharray="6 6" strokeWidth="2" />
            <path d="M133.602 0V500" id="Vector_2" stroke="var(--stroke-0, #EEEEE8)" strokeDasharray="6 6" strokeWidth="2" />
            <path d="M266.199 0V500" id="Vector_3" stroke="var(--stroke-0, #EEEEE8)" strokeDasharray="6 6" strokeWidth="2" />
            <path d="M443 0V500" id="Vector_4" stroke="var(--stroke-0, #EEEEE8)" strokeDasharray="6 6" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[0_6.04%_10.71%_27.19%]" data-name="Group">
      <Group6 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[89.29%_70.24%_3.92%_24.47%]" data-name="Group">
      <div className="absolute inset-[89.29%_72.81%_8.57%_27.19%]" data-name="Vector">
        <div className="absolute inset-[0_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 12">
            <path d="M1 12V0" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[90.9%_70.24%_3.92%_24.47%] leading-[normal] not-italic text-[#bbbbb0] text-[24px] text-center whitespace-nowrap">0%</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[89.29%_49.3%_3.92%_43.75%]" data-name="Group">
      <div className="absolute inset-[89.29%_52.78%_8.57%_47.22%]" data-name="Vector">
        <div className="absolute inset-[0_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 12">
            <path d="M1 12V0" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[90.9%_49.3%_3.92%_43.75%] leading-[normal] not-italic text-[#bbbbb0] text-[24px] text-center whitespace-nowrap">15%</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[89.29%_28.97%_3.92%_63.47%]" data-name="Group">
      <div className="absolute inset-[89.29%_32.75%_8.57%_67.25%]" data-name="Vector">
        <div className="absolute inset-[0_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 12">
            <path d="M1 12V0" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[90.9%_28.97%_3.92%_63.47%] leading-[normal] not-italic text-[#bbbbb0] text-[24px] text-center whitespace-nowrap">30%</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[89.29%_2.27%_3.92%_90.18%]" data-name="Group">
      <div className="absolute inset-[89.29%_6.04%_8.57%_93.96%]" data-name="Vector">
        <div className="absolute inset-[0_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 12">
            <path d="M1 12V0" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[90.9%_2.27%_3.92%_90.18%] leading-[normal] not-italic text-[#bbbbb0] text-[24px] text-center whitespace-nowrap">50%</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[89.29%_2.27%_3.92%_24.47%]" data-name="Group">
      <Group9 />
      <Group10 />
      <Group11 />
      <Group12 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[89.29%_2.27%_3.92%_24.47%]" data-name="Group">
      <div className="absolute inset-[89.29%_6.04%_10.71%_27.19%]" data-name="Vector">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 442 2">
            <path d="M0 1H442" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Group8 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[8.17%_72.81%_86.3%_15.41%]" data-name="Group">
      <div className="absolute inset-[11.16%_72.81%_88.84%_25.38%]" data-name="Vector">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0 1H12" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[8.17%_75.38%_86.3%_15.41%] leading-[normal] not-italic text-[#4a4a45] text-[26px] text-right whitespace-nowrap">Daily</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[30.49%_72.81%_63.98%_4.53%]" data-name="Group">
      <div className="absolute inset-[33.48%_72.81%_66.52%_25.38%]" data-name="Vector">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0 1H12" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[30.49%_75.38%_63.98%_4.53%] leading-[normal] not-italic text-[#4a4a45] text-[26px] text-right whitespace-nowrap">3-5x/week</p>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[52.81%_72.81%_41.66%_5.44%]" data-name="Group">
      <div className="absolute inset-[55.8%_72.81%_44.2%_25.38%]" data-name="Vector">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0 1H12" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[52.81%_75.23%_41.66%_5.44%] leading-[normal] not-italic text-[#4a4a45] text-[26px] text-right whitespace-nowrap">1-2x/week</p>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[75.13%_72.81%_19.33%_5.74%]" data-name="Group">
      <div className="absolute inset-[78.13%_72.81%_21.88%_25.38%]" data-name="Vector">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0 1H12" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[75.13%_75.38%_19.33%_5.74%] leading-[normal] not-italic text-[#4a4a45] text-[26px] text-right whitespace-nowrap">{`< 1x/week`}</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[8.17%_72.81%_19.33%_4.53%]" data-name="Group">
      <Group15 />
      <Group16 />
      <Group17 />
      <Group18 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[0_72.81%_10.71%_4.53%]" data-name="Group">
      <div className="absolute inset-[0_72.81%_10.71%_27.19%]" data-name="Vector">
        <div className="absolute inset-[0_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 500">
            <path d="M1 0V500" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Group14 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[6.07%_39.43%_83.93%_27.19%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221 56">
        <g id="Group">
          <path d={svgPaths.p1f800420} fill="var(--fill-0, #8BB88A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[28.39%_62.13%_61.61%_27.19%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70.72 56">
        <g id="Group">
          <path d={svgPaths.p1207ec00} fill="var(--fill-0, #5BA4CF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[50.71%_39.43%_39.29%_27.19%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221 56">
        <g id="Group">
          <path d={svgPaths.pf36d280} fill="var(--fill-0, #F2C94C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[73.04%_16.73%_16.96%_27.19%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 371.28 56">
        <g id="Group">
          <path d={svgPaths.p349fdb00} fill="var(--fill-0, #8B8578)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[6.07%_16.73%_16.96%_27.19%]" data-name="Group">
      <Group22 />
      <Group23 />
      <Group24 />
      <Group25 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[6.07%_16.73%_16.96%_27.19%]" data-name="Group">
      <Group21 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[6.07%_16.73%_16.96%_27.19%]" data-name="Group">
      <Group20 />
    </div>
  );
}

function Surface1() {
  return (
    <div className="absolute h-[560px] left-0 overflow-clip top-0 w-[662px]" data-name="Surface">
      <Group5 />
      <Group7 />
      <Group13 />
      <Group19 />
    </div>
  );
}

function BarChart() {
  return (
    <div className="h-[560px] relative shrink-0 w-full" data-name="BarChart">
      <Surface1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[837px] items-start left-[1482.66px] top-0 w-[661.328px]" data-name="Container">
      <Heading3 />
      <BarChart />
    </div>
  );
}

function SlideUsers() {
  return (
    <div className="absolute h-[837px] left-[128px] top-[401px] w-[2144px]" data-name="SlideUsers">
      <Container6 />
      <Container17 />
      <Container21 />
    </div>
  );
}

function SectionWrapper1() {
  return (
    <div className="bg-white h-[1350px] relative shrink-0 w-full" data-name="SectionWrapper">
      <SectionNumber />
      <SectionTitle />
      <SectionSubtitle />
      <SlideUsers />
    </div>
  );
}

function SectionNumber1() {
  return (
    <div className="absolute bg-[#f0ede6] h-[49px] left-[128px] rounded-[33554400px] top-[112px] w-[2144px]" data-name="SectionNumber">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[33px] left-[24px] text-[#8b8578] text-[22px] top-[8px] tracking-[2.64px] whitespace-nowrap">02 PAIN POINTS</p>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="absolute h-[80px] left-[128px] top-[193px] w-[2144px]" data-name="SectionTitle">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[80px] left-0 text-[#1a1a1a] text-[64px] top-0 tracking-[-1.28px] whitespace-nowrap">Top Pain Points</p>
    </div>
  );
}

function SectionSubtitle1() {
  return (
    <div className="absolute h-[48px] left-[128px] top-[289px] w-[1400px]" data-name="SectionSubtitle">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#7a7a72] text-[30px] top-0 whitespace-nowrap">The three biggest frustrations reported by our users</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Icon">
          <path d={svgPaths.p1200d900} id="Vector" stroke="var(--stroke-0, #6B9E6A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p3d94e700} id="Vector_2" stroke="var(--stroke-0, #6B9E6A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p14fe6d00} id="Vector_3" stroke="var(--stroke-0, #6B9E6A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.pad0e080} id="Vector_4" stroke="var(--stroke-0, #6B9E6A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p28ed6a00} id="Vector_5" stroke="var(--stroke-0, #6B9E6A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.pb923200} id="Vector_6" stroke="var(--stroke-0, #6B9E6A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p11c40a00} id="Vector_7" stroke="var(--stroke-0, #6B9E6A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p38332fc0} id="Vector_8" stroke="var(--stroke-0, #6B9E6A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p3c923fc0} id="Vector_9" stroke="var(--stroke-0, #6B9E6A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(0,0,0,0.06)] flex items-center justify-center left-[56px] rounded-[28px] size-[88px] top-[56px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute h-[33px] left-[56px] top-[176px] w-[560px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[33px] left-0 text-[#6b9e6a] text-[22px] top-0 tracking-[1.76px] uppercase whitespace-nowrap">#1</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[66px] left-[56px] top-[217px] w-[560px]" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[66px] left-0 text-[#1a1a1a] text-[44px] top-0 tracking-[-0.44px] whitespace-nowrap">Context Loss</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[126px] relative shrink-0 w-[166.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[126px] left-0 text-[#6b9e6a] text-[84px] top-0 tracking-[-1.68px] whitespace-nowrap">75%</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex h-[126px] items-start left-[56px] top-[299px] w-[560px]" data-name="Container">
      <Text20 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[84px] left-[56px] top-[449px] w-[560px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[42px] left-0 text-[#5a5a52] text-[28px] top-px w-[540px]">{`of users experience "AI forgetting previous context"`}</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[39px] left-0 text-[#5a5a52] text-[26px] top-0 w-[452px]">{`"AI 'forgetting' previous context is the most frustrating part of my workflow."`}</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col h-[126px] items-start left-[56px] pt-[24px] px-[32px] rounded-[28px] top-[655px] w-[560px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute h-[216px] left-[474.11px] opacity-8 top-[24px] w-[157.891px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[216px] left-0 text-[#6b9e6a] text-[144px] top-0 whitespace-nowrap">#1</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#e8f5e9] col-1 justify-self-stretch overflow-clip relative rounded-[48px] row-1 self-stretch shrink-0" data-name="Container">
      <Container23 />
      <Text19 />
      <Heading4 />
      <Container24 />
      <Paragraph1 />
      <Container25 />
      <Text21 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Icon">
          <path d={svgPaths.p1013c2a0} id="Vector" stroke="var(--stroke-0, #5BA4CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p3a780400} id="Vector_2" stroke="var(--stroke-0, #5BA4CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p238216aa} id="Vector_3" stroke="var(--stroke-0, #5BA4CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p174bcf80} id="Vector_4" stroke="var(--stroke-0, #5BA4CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p31144300} id="Vector_5" stroke="var(--stroke-0, #5BA4CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(0,0,0,0.06)] flex items-center justify-center left-[56px] rounded-[28px] size-[88px] top-[56px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute h-[33px] left-[56px] top-[176px] w-[560px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[33px] left-0 text-[#5ba4cf] text-[22px] top-0 tracking-[1.76px] uppercase whitespace-nowrap">#2</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[66px] left-[56px] top-[217px] w-[560px]" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[66px] left-0 text-[#1a1a1a] text-[44px] top-0 tracking-[-0.44px] whitespace-nowrap">Context Switching</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[126px] relative shrink-0 w-[176.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[126px] left-0 text-[#5ba4cf] text-[84px] top-0 tracking-[-1.68px] whitespace-nowrap">58%</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex h-[126px] items-start left-[56px] top-[299px] w-[560px]" data-name="Container">
      <Text23 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[84px] left-[56px] top-[449px] w-[560px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[42px] left-0 text-[#5a5a52] text-[28px] top-px w-[530px]">struggle with switching between multiple tools</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[39px] left-0 text-[#5a5a52] text-[26px] top-0 w-[446px]">{`"5-30 minutes per session wasted on switching"`}</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col h-[126px] items-start left-[56px] pt-[24px] px-[32px] rounded-[28px] top-[655px] w-[560px]" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute h-[216px] left-[446.14px] opacity-8 top-[24px] w-[185.859px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[216px] left-0 text-[#5ba4cf] text-[144px] top-0 whitespace-nowrap">#2</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#e3f2fd] col-2 justify-self-stretch overflow-clip relative rounded-[48px] row-1 self-stretch shrink-0" data-name="Container">
      <Container27 />
      <Text22 />
      <Heading5 />
      <Container28 />
      <Paragraph3 />
      <Container29 />
      <Text24 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Icon">
          <path d="M22 3.66797V40.3346" id="Vector" stroke="var(--stroke-0, #E87461)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p13376380} id="Vector_2" stroke="var(--stroke-0, #E87461)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(0,0,0,0.06)] flex items-center justify-center left-[56px] rounded-[28px] size-[88px] top-[56px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute h-[33px] left-[56px] top-[176px] w-[560px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[33px] left-0 text-[#e87461] text-[22px] top-0 tracking-[1.76px] uppercase whitespace-nowrap">#3</p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[66px] left-[56px] top-[217px] w-[560px]" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[66px] left-0 text-[#1a1a1a] text-[44px] top-0 tracking-[-0.44px] whitespace-nowrap">Cost Concerns</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[126px] relative shrink-0 w-[174.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[126px] left-0 text-[#e87461] text-[84px] top-0 tracking-[-1.68px] whitespace-nowrap">83%</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex h-[126px] items-start left-[56px] top-[299px] w-[560px]" data-name="Container">
      <Text26 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[42px] left-[56px] top-[449px] w-[560px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[42px] left-0 text-[#5a5a52] text-[28px] top-px whitespace-nowrap">worry about subscription costs</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[39px] left-0 text-[#5a5a52] text-[26px] top-0 whitespace-nowrap">{`"Total cost adds up too much"`}</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col h-[87px] items-start left-[56px] pt-[24px] px-[32px] rounded-[28px] top-[694px] w-[560px]" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute h-[216px] left-[446.55px] opacity-8 top-[24px] w-[185.453px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[216px] left-0 text-[#e87461] text-[144px] top-0 whitespace-nowrap">#3</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#fff3f0] col-3 justify-self-stretch overflow-clip relative rounded-[48px] row-1 self-stretch shrink-0" data-name="Container">
      <Container31 />
      <Text25 />
      <Heading6 />
      <Container32 />
      <Paragraph5 />
      <Container33 />
      <Text27 />
    </div>
  );
}

function SlidePainPoints() {
  return (
    <div className="absolute gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[837px] left-[128px] top-[401px] w-[2144px]" data-name="SlidePainPoints">
      <Container22 />
      <Container26 />
      <Container30 />
    </div>
  );
}

function SectionWrapper2() {
  return (
    <div className="bg-[#fafaf8] h-[1350px] relative shrink-0 w-full" data-name="SectionWrapper">
      <SectionNumber1 />
      <SectionTitle1 />
      <SectionSubtitle1 />
      <SlidePainPoints />
    </div>
  );
}

function SectionNumber2() {
  return (
    <div className="absolute bg-[#f0ede6] h-[49px] left-[128px] rounded-[33554400px] top-[112px] w-[2144px]" data-name="SectionNumber">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[33px] left-[24px] text-[#8b8578] text-[22px] top-[8px] tracking-[2.64px] whitespace-nowrap">03 CONTEXT SWITCHING</p>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="absolute h-[80px] left-[128px] top-[193px] w-[2144px]" data-name="SectionTitle">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[80px] left-0 text-[#1a1a1a] text-[64px] top-0 tracking-[-1.28px] whitespace-nowrap">Time Spent Context Switching</p>
    </div>
  );
}

function SectionSubtitle2() {
  return (
    <div className="absolute h-[48px] left-[128px] top-[289px] w-[1400px]" data-name="SectionSubtitle">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#7a7a72] text-[30px] top-0 whitespace-nowrap">How much time do users spend switching/copying between tools per session?</p>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute inset-[10.53%_10%_48.68%_35.79%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 433.711 310">
        <g id="Group">
          <path d={svgPaths.p23f87100} fill="var(--fill-0, #8BB88A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute inset-[15.14%_58.57%_16.97%_12.5%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 231.45 515.975">
        <g id="Group">
          <path d={svgPaths.p3c417c00} fill="var(--fill-0, #5BA4CF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute inset-[65.38%_18.62%_7.89%_29.05%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 418.683 203.109">
        <g id="Group">
          <path d={svgPaths.p3a277f00} fill="var(--fill-0, #F2C94C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute inset-[52.88%_10.09%_25.31%_68.67%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 169.921 165.773">
        <g id="Group">
          <path d={svgPaths.p32eee480} fill="var(--fill-0, #8B8578)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[9.64%_6.27%_82.8%_72.49%]" data-name="Group">
      <div className="absolute inset-[12.8%_24.77%_82.8%_72.49%]" data-name="Vector">
        <div className="absolute inset-[-1.64%_-3.81%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5987 34.5523">
            <path d={svgPaths.pc549180} id="Vector" stroke="var(--stroke-0, #8BB88A)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[9.64%_6.27%_86.54%_75.23%] leading-[normal] not-italic text-[#8bb88a] text-[24px] whitespace-nowrap">{`< 5 min: 33%`}</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[43.57%_87.31%_52.62%_-12.78%]" data-name="Group">
      <div className="absolute inset-[46.73%_87.31%_52.75%_7.72%]" data-name="Vector">
        <div className="absolute inset-[-24.95%_-0.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.0014 5.97804">
            <path d={svgPaths.p10bb5800} id="Vector" stroke="var(--stroke-0, #5BA4CF)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[43.57%_92.41%_52.62%_-12.78%] leading-[normal] not-italic text-[#5ba4cf] text-[24px] text-right whitespace-nowrap">5-15 min: 33%</p>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[91.7%_20.51%_2.43%_56.67%]" data-name="Group">
      <div className="absolute inset-[91.7%_42.63%_3.08%_56.67%]" data-name="Vector">
        <div className="absolute inset-[-0.35%_-17.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.57434 39.8877">
            <path d={svgPaths.p18200c80} id="Vector" stroke="var(--stroke-0, #F2C94C)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[93.76%_20.51%_2.43%_57.37%] leading-[normal] not-italic text-[#f2c94c] text-[24px] whitespace-nowrap">15-30 min: 25%</p>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[63.52%_-13.37%_32.67%_87.78%]" data-name="Group">
      <div className="absolute inset-[64.92%_7.5%_33.33%_87.78%]" data-name="Vector">
        <div className="absolute inset-[-7.07%_-0.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.3789 15.2255">
            <path d={svgPaths.p16605000} id="Vector" stroke="var(--stroke-0, #8B8578)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[63.52%_-13.37%_32.67%_92.5%] leading-[normal] not-italic text-[#8b8578] text-[24px] whitespace-nowrap">30-60 min: 9%</p>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[9.64%_-13.37%_2.43%_-12.78%]" data-name="Group">
      <Group32 />
      <Group33 />
      <Group34 />
      <Group35 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[9.64%_-13.37%_2.43%_-12.78%]" data-name="Group">
      <Group27 />
      <Group28 />
      <Group29 />
      <Group30 />
      <Group31 />
    </div>
  );
}

function Surface2() {
  return (
    <div className="absolute h-[760px] left-0 overflow-clip top-0 w-[800px]" data-name="Surface">
      <Group26 />
    </div>
  );
}

function PieChart1() {
  return (
    <div className="absolute h-[760px] left-0 top-[38.5px] w-[800px]" data-name="PieChart">
      <Surface2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p25667780} id="Vector" stroke="var(--stroke-0, #8BB88A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M18 9V18L24 21" id="Vector_2" stroke="var(--stroke-0, #8BB88A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#e8f5e9] relative rounded-[28px] shrink-0 size-[96px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute h-[45px] left-0 top-[11px] w-[103.094px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[45px] left-0 text-[#1a1a1a] text-[30px] top-[-1px] whitespace-nowrap">{`< 5 min`}</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute h-[60px] left-[811px] top-0 w-[85px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[60px] left-0 text-[#1a1a1a] text-[40px] top-0 whitespace-nowrap">33%</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Text28 />
      <Text29 />
    </div>
  );
}

function Container41() {
  return <div className="bg-[#8bb88a] h-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Container" />;
}

function Container40() {
  return (
    <div className="bg-[#eeeee8] content-stretch flex flex-col h-[16px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <Container41 />
    </div>
  );
}

function Container38() {
  return (
    <div className="flex-[1_0_0] h-[88px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[96px] relative shrink-0 w-[1024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p25667780} id="Vector" stroke="var(--stroke-0, #5BA4CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M18 9V18L24 21" id="Vector_2" stroke="var(--stroke-0, #5BA4CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#e3f2fd] relative rounded-[28px] shrink-0 size-[96px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute h-[45px] left-0 top-[11px] w-[124.016px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[45px] left-0 text-[#1a1a1a] text-[30px] top-[-1px] whitespace-nowrap">5-15 min</p>
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute h-[60px] left-[811px] top-0 w-[85px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[60px] left-0 text-[#1a1a1a] text-[40px] top-0 whitespace-nowrap">33%</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Text30 />
      <Text31 />
    </div>
  );
}

function Container47() {
  return <div className="bg-[#5ba4cf] h-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Container" />;
}

function Container46() {
  return (
    <div className="bg-[#eeeee8] content-stretch flex flex-col h-[16px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <Container47 />
    </div>
  );
}

function Container44() {
  return (
    <div className="flex-[1_0_0] h-[88px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[96px] relative shrink-0 w-[1024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p25667780} id="Vector" stroke="var(--stroke-0, #F2C94C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M18 9V18L24 21" id="Vector_2" stroke="var(--stroke-0, #F2C94C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[#fff8e1] relative rounded-[28px] shrink-0 size-[96px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute h-[45px] left-0 top-[11px] w-[144.656px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[45px] left-0 text-[#1a1a1a] text-[30px] top-[-1px] whitespace-nowrap">15-30 min</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute h-[60px] left-[810px] top-0 w-[86px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[60px] left-0 text-[#1a1a1a] text-[40px] top-0 whitespace-nowrap">25%</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Text32 />
      <Text33 />
    </div>
  );
}

function Container53() {
  return <div className="bg-[#f2c94c] h-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Container" />;
}

function Container52() {
  return (
    <div className="bg-[#eeeee8] h-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[217.219px] relative size-full">
          <Container53 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="flex-[1_0_0] h-[88px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[96px] relative shrink-0 w-[1024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p25667780} id="Vector" stroke="var(--stroke-0, #8B8578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M18 9V18L24 21" id="Vector_2" stroke="var(--stroke-0, #8B8578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#f5f5f0] relative rounded-[28px] shrink-0 size-[96px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute h-[45px] left-0 top-[11px] w-[152.234px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[45px] left-0 text-[#1a1a1a] text-[30px] top-[-1px] whitespace-nowrap">30-60 min</p>
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute h-[60px] left-[836.38px] top-0 w-[59.625px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[60px] left-0 text-[#1a1a1a] text-[40px] top-0 whitespace-nowrap">9%</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Text34 />
      <Text35 />
    </div>
  );
}

function Container59() {
  return <div className="bg-[#8b8578] h-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Container" />;
}

function Container58() {
  return (
    <div className="bg-[#eeeee8] h-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[651.641px] relative size-full">
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="flex-[1_0_0] h-[88px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Container57 />
        <Container58 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[1024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Container55 />
        <Container56 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[1024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative size-full">
        <Container36 />
        <Container42 />
        <Container48 />
        <Container54 />
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[54px] relative shrink-0 w-[36px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[54px] left-0 text-[#0a0a0a] text-[36px] top-[-1px] whitespace-nowrap">💡</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="flex-[1_0_0] h-[124.781px] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[41.6px] left-0 text-[#8d6e00] text-[26px] top-[-1px] w-[876px]">Most users spend 5-30 minutes per work session just copying, pasting, and switching between tools—time that could be spent on actual creative work.</p>
      </div>
    </div>
  );
}

function InsightCallout() {
  return (
    <div className="bg-[#fff8e1] drop-shadow-[0px_2px_4px_rgba(0,0,0,0.04)] h-[188.781px] relative rounded-[32px] shrink-0 w-[1024px]" data-name="InsightCallout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start pt-[32px] px-[40px] relative size-full">
        <Text36 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] h-[716.781px] items-start left-[1120px] top-[60.11px] w-[1024px]" data-name="Container">
      <Container35 />
      <InsightCallout />
    </div>
  );
}

function SlideTimeSwitching() {
  return (
    <div className="absolute h-[837px] left-[128px] top-[401px] w-[2144px]" data-name="SlideTimeSwitching">
      <PieChart1 />
      <Container34 />
    </div>
  );
}

function SectionWrapper3() {
  return (
    <div className="bg-white h-[1350px] relative shrink-0 w-full" data-name="SectionWrapper">
      <SectionNumber2 />
      <SectionTitle2 />
      <SectionSubtitle2 />
      <SlideTimeSwitching />
    </div>
  );
}

function SectionNumber3() {
  return (
    <div className="absolute bg-[#f0ede6] h-[49px] left-[128px] rounded-[33554400px] top-[112px] w-[2144px]" data-name="SectionNumber">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[33px] left-[24px] text-[#8b8578] text-[22px] top-[8px] tracking-[2.64px] whitespace-nowrap">{`04 COST & SPENDING`}</p>
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="absolute h-[80px] left-[128px] top-[193px] w-[2144px]" data-name="SectionTitle">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[80px] left-0 text-[#1a1a1a] text-[64px] top-0 tracking-[-1.28px] whitespace-nowrap">{`Current Spending & Cost Concerns`}</p>
    </div>
  );
}

function SectionSubtitle3() {
  return (
    <div className="absolute h-[48px] left-[128px] top-[289px] w-[1400px]" data-name="SectionSubtitle">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#7a7a72] text-[30px] top-0 whitespace-nowrap">83% of users worry about subscription costs</p>
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[39px] left-0 top-0 w-[1024px]" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[39px] left-0 text-[#8b8578] text-[26px] top-0 tracking-[2.08px] uppercase whitespace-nowrap">Current Subscription Status</p>
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute h-[33.797px] left-0 top-[11.09px] w-[440px]" data-name="Text">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[33.8px] left-[440.52px] text-[#4a4a45] text-[26px] text-right top-[-1px] whitespace-nowrap">Only use free versions</p>
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute h-[42px] left-[940px] top-[7px] w-[84px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#1a1a1a] text-[28px] top-px whitespace-nowrap">67%</p>
    </div>
  );
}

function Container63() {
  return <div className="bg-[#8bb88a] h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Container" />;
}

function Container62() {
  return (
    <div className="absolute bg-[#eeeee8] content-stretch flex flex-col h-[56px] items-start left-[464px] overflow-clip pr-[149.172px] rounded-[16px] top-0 w-[452px]" data-name="Container">
      <Container63 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[56px] relative shrink-0 w-[1024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text37 />
        <Text38 />
        <Container62 />
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute h-[33.797px] left-0 top-[11.09px] w-[440px]" data-name="Text">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[33.8px] left-[440.39px] text-[#4a4a45] text-[26px] text-right top-[-1px] whitespace-nowrap">Previously paid but cancelled</p>
    </div>
  );
}

function Text40() {
  return (
    <div className="absolute h-[42px] left-[940px] top-[7px] w-[84px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#1a1a1a] text-[28px] top-px whitespace-nowrap">17%</p>
    </div>
  );
}

function Container66() {
  return <div className="bg-[#e87461] h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Container" />;
}

function Container65() {
  return (
    <div className="absolute bg-[#eeeee8] content-stretch flex flex-col h-[56px] items-start left-[464px] overflow-clip pr-[375.172px] rounded-[16px] top-0 w-[452px]" data-name="Container">
      <Container66 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[56px] relative shrink-0 w-[1024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text39 />
        <Text40 />
        <Container65 />
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="absolute h-[33.797px] left-0 top-[11.09px] w-[440px]" data-name="Text">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[33.8px] left-[440.23px] text-[#4a4a45] text-[26px] text-right top-[-1px] whitespace-nowrap">Pay for 1 subscription</p>
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute h-[42px] left-[940px] top-[7px] w-[84px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#1a1a1a] text-[28px] top-px whitespace-nowrap">8%</p>
    </div>
  );
}

function Container69() {
  return <div className="bg-[#5ba4cf] h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Container" />;
}

function Container68() {
  return (
    <div className="absolute bg-[#eeeee8] content-stretch flex flex-col h-[56px] items-start left-[464px] overflow-clip pr-[415.844px] rounded-[16px] top-0 w-[452px]" data-name="Container">
      <Container69 />
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[56px] relative shrink-0 w-[1024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text41 />
        <Text42 />
        <Container68 />
      </div>
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute h-[33.797px] left-0 top-[11.09px] w-[440px]" data-name="Text">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[33.8px] left-[440.81px] text-[#4a4a45] text-[26px] text-right top-[-1px] whitespace-nowrap">Pay for 2 subscriptions</p>
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute h-[42px] left-[940px] top-[7px] w-[84px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#1a1a1a] text-[28px] top-px whitespace-nowrap">8%</p>
    </div>
  );
}

function Container72() {
  return <div className="bg-[#f2c94c] h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Container" />;
}

function Container71() {
  return (
    <div className="absolute bg-[#eeeee8] content-stretch flex flex-col h-[56px] items-start left-[464px] overflow-clip pr-[415.844px] rounded-[16px] top-0 w-[452px]" data-name="Container">
      <Container72 />
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[56px] relative shrink-0 w-[1024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text43 />
        <Text44 />
        <Container71 />
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute h-[33.797px] left-0 top-[11.09px] w-[440px]" data-name="Text">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[33.8px] left-[440.45px] text-[#4a4a45] text-[26px] text-right top-[-1px] whitespace-nowrap">Pay for 3+ subscriptions</p>
    </div>
  );
}

function Text46() {
  return (
    <div className="absolute h-[42px] left-[940px] top-[7px] w-[84px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#1a1a1a] text-[28px] top-px whitespace-nowrap">8%</p>
    </div>
  );
}

function Container75() {
  return <div className="bg-[#a78bfa] h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Container" />;
}

function Container74() {
  return (
    <div className="absolute bg-[#eeeee8] content-stretch flex flex-col h-[56px] items-start left-[464px] overflow-clip pr-[415.844px] rounded-[16px] top-0 w-[452px]" data-name="Container">
      <Container75 />
    </div>
  );
}

function Container73() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[1024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text45 />
        <Text46 />
        <Container74 />
      </div>
    </div>
  );
}

function HorizontalBar() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[376px] items-start left-0 top-[79px] w-[1024px]" data-name="HorizontalBar">
      <Container61 />
      <Container64 />
      <Container67 />
      <Container70 />
      <Container73 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d="M18 3V33" id="Vector" stroke="var(--stroke-0, #E87461)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.p3fce8000} id="Vector_2" stroke="var(--stroke-0, #E87461)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[42px] relative shrink-0 w-[397.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[42px] left-0 text-[#b94a3a] text-[28px] top-px whitespace-nowrap">67% rely on free versions only</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute bg-[#fff3f0] content-stretch flex gap-[24px] h-[106px] items-center left-0 pl-[32px] rounded-[32px] top-[503px] w-[1024px]" data-name="Container">
      <Icon8 />
      <Text47 />
    </div>
  );
}

function Container60() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading7 />
      <HorizontalBar />
      <Container76 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[39px] left-0 top-0 w-[1024px]" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[39px] left-0 text-[#8b8578] text-[26px] top-0 tracking-[2.08px] uppercase whitespace-nowrap">Top Cost Concerns</p>
    </div>
  );
}

function Text48() {
  return (
    <div className="absolute h-[67.594px] left-0 top-0 w-[440px]" data-name="Text">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[33.8px] left-[440.47px] text-[#4a4a45] text-[26px] text-right top-[-1px] w-[436px]">{`Don't use each tool enough to justify cost`}</p>
    </div>
  );
}

function Text49() {
  return (
    <div className="absolute h-[42px] left-[940px] top-[12.8px] w-[84px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#1a1a1a] text-[28px] top-px whitespace-nowrap">42%</p>
    </div>
  );
}

function Container80() {
  return <div className="bg-[#e87461] h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Container" />;
}

function Container79() {
  return (
    <div className="absolute bg-[#eeeee8] content-stretch flex flex-col h-[56px] items-start left-[464px] overflow-clip pr-[262.172px] rounded-[16px] top-[5.8px] w-[452px]" data-name="Container">
      <Container80 />
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[67.594px] relative shrink-0 w-[1024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text48 />
        <Text49 />
        <Container79 />
      </div>
    </div>
  );
}

function Text50() {
  return (
    <div className="absolute h-[33.797px] left-0 top-[11.09px] w-[440px]" data-name="Text">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[33.8px] left-[440.47px] text-[#4a4a45] text-[26px] text-right top-[-1px] whitespace-nowrap">Total cost adds up too much</p>
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute h-[42px] left-[940px] top-[7px] w-[84px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#1a1a1a] text-[28px] top-px whitespace-nowrap">25%</p>
    </div>
  );
}

function Container83() {
  return <div className="bg-[#e87461] h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Container" />;
}

function Container82() {
  return (
    <div className="absolute bg-[#eeeee8] content-stretch flex flex-col h-[56px] items-start left-[464px] overflow-clip pr-[339px] rounded-[16px] top-0 w-[452px]" data-name="Container">
      <Container83 />
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[56px] relative shrink-0 w-[1024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text50 />
        <Text51 />
        <Container82 />
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="absolute h-[67.594px] left-0 top-0 w-[440px]" data-name="Text">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[33.8px] left-[441.05px] text-[#4a4a45] text-[26px] text-right top-[-1px] w-[408px]">Not sure which tools worth paying for</p>
    </div>
  );
}

function Text53() {
  return (
    <div className="absolute h-[42px] left-[940px] top-[12.8px] w-[84px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#1a1a1a] text-[28px] top-px whitespace-nowrap">17%</p>
    </div>
  );
}

function Container86() {
  return <div className="bg-[#5ba4cf] h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Container" />;
}

function Container85() {
  return (
    <div className="absolute bg-[#eeeee8] content-stretch flex flex-col h-[56px] items-start left-[464px] overflow-clip pr-[375.172px] rounded-[16px] top-[5.8px] w-[452px]" data-name="Container">
      <Container86 />
    </div>
  );
}

function Container84() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[1024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text52 />
        <Text53 />
        <Container85 />
      </div>
    </div>
  );
}

function Text54() {
  return (
    <div className="absolute h-[33.797px] left-0 top-[11.09px] w-[440px]" data-name="Text">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[33.8px] left-[440.97px] text-[#4a4a45] text-[26px] text-right top-[-1px] whitespace-nowrap">Worried about price increases</p>
    </div>
  );
}

function Text55() {
  return (
    <div className="absolute h-[42px] left-[940px] top-[7px] w-[84px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#1a1a1a] text-[28px] top-px whitespace-nowrap">8%</p>
    </div>
  );
}

function Container89() {
  return <div className="bg-[#f2c94c] h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Container" />;
}

function Container88() {
  return (
    <div className="absolute bg-[#eeeee8] content-stretch flex flex-col h-[56px] items-start left-[464px] overflow-clip pr-[415.844px] rounded-[16px] top-0 w-[452px]" data-name="Container">
      <Container89 />
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[56px] relative shrink-0 w-[1024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text54 />
        <Text55 />
        <Container88 />
      </div>
    </div>
  );
}

function HorizontalBar1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[319.188px] items-start left-0 top-[79px] w-[1024px]" data-name="HorizontalBar">
      <Container78 />
      <Container81 />
      <Container84 />
      <Container87 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[44.797px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[44.8px] left-0 text-[#4a5043] text-[28px] top-0 whitespace-nowrap">{`"Total cost adds up too much"`}</p>
    </div>
  );
}

function QuoteBlock() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(0,0,0,0.04)] flex flex-col h-[124.797px] items-start left-0 pl-[56px] pr-[48px] pt-[40px] rounded-[32px] top-[430.19px] w-[1024px]" data-name="QuoteBlock">
      <div aria-hidden className="absolute border-[#8bb88a] border-l-8 border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Paragraph8 />
    </div>
  );
}

function Container77() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading8 />
      <HorizontalBar1 />
      <QuoteBlock />
    </div>
  );
}

function SlideCost() {
  return (
    <div className="absolute gap-x-[96px] gap-y-[96px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[837px] left-[128px] top-[401px] w-[2144px]" data-name="SlideCost">
      <Container60 />
      <Container77 />
    </div>
  );
}

function SectionWrapper4() {
  return (
    <div className="bg-[#fafaf8] h-[1350px] relative shrink-0 w-full" data-name="SectionWrapper">
      <SectionNumber3 />
      <SectionTitle3 />
      <SectionSubtitle3 />
      <SlideCost />
    </div>
  );
}

function SectionNumber4() {
  return (
    <div className="absolute bg-[#f0ede6] h-[49px] left-[128px] rounded-[33554400px] top-[112px] w-[2144px]" data-name="SectionNumber">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[33px] left-[24px] text-[#8b8578] text-[22px] top-[8px] tracking-[2.64px] whitespace-nowrap">05 WORKFLOW</p>
    </div>
  );
}

function SectionTitle4() {
  return (
    <div className="absolute h-[80px] left-[128px] top-[193px] w-[2144px]" data-name="SectionTitle">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[80px] left-0 text-[#1a1a1a] text-[64px] top-0 tracking-[-1.28px] whitespace-nowrap">The Makeshift Workflow Problem</p>
    </div>
  );
}

function SectionSubtitle4() {
  return (
    <div className="absolute h-[48px] left-[128px] top-[289px] w-[1400px]" data-name="SectionSubtitle">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#7a7a72] text-[30px] top-0 whitespace-nowrap">How users currently organize their AI-assisted content creation work</p>
    </div>
  );
}

function Text56() {
  return (
    <div className="h-[84px] relative shrink-0 w-[56px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[84px] left-0 text-[#0a0a0a] text-[56px] top-[-1px] whitespace-nowrap">📝</p>
      </div>
    </div>
  );
}

function Container94() {
  return <div className="bg-[#8bb88a] h-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Container" />;
}

function Container93() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] flex-[1_0_0] h-[16px] min-w-px relative rounded-[12px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[260.125px] relative size-full">
          <Container94 />
        </div>
      </div>
    </div>
  );
}

function Text57() {
  return (
    <div className="h-[39px] relative shrink-0 w-[55.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[39px] left-0 text-[#1a1a1a] text-[26px] top-0 whitespace-nowrap">42%</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[39px] items-center left-0 top-[60px] w-[520px]" data-name="Container">
      <Container93 />
      <Text57 />
    </div>
  );
}

function Container91() {
  return (
    <div className="flex-[1_0_0] h-[99px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[42px] left-0 text-[#1a1a1a] text-[28px] top-[3px] whitespace-nowrap">Google Docs / MS Word</p>
        <Container92 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-[#e8f5e9] col-1 justify-self-stretch relative rounded-[32px] row-1 self-stretch shrink-0" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[32px] items-center px-[40px] relative size-full">
          <Text56 />
          <Container91 />
        </div>
      </div>
    </div>
  );
}

function Text58() {
  return (
    <div className="h-[84px] relative shrink-0 w-[56px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[84px] left-0 text-[#0a0a0a] text-[56px] top-[-1px] whitespace-nowrap">📒</p>
      </div>
    </div>
  );
}

function Container99() {
  return <div className="bg-[#5ba4cf] h-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Container" />;
}

function Container98() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] flex-[1_0_0] h-[16px] min-w-px relative rounded-[12px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[300.672px] relative size-full">
          <Container99 />
        </div>
      </div>
    </div>
  );
}

function Text59() {
  return (
    <div className="h-[39px] relative shrink-0 w-[55.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[39px] left-0 text-[#1a1a1a] text-[26px] top-0 whitespace-nowrap">33%</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[39px] items-center left-0 top-[60px] w-[520px]" data-name="Container">
      <Container98 />
      <Text59 />
    </div>
  );
}

function Container96() {
  return (
    <div className="flex-[1_0_0] h-[99px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[42px] left-0 text-[#1a1a1a] text-[28px] top-[3px] whitespace-nowrap">Notion / Note-taking apps</p>
        <Container97 />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="bg-[#e3f2fd] col-2 justify-self-stretch relative rounded-[32px] row-1 self-stretch shrink-0" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[32px] items-center px-[40px] relative size-full">
          <Text58 />
          <Container96 />
        </div>
      </div>
    </div>
  );
}

function Text60() {
  return (
    <div className="h-[84px] relative shrink-0 w-[56px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[84px] left-0 text-[#0a0a0a] text-[56px] top-[-1px] whitespace-nowrap">🌐</p>
      </div>
    </div>
  );
}

function Container104() {
  return <div className="bg-[#f2c94c] h-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Container" />;
}

function Container103() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] flex-[1_0_0] h-[16px] min-w-px relative rounded-[12px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[336.078px] relative size-full">
          <Container104 />
        </div>
      </div>
    </div>
  );
}

function Text61() {
  return (
    <div className="h-[39px] relative shrink-0 w-[55.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[39px] left-0 text-[#1a1a1a] text-[26px] top-0 whitespace-nowrap">25%</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[39px] items-center left-0 top-[60px] w-[520px]" data-name="Container">
      <Container103 />
      <Text61 />
    </div>
  );
}

function Container101() {
  return (
    <div className="flex-[1_0_0] h-[99px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[42px] left-0 text-[#1a1a1a] text-[28px] top-[3px] whitespace-nowrap">Just browser tabs</p>
        <Container102 />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-[#fff8e1] col-3 justify-self-stretch relative rounded-[32px] row-1 self-stretch shrink-0" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[32px] items-center px-[40px] relative size-full">
          <Text60 />
          <Container101 />
        </div>
      </div>
    </div>
  );
}

function Text62() {
  return (
    <div className="h-[84px] relative shrink-0 w-[56px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[84px] left-0 text-[#0a0a0a] text-[56px] top-[-1px] whitespace-nowrap">📊</p>
      </div>
    </div>
  );
}

function Container109() {
  return <div className="bg-[#a78bfa] h-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Container" />;
}

function Container108() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] flex-[1_0_0] h-[16px] min-w-px relative rounded-[12px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[336.078px] relative size-full">
          <Container109 />
        </div>
      </div>
    </div>
  );
}

function Text63() {
  return (
    <div className="h-[39px] relative shrink-0 w-[55.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[39px] left-0 text-[#1a1a1a] text-[26px] top-0 whitespace-nowrap">25%</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[39px] items-center left-0 top-[60px] w-[520px]" data-name="Container">
      <Container108 />
      <Text63 />
    </div>
  );
}

function Container106() {
  return (
    <div className="flex-[1_0_0] h-[99px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[42px] left-0 text-[#1a1a1a] text-[28px] top-[3px] whitespace-nowrap">Spreadsheets</p>
        <Container107 />
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="bg-[#f3e8ff] col-1 justify-self-stretch relative rounded-[32px] row-2 self-stretch shrink-0" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[32px] items-center px-[40px] relative size-full">
          <Text62 />
          <Container106 />
        </div>
      </div>
    </div>
  );
}

function Text64() {
  return (
    <div className="h-[84px] relative shrink-0 w-[56px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[84px] left-0 text-[#0a0a0a] text-[56px] top-[-1px] whitespace-nowrap">📋</p>
      </div>
    </div>
  );
}

function Container114() {
  return <div className="bg-[#ffab91] h-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Container" />;
}

function Container113() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] flex-[1_0_0] h-[16px] min-w-px relative rounded-[12px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[427.969px] relative size-full">
          <Container114 />
        </div>
      </div>
    </div>
  );
}

function Text65() {
  return (
    <div className="h-[39px] relative shrink-0 w-[38.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[39px] left-0 text-[#1a1a1a] text-[26px] top-0 whitespace-nowrap">8%</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[39px] items-center left-0 top-[60px] w-[520px]" data-name="Container">
      <Container113 />
      <Text65 />
    </div>
  );
}

function Container111() {
  return (
    <div className="flex-[1_0_0] h-[99px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[42px] left-0 text-[#1a1a1a] text-[28px] top-[3px] whitespace-nowrap">Project management tools</p>
        <Container112 />
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="bg-[#fff3ed] col-2 justify-self-stretch relative rounded-[32px] row-2 self-stretch shrink-0" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[32px] items-center px-[40px] relative size-full">
          <Text64 />
          <Container111 />
        </div>
      </div>
    </div>
  );
}

function Text66() {
  return (
    <div className="h-[84px] relative shrink-0 w-[56px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[84px] left-0 text-[#0a0a0a] text-[56px] top-[-1px] whitespace-nowrap">🤷</p>
      </div>
    </div>
  );
}

function Container119() {
  return <div className="bg-[#8b8578] h-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Container" />;
}

function Container118() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] flex-[1_0_0] h-[16px] min-w-px relative rounded-[12px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[427.969px] relative size-full">
          <Container119 />
        </div>
      </div>
    </div>
  );
}

function Text67() {
  return (
    <div className="h-[39px] relative shrink-0 w-[38.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[39px] left-0 text-[#1a1a1a] text-[26px] top-0 whitespace-nowrap">8%</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[39px] items-center left-0 top-[60px] w-[520px]" data-name="Container">
      <Container118 />
      <Text67 />
    </div>
  );
}

function Container116() {
  return (
    <div className="flex-[1_0_0] h-[99px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[42px] left-0 text-[#1a1a1a] text-[28px] top-[3px] whitespace-nowrap">{`Nothing / "wing it"`}</p>
        <Container117 />
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="bg-[#f5f5f0] col-3 justify-self-stretch relative rounded-[32px] row-2 self-stretch shrink-0" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[32px] items-center px-[40px] relative size-full">
          <Text66 />
          <Container116 />
        </div>
      </div>
    </div>
  );
}

function SlideWorkflow() {
  return (
    <div className="absolute gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[398px] left-[128px] top-[401px] w-[2144px]" data-name="SlideWorkflow">
      <Container90 />
      <Container95 />
      <Container100 />
      <Container105 />
      <Container110 />
      <Container115 />
    </div>
  );
}

function Text68() {
  return (
    <div className="h-[54px] relative shrink-0 w-[36px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[54px] left-0 text-[#0a0a0a] text-[36px] top-[-1px] whitespace-nowrap">💡</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[41.594px] relative shrink-0 w-[1905.469px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[41.6px] left-0 text-[#8d6e00] text-[26px] top-[-1px] whitespace-nowrap">No standard workflow tool exists—users cobble together makeshift systems from docs, tabs, and note-taking apps to manage their AI-assisted content creation.</p>
      </div>
    </div>
  );
}

function InsightCallout1() {
  return (
    <div className="absolute bg-[#fff8e1] content-stretch drop-shadow-[0px_2px_4px_rgba(0,0,0,0.04)] flex gap-[24px] h-[118px] items-start left-[128px] pl-[40px] pt-[32px] rounded-[32px] top-[863px] w-[2144px]" data-name="InsightCallout">
      <Text68 />
      <Paragraph9 />
    </div>
  );
}

function SectionWrapper5() {
  return (
    <div className="bg-white h-[1350px] relative shrink-0 w-full" data-name="SectionWrapper">
      <SectionNumber4 />
      <SectionTitle4 />
      <SectionSubtitle4 />
      <SlideWorkflow />
      <InsightCallout1 />
    </div>
  );
}

function SectionNumber5() {
  return (
    <div className="absolute bg-[#f0ede6] h-[49px] left-[128px] rounded-[33554400px] top-[112px] w-[2144px]" data-name="SectionNumber">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[33px] left-[24px] text-[#8b8578] text-[22px] top-[8px] tracking-[2.64px] whitespace-nowrap">06 FRUSTRATIONS</p>
    </div>
  );
}

function SectionTitle5() {
  return (
    <div className="absolute h-[80px] left-[128px] top-[193px] w-[2144px]" data-name="SectionTitle">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[80px] left-0 text-[#1a1a1a] text-[64px] top-0 tracking-[-1.28px] whitespace-nowrap">What Users Dislike Most</p>
    </div>
  );
}

function SectionSubtitle5() {
  return (
    <div className="absolute h-[48px] left-[128px] top-[289px] w-[1400px]" data-name="SectionSubtitle">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#7a7a72] text-[30px] top-0 whitespace-nowrap">Top frustrations — users could select up to 3</p>
    </div>
  );
}

function Text69() {
  return (
    <div className="absolute bg-[#e8f5e9] content-stretch flex items-center justify-center left-0 rounded-[20px] size-[72px] top-[4px]" data-name="Text">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[42px] relative shrink-0 text-[#1a1a1a] text-[28px] whitespace-nowrap">1</p>
    </div>
  );
}

function Text70() {
  return (
    <div className="absolute content-stretch flex h-[36.391px] items-start left-[104px] top-[21.8px] w-[600px]" data-name="Text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[36.4px] min-w-px relative text-[#4a4a45] text-[28px]">{`AI tools "forget" previous conversations`}</p>
    </div>
  );
}

function Text71() {
  return (
    <div className="h-[42px] relative shrink-0 w-[61.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[28px] text-white top-px whitespace-nowrap">50%</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="bg-[#8bb88a] h-[80px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end pr-[24px] relative size-full">
          <Text71 />
        </div>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute bg-[#eeeee8] content-stretch flex flex-col h-[80px] items-start left-[736px] overflow-clip rounded-[20px] top-0 w-[1408px]" data-name="Container">
      <Container123 />
    </div>
  );
}

function Container121() {
  return (
    <div className="h-[80px] relative shrink-0 w-[2144px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text69 />
        <Text70 />
        <Container122 />
      </div>
    </div>
  );
}

function Text72() {
  return (
    <div className="absolute bg-[#e3f2fd] content-stretch flex items-center justify-center left-0 rounded-[20px] size-[72px] top-[4px]" data-name="Text">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[42px] relative shrink-0 text-[#1a1a1a] text-[28px] whitespace-nowrap">2</p>
    </div>
  );
}

function Text73() {
  return (
    <div className="absolute content-stretch flex h-[36.391px] items-start left-[104px] top-[21.8px] w-[600px]" data-name="Text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[36.4px] min-w-px relative text-[#4a4a45] text-[28px]">Too much context switching</p>
    </div>
  );
}

function Text74() {
  return (
    <div className="h-[42px] relative shrink-0 w-[59.797px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[28px] text-white top-px whitespace-nowrap">42%</p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="bg-[#5ba4cf] h-[80px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end pr-[24px] relative size-full">
          <Text74 />
        </div>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute bg-[#eeeee8] content-stretch flex flex-col h-[80px] items-start left-[736px] overflow-clip pr-[225.281px] rounded-[20px] top-0 w-[1408px]" data-name="Container">
      <Container126 />
    </div>
  );
}

function Container124() {
  return (
    <div className="h-[80px] relative shrink-0 w-[2144px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text72 />
        <Text73 />
        <Container125 />
      </div>
    </div>
  );
}

function Text75() {
  return (
    <div className="absolute bg-[#fff8e1] content-stretch flex items-center justify-center left-0 rounded-[20px] size-[72px] top-[4px]" data-name="Text">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[42px] relative shrink-0 text-[#1a1a1a] text-[28px] whitespace-nowrap">3</p>
    </div>
  );
}

function Text76() {
  return (
    <div className="absolute content-stretch flex h-[36.391px] items-start left-[104px] top-[21.8px] w-[600px]" data-name="Text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[36.4px] min-w-px relative text-[#4a4a45] text-[28px]">Inconsistent quality from AI outputs</p>
    </div>
  );
}

function Text77() {
  return (
    <div className="h-[42px] relative shrink-0 w-[59.797px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[28px] text-white top-px whitespace-nowrap">42%</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="bg-[#f2c94c] h-[80px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end pr-[24px] relative size-full">
          <Text77 />
        </div>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute bg-[#eeeee8] content-stretch flex flex-col h-[80px] items-start left-[736px] overflow-clip pr-[225.281px] rounded-[20px] top-0 w-[1408px]" data-name="Container">
      <Container129 />
    </div>
  );
}

function Container127() {
  return (
    <div className="h-[80px] relative shrink-0 w-[2144px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text75 />
        <Text76 />
        <Container128 />
      </div>
    </div>
  );
}

function Text78() {
  return (
    <div className="absolute bg-[#fff3f0] content-stretch flex items-center justify-center left-0 rounded-[20px] size-[72px] top-[4px]" data-name="Text">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[42px] relative shrink-0 text-[#1a1a1a] text-[28px] whitespace-nowrap">4</p>
    </div>
  );
}

function Text79() {
  return (
    <div className="absolute content-stretch flex h-[36.391px] items-start left-[104px] top-[21.8px] w-[600px]" data-name="Text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[36.4px] min-w-px relative text-[#4a4a45] text-[28px]">Takes too much time overall</p>
    </div>
  );
}

function Text80() {
  return (
    <div className="h-[42px] relative shrink-0 w-[60.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[28px] text-white top-px whitespace-nowrap">25%</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="bg-[#e87461] h-[80px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end pr-[24px] relative size-full">
          <Text80 />
        </div>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute bg-[#eeeee8] content-stretch flex flex-col h-[80px] items-start left-[736px] overflow-clip pr-[704px] rounded-[20px] top-0 w-[1408px]" data-name="Container">
      <Container132 />
    </div>
  );
}

function Container130() {
  return (
    <div className="h-[80px] relative shrink-0 w-[2144px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text78 />
        <Text79 />
        <Container131 />
      </div>
    </div>
  );
}

function Text81() {
  return (
    <div className="absolute bg-[#f3e8ff] content-stretch flex items-center justify-center left-0 rounded-[20px] size-[72px] top-[4px]" data-name="Text">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[42px] relative shrink-0 text-[#1a1a1a] text-[28px] whitespace-nowrap">5</p>
    </div>
  );
}

function Text82() {
  return (
    <div className="absolute content-stretch flex h-[36.391px] items-start left-[104px] top-[21.8px] w-[600px]" data-name="Text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[36.4px] min-w-px relative text-[#4a4a45] text-[28px]">No way to organize/save good prompts</p>
    </div>
  );
}

function Text83() {
  return (
    <div className="h-[42px] relative shrink-0 w-[51.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[28px] text-white top-px whitespace-nowrap">17%</p>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="bg-[#a78bfa] h-[80px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end pr-[24px] relative size-full">
          <Text83 />
        </div>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute bg-[#eeeee8] content-stretch flex flex-col h-[80px] items-start left-[736px] overflow-clip pr-[929.281px] rounded-[20px] top-0 w-[1408px]" data-name="Container">
      <Container135 />
    </div>
  );
}

function Container133() {
  return (
    <div className="h-[80px] relative shrink-0 w-[2144px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text81 />
        <Text82 />
        <Container134 />
      </div>
    </div>
  );
}

function Text84() {
  return (
    <div className="absolute bg-[#fff3ed] content-stretch flex items-center justify-center left-0 rounded-[20px] size-[72px] top-[4px]" data-name="Text">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[42px] relative shrink-0 text-[#1a1a1a] text-[28px] whitespace-nowrap">6</p>
    </div>
  );
}

function Text85() {
  return (
    <div className="absolute content-stretch flex h-[36.391px] items-start left-[104px] top-[21.8px] w-[600px]" data-name="Text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[36.4px] min-w-px relative text-[#4a4a45] text-[28px]">Too expensive (multiple subscriptions)</p>
    </div>
  );
}

function Text86() {
  return (
    <div className="h-[42px] relative shrink-0 w-[51.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[28px] text-white top-px whitespace-nowrap">17%</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="bg-[#ffab91] h-[80px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end pr-[24px] relative size-full">
          <Text86 />
        </div>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="absolute bg-[#eeeee8] content-stretch flex flex-col h-[80px] items-start left-[736px] overflow-clip pr-[929.281px] rounded-[20px] top-0 w-[1408px]" data-name="Container">
      <Container138 />
    </div>
  );
}

function Container136() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[2144px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text84 />
        <Text85 />
        <Container137 />
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="flex-[1_0_0] h-[680px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[40px] items-start relative size-full">
        <Container121 />
        <Container124 />
        <Container127 />
        <Container130 />
        <Container133 />
        <Container136 />
      </div>
    </div>
  );
}

function SlideDislikes() {
  return (
    <div className="absolute content-stretch flex h-[837px] items-center left-[128px] top-[401px] w-[2144px]" data-name="SlideDislikes">
      <Container120 />
    </div>
  );
}

function SectionWrapper6() {
  return (
    <div className="bg-[#fafaf8] h-[1350px] relative shrink-0 w-full" data-name="SectionWrapper">
      <SectionNumber5 />
      <SectionTitle5 />
      <SectionSubtitle5 />
      <SlideDislikes />
    </div>
  );
}

function SectionNumber6() {
  return (
    <div className="absolute bg-[#f0ede6] h-[49px] left-[128px] rounded-[33554400px] top-[112px] w-[2144px]" data-name="SectionNumber">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[33px] left-[24px] text-[#8b8578] text-[22px] top-[8px] tracking-[2.64px] whitespace-nowrap">07 TOOLS</p>
    </div>
  );
}

function SectionTitle6() {
  return (
    <div className="absolute h-[80px] left-[128px] top-[193px] w-[2144px]" data-name="SectionTitle">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[80px] left-0 text-[#1a1a1a] text-[64px] top-0 tracking-[-1.28px] whitespace-nowrap">Tools Users Currently Use</p>
    </div>
  );
}

function SectionSubtitle6() {
  return (
    <div className="absolute h-[48px] left-[128px] top-[289px] w-[1400px]" data-name="SectionSubtitle">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#7a7a72] text-[30px] top-0 whitespace-nowrap">Most common AI tools among our respondents</p>
    </div>
  );
}

function Text87() {
  return (
    <div className="absolute h-[96px] left-[241.94px] top-[61.5px] w-[198.781px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[96px] left-0 text-[#8bb88a] text-[96px] top-0 tracking-[-1.92px] whitespace-nowrap">92%</p>
    </div>
  );
}

function Text88() {
  return (
    <div className="absolute h-[45px] left-[277.45px] top-[173.5px] w-[127.734px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[45px] left-[64px] text-[#1a1a1a] text-[30px] text-center top-[-1px] whitespace-nowrap">ChatGPT</p>
    </div>
  );
}

function Text89() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] h-[38px] left-[510.44px] rounded-[16px] top-[24px] w-[148.219px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[30px] left-[20px] text-[#1a1a1a] text-[20px] top-[4px] tracking-[0.8px] whitespace-nowrap">MAJORITY</p>
    </div>
  );
}

function Container140() {
  return (
    <div className="absolute bg-[#e8f5e9] h-[280px] left-0 overflow-clip rounded-[32px] top-0 w-[682.656px]" data-name="Container">
      <Text87 />
      <Text88 />
      <Text89 />
    </div>
  );
}

function Text90() {
  return (
    <div className="absolute h-[96px] left-[240.33px] top-[61.5px] w-[202px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[96px] left-0 text-[#5ba4cf] text-[96px] top-0 tracking-[-1.92px] whitespace-nowrap">58%</p>
    </div>
  );
}

function Text91() {
  return (
    <div className="absolute h-[45px] left-[207.11px] top-[173.5px] w-[268.453px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[45px] left-[134.5px] text-[#1a1a1a] text-[30px] text-center top-[-1px] whitespace-nowrap">Gemini / Google AI</p>
    </div>
  );
}

function Text92() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] h-[38px] left-[510.45px] rounded-[16px] top-[24px] w-[148.219px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[30px] left-[20px] text-[#1a1a1a] text-[20px] top-[4px] tracking-[0.8px] whitespace-nowrap">MAJORITY</p>
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute bg-[#e3f2fd] h-[280px] left-[730.66px] overflow-clip rounded-[32px] top-0 w-[682.672px]" data-name="Container">
      <Text90 />
      <Text91 />
      <Text92 />
    </div>
  );
}

function Text93() {
  return (
    <div className="h-[96px] relative shrink-0 w-[200.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[96px] left-0 text-[#1a1a1a] text-[96px] top-0 tracking-[-1.92px] whitespace-nowrap">25%</p>
      </div>
    </div>
  );
}

function Text94() {
  return (
    <div className="h-[45px] relative shrink-0 w-[144.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[45px] left-[72.5px] text-[#1a1a1a] text-[30px] text-center top-[-1px] whitespace-nowrap">Perplexity</p>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="absolute bg-[#fff8e1] content-stretch flex flex-col gap-[16px] h-[280px] items-center justify-center left-[1461.33px] overflow-clip rounded-[32px] top-0 w-[682.672px]" data-name="Container">
      <Text93 />
      <Text94 />
    </div>
  );
}

function Text95() {
  return (
    <div className="h-[96px] relative shrink-0 w-[139.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[96px] left-0 text-[#1a1a1a] text-[96px] top-0 tracking-[-1.92px] whitespace-nowrap">8%</p>
      </div>
    </div>
  );
}

function Text96() {
  return (
    <div className="h-[45px] relative shrink-0 w-[101.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[45px] left-[51px] text-[#1a1a1a] text-[30px] text-center top-[-1px] whitespace-nowrap">Claude</p>
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="absolute bg-[#f3e8ff] content-stretch flex flex-col gap-[16px] h-[280px] items-center justify-center left-0 overflow-clip rounded-[32px] top-[328px] w-[682.656px]" data-name="Container">
      <Text95 />
      <Text96 />
    </div>
  );
}

function Text97() {
  return (
    <div className="h-[96px] relative shrink-0 w-[139.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[96px] left-0 text-[#1a1a1a] text-[96px] top-0 tracking-[-1.92px] whitespace-nowrap">8%</p>
      </div>
    </div>
  );
}

function Text98() {
  return (
    <div className="h-[45px] relative shrink-0 w-[106.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[45px] left-[53.5px] text-[#1a1a1a] text-[30px] text-center top-[-1px] whitespace-nowrap">DALL-E</p>
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="absolute bg-[#fff3f0] content-stretch flex flex-col gap-[16px] h-[280px] items-center justify-center left-[730.66px] overflow-clip rounded-[32px] top-[328px] w-[682.672px]" data-name="Container">
      <Text97 />
      <Text98 />
    </div>
  );
}

function Text99() {
  return (
    <div className="h-[96px] relative shrink-0 w-[139.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[96px] left-0 text-[#1a1a1a] text-[96px] top-0 tracking-[-1.92px] whitespace-nowrap">8%</p>
      </div>
    </div>
  );
}

function Text100() {
  return (
    <div className="h-[45px] relative shrink-0 w-[252.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[45px] left-[126.5px] text-[#1a1a1a] text-[30px] text-center top-[-1px] whitespace-nowrap">Other specialized</p>
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute bg-[#f5f5f0] content-stretch flex flex-col gap-[16px] h-[280px] items-center justify-center left-[1461.33px] overflow-clip rounded-[32px] top-[328px] w-[682.672px]" data-name="Container">
      <Text99 />
      <Text100 />
    </div>
  );
}

function Container139() {
  return (
    <div className="flex-[1_0_0] h-[608px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container140 />
        <Container141 />
        <Container142 />
        <Container143 />
        <Container144 />
        <Container145 />
      </div>
    </div>
  );
}

function SlideTools() {
  return (
    <div className="absolute content-stretch flex h-[837px] items-center left-[128px] top-[401px] w-[2144px]" data-name="SlideTools">
      <Container139 />
    </div>
  );
}

function SectionWrapper7() {
  return (
    <div className="bg-white h-[1350px] relative shrink-0 w-full" data-name="SectionWrapper">
      <SectionNumber6 />
      <SectionTitle6 />
      <SectionSubtitle6 />
      <SlideTools />
    </div>
  );
}

function SectionNumber7() {
  return (
    <div className="absolute bg-[#f0ede6] h-[49px] left-[128px] rounded-[33554400px] top-[112px] w-[2144px]" data-name="SectionNumber">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[33px] left-[24px] text-[#8b8578] text-[22px] top-[8px] tracking-[2.64px] whitespace-nowrap">08 DEMAND</p>
    </div>
  );
}

function SectionTitle7() {
  return (
    <div className="absolute h-[80px] left-[128px] top-[193px] w-[2144px]" data-name="SectionTitle">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[80px] left-0 text-[#1a1a1a] text-[64px] top-0 tracking-[-1.28px] whitespace-nowrap">Demand for Better Solutions</p>
    </div>
  );
}

function SectionSubtitle7() {
  return (
    <div className="absolute h-[48px] left-[128px] top-[289px] w-[1400px]" data-name="SectionSubtitle">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#7a7a72] text-[30px] top-0 whitespace-nowrap">Have users tried to find a better way to manage their AI workflow?</p>
    </div>
  );
}

function Text101() {
  return (
    <div className="h-[84px] relative shrink-0 w-[56px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[84px] left-0 text-[#0a0a0a] text-[56px] top-[-1px] whitespace-nowrap">💭</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[42px] left-0 top-[104px] w-[864px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[42px] left-0 text-[#5a5a52] text-[28px] top-px whitespace-nowrap">No, but I wish there was a better way</p>
    </div>
  );
}

function Container147() {
  return (
    <div className="flex-[1_0_0] h-[146px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[96px] left-0 text-[#1a1a1a] text-[64px] top-[2px] tracking-[-1.28px] whitespace-nowrap">42%</p>
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="bg-[#e8f5e9] col-1 justify-self-stretch relative rounded-[32px] row-1 self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex gap-[32px] items-start pt-[48px] px-[48px] relative size-full">
        <Text101 />
        <Container147 />
      </div>
    </div>
  );
}

function Text102() {
  return (
    <div className="h-[84px] relative shrink-0 w-[56px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[84px] left-0 text-[#0a0a0a] text-[56px] top-[-1px] whitespace-nowrap">🔍</p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[42px] left-0 top-[104px] w-[864px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[42px] left-0 text-[#5a5a52] text-[28px] top-px whitespace-nowrap">Yes, I actively searched for solutions</p>
    </div>
  );
}

function Container149() {
  return (
    <div className="flex-[1_0_0] h-[146px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[96px] left-0 text-[#1a1a1a] text-[64px] top-[2px] tracking-[-1.28px] whitespace-nowrap">25%</p>
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="bg-[#e3f2fd] col-2 justify-self-stretch relative rounded-[32px] row-1 self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex gap-[32px] items-start pt-[48px] px-[48px] relative size-full">
        <Text102 />
        <Container149 />
      </div>
    </div>
  );
}

function Text103() {
  return (
    <div className="h-[84px] relative shrink-0 w-[56px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[84px] left-0 text-[#0a0a0a] text-[56px] top-[-1px] whitespace-nowrap">👍</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[42px] left-0 top-[104px] w-[864px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[42px] left-0 text-[#5a5a52] text-[28px] top-px whitespace-nowrap">No, my current setup works fine</p>
    </div>
  );
}

function Container151() {
  return (
    <div className="flex-[1_0_0] h-[146px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[96px] left-0 text-[#1a1a1a] text-[64px] top-[2px] tracking-[-1.28px] whitespace-nowrap">25%</p>
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container150() {
  return (
    <div className="bg-[#fff8e1] col-1 justify-self-stretch relative rounded-[32px] row-2 self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex gap-[32px] items-start pt-[48px] px-[48px] relative size-full">
        <Text103 />
        <Container151 />
      </div>
    </div>
  );
}

function Text104() {
  return (
    <div className="h-[84px] relative shrink-0 w-[56px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[84px] left-0 text-[#0a0a0a] text-[56px] top-[-1px] whitespace-nowrap">❌</p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[42px] left-0 top-[104px] w-[864px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[42px] left-0 text-[#5a5a52] text-[28px] top-px whitespace-nowrap">Yes, tried things but nothing worked</p>
    </div>
  );
}

function Container153() {
  return (
    <div className="flex-[1_0_0] h-[146px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[96px] left-0 text-[#1a1a1a] text-[64px] top-[2px] tracking-[-1.28px] whitespace-nowrap">8%</p>
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="bg-[#fff3f0] col-2 justify-self-stretch relative rounded-[32px] row-2 self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex gap-[32px] items-start pt-[48px] px-[48px] relative size-full">
        <Text104 />
        <Container153 />
      </div>
    </div>
  );
}

function SlideDemand() {
  return (
    <div className="absolute gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[532px] left-[128px] top-[401px] w-[2144px]" data-name="SlideDemand">
      <Container146 />
      <Container148 />
      <Container150 />
      <Container152 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[44.797px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[44.8px] left-0 text-[#4a5043] text-[28px] top-0 whitespace-nowrap">{`"I'm aware of all-in-one sites and services that offer users a subscription for bundled access to multiple AI packages, but I haven't explored them yet."`}</p>
    </div>
  );
}

function QuoteBlock1() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(0,0,0,0.04)] flex flex-col h-[124.797px] items-start left-[128px] pl-[56px] pr-[48px] pt-[40px] rounded-[32px] top-[1013px] w-[2144px]" data-name="QuoteBlock">
      <div aria-hidden className="absolute border-[#8bb88a] border-l-8 border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Paragraph14 />
    </div>
  );
}

function Text105() {
  return (
    <div className="h-[54px] relative shrink-0 w-[36px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[54px] left-0 text-[#0a0a0a] text-[36px] top-[-1px] whitespace-nowrap">💡</p>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="flex-[1_0_0] h-[83.188px] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[41.6px] left-0 text-[#8d6e00] text-[26px] top-[-1px] w-[1910px]">{`Users know all-in-one solutions exist but haven't tried them—likely because existing options are mediocre or expensive. 75% of users either actively want or have searched for a better solution.`}</p>
      </div>
    </div>
  );
}

function InsightCallout2() {
  return (
    <div className="absolute bg-[#fff8e1] content-stretch drop-shadow-[0px_2px_4px_rgba(0,0,0,0.04)] flex gap-[24px] h-[147.188px] items-start left-[128px] pt-[32px] px-[40px] rounded-[32px] top-[1169.8px] w-[2144px]" data-name="InsightCallout">
      <Text105 />
      <Paragraph15 />
    </div>
  );
}

function SectionWrapper8() {
  return (
    <div className="bg-[#fafaf8] h-[1428.984px] relative shrink-0 w-full" data-name="SectionWrapper">
      <SectionNumber7 />
      <SectionTitle7 />
      <SectionSubtitle7 />
      <SlideDemand />
      <QuoteBlock1 />
      <InsightCallout2 />
    </div>
  );
}

function SectionNumber8() {
  return (
    <div className="absolute bg-[#f0ede6] h-[49px] left-[128px] rounded-[33554400px] top-[112px] w-[2144px]" data-name="SectionNumber">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[33px] left-[24px] text-[#8b8578] text-[22px] top-[8px] tracking-[2.64px] whitespace-nowrap">09 VALIDATION</p>
    </div>
  );
}

function SectionTitle8() {
  return (
    <div className="absolute h-[80px] left-[128px] top-[193px] w-[2144px]" data-name="SectionTitle">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[80px] left-0 text-[#1a1a1a] text-[64px] top-0 tracking-[-1.28px] whitespace-nowrap">Validated Assumptions</p>
    </div>
  );
}

function SectionSubtitle8() {
  return (
    <div className="absolute h-[48px] left-[128px] top-[289px] w-[1400px]" data-name="SectionSubtitle">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#7a7a72] text-[30px] top-0 whitespace-nowrap">Key hypotheses confirmed by our research data</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[40px] size-[44px] top-[44px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Icon">
          <path d={svgPaths.pc45180} id="Vector" stroke="var(--stroke-0, #6B9E6A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p9969380} id="Vector_2" stroke="var(--stroke-0, #6B9E6A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[42px] left-0 text-[#1a1a1a] text-[30px] top-[-1px] whitespace-nowrap">Context loss is a universal frustration</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Medium',sans-serif] font-medium leading-[39px] left-0 text-[#5a5a52] text-[26px] top-0 whitespace-nowrap">75% of users</p>
    </div>
  );
}

function Container155() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[89px] items-start left-[116px] top-[40px] w-[536.891px]" data-name="Container">
      <Paragraph16 />
      <Paragraph17 />
    </div>
  );
}

function Container154() {
  return (
    <div className="absolute bg-[#e8f5e9] h-[252.328px] left-0 rounded-[32px] top-0 w-[1052px]" data-name="Container">
      <Icon9 />
      <Container155 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[40px] size-[44px] top-[44px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Icon">
          <path d={svgPaths.pc45180} id="Vector" stroke="var(--stroke-0, #5BA4CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p9969380} id="Vector_2" stroke="var(--stroke-0, #5BA4CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[42px] left-0 text-[#1a1a1a] text-[30px] top-[-1px] whitespace-nowrap">Context switching wastes significant time</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Medium',sans-serif] font-medium leading-[39px] left-0 text-[#5a5a52] text-[26px] top-0 whitespace-nowrap">5-30 min/session</p>
    </div>
  );
}

function Container157() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[89px] items-start left-[116px] top-[40px] w-[603.797px]" data-name="Container">
      <Paragraph18 />
      <Paragraph19 />
    </div>
  );
}

function Container156() {
  return (
    <div className="absolute bg-[#e3f2fd] h-[252.328px] left-[1092px] rounded-[32px] top-0 w-[1052px]" data-name="Container">
      <Icon10 />
      <Container157 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[40px] size-[44px] top-[44px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Icon">
          <path d={svgPaths.pc45180} id="Vector" stroke="var(--stroke-0, #E87461)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p9969380} id="Vector_2" stroke="var(--stroke-0, #E87461)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[42px] left-0 text-[#1a1a1a] text-[30px] top-[-1px] whitespace-nowrap">Cost concerns are real</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Medium',sans-serif] font-medium leading-[39px] left-0 text-[#5a5a52] text-[26px] top-0 whitespace-nowrap">83% worry about subscriptions</p>
    </div>
  );
}

function Container159() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[89px] items-start left-[116px] top-[40px] w-[376.891px]" data-name="Container">
      <Paragraph20 />
      <Paragraph21 />
    </div>
  );
}

function Container158() {
  return (
    <div className="absolute bg-[#fff3f0] h-[252.328px] left-0 rounded-[32px] top-[292.33px] w-[1052px]" data-name="Container">
      <Icon11 />
      <Container159 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[40px] size-[44px] top-[44px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Icon">
          <path d={svgPaths.pc45180} id="Vector" stroke="var(--stroke-0, #C9930E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p9969380} id="Vector_2" stroke="var(--stroke-0, #C9930E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[42px] left-0 text-[#1a1a1a] text-[30px] top-[-1px] whitespace-nowrap">Users want a better solution</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Medium',sans-serif] font-medium leading-[39px] left-0 text-[#5a5a52] text-[26px] top-0 whitespace-nowrap">42% actively wish for improvement</p>
    </div>
  );
}

function Container161() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[89px] items-start left-[116px] top-[40px] w-[425.609px]" data-name="Container">
      <Paragraph22 />
      <Paragraph23 />
    </div>
  );
}

function Container160() {
  return (
    <div className="absolute bg-[#fff8e1] h-[252.328px] left-[1092px] rounded-[32px] top-[292.33px] w-[1052px]" data-name="Container">
      <Icon12 />
      <Container161 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[40px] size-[44px] top-[44px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Icon">
          <path d={svgPaths.pc45180} id="Vector" stroke="var(--stroke-0, #A78BFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p9969380} id="Vector_2" stroke="var(--stroke-0, #A78BFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[42px] left-0 text-[#1a1a1a] text-[30px] top-[-1px] whitespace-nowrap">No standard tool exists</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Medium',sans-serif] font-medium leading-[39px] left-0 text-[#5a5a52] text-[26px] top-0 whitespace-nowrap">Users improvise workflows</p>
    </div>
  );
}

function Container163() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[89px] items-start left-[116px] top-[40px] w-[333.219px]" data-name="Container">
      <Paragraph24 />
      <Paragraph25 />
    </div>
  );
}

function Container162() {
  return (
    <div className="absolute bg-[#f3e8ff] h-[252.344px] left-0 rounded-[32px] top-[584.66px] w-[1052px]" data-name="Container">
      <Icon13 />
      <Container163 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[40px] size-[44px] top-[44px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Icon">
          <path d={svgPaths.pc45180} id="Vector" stroke="var(--stroke-0, #FFAB91)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p9969380} id="Vector_2" stroke="var(--stroke-0, #FFAB91)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[42px] left-0 text-[#1a1a1a] text-[30px] top-[-1px] whitespace-nowrap">Quality consistency matters</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Medium',sans-serif] font-medium leading-[39px] left-0 text-[#5a5a52] text-[26px] top-0 whitespace-nowrap">50% cite inconsistent outputs</p>
    </div>
  );
}

function Container165() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[89px] items-start left-[116px] top-[40px] w-[401.609px]" data-name="Container">
      <Paragraph26 />
      <Paragraph27 />
    </div>
  );
}

function Container164() {
  return (
    <div className="absolute bg-[#fff3ed] h-[252.344px] left-[1092px] rounded-[32px] top-[584.66px] w-[1052px]" data-name="Container">
      <Icon14 />
      <Container165 />
    </div>
  );
}

function SlideValidated() {
  return (
    <div className="absolute h-[837px] left-[128px] top-[401px] w-[2144px]" data-name="SlideValidated">
      <Container154 />
      <Container156 />
      <Container158 />
      <Container160 />
      <Container162 />
      <Container164 />
    </div>
  );
}

function SectionWrapper9() {
  return (
    <div className="bg-white h-[1350px] relative shrink-0 w-full" data-name="SectionWrapper">
      <SectionNumber8 />
      <SectionTitle8 />
      <SectionSubtitle8 />
      <SlideValidated />
    </div>
  );
}

function Container166() {
  return <div className="absolute bg-[#e8f5e9] left-[-120px] opacity-50 rounded-[33554400px] size-[700px] top-[1033.39px]" data-name="Container" />;
}

function Container167() {
  return <div className="absolute bg-[#fff8e1] left-[1920px] opacity-50 rounded-[33554400px] size-[560px] top-[-160px]" data-name="Container" />;
}

function SlideInsights() {
  return (
    <div className="absolute h-[1533.391px] left-0 overflow-clip top-0 w-[2400px]" data-name="SlideInsights">
      <Container166 />
      <Container167 />
    </div>
  );
}

function SectionNumber9() {
  return (
    <div className="absolute bg-[#f0ede6] h-[49px] left-0 rounded-[33554400px] top-[3px] w-[293.625px]" data-name="SectionNumber">
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[33px] left-[24px] text-[#8b8578] text-[22px] top-[8px] tracking-[2.64px] whitespace-nowrap">10 KEY TAKEAWAYS</p>
    </div>
  );
}

function SectionTitle9() {
  return (
    <div className="absolute h-[80px] left-0 top-[84px] w-[2144px]" data-name="SectionTitle">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[80px] left-0 text-[#1a1a1a] text-[64px] top-0 tracking-[-1.28px] whitespace-nowrap">{`Key Insights & Recommendations`}</p>
    </div>
  );
}

function SectionSubtitle9() {
  return (
    <div className="absolute h-[48px] left-0 top-[180px] w-[1400px]" data-name="SectionSubtitle">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#7a7a72] text-[30px] top-0 whitespace-nowrap">Actionable findings to guide product strategy and development</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Icon">
          <path d={svgPaths.pc45180} id="Vector" stroke="var(--stroke-0, #6B9E6A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p1d1aeb80} id="Vector_2" stroke="var(--stroke-0, #6B9E6A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p3df34380} id="Vector_3" stroke="var(--stroke-0, #6B9E6A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container170() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] content-stretch flex items-center justify-center left-[56px] rounded-[28px] size-[88px] top-[56px]" data-name="Container">
      <Icon15 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[54px] left-[56px] top-[176px] w-[936px]" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[54px] left-0 text-[#1a1a1a] text-[36px] top-[-1px] tracking-[-0.36px] whitespace-nowrap">Unified Workspace is a Validated Need</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[89.594px] left-[56px] top-[246px] w-[936px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[44.8px] left-0 text-[#5a5a52] text-[28px] top-0 w-[922px]">Context loss (75%) + context switching (58%) = clear demand for unified, context-aware workspace</p>
    </div>
  );
}

function Container169() {
  return (
    <div className="absolute bg-[#e8f5e9] h-[391.594px] left-0 overflow-clip rounded-[32px] top-0 w-[1048px]" data-name="Container">
      <Container170 />
      <Heading9 />
      <Paragraph28 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Icon">
          <path d="M22 3.66797V40.3346" id="Vector" stroke="var(--stroke-0, #C9930E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
          <path d={svgPaths.p13376380} id="Vector_2" stroke="var(--stroke-0, #C9930E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container172() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] content-stretch flex items-center justify-center left-[56px] rounded-[28px] size-[88px] top-[56px]" data-name="Container">
      <Icon16 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[54px] left-[56px] top-[176px] w-[936px]" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[54px] left-0 text-[#1a1a1a] text-[36px] top-[-1px] tracking-[-0.36px] whitespace-nowrap">Pricing Must Be Compelling</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[44.797px] left-[56px] top-[246px] w-[936px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[44.8px] left-0 text-[#5a5a52] text-[28px] top-0 whitespace-nowrap">67% use only free versions → need free trial + clear value demonstration</p>
    </div>
  );
}

function Container171() {
  return (
    <div className="absolute bg-[#fff8e1] h-[391.594px] left-[1096px] overflow-clip rounded-[32px] top-0 w-[1048px]" data-name="Container">
      <Container172 />
      <Heading10 />
      <Paragraph29 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Icon">
          <path d={svgPaths.p5c8d700} id="Vector" stroke="var(--stroke-0, #5BA4CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container174() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] content-stretch flex items-center justify-center left-[56px] rounded-[28px] size-[88px] top-[56px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute h-[54px] left-[56px] top-[176px] w-[936px]" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[54px] left-0 text-[#1a1a1a] text-[36px] top-[-1px] tracking-[-0.36px] whitespace-nowrap">{`Quality & Consistency Build Trust`}</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute h-[44.797px] left-[56px] top-[246px] w-[936px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[44.8px] left-0 text-[#5a5a52] text-[28px] top-0 whitespace-nowrap">50% cite inconsistent quality → must deliver reliable outputs</p>
    </div>
  );
}

function Container173() {
  return (
    <div className="absolute bg-[#e3f2fd] h-[346.797px] left-0 overflow-clip rounded-[32px] top-[439.59px] w-[1048px]" data-name="Container">
      <Container174 />
      <Heading11 />
      <Paragraph30 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Icon">
          <path d={svgPaths.p12ae400} id="Vector" stroke="var(--stroke-0, #E87461)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container176() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] content-stretch flex items-center justify-center left-[56px] rounded-[28px] size-[88px] top-[56px]" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute h-[54px] left-[56px] top-[176px] w-[936px]" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[54px] left-0 text-[#1a1a1a] text-[36px] top-[-1px] tracking-[-0.36px] whitespace-nowrap">Target Frequent Creators First</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[44.797px] left-[56px] top-[246px] w-[936px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[44.8px] left-0 text-[#5a5a52] text-[28px] top-0 whitespace-nowrap">Daily/weekly creators (58%) feel the pain most acutely</p>
    </div>
  );
}

function Container175() {
  return (
    <div className="absolute bg-[#fff3f0] h-[346.797px] left-[1096px] overflow-clip rounded-[32px] top-[439.59px] w-[1048px]" data-name="Container">
      <Container176 />
      <Heading12 />
      <Paragraph31 />
    </div>
  );
}

function Container168() {
  return (
    <div className="absolute h-[786.391px] left-0 top-[308px] w-[2144px]" data-name="Container">
      <Container169 />
      <Container171 />
      <Container173 />
      <Container175 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[39px] left-[1008.22px] text-[#7a7a72] text-[26px] text-center top-0 whitespace-nowrap">User Research Report • 12 Respondents • February 2026 • Online Survey</p>
    </div>
  );
}

function Container177() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(0,0,0,0.04)] flex flex-col h-[135px] items-start left-0 pt-[48px] px-[64px] rounded-[32px] top-[1174.39px] w-[2144px]" data-name="Container">
      <Paragraph32 />
    </div>
  );
}

function SlideInsights1() {
  return (
    <div className="absolute h-[1309.391px] left-[128px] top-[112px] w-[2144px]" data-name="SlideInsights">
      <SectionNumber9 />
      <SectionTitle9 />
      <SectionSubtitle9 />
      <Container168 />
      <Container177 />
    </div>
  );
}

function SectionWrapper10() {
  return (
    <div className="bg-[#fafaf8] h-[1533.391px] relative shrink-0 w-full" data-name="SectionWrapper">
      <SlideInsights />
      <SlideInsights1 />
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#fafaf8] content-stretch flex flex-col h-[15112.375px] items-start relative shrink-0 w-full" data-name="App">
      <SectionWrapper />
      <SectionWrapper1 />
      <SectionWrapper2 />
      <SectionWrapper3 />
      <SectionWrapper4 />
      <SectionWrapper5 />
      <SectionWrapper6 />
      <SectionWrapper7 />
      <SectionWrapper8 />
      <SectionWrapper9 />
      <SectionWrapper10 />
    </div>
  );
}

export default function UserResearchFindingsVisualization() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pr-[-146px] relative size-full" data-name="User Research Findings Visualization">
      <App />
    </div>
  );
}