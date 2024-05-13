export default function Card6 ({img,title,desc}){
    return(
       <div className="bg-[white] dark:rounded-[16px] dark:overflow-hidden dark:p-[10px]">
        <div>
            <img src={img} alt="" />
        </div>

        <div className="text-[#1F2428]">
            <h4 className="text-[20px] font-[bold] w-[210px] leading-[24px]">{title}</h4>
            <p className="text-[16px] font-[light] leading-[30px] mt-[7px]">{desc}</p>
        </div>
       </div> 
    )
}