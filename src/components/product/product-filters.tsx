"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import { useState } from "react"

type ProductFiltersProps = {
  sendCategoryName: (data: string) => void;
};

export default function ProductFilters({sendCategoryName} : ProductFiltersProps) {

  const categories = ["All Product", "Components", "Tools", "HandMade", "3D Works"];

  const [selected, setSelected] = useState(categories[0]);

  const handleCategory = (data: string) => {
    setSelected(data);
    sendCategoryName(data);
  }


  return (
    <div className="space-y-10 ">
      <div>
        <h3 className="font-bold mb-2 text-base md:text-lg">CATEGORIES</h3>
        <div className="flex flex-col">
          {categories.map((category) => (
            <button
            key={category}
            className={`py-1 text-left transition-colors ${
  selected === category
                ? "underline font-semibold"
                : "hover:font-semibold"
            }`}
            onClick={() => handleCategory(category)}
          >
            {category}
          </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-3 text-base md:text-lg">PRICE</h3>
        <div className="space-y-3">
          {["All Price", "$0.00 - $99.99", "$100.00 - 199.99", "$200.00 - 299.99", "$300.00 - 399.99", "$400.00+"].map(
            (range) => (
              <div key={range} className="flex items-center">
                <Checkbox id={range.toLowerCase()} />
                <Label htmlFor={range.toLowerCase()} className="ml-2 text-sm font-normal">
                  {range}
                </Label>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}