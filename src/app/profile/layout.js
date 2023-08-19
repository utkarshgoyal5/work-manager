export default function ProfileLayout({ children }) {
    return (
        <div>
          <h1>This is a profile header</h1>
          <div>{children}</div>
          <h1>This is a profile footer</h1>
        </div>
    )
}