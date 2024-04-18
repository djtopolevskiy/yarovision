import React from 'react'
import { Button } from "@/shared/ui/button";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/shared/ui/sheet";
import Yarovisionlogo from './yarovisionlogo';
import Navtop from './navtop';

function Sheetnav() {
  return (
    <div className="md:hidden mr-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
          <SheetHeader className=" border-b pb-5 mb-5">
            <Yarovisionlogo />
              </SheetHeader>
              <Navtop />
            </SheetContent>
          </Sheet>
    </div>
  )
}

export default Sheetnav