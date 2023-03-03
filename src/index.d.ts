declare module '*png'
declare module '*jpg'
declare module '*gif'
declare module '*.css' {
    const content: Record<string, string>;
    export default content;
}