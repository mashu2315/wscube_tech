import React from "react";
import Cards from "./Cards";
export default function Plans({plans}){
    return(
        <div className="py-[100px] px-2">
            <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-5">
                {plans.map(
                    (tour,index)=>{
                        return < Cards {...tour} key={index}></Cards>
                    }
                )}
               </div>
            
        </div>
    )
}

// import React from "react";
// import Cards from "./Cards";

// export default function Plans({ plans }) {
//   return (
//     <div className="py-[100px] px-2">
//       <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-5">
//         {plans.map((tour, index) => (
//           <div
//             key={index}
//             className="shadow-2xl m-2 hover:scale-105 duration-[400ms]"
//           >
//             <Cards {...tour} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
