import { useMutation, useQuery } from "convex/react";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";

export const useConversation = (id: Id<"conversations"> | null) =>
    useQuery(api.conversations.getById, id ? { id } : "skip");

export const useMessages = (conversationId: Id<"conversations"> | null) =>
    useQuery(
        api.conversations.getByMessages,
        conversationId ? { conversationId } : "skip",
    );

export const useConversations = (projectId: Id<"projects">) =>
    useQuery(api.conversations.getByProject, { projectId });

export const useCreateConversation = () =>
    useMutation(api.conversations.create);
