import Line from "./Line";

const ProgressBar=({ progress1, progress2, progress3 })=> {
    return (
      <div className="space-y-4  sm:w-[500px] w-full px-2 ">
        <h1 className=" text-[#292E36] font-cormo text-[30px] leading-5 py-2" >Experience:</h1>
        <Line progress={progress1} />
        <h1 className=" text-[#292E36] font-cormo text-[30px] leading-5 py-2">Professionalism:</h1>
        <Line progress={progress2} />
        <h1 className=" text-[#292E36] font-cormo text-[30px] leading-5 py-2">Creative</h1>
        <Line progress={progress3} />
      </div>
    );
  }
export default ProgressBar  