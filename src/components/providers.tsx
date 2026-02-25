"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { TooltipProvider } from "./ui/tooltip";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import {
    Authenticated,
    AuthLoading,
    ConvexReactClient,
    Unauthenticated,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import UnAuthenticatedView from "@/features/auth/components/unauthenticated-view";
import { AuthLoadingView } from "@/features/auth/components/auth-loading-view";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <ClerkProvider appearance={{ theme: dark }}>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <TooltipProvider>
                        <Authenticated>
                            {children}
                        </Authenticated>
                        <Unauthenticated>
                            <UnAuthenticatedView/>
                        </Unauthenticated>
                        <AuthLoading>
                            <AuthLoadingView/>
                        </AuthLoading>
                    </TooltipProvider>
                </ThemeProvider>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
};

export default Providers;
