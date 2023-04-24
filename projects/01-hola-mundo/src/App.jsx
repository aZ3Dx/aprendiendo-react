import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUserName = (userName) => `@${userName}`

    return (
        <section className='App'>
            <TwitterFollowCard formatUserName={formatUserName} initialIsFollowing={true} userName='aZ3Dx' name='Jean Herrera' />
            <TwitterFollowCard formatUserName={formatUserName} userName='midudev' name='Miguel Ángel Durán' />
            <TwitterFollowCard formatUserName={formatUserName} userName='elonmusk' name='Elon Musk' />
        </section>
    )
}