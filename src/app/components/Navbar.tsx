const logo =
  "https://static.wixstatic.com/media/c1b522_4181d931ff1b40fea4d60841fba9523f~mv2.png/v1/fill/w_230,h_148,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Fry%20foundation.png";
const background =
  "https://static.wixstatic.com/media/c1b522_db6cc2be10fd4988b870c4c9426c3836~mv2.png/v1/fill/w_1512,h_328,al_c,q_90,enc_auto/c1b522_db6cc2be10fd4988b870c4c9426c3836~mv2.png";

export default function Account() {
  return (
    <div>
      <nav className="w-[100vw] h-[95px] text-white bg-[#301212]/60 flex items-center absolute z-10">
        <div className="relative w-[115px] h-[74px] m-5 ml-12">
          <img src={logo} alt="logo" className="w-full h-full object-center" />
        </div>
      </nav>

      <div className="bg-bgNav w-full h-[328px] bg-cover bg-center opacity-60">
        {/* Keep this div empty to act as pseudo element with background image */}
      </div>
    </div>
  );
}
