import PageTitleBanner from "@/components/PageTitleBanner"
import SearchBar from "@/components/online-store/SearchBar"

const loading = () => {
  return (
    <div className='bg-black -mt-5 md:mt-0'>
          <PageTitleBanner subtract={true}>Merch</PageTitleBanner>

          <div className="bg-white w-full">
              <div className="container mx-auto">
                  <SearchBar />
                  <p className="p-5">Loading...</p>
              </div>
          </div>
      </div>
  )
}

export default loading