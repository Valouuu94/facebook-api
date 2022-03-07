<h1 align="center">
  Facebook API
</h1>

## <p>Summary</a>

* [Rules](#rules)
* [Story](#story)
* [Credits](#credits)

## <a name='overview'>Rules</a>

* You **MUST** create a **PUBLIC** git repository named `facebook-api`
* You **MUST** return the project before Friday February 2022, 25 at 23:42. Add your GitHub link
* You **MUST** create a file called `.author` with your username followed by a newline:
```sh
~/efrei/facebook-api ❯❯❯ cat -e .author
{
  firstName: "Valentin",
  lastName: "Roche"
}
```

## <a name='story'>Story</a>
You have to implement a **REST API**.
Please follow the **models** and the **requirements** carefully.

## Prisma Models

```
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  Profile   Profile?
  Posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Profile {
  id        Int    @id @default(autoincrement())
  firstName String
  lastName  String
  User      User   @relation(fields: [userId], references: [id])
  userId    String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id       Int    @id @default(autoincrement())
  message  String
  Author   User   @relation(fields: [authorId], references: [id])
  authorId String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## API Routes


## `/api/v1/authentication`
### DTOs
| name          | schema                               |
|:--------------|:-------------------------------------|
| `LoginDto`    |`{ email: string, password: string }` |
| `RegisterDto` |`{ email: string, password: string }` |

### URIs
| method | endpoint    | headers   | body         | Response                          | description                              |
|:-------|:------------|:----------|:-------------|:----------------------------------|:-----------------------------------------|
| `POST` | `/login`    | `null`    |`LoginDto`    | `{ user: User, token: JwtToken }` | return a JWT Token for authentication.   |
| `POST` | `/register` | `null`    |`RegisterDto` | `{ user: User}`                   | register a new User.                     |

## `/api/v1/users`

### DTOs
| name            | schema                                      |
|:----------------|:--------------------------------------------|
| `UpdateProfile` | `{ firstName?: string, lastName?: string }` |

### URIs
| method   | endpoint       | headers                | body            | Response               | description                    |
|:---------|:---------------|:-----------------------|:----------------|:-----------------------|:-------------------------------|
| `GET`    | `/:id/posts`   | `Authorization: TOKEN` | `null`          | `{ posts: Post[] }`    | return a list of User's posts. |
| `GET`    | `/:id/profile` | `Authorization: TOKEN` | `null`          | `{ profile: Profile }` | return a User's profile.       |
| `PATCH`  | `/:id/profile` | `Authorization: TOKEN` | `UpdateProfile` | `{ profile: Profile }` | update a User's profile.       |
| `DELETE` | `/:id`         | `Authorization: TOKEN` | `null`          | `null`                 | delete an user by it's id.     |

## `/api/v1/posts`

### DTOs
| name            | schema                  |
|:----------------|:------------------------|
| `CreatePostDto` | `{ message: string }`   |
| `UpdatePostDto` | `{ message?: string }`  |

### URIs
| method   | endpoint | headers                | body            | Response            | description            |
|:---------|:---------|:-----------------------|:----------------|:--------------------|:-----------------------|
| `POST`   | `/`      | `Authorization: TOKEN` | `CreatePostDto` | `{ post: Post }`    | create a new Post.     |
| `GET`    | `/:id`   | `Authorization: TOKEN` | `null`          | `{ post: Post }`    | return a Post.         |
| `GET`    | `/`      | `Authorization: TOKEN` | `null`          | `{ posts: Post[] }` | return a list of Post. |
| `PATCH`  | `/:id`   | `Authorization: TOKEN` | `UpdatePostDto` | `{ post: Post }`    | update a Post.         |
| `DELETE` | `/:id`   | `Authorization: TOKEN` | `null`          | `null`              | delete a Post.         |

## <a name='story'>Credits</a>

Craft by **Call-Me-Dev**.
 
