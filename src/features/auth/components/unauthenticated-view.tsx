import { Button } from "@/components/ui/button";
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item";
import { SignInButton } from "@clerk/nextjs";
import { ShieldAlert } from "lucide-react";

const UnAuthenticatedView = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-background">
            <div className="w-full max-w-lg bg-muted">
                <Item variant="outline">
                    <ItemMedia variant="icon">
                        <ShieldAlert />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>Unauthorized Access</ItemTitle>
                        <ItemDescription>
                            You are not authorized to access this resource
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <SignInButton>
                            <Button value="outline" size="sm">
                                Sign In
                            </Button>
                        </SignInButton>
                    </ItemActions>
                </Item>
            </div>
        </div>
    );
};

export default UnAuthenticatedView;
