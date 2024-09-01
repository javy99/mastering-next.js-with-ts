import { Html, Body, Container, Tailwind, Text, Link, Preview } from "@react-email/components"
import { CSSProperties } from "react"

const WelcomeTemplate = ({ name }: { name: string }) => {
    return (
        <Html>
            <Preview>Welcome aboard!</Preview>
            <Tailwind>
                <Body className="bg-white">
                    <Container>
                        <Text className="font-bold text-3xl">Hello {name}</Text>
                        <Link href='https://codewithmosh.com'>www.codewithjavy.com</Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

const body: CSSProperties = {
    background: '#fff'
}

const heading: CSSProperties = {
    fontSize: '24px',
}

export default WelcomeTemplate