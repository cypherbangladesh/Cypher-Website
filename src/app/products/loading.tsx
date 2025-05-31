import { Skeleton } from "@mui/material";

export default function Load()
{
    return (
        <div className="text-7xl">
            <Skeleton variant="rectangular" width={210} height={118} />
        </div>
    )
}