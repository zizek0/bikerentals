import Booking from "@/components/Booking/Booking";
import Map from "@/components/Map/Map";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <Booking />
        </div>
        <div className="col-span-2">
          <Map />
        </div>
      </div>
    </div>
  );
}
