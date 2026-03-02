import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

export const useCreateFile = () => useMutation(api.files.createFile);
export const useCreateFolder = () => useMutation(api.files.createFolder);

export const useFolderContents = ({
    projectId,
    parentId,
    enabled = true,
}: {
    projectId: Id<"projects">;
    parentId?: Id<"files">;
    enabled?: boolean;
}) =>
    useQuery(
        api.files.getFolderContents,
        enabled ? { projectId, parentId } : "skip",
    );

export const useRenameFile = () => {
    return useMutation(api.files.renameFile);
    // TODO: Add optimistic mutation
};

export const useDeleteFile = () => {
    return useMutation(api.files.deleteFile);
    // TODO: Add optimistic mutation
};