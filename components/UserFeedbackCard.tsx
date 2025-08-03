type userFeedbackInfo = {
    userImage: string,
    user: string,
    rateing: number,
    userFeedback: string,
    icon: React.ReactElement,
}

export default function UserFeedbackCard(props:userFeedbackInfo) {
    const {userImage, user, rateing, userFeedback, icon} = props
    
    const rateingStars = []
    // for(rateing)
    for(let i=0; i<5; i++) {
        rateingStars.push(i)
    }

  return (
    <div className="flex flex-col gap-4 p-4 bg-slate-800 rounded-lg shadow text-sm text-gray-300 overflow-hidden max-h-[400px] sm:max-h-fit ">
        <div className="flex flex-wrap gap-2 sm:gap-0 justify-between items-center">
            <div className="flex flex-wrap justify-center items-center gap-3">
            <div
                className="h-16 w-16 border-2 border-slate-600 rounded-full bg-center bg-cover"
                style={{ backgroundImage: `url(${userImage})` }}
            ></div>
            <span className="text-xs text-gray-400">{user}</span>
            </div>

            <div className="flex gap-1 mx-auto sm:mx-0">
                {rateingStars.map((index)=>{
                    return(
                        <i key={index} className={`fa-solid fa-star ` + (rateing > index? "text-[var(--shiny-yellow)] " : "text-white ")}></i>
                    );
                })}
            </div>
        </div>

        <div className="bg-slate-700 p-1 sm:p-3 rounded-md italic text-xs sm:text-sm text-gray-300 leading-relaxed max-w-md max-h-[150px] sm:max-h-fit overflow-hidden ">
        “{userFeedback}”
        </div>
        <span className="text-xl items-end">{icon}</span>
    </div>
  )
}
