import { norwayGuide } from '@/data/guides'

export default function Hero() {
  return (
    <div className="flex flex-col w-full md:max-w-screen-xl md:mx-auto px-5 md:px-10">
      <div className="flex flex-col md:flex-row w-full md:pt-14 md:space-y-0 md:space-x-12 xl:pl-12 xl:pr-20">
        {/* Guide Cover Image - Left Side */}
        <div className="relative -mx-5 md:mx-0 overflow-hidden h-auto md:w-[325px] lg:w-[325px]">
          <div className="w-full md:rounded-2xl h-auto overflow-hidden relative aspect-[4/5]">
            <div className="w-full overflow-hidden">
              <img
                src={norwayGuide.coverImageUrl}
                alt={norwayGuide.title}
                className="object-contain absolute left-0 right-0 top-0 bottom-0 w-full max-w-full h-full max-h-full"
              />
            </div>
          </div>
        </div>

        {/* Right - Content */}
        <div className="flex flex-col pt-5 md:pt-0 flex-1 space-y-4 justify-center min-w-0">
          <div className="flex flex-col space-y-2 md:space-y-4 text-rexbygray-800">
            {/* Title */}
            <h1 className="font-semibold text-3xl md:text-4xl">{norwayGuide.title}</h1>

            {/* Author Info - Desktop */}
            <div className="hidden md:flex items-center md:space-x-5 text-sm md:text-base">
              <a className="hidden md:flex items-center space-x-2 min-w-0" href={`/${norwayGuide.creator.creatorName}`}>
                <img
                  src={norwayGuide.creator.profileImageUrl}
                  alt={norwayGuide.creator.fullName}
                  className="object-cover w-8 h-8 rounded-full border border-line cursor-pointer transition-opacity opacity-100"
                />
                <div className="truncate">Guide by {norwayGuide.creator.fullName}</div>
              </a>

              {/* Country */}
              <div className="flex md:hidden xl:flex pr-5 md:pr-0 text-rexbygray-800 text-sm md:text-base truncate">
                <span className="truncate">{norwayGuide.country.name}</span>
              </div>

              {/* New Badge */}
              {norwayGuide.isNew && (
                <div className="flex items-center space-x-1">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative bottom-0.5">
                    <path d="M6.10373 1.21961C6.22846 0.835726 6.77154 0.835725 6.89627 1.2196L8.09031 4.89446C8.14609 5.06614 8.30607 5.18237 8.48658 5.18237H12.3506C12.7542 5.18237 12.922 5.69888 12.5955 5.93613L9.46945 8.20732C9.32341 8.31342 9.2623 8.50149 9.31808 8.67316L10.5121 12.348C10.6368 12.7319 10.1975 13.0511 9.87093 12.8139L6.74491 10.5427C6.59887 10.4366 6.40113 10.4366 6.25509 10.5427L3.12907 12.8139C2.80252 13.0511 2.36315 12.7319 2.48788 12.348L3.68192 8.67317C3.7377 8.50149 3.67659 8.31342 3.53055 8.20732L0.404534 5.93613C0.0779868 5.69888 0.245809 5.18237 0.649444 5.18237H4.51342C4.69393 5.18237 4.85391 5.06614 4.90969 4.89446L6.10373 1.21961Z" fill="#14142b"></path>
                  </svg>
                  <span>New</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="relative text-content font-normal text-left leading-loose text-xs md:text-sm">
              <div className="max-w-full">
                <p className="pt-2 first:pt-0 font-poppins text-content font-normal leading-loose text-left">
                  {norwayGuide.description}
                </p>
              </div>
            </div>

            {/* Mobile Author Section */}
            <div className="flex md:hidden">
              <div className="flex flex-col text-rexbygray-800 space-y-2">
                <div className="text-base font-semibold">Guide by {norwayGuide.creator.fullName}</div>
                <div className="text-xs">Made in English</div>
              </div>
              <div className="flex flex-1"></div>
              <img
                src={norwayGuide.creator.profileImageUrl}
                alt={norwayGuide.creator.fullName}
                className="object-cover w-12 h-12 rounded-full border border-line cursor-pointer transition-opacity opacity-100"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2"></div>
            <div className="flex space-x-2 w-full">
              <div className="flex flex-col flex-1 lg:max-w-[50%]">
                <a className="relative flex items-center justify-center rounded-lg font-poppins focus:outline-none tracking-wider pointer-events-auto w-full font-semibold text-title border border-title h-12 px-12 text-sm pl-1 pr-1" href="/asasteinars/norway/things-to-do?modal=freemium">
                  <div className="flex flex-1 justify-center truncate">Preview</div>
                </a>
              </div>
              <div className="flex flex-col flex-1 lg:max-w-[50%]">
                <button className="relative flex items-center justify-center rounded-lg font-poppins focus:outline-none tracking-wider pointer-events-auto w-full font-semibold text-white bg-gradient-to-r from-[#1496BF] to-[#0f6e8c] h-12 px-12 text-sm pl-1 pr-1">
                  <div className="flex flex-1 justify-center truncate">Get Access</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
