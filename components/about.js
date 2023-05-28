import Head from "next/head";

export default function About({ children, pageTitle }) {
    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            {children}
        </div>
    );
}
