
// 1. What is as in TypeScript?

// 👉 as = Type Assertion (casting)

const val = something as user22;

// 👉 Meaning:

// “Hey TypeScript, I know better — treat this value as user22”
const raw = '{"id":1,"name":"A"}';

const riskyuser = JSON.parse(raw) as { id: number; name: string };

console.log(riskyuser.name);

type user22 = {
  id: number;
  name: string;
};

function isUser(v: unknown): v is user22 {
  if (typeof v !== "object" || v === null) return false;

  const obj = v as { id?: unknown; name?: unknown };

  return (
    typeof obj.id === "number" &&
    typeof obj.name === "string"
  );
}
