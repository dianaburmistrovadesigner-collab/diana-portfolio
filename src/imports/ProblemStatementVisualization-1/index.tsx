function Heading() {
  return (
    <div className="h-[60px] relative shrink-0 w-[394.047px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[0] left-0 text-[40px] text-white top-0 tracking-[0.8px] whitespace-nowrap">
          <span className="leading-[60px]">Problem Statemen</span>
          <span className="leading-[60px] tracking-[-0.4px]">t</span>
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#7c3aed] content-stretch flex h-[124px] items-center justify-center left-0 pr-[0.016px] top-0 w-[2254px]" data-name="Container">
      <Heading />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[36px] relative shrink-0 w-[650.75px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#616161] text-[24px] top-0 whitespace-nowrap">{`Use the "HMW" technique better define your user's problem`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#eee] content-stretch flex h-[70px] items-center justify-center left-0 pb-[2px] top-[124px] w-[2254px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e0e0e0] border-b-2 border-solid inset-0 pointer-events-none" />
      <Paragraph />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#7c3aed] h-[64px] relative rounded-[33554400px] shrink-0 w-[366.516px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[33px] left-[24px] text-[22px] text-white top-[17px] tracking-[1.1px] whitespace-nowrap">Unified Problem Statement</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[64px] relative shrink-0 w-[2158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[30px] relative shrink-0 w-[415.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[30px] left-0 text-[#9e9e9e] text-[20px] top-0 tracking-[2.4px] uppercase whitespace-nowrap">Persona</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[126px] relative shrink-0 w-[415.484px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#1e1e1e] text-[30px] top-[-1px] w-[334px]">Independent content creators and freelance marketers</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#fff0f0] flex-[1_0_0] h-[318.969px] min-w-px relative rounded-[28px]" data-name="Container">
      <div aria-hidden className="absolute border-3 border-[#ffc7c2] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[3px] pl-[35px] pr-[3px] pt-[35px] relative size-full">
        <Text />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[45px] relative shrink-0 w-[122.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Medium',sans-serif] font-medium leading-[45px] left-0 text-[#1e1e1e] text-[30px] top-[-1px] whitespace-nowrap">needs to</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[318.969px] relative shrink-0 w-[138.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[30px] relative shrink-0 w-[540.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[30px] left-0 text-[#9e9e9e] text-[20px] top-0 tracking-[2.4px] uppercase whitespace-nowrap">Has Need</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[126px] relative shrink-0 w-[540.125px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#1e1e1e] text-[30px] top-[-1px] w-[526px]">create high-quality content using AI tools without feeling overwhelmed or losing control of their workflow</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#f0fff0] flex-[1_0_0] h-[318.969px] min-w-px relative rounded-[28px]" data-name="Container">
      <div aria-hidden className="absolute border-3 border-[#aff4c6] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[3px] pl-[35px] pr-[3px] pt-[35px] relative size-full">
        <Text2 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[45px] relative shrink-0 w-[118.984px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Medium',sans-serif] font-medium leading-[45px] left-0 text-[#1e1e1e] text-[30px] top-[-1px] whitespace-nowrap">because</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[318.969px] relative shrink-0 w-[134.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[30px] relative shrink-0 w-[623.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[30px] left-0 text-[#9e9e9e] text-[20px] top-0 tracking-[2.4px] uppercase whitespace-nowrap">Yields</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[623.219px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[40.6px] left-0 text-[#1e1e1e] text-[28px] top-0 w-[618px]">the fragmentation of AI tools forces them to choose between simplicity (which limits their capabilities) and power (which creates chaos), leaving them feeling both inadequate and trapped.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#f0f0ff] flex-[1_0_0] h-[318.969px] min-w-px relative rounded-[28px]" data-name="Container">
      <div aria-hidden className="absolute border-3 border-[#bde3ff] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pl-[35px] pr-[3px] py-[35px] relative size-full">
        <Text4 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[318.969px] relative shrink-0 w-[2158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start pr-[-0.016px] relative size-full">
        <Container7 />
        <Container8 />
        <Container9 />
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[30px] relative shrink-0 w-[132.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[30px] left-0 text-[#795548] text-[20px] top-0 tracking-[2px] uppercase whitespace-nowrap">Core Need</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[30px] relative shrink-0 w-[1128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text5 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[180px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[298px]">How might we help independent content creators access multiple AI capabilities without feeling overwhelmed by choice?</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-0 pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[180px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[296px]">How might we enable freelance marketers to use powerful AI tools while maintaining a simple, organized workflow?</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[384px] pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[108px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[300px]">How might we make AI tool selection feel effortless instead of paralyzing?</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[768px] pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph6 />
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[1128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container17 />
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[326px] items-start left-0 top-0 w-[1128px]" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[30px] relative shrink-0 w-[243.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[30px] left-0 text-[#795548] text-[20px] top-0 tracking-[2px] uppercase whitespace-nowrap">Surprising Insight</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[30px] relative shrink-0 w-[1128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text6 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[144px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[308px]">How might we eliminate the trade-off between simplicity and power in AI tools?</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-0 pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[144px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[298px]">How might we give users the control and capabilities they need without creating chaos?</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[384px] pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph8 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[144px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[290px]">How might we make users feel empowered and in control, rather than inadequate or trapped?</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[768px] pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph9 />
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[1128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container23 />
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[326px] items-start left-0 top-[358px] w-[1128px]" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[30px] relative shrink-0 w-[260.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[30px] left-0 text-[#795548] text-[20px] top-0 tracking-[2px] uppercase whitespace-nowrap">Specific Pain Points</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[30px] relative shrink-0 w-[1128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text7 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[144px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[298px]">How might we unify multiple AI capabilities into a single workflow without sacrificing functionality?</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-0 pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph10 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[144px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[278px]">How might we help users organize their AI work by project or client without manual setup?</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[384px] pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph11 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[144px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[298px]">How might we reduce context switching from 15–25 times per day to near zero?</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[768px] pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph12 />
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[1128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container29 />
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[326px] items-start left-0 top-[716px] w-[1128px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[1042px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container20 />
      <Container26 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#fff8e1] flex-[1_0_0] min-h-px relative rounded-[28px] w-[2158px]" data-name="Container">
      <div aria-hidden className="absolute border-3 border-[#ffd54f] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3px] pt-[43px] px-[43px] relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[1558.969px] relative shrink-0 w-[2158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container4 />
        <Container6 />
        <Container12 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[3px] relative shrink-0 w-[2158px]" data-name="Container">
      <div aria-hidden className="absolute border-[#bdbdbd] border-solid border-t-3 inset-0 pointer-events-none" />
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#e91e63] h-[64px] relative rounded-[33554400px] shrink-0 w-[519.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[33px] left-[24px] text-[22px] text-white top-[17px] tracking-[1.1px] whitespace-nowrap">Maya Chen — Solopreneur, 40% of users</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[64px] relative shrink-0 w-[2158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[30px] relative shrink-0 w-[415.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[30px] left-0 text-[#9e9e9e] text-[20px] top-0 tracking-[2.4px] uppercase whitespace-nowrap">Persona</p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[126px] relative shrink-0 w-[415.484px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#1e1e1e] text-[30px] top-[-1px] w-[336px]">Small business owners creating their own marketing content</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#fff0f0] flex-[1_0_0] h-[400.156px] min-w-px relative rounded-[28px]" data-name="Container">
      <div aria-hidden className="absolute border-3 border-[#ffc7c2] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[3px] pl-[35px] pr-[3px] pt-[35px] relative size-full">
        <Text8 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[45px] relative shrink-0 w-[122.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Medium',sans-serif] font-medium leading-[45px] left-0 text-[#1e1e1e] text-[30px] top-[-1px] whitespace-nowrap">needs to</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[400.156px] relative shrink-0 w-[138.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text9 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[30px] relative shrink-0 w-[540.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[30px] left-0 text-[#9e9e9e] text-[20px] top-0 tracking-[2.4px] uppercase whitespace-nowrap">Has Need</p>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[126px] relative shrink-0 w-[540.125px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#1e1e1e] text-[30px] top-[-1px] w-[532px]">confidently use AI tools without spending hours learning or choosing between dozens of options</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#f0fff0] flex-[1_0_0] h-[400.156px] min-w-px relative rounded-[28px]" data-name="Container">
      <div aria-hidden className="absolute border-3 border-[#aff4c6] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[3px] pl-[35px] pr-[3px] pt-[35px] relative size-full">
        <Text10 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[45px] relative shrink-0 w-[118.984px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Medium',sans-serif] font-medium leading-[45px] left-0 text-[#1e1e1e] text-[30px] top-[-1px] whitespace-nowrap">because</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[400.156px] relative shrink-0 w-[134.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text11 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[30px] relative shrink-0 w-[623.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[30px] left-0 text-[#9e9e9e] text-[20px] top-0 tracking-[2.4px] uppercase whitespace-nowrap">Yields</p>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[623.219px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[40.6px] left-0 text-[#1e1e1e] text-[28px] top-0 w-[620px]">the overwhelming number of AI tools makes them feel inadequate and paralyzed before they even start, causing them to abandon tools and fall behind competitors, and when they\u2019re most stressed, they wish someone could just tell them \u201cit\u2019s going to be okay.\u201d</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#f0f0ff] flex-[1_0_0] h-[400.156px] min-w-px relative rounded-[28px]" data-name="Container">
      <div aria-hidden className="absolute border-3 border-[#bde3ff] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pl-[35px] pr-[3px] py-[35px] relative size-full">
        <Text12 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[400.156px] relative shrink-0 w-[2158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start pr-[-0.016px] relative size-full">
        <Container37 />
        <Container38 />
        <Container39 />
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[30px] relative shrink-0 w-[132.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[30px] left-0 text-[#795548] text-[20px] top-0 tracking-[2px] uppercase whitespace-nowrap">Core Need</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[30px] relative shrink-0 w-[1128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text13 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[180px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[308px]">How might we help Maya confidently choose the right AI approach for each task without spending hours researching?</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-0 pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph16 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[144px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[290px]">How might we make Maya feel smart and capable when using AI tools, not inadequate?</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[384px] pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph17 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[180px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[294px]">How might we reduce the time from “I need to create content” to “I have a draft” from 2+ hours to 10 minutes?</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[768px] pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph18 />
    </div>
  );
}

function Container46() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[1128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container47 />
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[326px] items-start left-0 top-0 w-[1128px]" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[30px] relative shrink-0 w-[528.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[30px] left-0 text-[#795548] text-[20px] top-0 tracking-[2px] uppercase whitespace-nowrap">Surprising Insight — Emotional Support</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="bg-[#fff3e0] h-[38px] relative rounded-[8px] shrink-0 w-[343.484px]" data-name="Text">
      <div aria-hidden className="absolute border-2 border-[#ffcc02] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[30px] left-[12px] text-[#e65100] text-[20px] top-[4px] whitespace-nowrap">⭐ Problem 8: Emotional Support</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[38px] relative shrink-0 w-[1512px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Text14 />
        <Text15 />
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[108px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[280px]">How might we prevent Maya from abandoning AI tools due to overwhelm?</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-0 pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph19 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[144px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[306px]">{`How might we build Maya's confidence that she's making the right choice, not wasting money?`}</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[384px] pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph20 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[144px] relative shrink-0 w-[304px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[298px]">How might we provide emotional support when Maya feels stressed before a deadline?</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-[#ffd54f] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[768px] pb-[4px] pl-[28px] pr-[4px] pt-[28px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-4 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph21 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[144px] relative shrink-0 w-[304px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[290px]">How might we make Maya feel heard and understood during overwhelming moments?</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute bg-[#ffd54f] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[1152px] pb-[4px] pl-[28px] pr-[4px] pt-[28px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-4 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph22 />
    </div>
  );
}

function Container52() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[1512px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container53 />
        <Container54 />
        <Container55 />
        <Container56 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[334px] items-start left-0 top-[358px] w-[1512px]" data-name="Container">
      <Container51 />
      <Container52 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[30px] relative shrink-0 w-[260.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[30px] left-0 text-[#795548] text-[20px] top-0 tracking-[2px] uppercase whitespace-nowrap">Specific Pain Points</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[30px] relative shrink-0 w-[1128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text16 />
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[108px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[266px]">{`How might we curate AI options so Maya doesn't face 50+ choices?`}</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-0 pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph23 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[144px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[302px]">How might we provide templates and examples so Maya never faces a blank canvas?</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[384px] pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph24 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[144px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[302px]">How might we help Maya understand which tool is best for which task without technical jargon?</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[768px] pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph25 />
    </div>
  );
}

function Container59() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[1128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container60 />
        <Container61 />
        <Container62 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[326px] items-start left-0 top-[724px] w-[1128px]" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[1050px] relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container50 />
      <Container57 />
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#fff8e1] flex-[1_0_0] min-h-px relative rounded-[28px] w-[2158px]" data-name="Container">
      <div aria-hidden className="absolute border-3 border-[#ffd54f] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3px] pt-[43px] px-[43px] relative size-full">
        <Container43 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[1648.156px] relative shrink-0 w-[2158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container34 />
        <Container36 />
        <Container42 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[3px] relative shrink-0 w-[2158px]" data-name="Container">
      <div aria-hidden className="absolute border-[#bdbdbd] border-solid border-t-3 inset-0 pointer-events-none" />
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-[#0288d1] h-[64px] relative rounded-[33554400px] shrink-0 w-[593.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[33px] left-[24px] text-[22px] text-white top-[17px] tracking-[1.1px] whitespace-nowrap">Alex Rivera — Freelance Creator, 60% of users</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[64px] relative shrink-0 w-[2158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container66 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[30px] relative shrink-0 w-[415.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[30px] left-0 text-[#9e9e9e] text-[20px] top-0 tracking-[2.4px] uppercase whitespace-nowrap">Persona</p>
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[84px] relative shrink-0 w-[415.484px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#1e1e1e] text-[30px] top-[-1px] w-[398px]">Freelance content creators managing multiple clients</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="bg-[#fff0f0] flex-[1_0_0] h-[440.75px] min-w-px relative rounded-[28px]" data-name="Container">
      <div aria-hidden className="absolute border-3 border-[#ffc7c2] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[3px] pl-[35px] pr-[3px] pt-[35px] relative size-full">
        <Text17 />
        <Paragraph26 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[45px] relative shrink-0 w-[122.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Medium',sans-serif] font-medium leading-[45px] left-0 text-[#1e1e1e] text-[30px] top-[-1px] whitespace-nowrap">needs to</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[440.75px] relative shrink-0 w-[138.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text18 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[30px] relative shrink-0 w-[540.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[30px] left-0 text-[#9e9e9e] text-[20px] top-0 tracking-[2.4px] uppercase whitespace-nowrap">Has Need</p>
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[126px] relative shrink-0 w-[540.125px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#1e1e1e] text-[30px] top-[-1px] w-[528px]">organize their AI-powered workflow by client and eliminate constant tool-switching</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-[#f0fff0] flex-[1_0_0] h-[440.75px] min-w-px relative rounded-[28px]" data-name="Container">
      <div aria-hidden className="absolute border-3 border-[#aff4c6] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[3px] pl-[35px] pr-[3px] pt-[35px] relative size-full">
        <Text19 />
        <Paragraph27 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[45px] relative shrink-0 w-[118.984px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Medium',sans-serif] font-medium leading-[45px] left-0 text-[#1e1e1e] text-[30px] top-[-1px] whitespace-nowrap">because</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[440.75px] relative shrink-0 w-[134.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text20 />
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[30px] relative shrink-0 w-[623.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[30px] left-0 text-[#9e9e9e] text-[20px] top-0 tracking-[2.4px] uppercase whitespace-nowrap">Yields</p>
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[623.219px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[40.6px] left-0 text-[#1e1e1e] text-[28px] top-0 w-[596px]">juggling 3\u20135 AI tools across 4+ clients breaks their creative flow 15\u201325 times per day, making them feel less productive than before AI existed, despite paying $100\u2013150/month for \u201cefficiency\u201d tools, and they can\u2019t access their work from mobile when urgent client requests arrive.</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[#f0f0ff] flex-[1_0_0] h-[440.75px] min-w-px relative rounded-[28px]" data-name="Container">
      <div aria-hidden className="absolute border-3 border-[#bde3ff] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pl-[35px] pr-[3px] py-[35px] relative size-full">
        <Text21 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[440.75px] relative shrink-0 w-[2158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start pr-[-0.016px] relative size-full">
        <Container68 />
        <Container69 />
        <Container70 />
        <Container71 />
        <Container72 />
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[30px] relative shrink-0 w-[132.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[30px] left-0 text-[#795548] text-[20px] top-0 tracking-[2px] uppercase whitespace-nowrap">Core Need</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[30px] relative shrink-0 w-[1128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text22 />
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[180px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[282px]">{`How might we help Alex keep Client A's work completely separate from Client B's without manual organization?`}</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-0 pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph29 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[108px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[308px]">How might we eliminate the 15–25 tool switches Alex makes every day?</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[384px] pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph30 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[144px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[290px]">How might we let Alex access all AI capabilities (text, image, code) without changing interfaces?</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[768px] pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph31 />
    </div>
  );
}

function Container77() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[1128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container78 />
        <Container79 />
        <Container80 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[326px] items-start left-0 top-0 w-[1128px]" data-name="Container">
      <Container76 />
      <Container77 />
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[30px] relative shrink-0 w-[466.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[30px] left-0 text-[#795548] text-[20px] top-0 tracking-[2px] uppercase whitespace-nowrap">Surprising Insight — Mobile Access</p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="bg-[#fff3e0] h-[38px] relative rounded-[8px] shrink-0 w-[355.219px]" data-name="Text">
      <div aria-hidden className="absolute border-2 border-[#ffcc02] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[30px] left-[12px] text-[#e65100] text-[20px] top-[4px] whitespace-nowrap">⭐ Problem 18: Cross-Device Sync</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[38px] relative shrink-0 w-[1512px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Text23 />
        <Text24 />
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[144px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[266px]">How might we make AI tools deliver on their promise of efficiency for Alex?</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-0 pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph32 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[108px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[308px]">How might we help Alex feel more productive with AI than he was without it?</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[384px] pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph33 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[144px] relative shrink-0 w-[304px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[292px]">{`How might we enable Alex to respond to urgent client requests when he's away from his laptop?`}</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute bg-[#ffd54f] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[768px] pb-[4px] pl-[28px] pr-[4px] pt-[28px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-4 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph34 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[144px] relative shrink-0 w-[304px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[280px]">How might we give Alex access to his work from any device without losing functionality?</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute bg-[#ffd54f] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[1152px] pb-[4px] pl-[28px] pr-[4px] pt-[28px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-4 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph35 />
    </div>
  );
}

function Container83() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[1512px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container84 />
        <Container85 />
        <Container86 />
        <Container87 />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[334px] items-start left-0 top-[358px] w-[1512px]" data-name="Container">
      <Container82 />
      <Container83 />
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[30px] relative shrink-0 w-[260.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Bold',sans-serif] font-bold leading-[30px] left-0 text-[#795548] text-[20px] top-0 tracking-[2px] uppercase whitespace-nowrap">Specific Pain Points</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[30px] relative shrink-0 w-[1128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text25 />
      </div>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[144px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[302px]">{`How might we automate Alex's recurring client tasks so he doesn't rewrite the same prompts daily?`}</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-0 pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph36 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[144px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[292px]">How might we show Alex exactly how much each client costs in AI expenses for accurate billing?</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[384px] pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph37 />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[144px] relative shrink-0 w-[308px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1e1e1e] text-[24px] top-0 w-[302px]">How might we let Alex make quick edits to his work from his phone during commutes?</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute bg-[#ffeb3b] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[280px] items-start left-[768px] pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[16px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph38 />
    </div>
  );
}

function Container90() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[1128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container91 />
        <Container92 />
        <Container93 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[326px] items-start left-0 top-[724px] w-[1128px]" data-name="Container">
      <Container89 />
      <Container90 />
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[1050px] relative shrink-0 w-full" data-name="Container">
      <Container75 />
      <Container81 />
      <Container88 />
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-[#fff8e1] flex-[1_0_0] min-h-px relative rounded-[28px] w-[2158px]" data-name="Container">
      <div aria-hidden className="absolute border-3 border-[#ffd54f] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3px] pt-[43px] px-[43px] relative size-full">
        <Container74 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[2158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container65 />
        <Container67 />
        <Container73 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] h-[5349.875px] items-start left-0 pl-[48px] py-[64px] top-[194px] w-[2254px]" data-name="Container">
      <Container3 />
      <Container32 />
      <Container33 />
      <Container63 />
      <Container64 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[33px] relative shrink-0 w-[1139.953px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#7c3aed] text-[22px] top-0 whitespace-nowrap">AI Chat User Research — Problem Statement · DesignerUp Product Design Course, Lesson 28 · February 25, 2026</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute bg-[#ede7f6] content-stretch flex h-[83px] items-center justify-center left-0 pr-[0.016px] pt-[2px] top-[5575.88px] w-[2254px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d1c4e9] border-solid border-t-2 inset-0 pointer-events-none" />
      <Paragraph39 />
    </div>
  );
}

function Tq() {
  return (
    <div className="bg-[#f5f5f5] h-[5658.875px] relative shrink-0 w-full" data-name="TQ">
      <Container />
      <Container1 />
      <Container2 />
      <Container94 />
    </div>
  );
}

export default function ProblemStatementVisualization() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Problem Statement Visualization">
      <Tq />
    </div>
  );
}