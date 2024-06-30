import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({searchParams}: SearchParamProps) {

    const page = Number(searchParams?.page) || 1
    const searchText = (searchParams?.query as string) || '' 
    const searchCategory = (searchParams?.category as string) || ''

    //get all events based on the search query and category
    const events = await getAllEvents({
        query: searchText,
        category: searchCategory,
        page,
        limit: 6
    })
  return (
    <>
        <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
            <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
                <div className="flex flex-col justify-center gap-8">
                    <h1 className="h1-bold">Host with Ease, Celebrate in Style: Your Events, Our Expertise!</h1>
                    <p className="p-regular-20 md:p-regular-24">Plan unforgettable events and learn expert tips from over 3,000 professionals in top global companies. Join our community and elevate your event planning skills.</p>
                    <Button className="button w-full sm:w-fit" asChild size={"lg"}>
                        <Link href={"#events"}>Explore Now</Link>
                    </Button>
                </div>
                <Image src={"/assets/images/hero.png"} alt="heroImage" width={1000} height={1000} className="max-h-[70vh] object-contain object-center 2xl:max-h-[60vh]" />
            </div>
        </section>
        <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
            <h2 className="h2-bold">Trusted by <br /> Thousands of Events</h2>
            <div className="flex flex-col w-full gap-5 md:flex-row">
                <Search />
                <CategoryFilter />
            </div>

            <Collection data={events?.data} emptyTitle="No Events Found" emptyStateSubtext="Come Back Later" collectionType="All_Events" limit={6} page={page} totalPages={events?.totalPages} />
        </section>
    </>
  );
}
