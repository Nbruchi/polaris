"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const DemoPage = () => {
    const [loading, setLoading] = useState(false);

    const handleBackground = async () => {
        setLoading(true);
        await fetch("/api/background", { method: "POST" });
        setLoading(false);
    };

    return (
        <div className="p-8 space-x-4">
            <Button disabled={loading} onClick={handleBackground}>
                {loading ? "Loading..." : "Background"}
            </Button>
        </div>
    );
};

export default DemoPage;
