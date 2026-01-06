import { Construction } from "lucide-react";

export default function PlaceholderPage({ params }: { params: { slug: string[] } }) {
    const title = params.slug[params.slug.length - 1]
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-4">
            <div className="p-4 bg-muted rounded-full">
                <Construction className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-muted-foreground max-w-md">
                This page is currently under construction. Please check back later for updates.
            </p>
        </div>
    );
}
