export { default } from 'next-auth/middleware';

export const config = {
    // *: zero or more
    // +: one or more
    // ?: zero or one
    matcher: ['/users/:id*'] // here we need to specify url which we want to protect!
}