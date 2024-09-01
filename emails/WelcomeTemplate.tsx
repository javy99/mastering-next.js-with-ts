import { Html, Body, Container, Tailwind, Text, Link, Preview } from "@react-email/components"
import { CSSProperties } from "react"

const WelcomeTemplate = ({ name }: { name: string }) => {
    return (
        <Html>
            <Preview>Welcome aboard!</Preview>
            <Body style={body}>
                <Container>
                    <Text style={heading}>Hello {name}</Text>
                    <Link href='https://codewithmosh.com'>www.codewithjavy.com</Link>
                </Container>
            </Body>
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