import React from 'react'

export default function TeamMemberCard() {
  return (
    <div className="relative flex-1 rounded-2xl bg-slate-800 w-max max-h-[300px] max-w-[250px] overflow-hidden shadow-lg">
        <img
            src={"teamMembers/member1.jpg"}
            className="w-full h-full object-cover"
            loading="lazy"
            alt="Team member"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
            <div className="text-white font-semibold text-lg">Name Surname</div>
            <div className="text-gray-300 text-sm">Occupation</div>
            {/* Rest of card */}
        </div>
    </div>
  )
}
