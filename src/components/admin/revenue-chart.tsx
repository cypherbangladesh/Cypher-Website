"use client";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,

} from "@/components/ui/chart"

import { Component, GraduationCap, HandCoins } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Bar, BarChart, Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"

const chartData = [
    { month: "January",  products: 186,  rentals: 80,   courses: 130 },
    { month: "February", products: 305,  rentals: 200,  courses: 110},
    { month: "March",    products: 237,  rentals: 120,  courses: 180},
    { month: "April",    products: 73,   rentals: 190,  courses: 170},
    { month: "May",      products: 209,  rentals: 130,  courses: 180},
    { month: "June",     products: 214,  rentals: 140,  courses: 100},
]

const chartConfig = {
    products: {
        label: "Products",
        icon: Component,
        color: "hsl(var(--chart-1))",
    },
    rentals: {
        label: "Rentals",
        icon: HandCoins,
        color: "hsl(var(--chart-2))",
    },
    courses: {
        label: "Courses",
        icon: GraduationCap,
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig


export default function RevenueChart() {
    return (
        <ChartContainer config={chartConfig}>
            <BarChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis/>
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="products" fill="var(--color-products)" radius={4} />
                <Bar dataKey="rentals" fill="var(--color-rentals)" radius={4} />
                <Bar dataKey="courses" fill="var(--color-courses)" radius={4} />
                
            </BarChart>
        </ChartContainer>
    )
}

