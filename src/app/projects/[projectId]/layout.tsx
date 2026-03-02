import ProjectIdLayout from "@/features/projects/components/project-id-layout";
import { ReactNode } from "react";
import { Id } from "../../../../convex/_generated/dataModel";

const ProjectLayout = async ({
    children,
    params,
}: {
    children: ReactNode;
    params: Promise<{ projectId: Id<"projects"> }>;
}) => {
    const { projectId } = await params;

    return <ProjectIdLayout projectId={projectId}>{children}</ProjectIdLayout>;
};

export default ProjectLayout;
