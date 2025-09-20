// pages/users/index.tsx
import React from "react"
import UserCard from "@/components/common/UserCard"
import { UserProps } from "@/interfaces"

interface UsersPageProps {
  posts: UserProps[]
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts,
    },
  }
}

export default Users
