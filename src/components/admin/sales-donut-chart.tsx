"use client"

import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "components", visitors: 275, fill: "var(--color-components)" },
  { browser: "tools", visitors: 200, fill: "var(--color-tools)" },
  { browser: "bots", visitors: 187, fill: "var(--color-bots)" },
  { browser: "threeDWorks", visitors: 173, fill: "var(--threeDWorks)" },
  { browser: "courses", visitors: 90, fill: "var(--courses)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  components: {
    label: "Components",
    color: "hsl(var(--chart-1))",
  },
  tools: {
    label: "Tools",
    color: "hsl(var(--chart-2))",
  },
  bots: {
    label: "Bots",
    color: "hsl(var(--chart-3))",
  },
  threeDWorks: {
    label: "3D Works",
    color: "hsl(var(--chart-4))",
  },
  courses: {
    label: "Courses",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function SalesDonutChart() {
  return (
    <Card className="lg:col-span-3">
      <CardHeader className="">
        <CardTitle>Sales Distribution</CardTitle>
        <CardDescription>Revenue by product category</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
