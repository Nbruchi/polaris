import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { TooltipProvider } from "./ui/tooltip";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <ClerkProvider appearance={{ theme: dark }}>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                <TooltipProvider>{children}</TooltipProvider>
            </ThemeProvider>
        </ClerkProvider>
    );
};

export default Providers;
