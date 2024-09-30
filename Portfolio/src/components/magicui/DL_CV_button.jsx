export function DL_CV_button() {
    return (
        <button
            className="group relative flex mt-8 gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl transition duration-300 font-semibold shadow-md hover:bg-opacity-70 hover:border-white hover:bg-[#30114f] ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px">
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                    <g id="Interface / Download">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#f1f1f1"
                              d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector"></path>
                    </g>
                </g>
            </svg>
            <a href="../../../public/Theo_CERKOWNIK_CV.pdf" download="Theo_CERKOWNIK_CV.pdf" className="text-white decoration-black hover:text-white ">
                Téléchargez mon CV
            </a>
        </button>
    );
}
