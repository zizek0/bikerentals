import React from "react";
import Link from "next/link"
 
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Host = () => {
  return (
    <div className="p-2 md:p-6 border-[2px] rounded-xl mt-8 flex items-center"> {/* Updated CSS class */}
      <div className="mr-4">
        <p className="text-[20px] font-bold">Want to add your bike?</p>
        <Select>
          <SelectTrigger className="mt-3 w-[280px]">
            <SelectValue placeholder="Select your bike" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Royal Enfield</SelectLabel>
              <SelectItem value="royal-enfield-hunter350">Hunter 350</SelectItem>
              <SelectItem value="royal-enfield-bullet350">Bullet 350</SelectItem>
              <SelectItem value="royal-enfield-classic350">
                Classic 350
              </SelectItem>
              <SelectItem value="royal-enfield-meteor350">Meteor 350</SelectItem>
              <SelectItem value="royal-enfield-scram411">Scram 411</SelectItem>
              <SelectItem value="royal-enfield-himalayan">Himalayan</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Vespa</SelectLabel>
              <SelectItem value="vespa-zx125">ZX 125</SelectItem>
              <SelectItem value="vespa-vxl125">VXL 125</SelectItem>
              <SelectItem value="vespa-sxl125">SXL 125</SelectItem>
              <SelectItem value="vespa-vxl150">VXL 150</SelectItem>
              <SelectItem value="vespa-sxl150">SXL 150</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="pt-10">
      <Button asChild>
        <Link href="/admin">Submit</Link>
      </Button>
      </div>
    </div>
  );
};

export default Host;
