import { comment } from "./comment";

export async function GET() {
  return Response.json(comment);
}

export async function POST(request: Request) {
  const incomingComment: { text: string } = await request.json();
  const newComment = {
    id: `${comment.length + 1}`,
    text: incomingComment.text,
  };
  //   console.log("Yo");

  comment.push(newComment);
  console.log(comment);
  return new Response(JSON.stringify(newComment), {
    status: 201,
    headers: { "Content-Types": "appliaction/johnson" },
  });
}
