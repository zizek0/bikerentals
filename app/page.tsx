import Booking from "@/components/Booking/Booking";
import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../components/Map/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <div className="p-6 grid grid-cols-1 justify-center md:grid-cols-3 gap-5">
        <div className="w-max mx-auto my-auto">
          <Booking />
        </div>
        <div className="col-span-2">
          <DynamicMap />
        </div>
      </div>
    </div>
  );
}