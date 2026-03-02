"use client";

import { Id } from "../../../../convex/_generated/dataModel";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { useProject, useRenameProject } from "../hooks/use-projects";
import { useState, KeyboardEvent } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { CloudCheck, Loader } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const Navbar = ({ projectId }: { projectId: Id<"projects"> }) => {
    const project = useProject(projectId);
    const renameProject = useRenameProject();

    const [isRenaming, setIsRenaming] = useState(false);
    const [name, setName] = useState("");

    const handleStartRename = () => {
        if (!project) {
            return;
        }

        setName(project.name);
        setIsRenaming(true);
    };

    const handleSubmit = () => {
        setIsRenaming(false);

        const trimmedName = name.trim();
        if (!trimmedName || trimmedName === project?.name) {
            return;
        }

        renameProject({ id: projectId, name: trimmedName });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSubmit();
        } else if (e.key === "Escape") {
            setIsRenaming(false);
        }
    };

    return (
        <nav className="flex justify-between items-center gap-x-2 bg-sidebar border-b p-2">
            <div className="flex items-center gap-x-2">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                className="flex items-center gap-1.5"
                                asChild
                            >
                                <Button
                                    variant="ghost"
                                    className="w-fit! p-1.5 h-7"
                                    asChild
                                >
                                    <Link href="/">
                                        <Image
                                            src="/logo.svg"
                                            alt="logo"
                                            width={20}
                                            height={20}
                                        />
                                        <span className="text-sm font-medium">
                                            Polaris
                                        </span>
                                    </Link>
                                </Button>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="ml-0! mr-1" />
                        <BreadcrumbItem>
                            {isRenaming ? (
                                <input
                                    autoFocus
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onFocus={(e) => e.currentTarget.select()}
                                    onBlur={handleSubmit}
                                    onKeyDown={(e) => handleKeyDown(e)}
                                    className="text-sm bg-transparent text-foreground outline-none focus:right-1 focus:ring-inset focus:ring-ring font-medium max-w-40 truncate"
                                />
                            ) : (
                                <BreadcrumbPage
                                    className="text-sm cursor-pointer hover:text-primary font-medium max-w-40 truncate"
                                    onClick={handleStartRename}
                                >
                                    {project?.name ?? "Loading..."}
                                </BreadcrumbPage>
                            )}
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                {project?.importStatus === "importing" ? (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Loader className="size-4 text-muted-foreground animate-spin" />
                        </TooltipTrigger>
                        <TooltipContent>Importing...</TooltipContent>
                    </Tooltip>
                ) : (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <CloudCheck className="size-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                            Saved{" "}
                            {project?.updatedAt
                                ? formatDistanceToNow(project?.updatedAt, {
                                      addSuffix: true,
                                  })
                                : "Loading..."}
                        </TooltipContent>
                    </Tooltip>
                )}
            </div>
            <div className="flex items-center gap-2">
                <UserButton />
            </div>
        </nav>
    );
};

export default Navbar;
