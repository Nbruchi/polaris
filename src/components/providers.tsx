import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { TooltipProvider } from "./ui/tooltip";

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
    );
};

export default Providers;
