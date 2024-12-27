export default async function Page() {
  const data = await fetch('http://localhost:8080/posts')
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post: { id: string, title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}