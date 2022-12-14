import type {NextPage} from "next";
import Head from "next/head";
import Link from "next/link";
import {useSession, signIn, signOut} from "next-auth/react"


const Home: NextPage = () => {
    const {data: session, status} = useSession();
    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main
                className="dark:bg-gray-800 dark:text-gray-300 ">
                <div className={"container mx-auto flex flex-col items-center justify-center min-h-screen p-4"}>
                    <Link href={"/login"}>Manage Accounts</Link>
                    <button onClick={() => signIn("notion")}>Login Notion</button>
                    {!session ? <button onClick={() => signIn("GitHub")}>Login Github</button> :
                        <button onClick={() => signOut()}>Logout</button>}
                </div>
            </main>
        </>
    );
};

export default Home;
