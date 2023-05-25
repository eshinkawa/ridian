import Link from 'next/link';

export default function App() {
    return (
        <div>
            <h1>Ridian Challenge</h1>
            <h2>
                <Link href="/nav">Nav</Link>
            </h2>
            <h2>
                <Link href="/returns">Top 10</Link>
            </h2>
            <h2>
                <Link href="/place-trade">Place Trade</Link>
            </h2>
            <h2>
                <Link href="/active-strategies">Active Strategies</Link>
            </h2>
        </div>
    )
}
