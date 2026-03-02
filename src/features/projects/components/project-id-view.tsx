"use client";

import { cn } from "@/lib/utils";
import { Id } from "../../../../convex/_generated/dataModel";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Tab = ({
    label,
    isActive,
    onClick,
}: {
    label: string;
    isActive: boolean;
    onClick: () => void;
}) => (
    <div
        className={cn(
            "flex items-center gap-2 h-full px-3 cursor-pointer text-muted-foreground border-r hover:bg-accent/30",
            isActive && "bg-background text-foreground",
        )}
        onClick={onClick}
    >
        <span className="text-sm">{label}</span>
    </div>
);

const ProjectIdView = ({ projectId }: { projectId: Id<"projects"> }) => {
    const [activeView, setActiveView] = useState<"editor" | "preview">(
        "editor",
    );

    return (
        <div className="h-full flex flex-col">
            <nav className="flex h-8.75 items-center bg-sidebar border-b">
                <Tab
                    label="Preview"
                    isActive={activeView === "preview"}
                    onClick={() => setActiveView("preview")}
                />
                <Tab
                    label="Code"
                    isActive={activeView === "editor"}
                    onClick={() => setActiveView("editor")}
                />
                <div className="flex-1 flex justify-end h-full">
                    <div className="flex items-center gap-2 h-full px-3 cursor-pointer text-muted-foreground border-l hover:bg-accent/30">
                        <FaGithub className="siz-3.5" />
                        <span className="text-sm">Export</span>
                    </div>
                </div>
            </nav>
            <div className="flex-1 relative">
                <div
                    className={cn(
                        "absolute inset-0",
                        activeView === "editor" ? "visible" : "invisible",
                    )}
                >
                    <div>Editor</div>
                </div>
                <div
                    className={cn(
                        "absolute inset-0",
                        activeView === "preview" ? "visible" : "invisible",
                    )}
                >
                    <div>Preview</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectIdView;
