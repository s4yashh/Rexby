import SectionDivider from './SectionDivider'
import { locations } from '@/data/guides'

export default function ThingsToDo() {
  return (
    <>
      <SectionDivider />
      <div className="flex flex-col w-full md:max-w-screen-xl md:mx-auto px-5 md:px-10">
        <div className="text-3xl md:text-4xl font-semibold pb-8 md:pb-14">Access My Local Secrets</div>
        
        {/* Map Preview Section */}
        <div className="-mx-5 md:mx-0 pb-10 sm:pb-20">
          <a href="/asasteinars/norway/map">
            <div className="bg-ocean block relative overflow-hidden w-full aspect-[4/3] md:aspect-[5/2] md:rounded-xl">
              <picture>
                <source media="(min-width: 768px)" srcSet="https://rexby-screenshot-service.netlify.app/rexby/width:1200--height:480--dpr:2/asasteinars/norway/map/screenshot" />
                <img srcSet="https://rexby-screenshot-service.netlify.app/rexby/width:1200--height:900--dpr:2/asasteinars/norway/map/screenshot" alt="Map" className="w-full h-full object-cover" />
              </picture>
              <div>
                <div className="absolute top-2 right-2 bg-white/80 shadow rounded p-1.5">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_15407_7913)">
                      <path d="M0.333313 17.7037L6.99998 11.0371" stroke="#323232" strokeWidth="0.942809" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M0.333353 12.3703V17.7037H5.66668" stroke="#323232" strokeWidth="0.942809" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M11 7L17.6667 0.333335" stroke="#323232" strokeWidth="0.942809" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M12.3333 0.333374L17.7111 0.288927L17.6666 5.66671" stroke="#323232" strokeWidth="0.942809" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_15407_7913">
                        <rect width="18" height="18" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Info and Carousel */}
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col space-y-2 w-full shrink-0 pr-10 pb-4 lg:w-80">
            <h2 className="text-rexbygray-800 text-xl font-semibold lg:text-2xl">161 things to do</h2>
            <div className="text-xs leading-relaxed lg:text-sm lg:leading-loose text-rexbygray-500">
              Get a curated list of all the best things to do with exact location, detailed info and inspiring content
            </div>
            <div className="pt-2 hidden lg:inline-block">
              <a href="/asasteinars/norway/things-to-do?modal=freemium">
                <span className="text-sm text-title underline font-semibold">Preview</span>
              </a>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative w-full">
            <div className="overflow-hidden -mx-5 md:mx-0">
              <div className="-mx-1 md:mx-0">
                <div className="relative flex w-full max-w-full flex-nowrap snap-x scroll-px-5 px-5 md:scroll-px-0 md:px-0 overflow-x-auto scrollbar-hide">
                  {locations.slice(0, 5).map((item) => (
                    <div key={item.id} className="snap-start px-1 md:px-2 min-w-[50%] max-w-[50%] md:min-w-[33.333%] md:max-w-[33.333%]">
                      <a className="flex flex-col w-full" href={`/asasteinars/ttd/${item.id}`}>
                        <div className="relative rounded-xl overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full object-cover aspect-[4/5]"
                          />
                          <div className="absolute top-0 bottom-0 left-0 right-0"></div>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-col">
                            <div className="flex text-rexbygray-700 text-xs pt-2 pb-1 px-1 items-center flex-nowrap">
                              <svg width="24" height="24" viewBox="0 0 30 28" fill="none" className="shrink-0">
                                <path d="M11.5625 6.625C10.5525 6.625 9.74756 7.26074 9.3169 8.10156C8.2915 8.3169 7.37378 8.93726 6.9585 9.93701C6.16382 11.834 5 15.0076 5 17.7812C5 20.3088 7.06616 22.375 9.59375 22.375C11.4138 22.375 12.9827 21.2932 13.7261 19.75H17.2739C18.0173 21.2932 19.5862 22.375 21.4062 22.375C23.9338 22.375 26 20.3088 26 17.7812C26 16.7507 25.6821 15.4075 25.2822 14.0078C24.8772 12.603 24.3799 11.1675 23.9902 10.0908C23.6108 9.0603 22.7188 8.39893 21.6985 8.13745C21.273 7.27612 20.4629 6.625 19.4375 6.625C18.4993 6.625 17.761 7.18897 17.2996 7.9375H13.7004C13.239 7.18897 12.5007 6.625 11.5625 6.625ZM11.5625 7.9375C12.1367 7.9375 12.6135 8.30664 12.793 8.81421L12.9468 9.25H18.0532L18.207 8.81421C18.3865 8.30664 18.8633 7.9375 19.4375 7.9375C20.0271 7.9375 20.509 8.32715 20.6782 8.85522L20.8013 9.23975L21.2012 9.30127C21.9189 9.41406 22.5085 9.86523 22.7598 10.542C23.1033 11.4854 23.5186 12.7107 23.8826 13.9258C23.1648 13.4644 22.3188 13.1875 21.4062 13.1875C19.5862 13.1875 18.0173 14.2693 17.2739 15.8125H13.7261C12.9827 14.2693 11.4138 13.1875 9.59375 13.1875C8.59399 13.1875 7.67114 13.5208 6.91748 14.0693C7.29175 12.7004 7.77368 11.3982 8.16846 10.4446C8.44019 9.78833 9.05029 9.36279 9.76807 9.28589L10.1885 9.23975L10.3218 8.83984C10.4961 8.3169 10.978 7.9375 11.5625 7.9375ZM9.59375 14.5C11.4138 14.5 12.875 15.9612 12.875 17.7812C12.875 19.6013 11.4138 21.0625 9.59375 21.0625C7.77368 21.0625 6.3125 19.6013 6.3125 17.7812C6.3125 15.9612 7.77368 14.5 9.59375 14.5ZM21.4062 14.5C23.2263 14.5 24.6875 15.9612 24.6875 17.7812C24.6875 19.6013 23.2263 21.0625 21.4062 21.0625C19.5862 21.0625 18.125 19.6013 18.125 17.7812C18.125 15.9612 19.5862 14.5 21.4062 14.5ZM14.1209 17.125H16.8792C16.8484 17.3403 16.8125 17.5557 16.8125 17.7812C16.8125 18.0068 16.8484 18.2222 16.8792 18.4375H14.1209C14.1516 18.2222 14.1875 18.0068 14.1875 17.7812C14.1875 17.5557 14.1516 17.3403 14.1209 17.125Z" fill="black"></path>
                              </svg>
                              <span className="truncate">{item.category}</span>
                            </div>
                            <div className="text-rexbygray-800 font-semibold text-sm pl-1 overflow-hidden">
                              <div className="max-w-full">{item.name}</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                  <div className="snap-start px-1 md:px-2 min-w-[50%] max-w-[50%] md:min-w-[33.333%] md:max-w-[33.333%]">
                    <a className="flex items-center justify-center w-full rounded-xl border border-title" href="/asasteinars/norway/things-to-do?modal=freemium">
                      <div className="flex flex-col items-center justify-center space-y-2 p-4 text-center aspect-[4/5] w-full">
                        <div className="tracking-wider font-semibold text-title text-sm">Preview</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
