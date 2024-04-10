import { LINKS_ARRAY } from "../Constant/Constants";

function GamesLike() {
    console.log(LINKS_ARRAY);
    
    return (
        <div>
        {LINKS_ARRAY.map((options, index) => (
          <div key={index} className="flex flex-row mb-2">
            {options.map((option, optionIndex) => (
              <div key={optionIndex} className="flex flex-col ml-2">
                <img  src={option} alt="Card" className=" h-[140px] hover:scale-110 transition-transform duration-500 ease-in-out" />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
}

export default GamesLike;
