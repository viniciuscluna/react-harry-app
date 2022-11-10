import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useLoaderRouter = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        router.events.on("routeChangeStart", () => {
            setIsLoading(true)
        });

        router.events.on("routeChangeComplete", () => {
            setIsLoading(false)
        });

        router.events.on("routeChangeError", () => {
            setIsLoading(false)
        });

    }, [router.events])

    return isLoading;
}